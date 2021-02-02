import { createAction } from "redux-actions";

export enum ActionEnum {
  TRIGGER_GET_BOOKS_ACTION = "TRIGGER_GET_BOOKS_ACTION",
  START_POLLING_BOOKS_ACTION = "START_POLLING_BOOKS_ACTION",
  CANCEL_POLLING_BOOKS_ACTION = "CANCEL_POLLING_BOOKS_ACTION",
  UPDATE_BOOKS = "UPDATE_BOOKS",
  UPDATE_STATE = "UPDATE_STATE",
  UPDATE_CACHED_SCROLL_OFFSET = "UPDATE_CACHED_SCROLL_OFFSET",
  UPDATE_SCROLL_OFFSET = "UPDATE_SCROLL_OFFSET",
}
export const updateBooks = createAction(ActionEnum.UPDATE_BOOKS);
export const updateState = createAction(ActionEnum.UPDATE_STATE);
export const updateCachedScrollOffset = createAction(
  ActionEnum.UPDATE_CACHED_SCROLL_OFFSET,
  (cachedScrollOffset: number) => ({
    cachedScrollOffset,
  })
);
export const updateScrollOffset = createAction(
  ActionEnum.UPDATE_SCROLL_OFFSET,
  (scrollOffset: number) => ({
    scrollOffset,
  })
);
export const getBooksAction = createAction(ActionEnum.TRIGGER_GET_BOOKS_ACTION);
export const startPollingBooksAction = createAction(
  ActionEnum.START_POLLING_BOOKS_ACTION
);
export const cancelPollingBooksAction = createAction(
  ActionEnum.CANCEL_POLLING_BOOKS_ACTION
);
