import { getBooks, getNBooks } from "./../mock/index";
import { ActionEnum, updateBooks, updateState } from "./../store/action";
import {
  call,
  cancel,
  delay,
  fork,
  put,
  select,
  take,
  takeEvery,
} from "redux-saga/effects";
import { rootSelector } from "../store/selector";
function* getBooksWorker() {
  const books = getBooks();
  yield put(updateBooks({ books: books }));
}
function* loopGetBooksWorker() {
  while (true) {
    try {
      const { books } = yield select(rootSelector);
      const firstBook = books[0];
      if (firstBook) {
        const newBooks = getNBooks(Math.floor(Math.random() * 6));
        if (newBooks.length > 0) {
          const { cachedScrollOffset, cachedBooks } = yield select(
            rootSelector
          );
          if (cachedScrollOffset < 600) {
            yield put(
              updateState({
                books: [...newBooks, ...cachedBooks, ...books],
                scrollOffset: 0,
                cachedBooks: [],
              })
            );
          } else {
            yield put(
              updateState({ cachedBooks: [...newBooks, ...cachedBooks] })
            );
          }
        }
      } else {
        yield call(getBooksWorker);
      }
    } catch (error) {
    } finally {
      yield delay(5 * 1000);
    }
  }
}
function* pollingBooksWorker() {
  try {
    yield take(ActionEnum.START_POLLING_BOOKS_ACTION);
    const task = yield fork(loopGetBooksWorker);
    yield take(ActionEnum.CANCEL_POLLING_BOOKS_ACTION);
    yield cancel(task);
  } catch (error) {}
}
function* rootSaga() {
  yield takeEvery(ActionEnum.TRIGGER_GET_BOOKS_ACTION, getBooksWorker);
  yield fork(pollingBooksWorker);
}

export default rootSaga;
