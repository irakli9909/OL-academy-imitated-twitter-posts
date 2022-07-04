import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { FaRetweet } from "react-icons/fa";

function PostCardMenu(props) {
  const menuStyle = {
    position: "absolute",
    top: props.menuCoordinates.getY,
    left: props.menuCoordinates.getX,
  };
  return (
    <article className="contextMenu" style={menuStyle}>
      <button
        onClick={() => {
          props.toggleLike();
        }}
      >
        {props.isLike ? (
          <AiFillLike style={{ marginRight: "10px" }} />
        ) : (
          <AiOutlineLike style={{ marginRight: "10px" }} />
        )}
        {props.isLike ? "Unlike" : "Like"}
      </button>
      <button
        onClick={() => {
          props.seeTweet();
        }}
      >
        <FaRetweet style={{ marginRight: "10px" }} />
        see tweet
      </button>
    </article>
  );
}

export default PostCardMenu;
