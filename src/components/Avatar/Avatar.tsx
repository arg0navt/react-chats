import React from "react";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  src: string;
  alt?: string | undefined;
  online?: boolean;
  style?: object | undefined;
}

export interface IAvatarState {
  orientation: string;
}

export default class Avatar extends React.Component<
  IAvatarProps,
  IAvatarState
> {
  static defaultProps = {
    src: "",
    alt: "",
    online: false,
    style: {}
  };

  state = {
    orientation: "none"
  };

  getOriginalOrientation = (img: any) => {
    if (img) {
      this.setState({
        orientation:
          img.clientHeight > img.clientWidth ? "vertical" : "horizontal"
      });
    }
  };

  renderImg = () =>
    this.props.src && (
      <img
        src={this.props.src}
        alt={this.props.alt}
        style={
          this.state.orientation !== "none"
            ? this.state.orientation === "vertical"
              ? { width: "100%", height: "auto", opacity: 1 }
              : { width: "auto", height: "100%", opacity: 1 }
            : { width: "100%", height: "100%", opacity: 0 }
        }
        onLoad={(e: React.SyntheticEvent) =>
          this.getOriginalOrientation(e.target)
        }
      />
    );

  renderOnline = () =>
    this.props.online && (
      <div className={`${styles.wrapper} ${styles.online}`} />
    );

  render() {
    return (
      <div className={styles.container} style={this.props.style}>
        <div className={`${styles.wrapper} ${styles.wrapperImg}`}>
          {this.renderImg()}
        </div>
        {this.renderOnline()}
      </div>
    );
  }
}
