import React,{useState,useEffect} from 'react';
import './App.css';


function App() {

  const [text,setText]=useState('')
  const [container,setContainer]=useState([])

  useEffect(()=>{
    // console.log("Hi");
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'a559ec0f00mshdca23a1ff8f2c7ep178543jsn751f64ee02ad',
        'X-RapidAPI-Host': 'typewise-ai.p.rapidapi.com'
      },
      body: `{"query":"${text}","language":"en"}`
    };
    
    fetch('https://typewise-ai.p.rapidapi.com/emoji/search', options)
    .then(response => {
      return response.json()})
    .then(data=>{
      // console.log(data);
      setContainer(data)
    })
    .catch(err => console.error(err));
  },[text])



   

  


  return (
    <>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}   />
<div>

    <h1>{container.predictions}</h1>

      </div>
      </>
  )
    }


export default App;
