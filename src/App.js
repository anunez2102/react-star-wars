import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        STAR WARS STARSHIPS
      </header>

      Hello World
    </div>
  );
}

export default App;


//Research documentation of SWAPI to find the endpoint for the starships resource.

//Create a services/sw-api.js service module and ensure that all API/fetch calls are made from this module.

//Use named exports to expose AJAX functionality as needed, e.g., export function getAllStarships() {...}to obtain all starships.

//Obtain all of the starships from the API and render in <App> a card for each starship.

//Cards should contain the text of the starship's name.

//Hold the starship objects in state with the useState hook, don't forget to initialize to an empty array!

//Use the useEffect hook to make the AJAX request once the app loads.

//Once the starship data comes from the API, be sure to update state with the setter function.

//Create and import a StarShipCard component into App.js.

// .map() over each starship object in state to transform them into a <StarshipCard /> component

//CORS issue? Try changing your /starships endpoint to /starships/ 👈 trust us on that one 😎.

//bonus
//Display additional details for each Starship in it's respectable card.

//This API has a pagination feature that allows you to get additional starships to display - find out how to use this to your advantage and allow users to get more starships at the click of a button