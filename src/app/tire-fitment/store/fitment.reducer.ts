import { Fitment } from '../fitment.model';
import * as FitmentActions from './fitment.action';

// Section 1
const initialState: Fitment = {
  year: [],
  make: [],
  model: [],
  trim: [],
  selected: {
    year: '',
    make: '',
    model: '',
    trim: ''
  },
  error: '',
  allSelected: false
};

// Section 2
export function FitmentReducer(
  state: Fitment = initialState,
  action: FitmentActions.Actions
) {
  // Section 3
  switch (action.type) {
    case FitmentActions.LOAD_YEAR:
      return { ...state };
    case FitmentActions.LOAD_YEAR_SUCCESS:
      return { ...state, year: [...action.payload.year] };
    case FitmentActions.LOAD_MAKE:
      return { ...state, make: [...action.payload.make] };
    case FitmentActions.LOAD_MODEL:
      return { ...state, model: [...action.payload.model] };
    case FitmentActions.LOAD_TRIM:
      return { ...state, trim: [...action.payload.trim] };  
    case FitmentActions.LOAD_YEAR_FAIL:
      return { ...state, error: action.payload };
    case FitmentActions.RESET_YEAR:
      return {
        ...state,
        year: [],
        allSelected: false,
        selected: { year: '', make: '', model: '', trim: '' }
      };
    case FitmentActions.SET_YEAR:
      return {
        ...state,
        selected: { ...state.selected, year: action.payload }
      };
    case FitmentActions.SET_MAKE:
      return {
        ...state,
        selected: { ...state.selected, make: action.payload }
      };
    case FitmentActions.SET_MODEL:
      return {
        ...state,
        selected: { ...state.selected, model: action.payload }
      };
    case FitmentActions.SET_TRIM:
      return {
        ...state,
        selected: { ...state.selected, trim: action.payload },
        allSelected: true
      };
    default:
      return state;
  }
}
