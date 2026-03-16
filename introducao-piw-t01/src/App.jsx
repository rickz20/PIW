import "./App.css";
import StuedentProfile from "./components/sutdentProfile";
import StudentProfileList from "./components/StudentProfileList";
import TeacherProfileList from "./components/TeacherProfileList";


const App = () => 
  <div>
    <h1 className="tituloPagina">Professores da Universidade Federal do Ceará</h1>
    <div className="container">
    {/* <StudentProfileList/> */}
    <TeacherProfileList/>
  </div>
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