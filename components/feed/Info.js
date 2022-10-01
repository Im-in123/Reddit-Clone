import profilepic from "../../assets/images/profilepic.jpg";
const Info = ({ author }) => {
  const style = {
    wrapper: `flex items-center space-x-1 text-xs text-[#818384]`,
    profilePicContainer: `flex items-center space-x-1`,
    profilePic: "h-4 w-4 rounded-full",
    tag: `cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline`,
    postedBy: "flex items-center space-x-1",
  };
  return (
    <div className={style.wrapper}>
      <div className={style.profilePicContainer}>
        <img className={style.profilePic} src={profilepic.src} alt="logo" />
      </div>
      <div className={style.tag}>r/{author}</div>
      <div>‧</div>
      <div className={style.postedBy}>
        <span> Posted by {author}</span>
        <span> ‧</span>
        <span> March 14</span>
      </div>
    </div>
  );
};

export default Info;
