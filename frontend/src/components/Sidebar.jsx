import React from "react";
import { sidebarLinks } from "../ultis/config";
import {Link} from "react-router-dom"
import { logout } from "../redux/userSlice";
import {useDispatch} from "react-redux"
import logo from "../assets/feili-logo.jpg"
const Sidebar = () => {
  const dispatch = useDispatch()
  const myButton =`p-3 hover:bg-white hover:text-indigo-600 text-white`
  return <div className="h-screen bg-indigo-600 w-48 font-bold flex flex-col py-8">
   <img src={logo} alt="logo" className="h-24 w-24 mx-auto rounded-full" />
   {
     sidebarLinks.map((i,k)=>{
      return <Link key={k} to={i.path} className="px-6 py-3 hover:bg-white hover:text-indigo-600 text-white">
        {i.tieude}
      </Link>
    })
   
   }
    <button className="mt-16 px-6 py-3 hover:bg-white hover:text-indigo-600 text-white text-left"
    onClick={e=>{
      e.preventDefault();
      dispatch(logout())
    }}
    >
      Thoát
    </button>
  </div>;
};

export default Sidebar;
