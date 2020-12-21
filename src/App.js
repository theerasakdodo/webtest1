import Home from './Pages/Home/index'
import Header from './Components/Header/index'
import { BrowserRouter, Route, Link ,NavLink} from "react-router-dom";
import Contact from './Pages/Contact/index'
import About from './Pages/About/index'


function App() {
  return (
    <div >
      <Header />
      <BrowserRouter>
       
          <Route path="/" component={Home} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/About" component={About} exact={true} />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
