import React ,{ useState } from "react";
import "./styles.css";

var likeCounter = 0;

export default function App() {

 const  [likeCounter ,  setLikeCounter] = useState(0);

  function likeClickHandler(){
  var newlikeCounter = likeCounter + 1;
  setLikeCounter(newlikeCounter);
  //console.log("clicked!", likeCounter);
  }
  //console.log("likeCounter",likeCounter);

  return (
    <div className="App">
       <h1 > INSIDE OUTTT</h1>
      <button onClick={likeClickHandler}>Like Me </button>{likeCounter}
    </div>
  );
}
