import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Transaction from "../pages/Transaction/Transaction";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/transactions" element={<Transaction />} />
    </Routes>
  );
};

export default AllRoutes;
