import React, { useState } from "react";
import "./style/index.scss";

export interface IAvatarProps {
  src: string;
  alt: string;
}

const Avatar = (props: IAvatarProps) => {
  const getOriginalOrientation = (e: any) => {};
  const [orientation, changeOrientation] = useState(null);
  return (
    <div className="rc-avatar">
      <img
        src={props.src}
        alt={props.alt}
        onLoad={(e: React.SyntheticEvent) => getOriginalOrientation(e.target)}
      />
    </div>
  );
};

export default Avatar;
