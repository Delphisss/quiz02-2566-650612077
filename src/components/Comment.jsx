import React from "react";
import Reply from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const showLikes = likeNum > 0;
  return (
    <div className="comment">
      <img src={userImagePath} alt={`${username}'s profile`} />
      <div className="comment-details">
        <h3>{username}</h3>
        <p>{commentText}</p>
        {showLikes && <p>Likes: {likeNum}</p>}
        <div className="replies">
          {replies.map((reply, index) => (
            <Reply
              key={index}
              userImagePath={reply.userImagePath}
              username={reply.username}
              replyText={reply.commentText}
              likeNum={reply.likeNum}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
