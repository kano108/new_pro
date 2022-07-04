import "./App.css";
import { useState } from "react";

function App() {
 const [input , setInput] = useState()

const addItem =(e)=>{
  e.preventDefault();
  console.log("Kishan Patel ");
}

  return (
    <div className="App">
      <h1>Pagination Page</h1>
      <h2>Kishan Patel </h2>

      <label>Name</label>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <br/>
      <label></label>
      <input type="text" />
      <br/>
      <input type="text" />
      <br/>
      <button type="button" onClick={(e)=>addItem(e)}>Submit</button>
      {/* <label>1</label>
      <label>2</label>
      <label>3</label>
      <label>4</label> */}
    </div>
  );
}

export default App;
