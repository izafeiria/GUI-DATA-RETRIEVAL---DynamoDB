import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx'
import FirstPage from './components/FirstPage.jsx'
import Footer from './components/Footer'
import Home  from './components/Home.jsx'
import Appliance from './components/Appliance'
import ApplianceCondition from './components/ApplianceCondition'
import HomeAppliance1 from './components/HomeAppliance1'
import HomeAppliance2 from './components/HomeAppliance2'
import Results from './components/Results.jsx'

import './App.css';
import Activities from './components/Activities.jsx'

function App() {
  return (
  <Router>
    <Header/>
      <Routes> 
            <Route path = "/" element = {<FirstPage />}></Route>
            <Route path = "/profiles" element = {<Results/>}></Route>

            <Route path = "/home" element = {<Home/>}></Route>
            <Route path = "/home/attributeResults" element = {<Results/>}></Route>

            <Route path = "/appliance" element = {<Appliance/>}></Route>
            <Route path = "/appliance/existenceResults" element = {<Results/>}></Route>

            <Route path = "/applianceCondition" element = {<ApplianceCondition/>}></Route>
            <Route path = "/applianceCondition/conditionResults" element = {<Results/>}></Route>

            <Route path = "/activities" element = {<Activities/>}></Route>
            <Route path = "/activities/activitiesResults" element = {<Results/>}></Route>

            <Route path = "/homeApplianceExistence" element = {<HomeAppliance1/>}></Route>
            <Route path = "/homeApplianceExistence/Results" element = {<Results/>}></Route>

            <Route path = "/homeApplianceCondition" element = {<HomeAppliance2/>}></Route>
            <Route path = "/homeApplianceCondition/Results" element = {<Results/>}></Route>

      </Routes>
    <Footer/>
  </Router>
    
  );
}

export default App;
