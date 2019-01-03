import React from "react";
export default ({ onPress, text, key }) => (
  <button
    onClick={() =>
      onPress(
        "https://picsum.photos/300/300/?random&" +
          Math.random()
            .toString(36)
            .substring(7)
      )
    }
  >
    {text}
  </button>
);
