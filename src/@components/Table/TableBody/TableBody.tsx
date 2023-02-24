import { SortableRecord, TableBodyProps } from "@core/types";

const TableBody = <T extends SortableRecord>({
  sortedData,
  columns,
}: TableBodyProps<T>) => {
  return (
    <tbody>
      {sortedData.map((row) => (
        <tr key={Object.values(row).join("")}>
          {columns.map(({ key }) => (
            <td key={key.toString()}>{row[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
