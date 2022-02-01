
import './App.css';
import {Navbar} from './Components/Navbar.tsx';
import {Main} from './Components/Main.tsx';
import Landing from "./Components/LandingPage/Landing.tsx";
const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Developement", to: "/dev" },
    { name: "Graphic Design", to: "/design" },
    { name: "Contact", to: "/contact" },
  ]
}

const {brand,links} = navigation;
function App() {
  return (
    <div className="App">
      {/*<Navbar brand={brand} links={links}/>*/}
      {/*<Main/>*/}
      <Landing/>
    </div>
  );
}

export default App;
