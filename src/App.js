import './App.css';
import Showtable from './component/show_table';
import { useEffect, useState } from'react';

function App() {

  const [data, setData] = useState([]);
  

  const handleSave = (event) => {

    var email = document.getElementById("email").value;
    var password =document.getElementById("password").value;
    const dataTuples = {email: email, password: password};
    const filterData=data.filter((indivdual)=>indivdual.email ===  email)

    if(filterData.length==0){
      setData((data) => [...data, dataTuples])
    }else{
      alert("email already exists ")
    }
    console.log(data);
  }

  useEffect(()=>{
    console.log("useEffect() called");
    <Showtable data={data}/>
  }
  ,[data])

  return (
<div className="" >
  <div className='d-flex'>
  <div className="mb-3 w-25 m-auto">
    <label  className="form-label">Email address</label>
    <input type="email" id="email" className="form-control" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3 w-25 m-auto">
    <label className="form-label">Password</label>
    <input  id="password" type="password" className="form-control"  />
  </div>
    <div className="mb-3 w-25 m-auto">
    <button className="m-atto btn btn-primary"  onClick={handleSave} type="submit">save</button>
    </div>
    </div>
    <Showtable data={data} setData={setData}/>

 </div>

)
}
export default App;
