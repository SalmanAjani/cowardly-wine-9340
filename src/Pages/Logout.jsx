import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
        You have successfully Logged Out
      </h1>
      <Button colorScheme="teal" onClick={handleClick}>
        Click Here to Go to Login Page
      </Button>
    </div>
  );
};

export default Logout;
