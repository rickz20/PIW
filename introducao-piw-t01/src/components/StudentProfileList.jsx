import StuedentProfile from "./sutdentProfile";

const StudentProfileList = () => {

    const StudentDataBase = [
        {name: "rick", monitor: true, description: "5º semestre", imgSrc: ""},
        {name: "fulano", monitor: true, description: "5º semestre", imgSrc: "https://th.bing.com/th/id/R.c990ede9a946661d1a1cfcffbef02824?rik=JZyUSKKWfNl%2f6g&pid=ImgRaw&r=0"},
        {name: "beltrano", monitor: false, description: "5º semestre", imgSrc: "https://tse3.mm.bing.net/th/id/OIP.8XMPNphfFacO17Vsl4u_dQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"}
    ]

    return(
        <> 
           {
            StudentDataBase.map(
                (student) => <StuedentProfile
                name = {student.name}
                imgSrc = {student.imgSrc}
                description = {student.description}
                monitor = {student.monitor}

                />
            )
           } 
        </>
    )
}

export default StudentProfileList;

