import logo from './logo.svg';
import './App.css';
import AddNums from './AddNum'

function App() {
  let num = Math.random() * 1000
  let animal = 'cow'
  return (
    <>
      <div className="header">
        Welcome to React.... Is only being called once


        {/* {AddNums(num)} */}

        {/*Component*/}

        <AddNums randomNum={num} ourAnimal={animal} />
        <AddNums randomNum={num} ourAnimal={animal} />
        <AddNums randomNum={num} ourAnimal={animal} />
      </div>
    </>
  );
}







export default App;


