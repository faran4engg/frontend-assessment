import { useMemo, useState } from "react";
import { SortableRecord, SortConfig } from "@core/types";

const useSortableData = <T extends SortableRecord>(
  items: T[],
  defaultSort: SortConfig<T> | null = null
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(
    defaultSort
  );

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];

    if (!!sortConfig && Object.keys(sortConfig).length) {
      sortableItems.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];

        if (valA < valB) return sortConfig.direction === "ascending" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: "ascending" | "descending" = "ascending";

    if (sortConfig?.key === key && sortConfig?.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { sortedData: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
