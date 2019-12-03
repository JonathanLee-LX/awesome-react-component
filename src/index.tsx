import React from "react";

import "./style.css";

interface AwesomeTitleProps {
  text: string;
}

const AwesomeTitle = (props: AwesomeTitleProps) => {
  return <h1 className="awesome">{props.text}</h1>;
};

export default AwesomeTitle;
