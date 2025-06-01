import React from "react";
import Header from "../components/layout/Header";  // Adjust this path if needed

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-3xl font-bold">Users Page</h2>
        <p>Here you will find a list of users who are part of this application.</p>
        {/* You can add more user-related content here */}
      </main>
    </div>
  );
};

export default Users;
