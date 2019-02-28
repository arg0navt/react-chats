import React from "react";
import styles from "./Message.module.scss";

export interface IMessageProps {
  float: string;
  message?: string;
  date?: string;
}

export default class Message extends React.Component<IMessageProps> {
  static defaultProps = {
    float: "right",
    message: "",
    date: ""
  };
  render() {
    return (
      <>
        <div
          className={`${styles.block} ${styles["float-" + this.props.float]}`}
        >
          {this.props.message ? (
            <p className={styles.messageText}>{this.props.message}</p>
          ) : null}
          {this.props.date ? (
            <span className={styles.date}>{this.props.date}</span>
          ) : null}
        </div>
      </>
    );
  }
}
