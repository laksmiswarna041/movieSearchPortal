import React, {Component, useState} from "react";
import "./App.css";
function App(){
  const [movie,setMovie]=useState('');
  const api_key='388eab343342407586f1192f9dd04348';
  var result={};
  var items=[];
  function handleInputChange(e){
    setMovie(e.target.value);
  }
  function display(e) {
  console.log(e)
  console.log(movie)
  const fetchPromise=fetch(`https://api.themoviedb.org/4/list/1?api_key=${api_key}`,{mode:'cors',headers:{
    'Content-Type':'application/json',
    'authorization':`Bearer <<${api_key}>>`
  }})
  fetchPromise.then(res=>{
    return res.json();
  })//fulfilled api response
  //asynchronous json method
.then(item=>{
 console.log(item.results);
 var n=item.results.length;
 //console.log(item.description)
 
  for(var i=0;i<n;i++){

 // console.log(item.results[i])
  var no=item.results[i].length;
  var name=item.results[i].original_title;
 // console.log(name)
  if(name===`${movie}`){
   console.log("Movie found!")
    result={
     id:item.results[i].id,
     title:name,
     overview:item.results[i].overview,
     releaseDate:item.results[i].release_date,
     popularity:item.results[i].popularity,
     language:item.results[i].original_language,
   }
   console.log(result)
  
 }
} 
})
console.log(result.id)
  document.getElementById('id').innerHTML+=JSON.parse(result.id)
  document.getElementById('title').innerHTML+=result.title;
  document.getElementById('overview').innerHTML+=result.overview;
  document.getElementById('release').innerHTML+=result.releaseDate;
  document.getElementById('pop').innerHTML+=result.popularity;
  document.getElementById('lan').innerHTML+=result.language;

 
  }

  


  return (
    <div>
    <div className="AppHead">
     <div className="header"><b>MOVIE SEARCH PORTAL</b></div></div>
      <input name="movie" id="movie" onChange={handleInputChange} placeholder="Search for a movie..."/>
      <button type="submit" id="search" name="search" onClick={display}>Search</button>
      <br/>
      <div id="res"><b>{movie}</b>
      <table className="table">
        <tr className="tr">
          <td >ID</td>
          <td >Title</td>
          <td >Overview</td>
          <td >Release Date</td>
          <td >Popularity</td>
          <td >Language</td>
        </tr>
        <tr className="tr">
        <td id="id"></td>
        <td id="title"></td>
        <td id="overview"></td>
        <td id="release"></td>
        <td id="pop"></td>
        <td id="lan"></td>
        </tr>
      </table>
     
      </div>
    </div>
  )
}
export default App;