
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Greeting/>
         <Details
        access="✔"
        img="https://thumbs.dreamstime.com/b/cute-boy-face-cartoon-cute-boy-face-cartoon-vector-illustration-graphic-design-110654225.jpg"
        name="sanjay"
        batch="B43WD"
      />

      <Details
        access="❌"
        img="https://iheartcraftythings.com/wp-content/uploads/2021/04/How-to-Draw-Cartoon-Face-%E2%80%93-Featured-Image.jpg"
        name="abishek"
        batch="B42WD"
      />

      <Details
        access="✔"
        img="https://easydrawingguides.com/wp-content/uploads/2019/08/how-to-draw-an-anime-boy-face-featured-image-1200.png"
        name="hariharan"
        batch="B41WD"
      />
    </div>
  );
}

export default App;

function Details(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <h2>
        <span>{props.access}</span>
        {props.name}
      </h2>
      <p>{props.batch}</p>
    </div>
  );
}

function Greeting(){
  return (
    <div>
      <h2 className='name'>Hello Guvi</h2>
    </div>
  )
  // return React.createElement("div", {id :"div-name", className:"div-class"}, 
  // React.createElement("h2", {className: "name"}, "Hello Guvi"))
}