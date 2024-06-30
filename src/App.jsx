import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Addusers from './pages/Addusers'
import Addposts from './pages/Addposts'
import AddCategory from './pages/AddCategory'
import Profile from './pages/Profile';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/addusers" element={<Addusers />} />
                    <Route path="/addposts" element={<Addposts />} />
                    <Route path="/addCategory" element={<AddCategory />} />
                </Route>
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default App
