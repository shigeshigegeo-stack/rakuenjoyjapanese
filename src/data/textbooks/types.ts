export interface Story {
    id: string;
    title: string;
    level: number | string;
    schema_activation?: string[];
    translation?: string;
    story_html?: string;
    quizzes?: Quiz[];
    excerpt?: string;
    lesson?: string;
    content?: string;
    content_html?: string;
}

export interface Quiz {
    question: string;
    choices: string[];
    answer_index: number;
    question_translation?: string;
    answer_translation?: string;
    target_id?: string;
}
