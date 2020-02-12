import React from "react";

function Item(props) {
  return (
    <div className="item">
      <div className="title">{props.item.category}</div>
    </div>
  );
}
export default Item;
