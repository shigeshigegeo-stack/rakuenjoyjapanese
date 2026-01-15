import { textbooks_level_01_10 } from './level_01_10';
import { textbooks_level_11_20 } from './level_11_20';
import { textbooks_level_21_30 } from './level_21_30';
import { textbooks_jlpt_n5 } from './jlpt_n5';

import { Textbook } from './types';

export const textbooks: Textbook[] = [
  ...textbooks_level_01_10,
  ...textbooks_level_11_20,
  ...textbooks_level_21_30,
  ...textbooks_jlpt_n5,
];

export const stories = textbooks;

