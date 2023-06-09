import { Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { name, email, password } = useSelector((s) => s.auth);
  return (
    <div>
      <Image src="./Images/homepage.png" />
    </div>
  );
};

export default Homepage;
