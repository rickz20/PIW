import "./StudentProfile.css";

const StuedentProfile = ({name, imgSrc, description}) =>

    <div className="student-card">
        <div className="student-title">
            <h2>{name}</h2>
        </div>
        <div className="student-picture">
            <img src="" 
            alt="Picture student" 
            width={150}
            />
        </div>
        <div className="student-description">
            <p>{description}</p>
        </div>

    </div>

export default StuedentProfile;