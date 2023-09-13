import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
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
      <h1>{props.heading}</h1>
      {props.items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              handleClick(index);
              props.onSelectItem(item);
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
