import './App.css';
import StarshipPage from './components/StarshipPage'; 
import StarshipsList from './components/StarshipsList';


function App() {
  return (
    <div className="App">
      
      {/* <Routes> */}
        <StarshipPage/>
        <StarshipsList/>
      {/* </Routes> */}
      
      
    </div>
  );
}

export default App;
