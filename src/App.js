import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  { name: 'Dr. Mahafujul', job: 'singer' },
  { name: 'Eva Rahman', job: 'singer2' },
  { name: 'Agun', job: 'Sopno' },
  { name: 'shuvro', job: 'Pathor' },
]

// css style 
const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}


function App() {

  const nayoks = ['Rubel', 'BappaDa', 'kubal', 'josim', 'Salman shah', 'riyaz', 'razzak', 'Anwar'];
  return (
    <div className="App">
      {/* -------------- dynamic array er data load kora---------- */}
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)

      }
      {/*-------------------- dynamic name with custom tag */}
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}


      {/*------------ Array er modde object er data dynamic load kora  */}

      {
        singers.map(singer => <Person name={singer.name} ></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="Cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}

      <h5> New component. YAY </h5>
      <p>rock mama React mama</p>
      <Friend movie="Singam" phone="0177777"></Friend>
      <Friend phone="01999"></Friend>
    </div >
  );
}

function Person(props) {
  // console.log(props)
  return (
    <div className="person">
      <h1>{props.name}</h1>
      {/* <p>Nayika: {props.nayika}</p> */}
      <p>{props.nayika}</p>
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
