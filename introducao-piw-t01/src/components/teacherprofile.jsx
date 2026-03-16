import "./TeacherProfile.css"

const TeacherProfile = ({name, title, imgSrc, description}) =>

    <div className="teacher-card">
        <div className="teacher-name">
            <h2>{name}</h2>
        </div>
        <div className="teacher-title">
            <h2>{title}</h2>
        </div>
        <div className="teacher-picture">
            <img src={imgSrc} 
            alt="Teacher picture" 
            width={80}
            />
        </div>
        <div className="teacher-description">
            <p>{description}</p>
        </div>

    </div>

export default TeacherProfile;