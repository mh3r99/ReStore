import React, { useEffect } from "react";
import "./BookList.css";
import BookListItem from "../book-list-item/BookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { booksLoaded } from "../../actions";

function BookList({ books, bookstoreService, booksLoaded }) {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, []);

  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(BookList)
);
