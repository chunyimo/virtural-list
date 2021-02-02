import { ActionEnum } from "./action";
import { handleActions } from "redux-actions";
export interface IBook {
  id: string;
  author: string;
  cover: string;
}
export interface IState {
  books: IBook[];
  cachedBooks: IBook[];
  cachedScrollOffset: number;
  scrollOffset: number;
  cacheBuffer: [];
  destinationBuffer: [];
}

const initState: IState = {
  cacheBuffer: [],
  destinationBuffer: [],
  books: [],
  cachedBooks: [],
  cachedScrollOffset: 0,
  scrollOffset: 0,
};

const reducer = handleActions(
  {
    [ActionEnum.UPDATE_STATE]: (state: IState, { payload }) => {
      return { ...state, ...payload };
    },
    [ActionEnum.UPDATE_BOOKS]: (state: IState, { payload: { books } }) => {
      return { ...state, books: books };
    },
    [ActionEnum.UPDATE_CACHED_SCROLL_OFFSET]: (
      state: IState,
      { payload: { cachedScrollOffset } }
    ) => {
      return { ...state, cachedScrollOffset };
    },
    [ActionEnum.UPDATE_SCROLL_OFFSET]: (
      state: IState,
      { payload: { scrollOffset } }
    ) => {
      return { ...state, scrollOffset: scrollOffset };
    },
  },
  initState
);

export default reducer;
