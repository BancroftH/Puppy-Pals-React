import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './newStyles.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  // Stores ID of selected Puppy
  const [featPupId, setFeatPupId] = useState(null);
  // Finds puppy with matching ID
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log(featuredPup);


  console.log("puppyList: ", puppyList);

  return (
    <div className = "App">
      { 
        puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
      { featPupId && (
        <div className='main'>
          <h2>{featuredPup.name}</h2>
          <ul className='list'>
            <li className='listItems'>Age: {featuredPup.age}</li>
            <li className='listItems'>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
