import dbFirestore from "../firebase_config";
import { collection, getDocs } from "firebase/firestore";


const ProfessorDAO = () =>{
    async function getALL(){
        const profesoresRef = dbFirestore.collection(dbFirestore,"professores");
        const snapshot = await getDocs(profesoresRef)
        snapshot.forEach(professor => {
            console.log(`ID: ${professor.id} -> ${professor.data()}`)
        });
    }
}

export default ProfessorDAO;