import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import StudyingBookListPage from "./pages/StudyingBookListPage";
import ShelveListPage from "./pages/ShelveListPage";
import BookListPage from "./pages/BookListPage";
import BookCreatePage from "./pages/BookCreatePage";
import BookEditPage from "./pages/BookEditPage";
import StudyBookCreatePage from "./pages/StudyBookCreatePage";
import StudyingBookRecordPage from "./pages/StudyingBookRecordPage";
import StudiedBookHistoryListPage from "./pages/StudiedBookHistoryListPage";
import StudiedBookHistoryShowPage from "./pages/StudiedBookHistoryShowPage";
import ShelveCreatePage from "./pages/ShelveCreatePage";
import ShelveEditPage from "./pages/ShelveEditPage";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/dashboard"} element={<DashboardPage />} />
          <Route path={"/shelves"} element={<ShelveListPage />} />
          <Route path={"/shelves/:id/books"} element={<BookListPage />} />
          <Route path={"/shelves/create"} element={<ShelveCreatePage />} />
          <Route path={"/shelves/:id/edit"} element={<ShelveEditPage />} />
          <Route path={"/shelves/:id/books/create"} element={<BookCreatePage />} />
          <Route path={"/shelves/books/:id/edit"} element={<BookEditPage />} />
          <Route path={"/books/:id/studies/create"} element={<StudyBookCreatePage />} />
          <Route path={"/studying-books"} element={<StudyingBookListPage />} />
          <Route path={"/studying-books/:id/record"} element={<StudyingBookRecordPage />} />
          <Route path={"/studied-history-books"} element={<StudiedBookHistoryListPage />} />
          <Route path={"/studied-history-books/:book_id/show"} element={<StudiedBookHistoryShowPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;