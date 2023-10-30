"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BiLogoGithub } from "react-icons/bi";

import AuthSocialButton from "@/components/AuthSocialButton";

const Home = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, session]);

  const githubAuth = () => {
    signIn("github", { redirect: false });
  };

  return (
    <main
      className="
        flex
        flex-col
        items-center
        justify-center
        gap-3
        h-full
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          gap-[10px]
          px-5
          w-auto
        "
      >
        <h1
          className="
          text-[24px]
          font-normal
          leading-[29.5px]
          text-center
        "
        >
          Conecte-se usando sua conta do GitHub.
        </h1>
        <AuthSocialButton
          icon={BiLogoGithub}
          text="Entrar com GitHub"
          onClick={() => githubAuth()}
        />
      </div>
    </main>
  );
};

export default Home;
