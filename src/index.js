import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import store from "./store";
import BookstoreService from "./services/bookstore-service";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import { BookstoreServiceProvider } from "./components/bookstore-service-context/bookstore-service-context";

const bookstoreService = new BookstoreService();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </Provider>
);
