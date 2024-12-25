import React, { createContext, useState } from "react";

export const UserDataContext = createContext()

const UserContext = ({ children }) => {

    const [user, serUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:'',
        }
    })

  return (
    <div>
        <UserDataContext.Provider value={[user, serUser]}>
            {children}
        </UserDataContext.Provider>
       
    </div>
  )
};

export default UserContext;
