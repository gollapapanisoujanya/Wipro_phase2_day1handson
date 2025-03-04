import logo from './logo.svg';
import './App.css';

import {Class1,Class2,Class3,Class4} from './Components/Class1';
import {Funs1,Funs2,Funs3,Funs4} from './Components/Funs1';
import Studntf from './Components/Studntf';
import Studentc from './Components/Studentc';
import Display from './Components/Display';
import Buttons from './Components/Buttons';

function App() {
  return (
    <div className="App">
     <Funs1/>
     <Funs2/>
     <Funs3/>
     <Funs4/>
     <Class1/>
     <Class2/>
     <Class3/>
     <Class4/>
     <Studntf name='ramya' address='hyderabad' scores={500}/>
     <Studentc name='ramya' address='hyderabad' scores={500}/>
     <Display name='krish' address='delhi'/>
     <Buttons/>
    </div>
  );
}

export default App;
