import Post from "../common/Post";

const Feed = ({ posts }) => {
  const style = {
    wrapper: "space-y-2.5",
  };

  return (
    <div className={style.wrapper}>
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
};

export default Feed;
