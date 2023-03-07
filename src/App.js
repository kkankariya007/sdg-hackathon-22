import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';

import Park1 from './Park1';
import Park2 from './Park2';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

// import {useHistory} from "react-router-dom";



function App() {

  const [selectedFile,setSelectedFile]=useState(null);
  const [data,setData]=useState(0);
  
  const fileChangeHandler=(e)=>{
  setSelectedFile(e.target.files[0]);
  console.log(e.target.files[0]);
  }

  const handleSubmit=(e)=>{
    //eslint-disable-next-line
    const formData=new FormData();
    formData.append(
      "file",
      selectedFile,
      selectedFile.name
    );


    const requestOptions={
      method: 'POST',
      body: formData
    };

    fetch("http://127.0.0.1:8000/upload", requestOptions)
    .then(response=>response.json()
    .then(function(response){
      console.log(response)
    })
    )
  }


  const handleImage= async()=>{
    try{
      console.log("Say hi")
      const response=await axios.get("http://localhost:8000/upload2");
      console.log(response.data)
      setData(response.data)
    }
    catch(e){console.log(e);}
    finally{}
  };
  useEffect(()=>{
    handleImage();
    setData((data) => data + 1);
  },[]);

  // const history=useHistory();
  // function park()
  
  

  return (
    <div className="App">
      <h1>Car Parking System</h1>
      <form>
        <fieldset>
          <input onChange={fileChangeHandler} name="image"  type="file"  accept='.jpeg,.png,.jpg' ></input>
        </fieldset>
        <button onClick={handleSubmit}>Upload</button><br></br>
        <button style={{backgroundColor:"rgba(0,0,0,0)", height:"50px", border: "1px solid white", width:"50px"}} onClick={handleImage}></button>.
        
        {/* <button style={{backgroundColor:"rgba(0,0,0,0)", height:"30px", border: "1px solid black", width:"70px"}} onClick={}>Allot</button> */}
        
        {/* <button style={{backgroundColor:"rgba(0,0,0,0)", height:"50px", border: "1px solid white", width:"50px"}} onClick={handleImage}>Dpere</button> */}
          
        {/* <button onClick={}>Allot</button> */}
        </form>
        <div>   
          {data?.message??null}
        </div>
        <BrowserRouter>
          <Routes>
            <Route exact path='cars' element={<Park1/>}/>
            <Route exact path='bikes' element={<Park2/>}/>
          </Routes>
        </BrowserRouter>
        
    </div>
    
  );
}

export default App;
