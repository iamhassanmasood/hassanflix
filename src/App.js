import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VideoScreen from './views/VideoScreen'
import Login from './views/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/video" element ={<VideoScreen/>}/>
        <Route
        path="*"
        element={<Navigate to="/" />}
    />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
