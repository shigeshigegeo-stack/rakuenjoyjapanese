import React from 'react';
import storiesFromData from '@/data/stories.json';
import StoryContent from '@/components/StoryContent';
import { notFound } from 'next/navigation';

// Type assertion since importing json directly
const stories = storiesFromData as any[];

export function generateStaticParams() {
    return stories.map((story) => ({
        id: story.id,
    }));
}

// Correct type for PageProps in Next.js 15/App Router
// Params is a Promise in recent versions, but for simple cases this usually works or needs to be awaited depending on exact version.
// In Next.js 13/14 params is an object, in 15 it might be a promise.
// Safe bet: define type and use it.
type Props = {
    params: Promise<{ id: string }>,
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params
    const story = stories.find((s) => s.id === id);
    if (!story) return { title: 'Story Not Found' };

    const stripTags = (html: string) => {
        // First remove <rt>...</rt> content (furigana)
        let text = html.replace(/<rt>[^<]*<\/rt>/g, '');
        // Then remove all other tags
        text = text.replace(/<[^>]+>/g, '');
        return text;
    };
    const plainTitle = stripTags(story.title);

    return {
        title: `${plainTitle} | Japanese Stories`,
        description: story.excerpt,
    };
}

export default async function StoryPage({ params }: Props) {
    const { id } = await params
    const story = stories.find((s) => s.id === id);

    if (!story) {
        notFound();
    }

    const currentIndex = stories.findIndex((s) => s.id === id);

    // Find previous non-N5 story
    let prevStory = null;
    for (let i = currentIndex - 1; i >= 0; i--) {
        if (stories[i].level !== 'N5') {
            prevStory = stories[i];
            break;
        }
    }

    // Find next non-N5 story
    let nextStory = null;
    for (let i = currentIndex + 1; i < stories.length; i++) {
        if (stories[i].level !== 'N5') {
            nextStory = stories[i];
            break;
        }
    }
    // Calcluate serial number based on non-N5 stories
    let serialNumber: number | undefined;
    if (story.level !== 'N5') {
        const nonN5Stories = stories.filter(s => s.level !== 'N5');
        serialNumber = nonN5Stories.findIndex(s => s.id === id) + 1;
    }

    return (
        <div className="container">
            <StoryContent
                story={story}
                serialNumber={serialNumber}
                prevStoryId={prevStory?.id}
                nextStoryId={nextStory?.id}
            />
        </div>
    );
}
