
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Home from './components/Home/Home';
import Aos from 'aos';
import "aos/dist/aos.css";
// import About from './components/About/About';
// import Service from './components/Services/Service';
// <Service/>
import Surlgalt from './components/BuhSulrgalt/AllLearns';
// import Resume from './components/Resume/Resume';
// import Pricing from './components/Pricing/Pricing';
import Comment from './components/Comment/Comment';
import Learns from './components/Learns/Learns';
import Contact from './components/Contact/Contact';
import Auth from './components/Auth/Auth';
function App() {
  Aos.init({
    duration:2000,
    offset:0,
    
  })
  return (
    <>
      <SideBar/>
      <main className='main'>
        <Home/>
        <Learns/>

    
        <Surlgalt/>

        <Comment/>
      
        <Contact/>
        <Auth/>
      </main>
    </>
  );
}

export default App;
