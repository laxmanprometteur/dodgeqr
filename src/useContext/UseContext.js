import React, { useState } from "react";
import UserContext from "./Context";

const UseContext = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // messaeg
  
  const [messageslist, setMessageList] = useState([]);
  console.log(messageslist)

  // admin

  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("user")));

  // token
  const token = localStorage.getItem("token");

  console.log(admin);
  // flag
  const [flag, setFlag] = useState(admin ? true : false);

  console.log(flag);

  // console.log(user);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        admin,
        setAdmin,
        flag,
        setFlag,
        token,
        messageslist,
        setMessageList
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UseContext;