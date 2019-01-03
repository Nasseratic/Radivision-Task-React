import React from "react";
import SButton from "./components/SButton";
import { reverseWords } from "./reverseWords";

const textToRevirse =
  "Hi Radivision  I am Sorry for being                   late..";

exprt default props => (
  <div className="App">
    {[1, 2, 3].map((url, i) => (
      <SButton
        key={i + url}
        text={`button ${i + 1}`}
        onPress={props.changeImage}
      />
    ))}
    <img src={props.imageURL} />

    <pre>{textToRevirse}</pre>
    <pre>{reverseWords(textToRevirse)}</pre>
  </div>
);
