import "./App.css";
import StuedentProfile from "./components/sutdentProfile";

const App = () => 
<div className="container">
  <StuedentProfile
  name = "teste"
  imgSrc = ""
  description = "teste teste teste"
  />
  <StuedentProfile/>
  <StuedentProfile/>
</div>

// function App(){
//   return(
//     <div>
//       <h1>Riquellme Ferreira da Silva</h1>
//       <h3>5º Semestre</h3>
//     </div>
//   )
// }


export default App;