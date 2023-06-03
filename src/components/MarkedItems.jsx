import React, { useMemo } from "react";

function MarkedItem({ item, query, onClick }) {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);

    const right = item.title.slice(index + query.length);

    const center = item.title.slice(index, index + query.length);

    return {
      left,
      right,
      center,
    };
  }

  return (
    <button className="py-2.5 px-5 mr-2 mb-2 text-sm  rounded-lg bg-gray-900 hover:bg-slate-100">
      {left}
      <span style={{ fontWeight: 'bolder', backgroundColor: "yellow", opacity: 10}}>{center}</span>
      {right}
    </button>
  );
}

export default MarkedItem;
