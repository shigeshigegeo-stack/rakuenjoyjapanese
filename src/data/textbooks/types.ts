export interface Textbook {
    id: string;
    title: string;
    level: number | string;
    schema_activation?: string[];
    translation?: string;
    textbook_html?: string;
    quizzes?: Quiz[];
    excerpt?: string;
    lesson?: string;
    audio_file?: string;
}

export interface Quiz {
    question: string;
    choices: string[];
    answer_index: number;
    question_translation?: string;
    answer_translation?: string;
    target_id?: string;
}
