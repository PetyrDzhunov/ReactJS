import './App.css';
import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import EditPet from './components/EditPet/EditPet';
import AdvancedTechniques from './components/AdvancedTechniques/AdvancedTechniques';

import { auth } from './utils/firebase';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const [user, setUser] = useState(null);
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_CUSTOM_ENV_VARIABLE);
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null);
      }
    });
  }, [])

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email
  };
  return (
    <div className="container">
      <Header {...authInfo} />
      <h1>{user?.email}</h1>

      <Routes>
        <Route path="/" element={<Categories  {...authInfo} />} />
        <Route path="/categories/:category" element={<Categories {...authInfo} />} />
        <Route path="/pets/details/:petId" element={<PetDetails  {...authInfo} />} />
        <Route path="/pets/details/:petId/edit" element={<EditPetDetails {...authInfo} />} />
        <Route path="/pets/create" element={<CreatePet {...authInfo} />} />
        <Route path="/pets/:petId/edit" element={<EditPet {...authInfo} />} />
        <Route path='/login' element={<Login {...authInfo} />} />
        <Route path='/register' element={<Register {...authInfo} />} />
        <Route path="/advanced-techniques" element={<AdvancedTechniques />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
