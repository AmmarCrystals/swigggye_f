import "./App.css";
import Header from "./Components/Haeder";
import Crousle from "./Components/Crousle";
import Body from "./Components/Body";
// import Ctest from "./Components/Ctest";
// import Crousle from "./Components/Crousle";
// import TopResto from "./Components/TopResto"
// import Resturant from "./Components/Resturant"
import MidCrousel from "./Components/MidCrousel";

function App() {
  return (
    <>
      <Header />
      <hr />
      <Crousle />
      <MidCrousel />
      <Body />
      {/* <Ctest/> */}
      {/* <TopResto/>
      <Resturant/> */}
    </>
  );
}

export default App;
