import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { CountryPage } from './Pages/CountryPage/CountryPage';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
