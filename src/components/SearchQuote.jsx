import React from "react";

const SearchQuote = ({ character, image, quote }) => {
  return (
    <div>
      <p>{character}</p>
      <img src={image}/>
      <p>{quote}</p>
    </div>
  );
};

export default SearchQuote;
