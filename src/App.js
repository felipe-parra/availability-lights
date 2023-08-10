import "./styles.css";
import { useState } from "react";

const lights = [
  {
    id: "stop",
    name: "stop",
    className: "light stop"
  },
  {
    id: "warning",
    name: "warning",
    className: "light warning"
  },
  {
    id: "drive",
    name: "drive",
    className: "light drive"
  }
];

export default function App() {
  const [currentLight, setCurrentLight] = useState(0);

  return (
    <main className="App">
      <section id="traffic-lights">
        {lights.map(({ name, className, id }, index) => (
          <article
            key={id}
            id={id}
            name={name}
            className={`${className} ${currentLight === index && "active"}`}
          ></article>
        ))}
        <article
          style={{
            textAlign: "center",
            position: "absolute",
            margin: "auto",
            top: "60%"
          }}
          className="d-block"
        >
          <button
            className="border btn btn-sm btn-danger mx-1"
            onClick={() => setCurrentLight(0)}
          >
            Busy
          </button>
          <button
            className="border btn btn-sm btn-success mx-1 "
            onClick={() => setCurrentLight(2)}
          >
            Available
          </button>
        </article>
      </section>
    </main>
  );
}
