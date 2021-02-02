import { IBook } from "./../store/reducer";
import faker from "faker";

export const getBooks = () => {
  const books: IBook[] = [];
  for (let i = 1; i < 81; i++) {
    books.push({
      id: faker.random.uuid(),
      author: faker.name.findName(),
      cover: "http://127.0.0.1:8081/" + `00${i}`.slice(-3) + ".jpg",
    });
  }
  return books;
};

export const getNBooks = (num: number) => {
  const books: IBook[] = [];
  for (let i = 0; i < num; i++) {
    books.push({
      id: faker.random.uuid(),
      author: faker.name.findName(),
      cover:
        "http://127.0.0.1:8081/" +
        `00${Math.floor(Math.random() * 90)}`.slice(-3) +
        ".jpg",
    });
  }
  return books;
};
