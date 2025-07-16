import { useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Landing from './pages/landing'
import SareesDisplay from './pages/SareesDisplay'
import Footer from './Componets/Footer/Footer';
import Navbar from './Componets/Navbar';
import MainPage from './Componets/product details/MainPage';

import Women from './Navbarpages/Women';
import KurtaSet from './Navbarpages/KurtaSet';
import SalwarKameez from './Navbarpages/SalwarKameez';
import Lehengas from './Navbarpages/Lehengas';
import Mens from './Navbarpages/Mens';
import Kids from './Navbarpages/Kids';
import Jewellery from './Navbarpages/Jewellery';
import Blouses from './Navbarpages/Blouses';
import Dupattas from './Navbarpages/Dupattas';
import Festivals from './Navbarpages/Festivals';
import Home_Living from './Navbarpages/Home_Living';
import Storelocator from './Componets/Storelocator';
import Category from './Navbarpages/Category';
import WeddingGuide from './Componets/WeddingGuide';
import Wholesale from './Componets/Wholesale';
import Affiliate from './Componets/Affiliate';
import Landing from './pages/Landing';
import Addcart from './Componets/Addcart/Addcart';
import Customerstories from './Componets/Testimonial/Customerstories';
import PlaceOrder from './Componets/Addcart/PlaceOrder';
import Verify from './Componets/verify/Verify';
import Myorder from './Componets/verify/Myorder';
import TreckOrder from './Componets/TreckOrder';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Sarees' element={<SareesDisplay />} />
          <Route path='/saree/:id' element={<MainPage />} />

          <Route path='/cart' element={<Addcart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/myorder' element={<Myorder />} />

          <Route path='/Category' element={<Category />} />
          <Route path='/Women_clothing' element={<Women />} />
          <Route path='/KurtaSet' element={<KurtaSet />} />
          <Route path='/SalwarKameez' element={<SalwarKameez />} />
          <Route path='/Lehengas' element={<Lehengas />} />
          <Route path='/Mens' element={<Mens />} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Jewellery' element={<Jewellery />} />
          <Route path='/Blouses' element={<Blouses />} />
          <Route path='/Dupattas' element={<Dupattas />} />
          <Route path='/Festivals' element={<Festivals />} />
          <Route path='/Home_Living' element={<Home_Living />} />

          <Route path='/customerstories' element={<Customerstories category={'customerstories'} />} />



          <Route path='/WeddingGuide' element={<WeddingGuide />} />
          <Route path='/treckorder' element={<TreckOrder />} />
          <Route path='/Wholesale' element={<Wholesale />} />
          <Route path='/Affiliate' element={<Affiliate />} />
          <Route path='/storelocatore' element={<Storelocator />} />

        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
