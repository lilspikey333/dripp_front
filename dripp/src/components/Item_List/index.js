import React from "react";
import Item from "../Item";

function Item_List(props) {
  return (
    <div className="ItemResults">
      {props.items.map(item => {
        return <Item item={item} />;
      })}
    </div>
  );
}
export default Item_List;
