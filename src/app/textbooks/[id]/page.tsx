import React from 'react';
import { textbooks } from '@/data/textbooks';
import TextbookContent from '@/components/TextbookContent';
import { notFound } from 'next/navigation';

// Type assertion since importing json directly
// const stories = storiesFromData as any[];

export function generateStaticParams() {
    return textbooks.map((textbook) => ({
        id: textbook.id,
    }));
}

// Correct type for PageProps in Next.js 15/App Router
type Props = {
    params: Promise<{ id: string }>,
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params
    const textbook = textbooks.find((s) => s.id === id);
    if (!textbook) return { title: 'Textbook Not Found' };

    const stripTags = (html: string) => {
        // First remove <rt>...</rt> content (furigana)
        let text = html.replace(/<rt>[^<]*<\/rt>/g, '');
        // Then remove all other tags
        text = text.replace(/<[^>]+>/g, '');
        return text;
    };
    const plainTitle = stripTags(textbook.title);

    return {
        title: `${plainTitle} | Japanese Textbooks`,
        description: textbook.excerpt,
    };
}

import ScrollButtons from '@/components/ScrollButtons';

// ... (imports remain)

export default async function TextbookPage({ params }: Props) {
    const { id } = await params
    const textbook = textbooks.find((s) => s.id === id);

    if (!textbook) {
        notFound();
    }



    // Determine if the current textbook is N5
    const isN5 = textbook.level === 'N5';

    // Create a list of relevant textbooks for navigation context
    // If current is N5, navigate only among N5
    // If current is normal level, navigate only among normal levels
    const relevantTextbooks = textbooks.filter(t => isN5 ? t.level === 'N5' : t.level !== 'N5');

    // Find the index of the current textbook within the relevant group
    const internalIndex = relevantTextbooks.findIndex(t => t.id === id);

    // Get Prev/Next from the relevant group
    const prevTextbook = internalIndex > 0 ? relevantTextbooks[internalIndex - 1] : null;
    const nextTextbook = internalIndex < relevantTextbooks.length - 1 ? relevantTextbooks[internalIndex + 1] : null;

    // Calculate serial number based on the relevant group
    const serialNumber = internalIndex + 1;

    return (
        <div className="container">
            <TextbookContent
                textbook={textbook}
                serialNumber={serialNumber}
                prevTextbookId={prevTextbook?.id}
                nextTextbookId={nextTextbook?.id}
            />
            <ScrollButtons />
        </div>
    );
}
