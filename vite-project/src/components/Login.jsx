import React, { useState } from "react";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const disptch = useDispatch();
  const [register, handleSubmit] = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser(); // if there is a user with given data
        if (userData) {
          disptch(login(userData));// if there is user the state of login will be changed
          navigate('/')
        }
      }
    } catch (error) {
      setError(error.messege);
    }
  };
  return <div>Login</div>;
};

export default Login;
