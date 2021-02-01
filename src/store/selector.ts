import { IState } from './reducer';
import { createSelector } from 'reselect'
export const rootSelector = createSelector((state: IState) => state, state => state);
export const bookSelector = createSelector((state: IState) => state.books, books => books);
