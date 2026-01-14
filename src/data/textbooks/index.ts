import { stories_level_01_10 } from './level_01_10';
import { stories_level_11_20 } from './level_11_20';
import { stories_level_21_30 } from './level_21_30';
import { stories_jlpt_n5 } from './jlpt_n5';

import { Textbook } from './types';

export const textbooks: Textbook[] = [
  ...stories_level_01_10,
  ...stories_level_11_20,
  ...stories_level_21_30,
  ...stories_jlpt_n5,
];
