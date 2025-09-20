import { Route, Routes } from "react-router"
import { routes } from "./routes/route"


function App() {
  return(
    <Routes>
      {routes.map((eachRoute)=>(
        <Route key={eachRoute.id} path={eachRoute.path} element={eachRoute.element} index={eachRoute.path === '/' && true}/>
      ))}
    </Routes>
  )
}

export default App
