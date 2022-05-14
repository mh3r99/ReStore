import React, { useEffect } from "react";
import "./BookList.css";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/withBookstoreService";
import { fetchBooks } from "../../actions";
import { compose } from "redux";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

function BookList({ books, loading, error, fetchBooks }) {
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorIndicator />;
  }

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

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
