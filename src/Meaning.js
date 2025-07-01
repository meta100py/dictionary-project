import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <strong> Example:</strong>
          <em>{props.meaning.example}</em>
          <Synonyms synonyms={props.meaning.synonyms} />
          {/* <strong> Synonyms:</strong>
          {props.meaning.synonyms} */}
        </p>
      </div>
    </div>
  );
}
