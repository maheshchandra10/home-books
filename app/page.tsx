"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiLogoGithub } from "react-icons/bi";

import AuthSocialButton from "@/components/AuthSocialButton";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [router, session]);

  const githubAuth = () => {
    setIsLoading(true);

    signIn("github", { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Credenciais Inválidas!");
        }
        if (callback?.ok) {
          toast.success("Logado com sucesso!");
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          loading={isLoading}
          icon={BiLogoGithub}
          text="Entrar com GitHub"
          onClick={() => githubAuth()}
        />
      </div>
    </main>
  );
};

export default Home;
