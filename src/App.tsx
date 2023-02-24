import { Table } from "@components";
import countries from "@data/countries";

const App = () => {
  const columns = (
    Object.keys(countries[0]) as Array<keyof typeof countries[0]>
  ).map((col) => ({
    key: col,
    header: col.toUpperCase(),
  }));

  return <Table data={countries} columns={columns} />;
};

export default App;
