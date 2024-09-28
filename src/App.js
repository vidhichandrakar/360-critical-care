import logo from './logo.svg';
import './App.css';
import MainComponent from './Component/MainComponent/MainComponent';
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Component/Aboutus/Aboutus';
import Terms from './Component/Terms&Condition/Terms';
import ContactUs from './Component/Service/ContactUs';
import PrivacyPolicy from './Component/Service/PrivacyPolicy';
import TopCourse from './Component/AllCourse/TopCourse';
import EDIC from './Component/AllCourse/EDIC';
import EDIC2 from './Component/AllCourse/EDIC2';
import IDCCM from './Component/AllCourse/IDCCM';
import DemoApi from './Component/Service/DemoApi';
import TestportalMain from './UserPortal/TestPortal/TestportalMain.component';
import Blog from './Component/AllCourse/Blog';
import AllCourseWOL from './Component/AllCourse/AllCourseWOL';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Critical-Care' exact Component={MainComponent}/>
        <Route path='/Critical-Care/About-us' Component={Aboutus}/>
        <Route path='/Critical-Care/Terms-&-Condition' Component={Terms}/>
        <Route path='/Critical-Care/Contact-us' Component={ContactUs}/>
        <Route path='/Critical-Care/Blog' Component={Blog}/>
        <Route path='/Critical-Care/Privacy-policy' Component={PrivacyPolicy }/>
        <Route path='/Critical-Care/TopCourse' Component={TopCourse}/>
        <Route path='/Critical-Care/EDIC' Component={EDIC}/>
        <Route path='/Critical-Care/EDIC2' Component={EDIC2}/>
        <Route path='/Critical-Care/IDCCM' Component={IDCCM}/>
        <Route path='/Critical-Care/Demo' Component={DemoApi}/>
        <Route path='/Critical-Care/AllCourse' Component={AllCourseWOL}/>
        <Route path='/Critical-Care/user/testportal' Component={TestportalMain}/>
      </Routes>
    </div>
  );
}

export default App;