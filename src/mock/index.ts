import { IBook } from './../store/reducer';
import faker from 'faker';

export const getBooks = () => {
  const books:IBook[] = [
  ]
  for (let i = 1; i < 81; i++) {
    books.push({id: faker.random.uuid(), author: faker.name.findName(), cover: 'http://127.0.0.1:8080/' + `00${i}`.slice(-3)+'.jpg'})
  }
  return books;
}