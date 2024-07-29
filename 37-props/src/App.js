
import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <ClassComponent name="yena"/>
      <hr></hr>
      <FunctionComponent/>
      <FunctionComponent name='yena'/>
      <hr></hr>
      <Button link="https://www.google.com">google</Button>
    </div>
  );
}

export default App;
