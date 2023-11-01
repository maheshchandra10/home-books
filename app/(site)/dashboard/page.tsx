"use client";

import { signOut } from "next-auth/react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-white">Home Books - Dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
