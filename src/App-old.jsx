// import { Fragment } from "react";
import { Fragment } from "react";
// import "./App.css"; // import css file
import styles from "./App.module.css"; // import css module
import { useState, useEffect } from "react";
// import Button, { Button2 } from "./components/Button";
// // import  { Button } from "./components/Button";

// function App() {
//   return (
//     <>
//       <Header />
//       <MainPage />
//       <Footer />
//     </>
//   );
// }

// export default App;

// function Header() {
//   return (
//     <Fragment>
//       <h1>Header</h1>
//       <Button> Log In </Button>
//     </Fragment>
//   );
// }

// function Footer() {
//   return <h1>Footer</h1>;
// }

// function MainPage() {
//   const myH1 = <h1 className="hi"> hello {2 + 2}</h1>;
//   const arr = [1, 2, 3, 4, 5];
//   function greetings() {
//    alert("Hello")
//   }
//   return (
//     <Fragment>
//       {myH1}
//       {arr.map((elm) => (
//         <Button2
//           key={elm}
//           clickKrnePar={greetings}
//           btnText={` Button - ${elm}`}
//           disable={elm % 2 === 0}
//           // greet={greetings}
//         />
//       ))}
//     </Fragment>
//   );
// }

// const App = () => {
//   // number, string, boolean, object, array, null, undefined
//   const [user, setUser] = useState({
//     username: "",
//     password: "",
//     remember: false,
//     gender: "",
//   });
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     // console.log(e.target.name, e.target.value);
//     const { name, value, type, checked } = e.target;
//     // {username: "jeevan"}
//     // {password: "123"}

//     // if (type === "checkbox") {
//     //   setUser({ ...user, [name]: checked });
//     //   return;
//     // }

//     setUser({ ...user, [name]: type === "checkbox" ? checked : value });
//     setError(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user.length < 3) {
//       setError("Username is too short");
//       return;
//     }
//     console.log(user);
//     setUser({
//       username: "",
//       password: "",
//       remember: false,
//       gender: "",
//     });
//   };
//   return (
//     <div>
//       {/* <Header user={user} setUser={setUser} /> */}
//       <form onSubmit={handleSubmit}>
//         {error && (
//           <p
//             style={{
//               color: "red",
//             }}
//           >
//             {error}
//           </p>
//         )}
//         Username:
//         <input
//           type="text"
//           name="username"
//           value={user.username}
//           onChange={handleChange}
//         />
//         <br />
//         Password:{" "}
//         <input
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={user.password}
//         />
//         <br />
//         <input
//           type="checkbox"
//           name="remember"
//           onChange={handleChange}
//           checked={user.remember}
//         />
//         <br />
//         Gender :{" "}
//         <select name="gender" id="" onChange={handleChange} value={user.gender}>
//           <option value="">Select</option>
//           <option value="male">M</option>
//           <option value="female">F</option>
//         </select>
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (shouldFetch) {
      fetch("https://pokeapi.co/api/v2/pokemon", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setPokemon(data.results);
        })
        .finally(() => {
          setShouldFetch(false);
        });
    }
  }, [shouldFetch]);

  return (
    <div>
      <h1>Pokemon</h1>
      <button onClick={() => setShouldFetch(true)}>fetch the data</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {pokemon.map((pok, index) => (
          <p key={index}>{pok.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;

// const Child = ({ setCounter }) => {
//   return (
//     <div>
//       {/* <p> Coutner : {counter}</p> */}
//       <button
//         onClick={() => {
//           setCounter((prev) => prev + 2);
//         }}
//       >
//         {" "}
//         + 2
//       </button>
//     </div>
//   );
// };

// function Header(props) {
//   const { user, setUser } = props;

//   function logout(e) {
//     // console.log(e.target);
//     setUser(null);
//   }

//   // if (user) {
//   //   return <button onClick={() => setUser(null)}>Logout</button>;
//   // }
//   // return <button onClick={() => setUser("jeevan")}>Login</button>;

//   const btnStyle = {
//     color: "red",
//     backgroundColor: "black",
//   };

//   return (
//     <Fragment>
//       {user ? (
//         <button className={styles.button} style={btnStyle} onClick={logout}>
//           Logout
//         </button>
//       ) : (
//         <button className={styles.button} style={btnStyle} onClick={() => setUser("jeevan")}>
//           Login
//         </button>
//       )}
//     </Fragment>
//   );
// }
