import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePage from './pages/HomePage';



export default function App() {
  return (
<Router>
<Routes>
  <Route path="/" element={<HomePage />} />
</Routes>

<h1 className="text-3xl font-bold underline">
      Body
    </h1>
</Router>
  )
}