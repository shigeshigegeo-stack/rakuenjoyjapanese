
import { textbooks } from '../src/data/textbooks/index';
import { Textbook, Quiz } from '../src/data/textbooks/types';

// Chalk-like simple colors if possible, or just console logs
const red = (msg: string) => `\x1b[31m${msg}\x1b[0m`;
const green = (msg: string) => `\x1b[32m${msg}\x1b[0m`;
const yellow = (msg: string) => `\x1b[33m${msg}\x1b[0m`;

let errorCount = 0;
let warningCount = 0;

function error(id: string, msg: string) {
    console.error(`${red('ERROR')} [${id}]: ${msg}`);
    errorCount++;
}

function warning(id: string, msg: string) {
    console.warn(`${yellow('WARN')}  [${id}]: ${msg}`);
    warningCount++;
}

function checkRubyTags(id: string, text: string | undefined, fieldName: string) {
    if (!text) return;
    const rubyOpen = (text.match(/<ruby>/g) || []).length;
    const rubyClose = (text.match(/<\/ruby>/g) || []).length;
    const rtOpen = (text.match(/<rt>/g) || []).length;
    const rtClose = (text.match(/<\/rt>/g) || []).length;

    if (rubyOpen !== rubyClose) {
        error(id, `${fieldName}: Mismatched <ruby> tags. Open: ${rubyOpen}, Close: ${rubyClose}`);
    }
    if (rtOpen !== rtClose) {
        error(id, `${fieldName}: Mismatched <rt> tags. Open: ${rtOpen}, Close: ${rtClose}`);
    }
}

function validateQuizzes(id: string, quizzes: Quiz[] | undefined) {
    if (!quizzes) return;
    quizzes.forEach((quiz, index) => {
        if (!quiz.question) {
            error(id, `Quiz #${index}: Missing question`);
        }
        if (!quiz.choices || quiz.choices.length === 0) {
            error(id, `Quiz #${index}: Missing choices`);
        } else {
            if (quiz.answer_index === undefined || quiz.answer_index < 0 || quiz.answer_index >= quiz.choices.length) {
                error(id, `Quiz #${index}: Invalid answer_index ${quiz.answer_index} for ${quiz.choices.length} choices`);
            }
        }
        // Check ruby in quiz question/choices
        checkRubyTags(id, quiz.question, `Quiz #${index} question`);
        quiz.choices?.forEach((c, ci) => checkRubyTags(id, c, `Quiz #${index} choice #${ci}`));
    });
}

function main() {
    console.log(`Starting validation for ${textbooks.length} stories...`);

    const ids = new Set<string>();

    textbooks.forEach((story: Textbook, index) => {
        const id = story.id || `INDEX_${index}`;

        // Check ID Uniqueness
        if (ids.has(id)) {
            error(id, 'Duplicate ID found');
        }
        ids.add(id);

        // Required fields
        if (!story.title) error(id, 'Missing title');
        if (!story.level) error(id, 'Missing level');
        if (!story.textbook_html) error(id, 'Missing textbook_html');
        if (!story.translation) warning(id, 'Missing translation'); // Maybe warning?

        // Ruby checks
        checkRubyTags(id, story.title, 'title');
        checkRubyTags(id, story.textbook_html, 'textbook_html');
        if (story.schema_activation) {
            story.schema_activation.forEach((s, i) => checkRubyTags(id, s, `schema_activation[${i}]`));
        }

        // Quizzes
        validateQuizzes(id, story.quizzes);
    });

    console.log('---------------------------------------------------');
    if (errorCount === 0) {
        console.log(green(`SUCCESS: No errors found. (${warningCount} warnings)`));
    } else {
        console.log(red(`FAILED: Found ${errorCount} errors and ${warningCount} warnings.`));
        process.exit(1);
    }
}

main();
