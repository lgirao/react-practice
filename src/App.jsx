import './App.css';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import ColorList from './ColorList';
import Slots from './Slots';

function App() {
  return (
    <>
      {/* <Greeter name="Lesley" from="Ari" />
      <Die numSides={20} />
      <Die /> */}
      {/* <ListPicker values={[1,2,3]}/> */}
      {/* <DoubleDice />
      <DoubleDice /> */}

      {/* <ColorList colors={["red", "teal", "orange", "pink"]} /> */}

      <Slots val1="$" val2="$" val3="$"/>
      <Slots val1="$" val2="%" val3="#"/>
    </>
  )
}

export default App
