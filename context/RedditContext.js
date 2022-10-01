import { useState } from "react";
import { createContext, useEffect } from "react";
import { supabase } from "../services/supabaseClient";

export const RedditContext = createContext();

export const RedditProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  useEffect(() => {
    // (async () => {
    const { user } = supabase.auth.session() || { user: null };

    console.log("user::", { user });
    setCurrentUser(user);

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      //   console.log("authuser::", session.user);
      setCurrentUser(session.user);
    });
    // })();
  }, []);
  return (
    <RedditContext.Provider
      value={{ currentUser, fetcher, selectedPost, setSelectedPost }}
    >
      {children}
    </RedditContext.Provider>
  );
};
