import React, { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setUser(true);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
