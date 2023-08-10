import React from "react";

const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  const showLikes = likeNum > 0;

  return (
    <div className="reply">
      <img src={userImagePath} alt={`${username}'s profile`} />
      <div className="reply-details">
        <h4>{username}</h4>
        <p>{replyText}</p>
        {showLikes && <p>Likes: {likeNum}</p>}
      </div>
    </div>
  );
};
