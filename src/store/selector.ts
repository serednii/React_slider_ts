import { RootState } from '../store';

// export const selectPizzaData = (state: RootState) => state.pizza;
// export const selectPizzaData = (state: RootState) => state.pizza;

export const selectorProgressList = ((state:RootState) => state.scroll.progressList);