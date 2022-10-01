import redditIcon from "../assets/images/reddit.png";
import googleIcon from "../assets/images/google.png";
import { supabase } from "../services/supabaseClient";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const style = {
  wrapper: "flex min-h-screen flex-col items-center justify-center space-y-2",
  loginBtn:
    "group flex items-center space-x-4 rounded border-gray-300 border p-4 hover:bg-white",
  loginBtnText: "font-bold group-hover:text-black",
};
const Login = () => {
  const router = useRouter();
  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signIn({
        provider: "google",
      });
    } catch (err) {
      console.error(error);
    }
  };

  return (
    <div className={style.wrapper}>
      <img className="h-62" src={redditIcon.src} alt="reddit icon" />
      <button className={style.loginBtn} onClick={() => signInWithGoogle()}>
        <img
          className="h-52"
          src={googleIcon.src}
          alt="google icon"
          className="h-6 w-6"
        />
        <span className={style.loginBtnText}>Sign In with Google</span>
      </button>
    </div>
  );
};

export default Login;
