export interface Fitment {
  year: string[];
  make: string[];
  selected: { year: string; make: string; model: string; trim: string };
  allSelected: boolean;
  error: any;
}

export interface Year {
  year: string[];
}

export interface Make {
  make: string[];
}

export interface Model {
  model: string[];
}

export interface Trim {
  trim: string[];
}
