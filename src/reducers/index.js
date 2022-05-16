import { updateBookList } from "./bookListReducer";
import { updateShoppingCart } from "./shoppingCartReducer";

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
