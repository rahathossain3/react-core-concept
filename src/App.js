import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = { name: 'Dr. Mahafujul', job: 'singer' };
const singer2 = { name: 'Eva Rahman', job: 'singer2' };

// css style 
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}


function App() {
  return (
    <div className="App">
      <Person name="Ruble" nayika="moushumi"></Person>
      <Person name="BappaRaz" nayika="Cheka"></Person>
      <Person name="Kuber" nayika="Kopila"></Person>
      <h5> New component. YAY </h5>
      <p>rock mama React mama</p>
      <Friend movie="Singam" phone="0177777"></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props)
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}
function Friend(props) {
  // console.log(props);
  return (
    <div className="friend">
      <h3>Name : {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
