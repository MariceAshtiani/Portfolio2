import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

export default function App() {

  return (
    <div>
      <Routes>
        <Route path="/" elemet={<Layout />}>

        </Route>
      </Routes>
    </div>
  )
}

