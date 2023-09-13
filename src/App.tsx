import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

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

  const handleOnSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleOnSelect} />
      <Alert>
        My sample <b>children message</b>
      </Alert>
    </div>
  );
}

export default App;
