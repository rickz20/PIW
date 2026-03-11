import "./App.css";
import StuedentProfile from "./components/sutdentProfile";
import StudentProfileList from "./components/StudentProfileList";


const App = () => 
  <div className="container">
    <StudentProfileList/>
  </div>


// const App = () => 
// <div className="container">
//   <StuedentProfile
//   name = "riquellme"
//   imgSrc = ""
//   description = "5º semestre"
//   />
//   <StuedentProfile
//   name = "Teste"
//   imgSrc = ""
//   description = "5"
//   />
//   <StuedentProfile/>
// </div>

// function App(){
//   return(
//     <div>
//       <h1>Riquellme Ferreira da Silva</h1>
//       <h3>5º Semestre</h3>
//     </div>
//   )
// }


export default App;