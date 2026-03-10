import StuedentProfile from "./sutdentProfile";

const StudentProfileList = () => {

    const StudentDataBase = [
        {name: "rick", description: "5º semestre", imgSrc: ""},
        {name: "fulao", description: "5º semestre", imgSrc: ""},
        {name: "onooijo", description: "5º semestre", imgSrc: ""}
    ]

    return(
        <>
           {
            StudentDataBase.map(
                (student) => <StuedentProfile
                name = {student.name}
                imgSrc = {student.imgSrc}
                description = {student.description}
                />
            )
           } 
        </>
    )
}

export default StudentProfileList;

