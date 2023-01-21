import Header from "./component/header/Header";
import HeroHeader from "./component/hero-header/HeroHeader"
import Services from "./component/services/Services";
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroHeader />
      <Services />
    </div>
  )
}

export default App;
