import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BooksUnderLearnList from "./pages/BooksUnderLearnList";
import ShelfList from "./pages/ShelfList";
import BookList from "./pages/BookList";
import BookCreate from "./pages/BookCreate";
import React from "react";
import BookEdit from "./pages/BookEdit";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/studying-books"} element={<BooksUnderLearnList />} />
        <Route path={"/shelves"} element={<ShelfList />} />
        <Route path={"/shelve/books"} element={<BookList />} />
        <Route path={"/book/create"} element={<BookCreate />} />
        <Route path={"/book/:id/edit"} element={<BookEdit />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;