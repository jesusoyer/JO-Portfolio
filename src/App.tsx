import './App.css';
import NavBar from './components/navigation/NavBar';
import FixedSidebar from './components/FixedSidebar/FixedSideBar';
import LandingSection from './components/landingSection/LandingSection';
import AboutMe from './components/AboutMe/AboutMe';
// import ProjectSection from './components/ProjectSection/ProjectSection';
// import ContactSection from './components/ContactSection/ContactSection';
// import FooterSection from './components/FooterSection/FooterSection';
import './index.css';


const App: React.FC = () => {
  return (
    <div className="App">
    <nav><NavBar /></nav>
 <div >
      <main className="container">
        {/* Use a 12-column layout */}
        <div className="grid grid-cols-12">
       <FixedSidebar />
        <LandingSection />
        <AboutMe />
        {/* <ProjectSection /> */}
        {/* <ContactSection /> */}
        {/* <FooterSection /> */}
   </div>   
      </main>
</div>
        </div>

  );
}

export default App;
