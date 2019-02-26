import React from "react";
import styles from "./Avatar.module.scss";

export interface IAvatarProps {
  src: string;
  capSrc: string;
  alt: string | undefined;
  online: boolean;
  style: object | undefined;
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
    capSrc: "",
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
    this.props.src ? (
      <img
        className={styles[this.state.orientation]}
        onLoad={(e: React.SyntheticEvent) =>
          this.getOriginalOrientation(e.target)
        }
        {...this.props}
      />
    ) : this.props.capSrc ? (
      <img className={styles.horizontal} src={this.props.capSrc} />
    ) : null;

  renderOnline = () =>
    this.props.online && (
      <div className={`${styles.wrapper} ${styles.online}`} />
    );

  render() {
    console.log(styles.wrapper);
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
