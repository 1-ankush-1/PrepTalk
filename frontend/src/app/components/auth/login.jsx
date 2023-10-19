import React, { useState } from "react";
import ConnectionTestService from "../../services/connectioncheck";

const Login = () => {
  const res = ConnectionTestService();

  return <div>{res}</div>;
};

export default Login;
