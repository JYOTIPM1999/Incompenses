import React from "react";
import { useNavigate } from "react-router-dom";

const TaketoNewPage = ({ props }) => {
  const navigate = useNavigate();
  return navigate();
};

export default TaketoNewPage;
