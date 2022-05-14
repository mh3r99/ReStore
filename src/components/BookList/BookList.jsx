import React, { useEffect } from "react";
import "./BookList.css";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/withBookstoreService";
import { booksLoaded } from "../../actions";
import { compose } from "redux";

function BookList({ books, bookstoreService, booksLoaded }) {
  useEffect(() => {
    const data = bookstoreService.getBooks();
    booksLoaded(data);
  }, []);

  return (
    <ul className="book-list">
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

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
