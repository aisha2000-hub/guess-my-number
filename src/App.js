import "./App.css";
import {useState} from "react";

function App() {
  const style = { backgroundColor: "green" ,
   borderRadius: "10%",
   margin: "10px",
   padding:"5px",
   color:"white",}
  const [number, setNumber] = useState("");
  const [secretNumber] = useState(Math.floor(Math.random() * 11)) ;
  const [message, setMessage] = useState("Please inter a number!");
  const [counter, setCounter] = useState(0);

  return (
     <div className = "App" >
   <h1>Guess a number from 1 to 10!</h1>

    <input
    value = {number}
    onChange = {(event) => {
        setNumber(event.target.value);
      }}
    />
    <button  style={style}
     onClick = {() => {
        setCounter(counter + 1);
        if (parseInt(number) === secretNumber) {
          setMessage("Right!");
        } else{
           setMessage("Unfortunately it is wrong!");
        }
        if(counter === 10) {
          setMessage("Start over!");
          setCounter(0);
        }
      }} 
      >
    Guess 
    </button> 
     <div>
      <p>Try: {counter}</p>
       </div> <div>
      <p>{message}</p>
     </div>
    </div>
  );
}

export default App;
