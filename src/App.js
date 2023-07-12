import { useState } from "react";

function App() {

const [details,setdetails]=useState({
name:"",rollno:""

});

function update_details(event)
{
  const {name,value}=event.target;

  setdetails((prevdata)=>{
    return {...prevdata,[name]:value};
  });
  // console.log(details);
}

function showdetails(event)
{event.preventDefault();
  console.log(details);

}
  return (
    <div className="App">

    <form onSubmit={showdetails}>
    
    <label htmlFor="name">Name</label>
    <input type="text"  placeholder='Name' id="name" name="name" value={details.name} onChange={update_details}></input>
    <label htmlFor="rollno">rollno</label>
    <input type="number"  placeholder='rollno' id="rollno" name="rollno" value={details.rollno} onChange={update_details}></input>
    <button>submit</button>
     </form>
    </div>
  );
}

export default App;
