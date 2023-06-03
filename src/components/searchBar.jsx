import { useState } from "react";
import Results from "./results";

export default function SearchBar({ items, onItemSelect }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
  }
  
  function handleResults(items) {
    setResult(items);
  }

 function handleItmeSelected() {

 }
  return (
    <>
    {result && <div className="text-white">{result.length} <span className="font-serif font-semibol text-white">results</span></div>}
      <input type="text" value={query} onChange={handleChange} className="bg-gray-300 m-3 rounded-sm outline-none" placeholder="Search..." />
      <Results
        items={items}
        onItemSelected={handleItmeSelected}
        query={query}
        onResultCalculated={handleResults}
      />
    </>
  );
}
