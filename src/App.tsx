import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import BookStudyingList from "./pages/BookStudyingList";
import ShelveList from "./pages/ShelveList";
import BookList from "./pages/BookList";
import BookCreate from "./pages/BookCreate";
import React from "react";
import BookEdit from "./pages/BookEdit";
import BookStudyCreate from "./pages/BookStudyCreate";
import BookStudyingRecord from "./pages/BookStudyingRecord";
import BookStudiedHistoryList from "./pages/BookStudiedHistoryList";
import BookStudiedHistoryShow from "./pages/BookStudiedHistoryShow";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/shelves"} element={<ShelveList />} />
        <Route path={"/shelve/:id/books"} element={<BookList />} />
        <Route path={"/book/create"} element={<BookCreate />} />
        <Route path={"/book/:id/edit"} element={<BookEdit />} />
        <Route path={"/book/:id/study/create"} element={<BookStudyCreate />} />
        <Route path={"/studying-books"} element={<BookStudyingList />} />
        <Route path={"/studying-books/:id/record"} element={<BookStudyingRecord />} />
        <Route path={"/studied-history-books"} element={<BookStudiedHistoryList />} />
        <Route path={"/studied-history-books/:id/show"} element={<BookStudiedHistoryShow />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;