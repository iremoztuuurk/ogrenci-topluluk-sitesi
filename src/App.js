import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // Login komponentini içe aktarın
import Register from './components/Register'; // Register komponentini içe aktarın
import Community from './components/Community'; // Community komponentini içe aktarın
import Detay from './components/Detay'; // Community komponentini içe aktarın
import Etkinlik from './components/Etkinlik'; // Community komponentini içe aktarın

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/community" element={<Community />} />
                <Route path="/detay" element={<Detay />} />
                <Route path="/etkinlik" element={<Etkinlik />} />
                <Route path="/topluluklar" element={<Community />} />
                <Route path="/topluluk/:toplulukId" element={<Detay />} />
                <Route path="/topluluk/:toplulukId" element={<Detay />} />
                <Route path="/etkinlikler/:toplulukId" element={<Etkinlik />} />
    
   {/* Diğer rotalarınız */}
            </Routes>
        </Router>
    );
}

export default App;
