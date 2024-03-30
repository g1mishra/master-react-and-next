import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Pokemon from "./components/Pokemon";
import { Link } from "react-router-dom";
import Modal from "./components/Modal";
import withLogger from "./components/WithLoggerHOC";
import useIsMobile from "./hooks/useIsMobile";

const MyHeader = withLogger(Header);

const App = () => {
  const [color, setColor] = useState("red");
  const [open, setOpen] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    // console.log("App component mounted");
    const input = document.querySelector("input");
    input.addEventListener("input", (e) => {
      setColor(e.target.value);
    });

    return () => {
      input.removeEventListener("input", (e) => {
        setColor(e.target.value);
      });
    };
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div>
      {isMobile ? <MyHeader hi="hello" /> : null}
      <MouseTracker
        render={({ x, y }) => {
          return <Profile x={x} y={y} />;
        }}
      />
      <button onClick={() => setOpen(true)}>Show Modal</button>
      <Modal open={open} close={closeModal}>
        <Modal.Header>
          <h1>Modal Header</h1>
        </Modal.Header>
        <Modal.Body>
          <p>Modal Body</p>
        </Modal.Body>
        <Modal.Footer>
          <button>Save</button>
          <button>Cancel</button>
        </Modal.Footer>
      </Modal>
      <input
        type="text"
        value={color}
        // onChange={(e) => setColor(e.target.value)}
      />

      <h1
        style={{
          color: color,
        }}
      >
        Hello world
      </h1>
      <Link to="/pokemon">Pokemon</Link>
    </div>
  );
};

export default App;

const MouseTracker = ({ render }) => {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursor({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return <div onMouseMove={handleMouseMove}>{render(cursor)}</div>;
};
