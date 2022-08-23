import { Routes , Route } from "react-router-dom"
import Index from "./pages"


export default function Router(){
  return(
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
  )
}