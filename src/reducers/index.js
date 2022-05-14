const initialState = {
  books: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUESTED":
      return {
        ...state,
        books: [],
        loading: true,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        books: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
