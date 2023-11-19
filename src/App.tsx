import Navbar from './components/Navbar';
import Home from './components/Home';
import Benefits from './components/Benefits';
import OurClasses from './components/OurClasses';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { SelectedPage } from './shared/types';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfpage, getNavbarPos] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        getNavbarPos(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        getNavbarPos(false);
      }
    }
    window.addEventListener('scroll', handleScroll)
    // Return this whenever the component disappears
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfpage={isTopOfpage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <OurClasses setSelectedPage={setSelectedPage}/>
        <ContactUs setSelectedPage={setSelectedPage}/>
        <Footer/>
      </div>
    </>
  );
};

export default App;