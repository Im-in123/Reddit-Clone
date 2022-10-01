import { supabase } from "../../services/supabaseClient";
import { useRouter } from "next/router";
import { useState } from "react";
import Loading from "../Loading";
const style = {
  wrapper: "flex flex-col space-y-6",
  title: "border-b border-[#343536] pb-3 text-lg font-medium",
  input: `bg-[#1a1a1b] border border-[#343536] px-4 py-2 text-left text-sm text-white focus:outline-none`,
  postBtnContainer: "flex justify-end pt-2",
  postBtn:
    "bg-gray-200 px-4 py-1.5 text-xs font-semibold text-[#1A1A1B] rounded-full",
};
const PostForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState({ title: "", content: "" });
  const router = useRouter();
  const createPost = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await supabase.from("Feed").insert([
        {
          author: "Cody",
          title: "Writing to this from my front-end",
          content: "Did this work, Cant beleive it worked",
        },
      ]);
    } catch (error) {
    } finally {
      router.push("/");
    }
    setIsLoading(false);
  };
  return (
    <div className={style.wrapper}>
      {isLoading && <Loading />}
      <h1 className={style.title}>Create a post</h1>
      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
        <input
          className={style.input}
          type="text"
          placeholder="Title"
          defaultValue={postData.title}
          onChange={(e) =>
            setPostData({ ...postData, title: e.currentTarget.value })
          }
          //   required
        />
        <textarea
          className={style.input}
          name="content"
          id="content"
          cols="30"
          rows="10"
          placeholder="Text (required)"
          defaultValue={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.currentTarget.value })
          }
          //   required
        />
        <div className={style.postBtnContainer}>
          <button className={style.postBtn} onClick={(e) => createPost(e)}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
