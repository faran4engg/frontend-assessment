export type SortableRecord = Record<string, any>;

export interface SortConfig<T> {
  key: keyof T;
  direction: "ascending" | "descending";
}

export interface TableColumn<T extends SortableRecord, K extends keyof T> {
  key: K;
  header: string;
}

export interface TableProps<T extends SortableRecord> {
  data: T[];
  columns: TableColumn<T, keyof T>[];
  defaultSort?: SortConfig<T>;
}

export interface TableHeadProps<T extends SortableRecord> {
  columns: TableColumn<T, keyof T>[];
  sortConfig: SortConfig<T> | null;
  requestSort: (key: keyof T) => void;
}

export interface TableBodyProps<T extends SortableRecord> {
  columns: TableColumn<T, keyof T>[];
  sortedData: T[];
}
