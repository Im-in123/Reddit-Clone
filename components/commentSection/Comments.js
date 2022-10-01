import useSWR from "swr";
import { useState, useEffect, useContext } from "react";
import { RedditContext } from "../../context/RedditContext";
const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const { fetcher } = useContext(RedditContext);
  const { data } = useSWR(`/api/get-comments?postId=${postId}`, fetcher, {
    refreshInterval: 10000,
  });

  useEffect(() => {
    if (!data) return;
    setComments(data.data);
  }, [data]);

  return (
    <div>
      <h1>Comments</h1>
    </div>
  );
};

export default Comments;
