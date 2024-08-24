
import './App.css';
import NAV from './components/NAV'
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Footer from './components/footer';
import SignUps from './components/signUpp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/login';
import AddProduct from './components/AddProduct';
import Productlist  from './components/Productlist';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NAV />
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<Productlist/>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update/:id" element={<UpdateProduct/>}/>
        <Route path="/logout" element={<h1>logout</h1>}/>
        <Route path="/profile" element={<h1>profile component</h1>}/>
        </Route>
        <Route path="/signup" element={<SignUps/>}/>
        <Route path="/login"  element={<Login />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
