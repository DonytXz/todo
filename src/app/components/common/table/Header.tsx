import React from "react";

const Header = () => {
  return (
    <>
      <div className="grid grid-cols-4 border-2 mx-2">
        <div className="border-x-2 p-2">#</div>
        <div className="border-x-2 p-2">User</div>
        <div className="border-x-2 p-2">Description</div>
        <div className="border-x-2 p-2">Completed</div>
      </div>
    </>
  );
};

export default Header;
