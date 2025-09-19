import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Mission from './pages/Mission'
import CSR from './pages/Csr'
import ApplicationIntegration from './pages/ApplicationIntegration'
import ApplicationDevelopment from './pages/ApplicationDevelopment'
import DataMigration from './pages/Datamigration'
import Devops from './pages/Devops'
import ImplementationServices from './pages/ImplementationServices'
import PostImplementation from './pages/PostImplementation'
import TroubleShooting from './pages/TroubleShooting'
import TechnicalSupport from './pages/TechnicalSupport'
import Dynamicwebsite from './pages/Dynamicwebsite'
import MobileOptimized from './pages/MobileOptimized'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import ResponsiveWebDesign from './pages/ResposiveWebDesign'
import Snowflake from './pages/Snowflake'
import MobileApplications from './pages/MobileApplication'
import WebsiteHosting from './pages/WebsiteHosting'
import Medi2AIProductPage from './pages/Medi2AIProductPage'
import TeaTimeTelugu from './pages/TeaTimeTelugu'
import CloudNestPMS from './pages/CloudNextPMS'
import ContactUS from './pages/Contact'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/csr" element={<CSR />} />
      <Route path="/application-integration" element={<ApplicationIntegration />} />
      <Route path="/application-development" element={<ApplicationDevelopment />} />
      <Route path="/data-migration" element={<DataMigration />} />
      <Route path="/devops-cloud" element={<Devops />} />
      <Route path="/snow-flake" element={<Snowflake />} />
      <Route path="/implementation-services" element={<ImplementationServices />} />
      <Route path="/post-implementation" element={<PostImplementation />} />
      <Route path="/trouble-shooting" element={<TroubleShooting />} />
      <Route path="/technical-support" element={<TechnicalSupport />} />
      <Route path="/dynamic-website" element={<Dynamicwebsite />} />
      <Route path="/mobile-optimized" element={<MobileOptimized />} />
      <Route path="/responsive-web-design" element={<ResponsiveWebDesign />} />
      <Route path="/mobile-applications" element={<MobileApplications />} />
      <Route path="/website-development-hosting" element={<WebsiteHosting />} />
      <Route path="/medi2Ai" element={<Medi2AIProductPage />} />
      <Route path="/tea-time-telugu" element={<TeaTimeTelugu />} />
      <Route path="/cloud-next-pms"  element={<CloudNestPMS />} />
      <Route path="/contact-us" element={<ContactUS />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App