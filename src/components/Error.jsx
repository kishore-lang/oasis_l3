import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center p-8">
        <h1 className="text-4xl font-extrabold mb-4">404 — Page Not Found</h1>
        <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/" className="px-4 py-2 rounded bg-primary text-white">Home</Link>
          <Link to="/start" className="px-4 py-2 rounded border border-primary text-primary">Start Page</Link>
                <Link to="/dashboard/menu" className="px-4 py-2 rounded bg-cheese text-foreground">Explore Menu</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
