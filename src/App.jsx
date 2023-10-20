import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Pages/Home";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import ProjectPage from "./Pages/Projects";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects" element={<ProjectPage />} />

        </Route>
      </Routes>
  )
}

