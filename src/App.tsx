import { Routes, Route } from 'react-router-dom'
import HomeSV from './pages/HomeSV.tsx'
import HomeEN from './pages/HomeEN.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeSV />} />
      <Route path="/en" element={<HomeEN />} />
    </Routes>
  )
}

export default App