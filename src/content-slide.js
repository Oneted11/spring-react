import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";

const App = () => {
  const [contentStatus, displayContent] = React.useState(false);

  const contentProps = useSpring({
    opacity: contentStatus ? 1 : 0,
    marginTop: contentStatus ? 0 : -1000
  });

  return (
    <div className="container">
      <div className="button-container">
        {/* change what is displayContent into not what it is */}
        <button onClick={() => displayContent(a => !a)} className="button">
          {" "}
          Toggle content
        </button>
      </div>
      {!contentStatus ? (
        <div> No content </div>
      ) : (
        <animated.div className="box" style={contentProps}>
          <h1> This content slid down Thanks to react spring </h1>
        </animated.div>
      )}
    </div>
  );
};

export default App;
