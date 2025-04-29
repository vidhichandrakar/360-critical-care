import './App.css';
import MainComponent from './Component/MainComponent/MainComponent';
import { Route, Routes } from 'react-router-dom'
import Aboutus from './Component/Aboutus/Aboutus';
import Terms from './Component/Terms&Condition/Terms';
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
import WhatsAppIcon from './Component/CallToAction/WhatsAppIcon.jsx';

import { BrowserRouter } from 'react-router-dom'
import ExploreCourses from './Component/Features/ExploreCourses.js';
import ScrollToTop from './Component/util/ScrollToTop .js';


function App() {
    return (
        <div className="App">
            <BrowserRouter basename="/Critical-care">
                <ScrollToTop />
                <Routes>
                    <Route path='/' exact Component={MainComponent} />
                    <Route path='/About-us/' Component={Aboutus} />
                    <Route path='/Terms-&-Condition/' Component={Terms} />
                    <Route path='/Contact-us/' Component={COntactus} />
                    <Route path='/Blog/' Component={Blog} />
                    <Route path='/Privacy-policy/' Component={PrivacyPolicy} />
                    <Route path='/TopCourse/' Component={TopCourse} />
                    <Route path='/EDIC/' Component={EDIC} />
                    <Route path='/EDIC2/' Component={EDIC2} />
                    <Route path='/IDCCM/' Component={IDCCM} />
                    <Route path='/Demo/' Component={DemoApi} />
                    <Route path='/AllCourse/' Component={AllCourseWOL} />
                    <Route path='/testportal' Component={TestportalMain} />
                    <Route path='/ExploreCourses' Component={ExploreCourses} />
                </Routes>
                <WhatsAppIcon /> {/* Include the WhatsApp icon here */}
            </BrowserRouter>
        </div>
    );
}

export default App;
