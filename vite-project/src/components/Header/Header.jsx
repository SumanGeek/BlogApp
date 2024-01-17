import React from "react";
import { Container, Logo, Logout } from "../index";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status); //true or false
  //check wheather the user is login or not
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="bg-gray-500 py-3 shadow">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((items) =>
              items.active ? (
                <li key={items.name}>
                  {
                    <button
                      onClick={() => Navigate(items.slug)}
                      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    >
                      {items.name}
                    </button>
                  }
                </li>
              ) : null
            )}
            //if the user is login Logout btn will be shown
            {authStatus && (
              <li>
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
