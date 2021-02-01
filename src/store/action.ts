import { createAction } from "redux-actions";

export enum ActionEnum {
  TRIGGER_GET_BOOKS_ACTION = 'TRIGGER_GET_BOOKS_ACTION',
  UPDATE_BOOKS = 'UPDATE_BOOKS',
}
export const updateBooks = createAction(ActionEnum.UPDATE_BOOKS);
export const getBooksAction = createAction(ActionEnum.TRIGGER_GET_BOOKS_ACTION);