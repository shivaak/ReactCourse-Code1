import { useState } from "react";

function ListGroup() {
  var items = ["Salem", "Chennai", "Coimbatore", "Theni", "Ooty", "Kodaikanal"];

  /*
  const handleClick = (event: React.MouseEvent) => {
    console.log(event);
  }; */

  //returns an array
  //[0] --> Variable
  //[1] --> Method to update the variable
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>My List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
