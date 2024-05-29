// MyAccount.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import EditProfile from "../components/EditProfile";
import Breadcrumb from "../components/Breadcrumb";

const MyAccount = () => {
  return (
    <div className="container mx-auto my-8 max-w-screen-lg">
      <Breadcrumb />
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4 pl-8">
          <EditProfile />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
