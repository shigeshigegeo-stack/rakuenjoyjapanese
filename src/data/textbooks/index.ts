import { textbooks_level_01 } from './level_01';
import { textbooks_level_02 } from './level_02';
import { textbooks_level_03 } from './level_03';
import { textbooks_level_04 } from './level_04';
import { textbooks_level_05 } from './level_05';
import { textbooks_level_06 } from './level_06';
import { textbooks_level_07 } from './level_07';
import { textbooks_level_08 } from './level_08';
import { textbooks_level_09 } from './level_09';
import { textbooks_level_10 } from './level_10';

export * from './level_01';
export * from './level_02';
export * from './level_03';
export * from './level_04';
export * from './level_05';
export * from './level_06';
export * from './level_07';
export * from './level_08';
export * from './level_09';
export * from './level_10';

export const textbooks_level_01_10 = [
  ...textbooks_level_01,
  ...textbooks_level_02,
  ...textbooks_level_03,
  ...textbooks_level_04,
  ...textbooks_level_05,
  ...textbooks_level_06,
  ...textbooks_level_07,
  ...textbooks_level_08,
  ...textbooks_level_09,
  ...textbooks_level_10
];

export const textbooks = textbooks_level_01_10;
