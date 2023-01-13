import React from "react";
import "./grid.css";

const Grid = (props) => {
  const { numColumns, numRows, Component } = props;

  const items = [];
  for (let i = 0; i < numColumns * numRows; i++) {
    items.push(<Component key={i} />);
  }

  const rows = [];
  for (let i = 0; i < items.length; i += numColumns) {
    rows.push(
      <div key={i} className="grid-row">
        {items.slice(i, i + numColumns)}
      </div>
    );
  }

  return <div className="grid">{rows}</div>;
};

export default Grid;
