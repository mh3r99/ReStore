import React, { useEffect } from "react";
import "./BookList.css";
import BookListItem from "../BookListItem/BookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/withBookstoreService";
import { bookAddedToCart, fetchBooks } from "../../actions";
import { compose } from "redux";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

function BookListContainer({
  books,
  loading,
  error,
  fetchBooks,
  onAddedToCart,
}) {
  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) return <Spinner />;

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} onAddedToCart={onAddedToCart} />;
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
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
