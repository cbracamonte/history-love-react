import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ChooseUserPage,
  HomePage,
  LoginPage,
  MeetingPage,
  MomentsPage,
  OutcomePage,
  ProfilePage,
  SignoutPage,
  TogetherPage,
  UserPage,
} from "./modules/index.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="profile" element={<ProfilePage />}></Route>
        <Route path="meeting" element={<MeetingPage />}></Route>
        <Route path="moments" element={<MomentsPage />}></Route>
        <Route path="outcome" element={<OutcomePage />}></Route>
        <Route path="together" element={<TogetherPage />}></Route>
        <Route path="signout" element={<SignoutPage />}></Route>
        <Route path="user/:username" element={<UserPage />}></Route>
        <Route path="choose-username" element={<ChooseUserPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
