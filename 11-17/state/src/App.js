import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [counter, setCounter] = useState(0)
  let [holaCounter, setHolaCounter] = useState(0)

  let [list, setList] = useState([
    'ana', 'darys', 'brandon', 'alex', 'michael'
  ])


  const sayHello = () => {
    counter++
    setCounter(counter)
  }


  const sayHola = () => {
    holaCounter++;
    setHolaCounter(holaCounter)
  }


  const showList = () => {

    // let listItems = []
    // for (let name of list) {
    //   listItems.push(<li key={name}>{name}</li>)
    // }
    // return listItems

    return list.map((name, index) => {
      return (
        <li key={index}>{name} !!!
          <button onClick={(event) => removePerson(index)}>X</button>
        </li >
      )
    })
  }


  const removePerson = (index) => {

    let copyOfList = [...list]
    copyOfList.splice(index, 1)
    setList(copyOfList)
  }


  return (
    <div className="App">
      <h1 style={{ color: "#" + ((1 << 24) * Math.random() | 0).toString(16) }}>Welcome to State {Math.random()}</h1>
      <h2>I've said hello {counter} times</h2>
      <h2>I've said hola {holaCounter} times</h2>
      <button onClick={sayHello}>Click</button>
      <button onClick={sayHola}>Cleek</button>

      <ul>
        {showList()}
        {/* <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li>
        <li>{list[3]}</li> */}
      </ul>

    </div>
  );



}





export default App;
