import React, { useMemo, useState, useEffect } from "react";
import MarkedItem from "./MarkedItems";

export default function Results({
  items,
  onItemSelected,
  query,
  onResultCalculated,
}) {
  const [results, setResults] = useState([]);

  const filteredItems = useMemo(() => findMatch(items, query), [items, query]);
  useEffect(() => {
    onResultCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });
    setResults(res);
    return res;
  }

  return (
    <div>
      {query !== "" &&
        filteredItems.map((item, index) => (
          <MarkedItem key={index} item={item} query={query} onClick={onItemSelected} />
        ))}
    </div>
  );
}  