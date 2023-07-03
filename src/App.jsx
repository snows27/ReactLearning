import './App.css'
import Navbar from './components/Navbar'
import TravelList from './components/TravelList'
import data from './data'
function App() {
const list = data.map(items => {
  return (
    <TravelList 
      key={items.id}
      {...items}
    />
  )
})

  return (
    <>
      <Navbar />
      {list}
    </>
  )
}

export default App
