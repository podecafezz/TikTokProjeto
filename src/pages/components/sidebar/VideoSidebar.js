import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setliked] = useState(false);

  function handdleLike() {
    setliked(!liked);
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        )}

        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__options">
        <ChatIcon fontSize="medium" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="medium" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
