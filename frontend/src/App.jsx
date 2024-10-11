import Footer from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { Favorites } from "./pages/Favorites"
import {Home} from "./pages/Home"
import { AllRoutes } from "./routes/AllRoutes"
function App() {
 
  return (
    <>
    
     <Navbar/>
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App
