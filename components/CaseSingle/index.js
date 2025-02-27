import React from "react";

const CaseSingle = ({ imageUrl, context }) => {
  const { title, definition, purpose } = context;

  return (
    <div className="page-header-container">
      <div>
        <img src={imageUrl} alt="" />
      </div>
      <div className="page-header-content">
        <h2>{title}</h2>
        <p>{definition}</p>
        <p>
          <b>Purpose: </b>
          {purpose}
        </p>
      </div>
    </div>
  );
};

export default CaseSingle;
