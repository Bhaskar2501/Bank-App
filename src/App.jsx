import "./App.css";
import Customer from "./Components/Customer";
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Transaction from "./Components/Transaction";
import Statements from "./Components/Statements"
import NewEmployee from "./Components/NewEmployee"

function App() {
  return (
    <>
      <Customer />
      <Services />
      <Transaction />
      <Statements/>
      <NewEmployee/>
    </>
  );
}

export default App;
