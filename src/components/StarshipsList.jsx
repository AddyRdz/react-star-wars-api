import { useState, useEffect } from "react"

function StarshipsList(){
    const [ Starships, setStarships ] = useState ([])
    console.log("component is rendering")


    let URL ="https://www.swapi.tech/api/starships/"
    useEffect(() => {
        fetch(URL) 
  
  .then((res) => res.json())
  
  .then((json) => {
      setStarships(json.results)
   console.log(json.results)
  })
  
  .catch(console.error)
    }, []);
    return(
        
        <div>
           
            This is the StarshipsList Page!
        </div>
    )
}

export default StarshipsList