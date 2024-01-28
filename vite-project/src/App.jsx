import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser() //if there is a user
      .then((userData) => {
        //userData is the data of current user
        if (userData) {
          // if there is data in the appwrite then give the userdata to login state
          dispatch(login({ userData }));
        } else {
          //if there is no user in appwrite database
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <p>This is working fime</p>
        {/* <Footer /> */}
      </div>
    </div>
  ) : (
    <div>Not found</div>
  );
};

export default App;
