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
import COntactus from './Component/Service/COntactus.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/Critical-care/' exact Component={MainComponent}/>
        <Route path='/Critical-care/About-us/' Component={Aboutus}/>
        <Route path='/Critical-care/Terms-&-Condition/' Component={Terms}/>
        <Route path='/Critical-care/Contact-us/' Component={COntactus}/>
        <Route path='/Critical-care/Blog/' Component={Blog}/>
        <Route path='/Critical-care/Privacy-policy/' Component={PrivacyPolicy }/>
        <Route path='/Critical-care/TopCourse/' Component={TopCourse}/>
        <Route path='/Critical-care/EDIC/' Component={EDIC}/>
        <Route path='/Critical-care/EDIC2/' Component={EDIC2}/>
        <Route path='/Critical-care/IDCCM/' Component={IDCCM}/>
        <Route path='/Critical-care/Demo/' Component={DemoApi}/>
        <Route path='/Critical-care/AllCourse/' Component={AllCourseWOL}/>
        <Route path='/Critical-care/user/testportal' Component={TestportalMain}/>
      </Routes>
    </div>
  );
}

export default App;