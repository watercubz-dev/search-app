import { useState } from "react";
import { calendar, people, email } from "./components/List.js";
import SearchBar from "./components/searchBar";

function App() {
  const [data, setData] = useState([...people, ...calendar, ...email]);
  const [selection, setSelection] = useState(null);
  const [currentOptions, setCurrentOptions] = useState("all");

  function handleClick(e) {
    const opt = e.target.name;

    switch (opt) {
      case "all":
        setData([...people, ...calendar, ...email]);
        setCurrentOptions("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOptions("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOptions("calendar");
        break;
      case "email":
        setData([...email]);
        setCurrentOptions("email");
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="text-center bg-gray-700">
        <button
          onClick={handleClick}
          name="all"
          className="py-2.5 px-5 mr-2 mb-2 m-4 text-sm font-medium rounded-lg bg-white  hover:bg-gray-600"
        >
          ver todo
        </button>
        <button
          onClick={handleClick}
          name="email"
          className="py-2.5 px-5 mr-2 mb-2 text-sm rounded-l font-medium bg-white  hover:bg-gray-600"
        >
          Correo
        </button>
        <button
          onClick={handleClick}
          name="calendar"
          className="py-2.5 px-5 mr-2 mb-2 text-sm rounded-lg bg-white font-medium  hover:bg-gray-600"
        >
          Fechas
        </button>
        <button
          onClick={handleClick}
          name="people"
          className="py-2.5 px-5 mr-2 mb-2 text-sm rounded-lg bg-white font-medium hover:bg-gray-600"
        >
          Personas
        </button>

        <SearchBar items={data} onItemSelect={() => {}} />
      </div>

      <div className="text-center mt-4">
        <h1>Bienvenido al buscador...</h1>
      </div>
      <div className="text-center mt-20">
        <h2 className="font-semibold font-sans">
          filtraremos los objetos, Personas, correos, o fechas disponibles....
        </h2>
      </div>
    </>
  );
}

export default App;
