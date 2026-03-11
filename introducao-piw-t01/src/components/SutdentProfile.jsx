import "./StudentProfile.css";

const StuedentProfile = ({name, imgSrc, monitor, description}) =>

    <div className="student-card" style={monitor?{backgroundColor: "#18033e"}:{backgroundColor: "red"}}>
        <div className="student-title">
            <h2>{name}</h2>
        </div>
        <div className="student-picture">
            <img src={imgSrc} 
            alt="Picture student" 
            width={80}
            />
        </div>
        <div className="student-description">
            <p>{description}</p>
        </div>

    </div>

export default StuedentProfile;