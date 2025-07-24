import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Landing from './pages/landing'
import SareesDisplay from './pages/SareesDisplay'
import Footer from './Componets/Footer/Footer';
import Navbar from './Componets/Navbar';

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

import Addcart from './Componets/Addcart/Addcart';
import Customerstories from './Componets/Testimonial/Customerstories';
import PlaceOrder from './Componets/Addcart/PlaceOrder';
import Verify from './Componets/verify/Verify';
import Myorder from './Componets/verify/Myorder';
import Layout from './Componets/TreckOrder/Layout';
import Profile from './Componets/TreckOrder/Profile';
import Orders from './Componets/TreckOrder/Orders';
import Wishlist from './Componets/TreckOrder/Wishlist';
import Credits from './Componets/TreckOrder/Credits';
import Vouchers from './Componets/TreckOrder/Vouchers';
import Address from './Componets/TreckOrder/Address';
import Contact from './Componets/TreckOrder/Contact';
import Landing from './pages/landing';
import Privacypolicy from './Componets/Footer/Privacypolicy';
import Terms from './Componets/Footer/Terms';
import Return from './Componets/Footer/Return';
import FAQ from './Componets/Footer/FAQ';
import Status from './Componets/Footer/Status';
import ForgotPassword from './Componets/Login/ForgotPassword';
import VerifyEmail from './Componets/Login/VerifyEmail';
import Productdetails from './Componets/product details/Productdetails';
import WishList from './Componets/Addcart/WishList';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Reviews from './Componets/product details/Reviews';
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Sarees' element={<SareesDisplay />} />
          <Route path='/saree/:id' element={<Productdetails />} />
          <Route path='/Reviews' element={<Reviews />} />

          <Route path='/cart' element={<Addcart />} />
          <Route path='/WishList' element={<WishList />} />

          <Route path='/placeorder' element={<PlaceOrder />} />
          {/* <Route path='/verify' element={<Verify />} /> */}
          <Route path='/myorder' element={<Myorder />} />
          {/* <Route path="/forgotpass" element={<ForgotPassword />} /> */}
          <Route path="/verifyemail" element={<VerifyEmail />} />
          <Route path='/Category' element={<Category />} />
          <Route path='/Women_clothing' element={<Women />} />
          <Route path='/KurtaSet' element={<KurtaSet />} />
          <Route path='/SalwarKameez' element={<SalwarKameez />} />
          <Route path='/Shirts' element={<Lehengas />} />
          <Route path='/Mens' element={<Mens />} />
          <Route path='/Kids' element={<Kids />} />
          <Route path='/Jewellery' element={<Jewellery />} />
          <Route path='/Blouses' element={<Blouses />} />
          <Route path='/Dupattas' element={<Dupattas />} />
          <Route path='/Festivals' element={<Festivals />} />
          <Route path='/Home_Living' element={<Home_Living />} />

          <Route path='/customerstories' element={<Customerstories category={'customerstories'} />} />

          <Route path='/WeddingGuide' element={<WeddingGuide />} />
          <Route path="/treckorder" element={<Layout />}>
            <Route path='/treckorder/profile' element={<Profile />} />
            <Route path='/treckorder/orders' element={<Orders />} />
            <Route path='/treckorder/wishlist' element={<Wishlist />} />
            <Route path='/treckorder/credits' element={<Credits />} />
            <Route path='/treckorder/vouchers' element={<Vouchers />} />
            <Route path='/treckorder/addresses' element={<Address />} />
            <Route path='/treckorder/contactus' element={<Contact />} />
            {/* <Route path='/treckorder/logout' element={<Profile />} /> */}
          </Route>
          <Route path='/Wholesale' element={<Wholesale />} />
          <Route path='/Affiliate' element={<Affiliate />} />
          <Route path='/storelocatore' element={<Storelocator />} />

          <Route path='/privacyPolicy' element={<Privacypolicy />} />
          <Route path='/T&C' element={<Terms />} />
          <Route path='/Returnandexchange' element={<Return />} />
          <Route path='/FAQs' element={<FAQ />} />
          <Route path='/status' element={<Status />} />


        </Routes>
        <Footer />
      </BrowserRouter>



    </>
  )
}

export default App
