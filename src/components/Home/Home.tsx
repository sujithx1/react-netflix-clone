import { action, Actionmovies, comedy, HorrorMovies, original, RomanticMovies } from "../../urls"
import Banner from "../Banner/Banner"

import NavBar from "../navBar/navBar"
import Rowpost from "../Rowpost/Rowpost"


const Home = () => {
  return (
    <div>
         <NavBar/>
        <Banner/>
      <Rowpost url={original} title="Netflix Orginals"/>
      <Rowpost url={action} title="Action" isSmall/>
      <Rowpost url={comedy} title="Comedy Movies" isSmall/>
      <Rowpost url={HorrorMovies} title="Horror Movies" />
      <Rowpost url={Actionmovies} title="Action Movies" isSmall/>
      <Rowpost url={RomanticMovies} title="Romantic Movies" isSmall/>
      
      
    </div>
  )
}

export default Home
