import { getBooks } from './../mock/index';
import { ActionEnum, updateBooks } from './../store/action';
import { call, put, takeEvery } from 'redux-saga/effects';
function* getBooksWorker() {
  const books = getBooks();
  yield put(updateBooks({books: books}))
  yield call(console.info, books)
}
function* rootSaga() {
  yield takeEvery(ActionEnum.TRIGGER_GET_BOOKS_ACTION, getBooksWorker);
}

export default rootSaga;