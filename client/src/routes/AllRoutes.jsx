import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Transaction from "../pages/Transaction/Transaction";
import PrivateRoute from "../components/PrivateRoute";
import Statistics from "../pages/Statistics/Statistics";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <Transaction />
          </PrivateRoute>
        }
      />
      <Route
        path="/statistics"
        element={
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
