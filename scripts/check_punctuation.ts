
import { textbooks } from '../src/data/textbooks/index';
import { Textbook, Quiz } from '../src/data/textbooks/types';

// Chalk-like simple colors
const red = (msg: string) => `\x1b[31m${msg}\x1b[0m`;
const yellow = (msg: string) => `\x1b[33m${msg}\x1b[0m`;
const green = (msg: string) => `\x1b[32m${msg}\x1b[0m`;

function checkPunctuation() {
    console.log('Starting punctuation check for Levels 1-10...');

    let violationCount = 0;

    textbooks.forEach((textbook: Textbook) => {
        // Only check Level 1 to 10
        if (Number(textbook.level) > 10) return;

        const id = textbook.id;

        // 1. Check Schema Activation (BR)
        if (textbook.schema_activation) {
            textbook.schema_activation.forEach((text, i) => {
                const trimmed = text.trim();
                // Check if it ends with punctuation, ignoring HTML tags
                const plainText = trimmed.replace(/<[^>]+>/g, '').trim();

                if (plainText.length > 0 && !/[。？!！]$/.test(plainText)) {
                    console.log(`${yellow('[SA Violation]')} ${id} Schema #${i + 1}: "${text}" (Should end with punctuation)`);
                    violationCount++;
                }
            });
        }

        // 2 & 3. Check Quizzes (CYU)
        if (textbook.quizzes) {
            textbook.quizzes.forEach((quiz, i) => {
                // Check Question
                if (quiz.question) {
                    const trimmedQ = quiz.question.trim();
                    if (!/[。？!！]$/.test(trimmedQ)) {
                        // Strip tags to be sure
                        const plainQ = trimmedQ.replace(/<[^>]+>/g, '').trim();
                        if (plainQ.length > 0 && !/[。？!！]$/.test(plainQ)) {
                            console.log(`${yellow('[Quiz Q Violation]')} ${id} Q#${i + 1}: "${quiz.question}" (Should end with punctuation)`);
                            violationCount++;
                        }
                    }
                }

                // Check Choices
                if (quiz.choices) {
                    quiz.choices.forEach((choice, ci) => {
                        const trimmedC = choice.trim();
                        // Should NOT end with 。 、 ， , .
                        if (/[。、，,\.]$/.test(trimmedC)) {
                            console.log(`${red('[Quiz Choice Violation]')} ${id} Q#${i + 1} Choice#${ci + 1}: "${choice}" (Should NOT end with punctuation)`);
                            violationCount++;
                        }
                    });
                }
            });
        }
    });

    console.log('---------------------------------------------------');
    if (violationCount === 0) {
        console.log(green('SUCCESS: No punctuation violations found.'));
    } else {
        console.log(red(`Found ${violationCount} violations.`));
    }
}

checkPunctuation();
