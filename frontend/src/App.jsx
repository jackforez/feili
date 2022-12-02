import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import NotFound from "./pages/Notfound";
import Layout from "./pages/Layout";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentMsg } = useSelector((state) => state.msg);
  const dispatch = useDispatch();
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      if (!currentMsg) toast.warn("Vui lòng đăng nhập");
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route
            path="admin/*"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
