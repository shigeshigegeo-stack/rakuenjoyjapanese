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

    return {
        title: `${story.title} | Japanese Stories`,
        description: story.excerpt,
    };
}

export default async function StoryPage({ params }: Props) {
    const { id } = await params
    const story = stories.find((s) => s.id === id);

    if (!story) {
        notFound();
    }

    return (
        <div className="container">
            <StoryContent story={story} />
        </div>
    );
}
