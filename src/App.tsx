import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import BooksUnderLearnList from "./components/pages/BooksUnderLearnList";
import ShelfList from "./components/pages/ShelfList";
import BookList from "./components/pages/BookList";
import BookCreate from "./components/pages/BookCreate";
import React from "react";
import BookEdit from "./components/pages/BookEdit";

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