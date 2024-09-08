import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Sabrosa", "Deliciosa", "Jugosa"];
  return (
    <Card>
      <CardBody title="Desde el interior de Card" text="Si, yo peshito loco" />
      <List data={list} />
    </Card>
  );
}

export default App;
