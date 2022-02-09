import { useState, useEffect } from "react"

function StarshipPage(){
    const [ StarshipPage, setStarshipPage ] = useState([])
    let URL = "https://www.swapi.tech/api/starships/ +:id "
    
    useEffect(() => {
        fetch(URL) 
  
  .then((res) => res.json())
  
  .then((json) => {
      StarshipPage(json)
    
  })
  
  .catch(console.error)

    }, []);
    return(
        <div>
            This is the Starship Page!
        </div>
    )
}

export default StarshipPage