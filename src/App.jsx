
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <div className='w-[70%] mx-auto my-12 '>
      <h1 className='text-3xl text-center font-semibold'>{coffees.length} generation hot and cold COFFEE waiting For You</h1>
      <div className='gird grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
      
    </div>
  )
}

export default App
