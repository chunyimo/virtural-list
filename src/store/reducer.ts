import { ActionEnum } from "./action";
import {handleActions} from 'redux-actions';
export interface IBook {
  id: string;
  author: string;
  cover: string;
}
export interface IState {
  books: IBook[];
}

const initState: IState = {
  books: [],
}

const reducer = handleActions(
  {
    [ActionEnum.UPDATE_BOOKS]: (state: IState, {payload: {books}}) => {
      return {...state, books: books}
    }
  },
  initState,
)

export default reducer;