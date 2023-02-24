import { SortableRecord, TableHeadProps } from "@core/types";

const TableHead = <T extends SortableRecord>({
  columns,
  sortConfig,
  requestSort,
}: TableHeadProps<T>): JSX.Element => {
  return (
    <thead>
      <tr>
        {columns.map(({ key, header }) => (
          <th key={key.toString()} onClick={() => requestSort(key)}>
            {header}
            {sortConfig?.key === key &&
              sortConfig !== null &&
              (sortConfig?.direction === "ascending" ? "⬆️" : "⬇️")}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
