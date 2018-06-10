import {Book} from "./models/book";
import {Reader} from "./models/reader";
/**
 * Created by dattaram on 10/6/18.
 */

export const allBooks: Book[] = [
  {bookID: 1, title: 'Book 1', author: 'Dr. dats', publicationYear: 1975 },
  {bookID: 2, title: 'Book 2', author: 'Dr. gawade', publicationYear: 1970 },
  {bookID: 3, title: 'Book 3', author: 'Dr. chikya', publicationYear: 1976 },
  {bookID: 4, title: 'Book 4', author: 'Dr. sapnar', publicationYear: 1977 },
  {bookID: 5, title: 'Book 5', author: 'Dr. sud', publicationYear: 1972 }
];

export const allReaders: Reader[] = [
  {name: 'Dats', readerID: 1, totalMinuteRead: 400, weeklyreadingGoal: 5000 },
  {name: 'sud', readerID: 2, totalMinuteRead: 500, weeklyreadingGoal: 3000 },
  {name: 'Rahul', readerID: 3, totalMinuteRead: 300, weeklyreadingGoal: 6000 }

];
