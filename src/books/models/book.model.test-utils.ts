import { Dictionary } from '@ngrx/entity';
import * as faker from 'faker';
import { Book } from './book.model';

/**
 * Generates a random Book.
 */
export const randomBook = (): Book => {
  return {
    id: faker.random.uuid().toString(),
    title: faker.random.words(3),
    authors: [faker.name.firstName() + ' ' + faker.name.lastName()],
    description: faker.lorem.words(20),
    smallThumbnail: '',
    thumbnail: '',
  };
};

/**
 * Generates an array of random books. If the count parameter is ommitted then it will
 * generated a random length between 1 and 15.
 *
 * @param count The number of books to generate.
 */
export const randomBooks = (
  count: number = faker.random.number({ min: 1, max: 15 })
): Book[] => {
  return Array.apply(null, Array(count)).map(() => randomBook());
};

export const randomBookEntity = (): Dictionary<Book> => {
  return randomBookEntities(1);
};

export const randomBookEntities = (
  count: number | undefined
): Dictionary<Book> => {
  return randomBooks(count).reduce(
    (acc, book) => ((acc[book.id] = book), acc),
    {} as Dictionary<Book>
  );
};
