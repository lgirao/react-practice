import './App.css';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import ColorBox from './ColorBox';
import ColorBoxes from './ColorBoxes';

// const data = [
//   {id: 1, item:'eggs', quantity: 12, completed: true},
//   {id: 2, item:'apples', quantity: 2, completed: false},
//   {id: 3, item:'bread', quantity: 1, completed: false},
//   {id: 4, item:'tomatoes', quantity: 5, completed: false}
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

const colors = [
  "#e81416",
  "#ffa500",
  "#faeb36",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d"
]

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

      {/* <Slots val1="$" val2="$" val3="$"/>
      <Slots val1="$" val2="%" val3="#"/> */}

      {/* <ShoppingList items={data}/> */}

      {/* <PropertyList properties={properties} /> */}

      {/* <Form /> */}
      {/* <Clicker message="HIIIII" buttonText="Please click me" />
      <Clicker message="Please stop clicking me!" buttonText="Do not click me" /> */}

      {/* <Counter /> */}

      {/* <Toggler /> */}

      {/* <ColorBox colors={colors} /> */}
      <ColorBoxes colors={colors} />
    </>
  )
}

export default App
