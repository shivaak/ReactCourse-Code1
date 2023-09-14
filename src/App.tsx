import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import LiveAlert from "./components/LiveAlert";

function App() {
  let items = [
    "Salem",
    "Chennai",
    "Coimbatore",
    "Theni",
    "Ooty",
    "Kodaikanal",
    "Kanyakumari",
  ];

  const [visible, setVisible] = useState(false);

  const handleOnSelect = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    console.log("Button Clicked");
  };

  const handleCloseClick = () => {
    console.log("Button Clicked");
    setVisible(false);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelect} />
      <Alert>
        My sample <b>children message</b>
      </Alert>
      <Button color="primary" text="Ok" onClick={handleButtonClick} />
      <Button
        color="danger"
        text="Show Alert"
        onClick={() => setVisible(true)}
      />

      {visible && <LiveAlert onCloseClick={handleCloseClick} />}
    </div>
  );
}

export default App;
