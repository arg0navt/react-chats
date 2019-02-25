import React, { useState } from "react";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  src: string;
  alt: string | undefined;
  style: object | undefined;
}

const Avatar = (props: IAvatarProps) => {
  const [orientation, changeOrientation] = useState("none");
  const getOriginalOrientation = (img: any) => {
    if(img) {
      changeOrientation(img.clientHeight > img.clientWidth ? "vertical" : "horizontal")
    }
  };

  return (
    <div className={styles.rcAvatar}>
      <img
        className={styles[orientation]}
        src={props.src}
        alt={props.alt}
        onLoad={(e: React.SyntheticEvent) => getOriginalOrientation(e.target)}
        style={props.style}
      />
    </div>
  );
};

Avatar.defaultProps = {
  src: "",
  alt: "",
  style: {}
};

export default Avatar;
