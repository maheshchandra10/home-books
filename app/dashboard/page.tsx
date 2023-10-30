"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  }, [router, session]);

  return (
    <div>
      <h1 className="text-white">Home Books - Dashboard</h1>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Dashboard;
