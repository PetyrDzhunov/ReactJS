import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';

import DemoPage from './components/Demo';
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
function App() {

  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_CUSTOM_ENV_VARIABLE);

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories/:category" element={<Categories />} />
        <Route path="/pets/details/:petId" element={<PetDetails />} />
        <Route path="/pets/details/:petId/edit" element={<EditPetDetails />} />
        <Route path="/pets/create" element={<CreatePet />} />
        <Route path="/pets/:petId/edit" element={<EditPet />} />
        <Route path='/demo' element={<DemoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
