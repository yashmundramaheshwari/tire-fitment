import { Action } from '@ngrx/store';
import { Make, Year } from '../fitment.model';

// Type
export const LOAD_YEAR = '[FITMENT] Load Year';
export const LOAD_YEAR_SUCCESS = '[FITMENT]LOAD_YEAR_SUCESS';
export const LOAD_YEAR_FAIL = '[FITMENT]LOAD_YEAR_FAIL';
export const SET_YEAR = '[FITMENT] Set Year';
export const LOAD_MAKE = '[FITMENT] Load Make';
export const SET_MAKE = '[FITMENT] Set Make';
export const SET_MODEL = '[FITMENT] Set Model';
export const SET_TRIM = '[FITMENT] Set Trim';
export const RESET_YEAR = '[FITMENT] Reset Year';

// Section 3
export class LoadYear implements Action {
  readonly type = LOAD_YEAR;
}
export class LoadMake implements Action {
  readonly type = LOAD_MAKE;
  constructor(public payload: Make) {}
}
export class LoadYearSuccess implements Action {
  readonly type = LOAD_YEAR_SUCCESS;

  constructor(public payload: Year) {}
}
export class LoadYearFail implements Action {
  readonly type = LOAD_YEAR_FAIL;

  constructor(public payload: Error) {}
}

export class SetYear implements Action {
  readonly type = SET_YEAR;

  constructor(public payload: number) {}
}

export class SetMake implements Action {
  readonly type = SET_MAKE;

  constructor(public payload: string) {}
}

export class SetModel implements Action {
  readonly type = SET_MODEL;

  constructor(public payload: string) {}
}

export class SetTrim implements Action {
  readonly type = SET_TRIM;

  constructor(public payload: string) {}
}

export class ResetYear implements Action {
  readonly type = RESET_YEAR;

  constructor(public payload: string) {}
}

// Section 4
export type Actions =
  | LoadYear
  | LoadYearSuccess
  | LoadYearFail
  | SetYear
  | SetMake
  | SetModel
  | SetTrim
  | LoadMake
  | ResetYear;
