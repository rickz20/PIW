import "./StudentProfile.css";

const StuedentProfile = ({name, imgSrc, description}) =>

    <div className="student-card">
        <div className="student-title">
            <h2>{name}</h2>
        </div>
        <div className="student-picture">
            <img src="https://tse3.mm.bing.net/th/id/OIP.B8yX4bQ6QjJ0uQ6TUj9iMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Picture student" 
            width={150}
            />
        </div>
        <div className="student-description">
            <p>{description}</p>
        </div>

    </div>

export default StuedentProfile;