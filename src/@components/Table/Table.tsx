import { SortableRecord, TableProps } from "@core/types";
import useSortableData from "@hooks/useSortableData";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = <T extends SortableRecord>({
  data,
  columns,
  defaultSort,
}: TableProps<T>): JSX.Element => {
  const { sortedData, sortConfig, requestSort } = useSortableData<T>(
    data,
    defaultSort
  );

  return (
    <table border={1} cellPadding={6} cellSpacing={0}>
      <TableHead
        columns={columns}
        sortConfig={sortConfig}
        requestSort={requestSort}
      />
      <TableBody sortedData={sortedData} columns={columns} />
    </table>
  );
};

export default Table;
