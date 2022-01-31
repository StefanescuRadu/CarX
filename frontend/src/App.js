
import './App.css';
import {Navbar} from './Components/Navbar.tsx'
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
      <Navbar brand={brand} links={links}/>
    </div>
  );
}

export default App;
