import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to the App!</h1>
      <p className="text-center">
        This is the home page. You can register for an account or learn more
        about the project.
      </p>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/registration" className="btn btn-primary">
          Go to Registration
        </Link>
      </div>
    </div>
  );
};

export default Home;
