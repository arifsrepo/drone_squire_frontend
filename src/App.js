import './App.css';
import NavigationBarSticky from './Cmponents/NavigationBarSticky/NavigationBarSticky';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StickyContainer, Sticky } from 'react-sticky';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Features from './Cmponents/Features/Features';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Home from './Cmponents/Home/Home';
import Footer from './Cmponents/Footer/Footer';
import Shop from './Cmponents/Shop/Shop';
import Login from './Cmponents/Login/Login';
import About from './Cmponents/About/About';
import Order from './Cmponents/Order/Order';
import Details from './Cmponents/Details/Details';
import Admin from './Cmponents/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav_bg">
        <Container>
          <div className="over_nav_bar">
              <div className="over_nav_bar_sub">
                <h6><FontAwesomeIcon className="icon_top" icon={faLocationDot} /> 163/Mirpur, Bhaka Bangladesh</h6>
              </div>
              <div className="over_nav_bar_sub_text"><h4>D R O N E S Q U I R E</h4></div>
              <div className="over_nav_bar_sub_flex"><h6 className="question_text">Have questions? </h6><FontAwesomeIcon style={{marginBottom:'12px'}} className="icon_top" icon={faPhone} /><h5> 0123456789</h5><FontAwesomeIcon className="icon_top_big" icon={faSearch} /><FontAwesomeIcon className="icon_top_big" icon={faCartShopping} /></div>
          </div> 
        </Container>
        </div>
          <StickyContainer>
            {/* Other elements can be in between `StickyContainer` and `Sticky`,
            but certain styles can break the positioning logic used. */}
            <Sticky>
              {({
                style,
    
                // the following are also available but unused in this example
                isSticky,
                wasSticky,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
              }) => (
                <header style={{...style, zIndex:isSticky?'10':'20'}}>
                  {<NavigationBarSticky />}
                </header>
              )}
            </Sticky>
            {
              <>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/details/:detailsId" element={<Details />} />
                  <Route path="/admin/*" element={<Admin />} />
                </Routes>
                <Footer></Footer>
              </>
            }
          </StickyContainer>
      </Router>
    </div>
  );
}

export default App;
