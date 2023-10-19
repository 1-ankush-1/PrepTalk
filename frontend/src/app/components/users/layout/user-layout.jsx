import React from "react";
import UserHeader from "./header/header";
import UserHome from "./home/home";
import UserFooter from "./footer/footer";

const UserLayout = () => {
  return (
    <>
      <UserHeader />
      <UserHome />
      <UserFooter />
    </>
  );
};

export default UserLayout;
