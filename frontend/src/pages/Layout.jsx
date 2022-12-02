import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Bangluong from "./Bangluong";
import Chamcong from "./Chamcong";
import Chucvu from "./Chucvu";
import Luongthue from "./Luongthue";
import Nhansu from "./Nhansu";
import Phongban from "./Phongban";
import Tongquan from "./Tongquan";

const Layout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 p-3">
        <Routes>
          <Route path="/" element={<Tongquan />} />
          <Route path="chuc-vu" element={<Chucvu />} />
          <Route path="phong-ban" element={<Phongban />} />
          <Route path="nhan-su" element={<Nhansu />} />
          <Route path="cham-cong" element={<Chamcong />} />
          <Route path="bang-luong" element={<Bangluong />} />
          <Route path="luong-thue" element={<Luongthue />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
