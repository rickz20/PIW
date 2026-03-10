import "./StudentProfile.css";

const StuedentProfile = () =>

    <div className="student-card">
        <div className="student-title">
            <h2>Riquellme Ferreira</h2>
        </div>
        <div className="student-picture">
            <img src="https://tse3.mm.bing.net/th/id/OIP.B8yX4bQ6QjJ0uQ6TUj9iMgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" 
            alt="Picture student" 
            width={150}
            />
        </div>
        <div className="student-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum laboriosam dolorum, dolores blanditiis dignissimos eveniet magni adipisci et iste natus molestiae similique deleniti est tempore nobis praesentium voluptatem corrupti!
        </div>

    </div>

export default StuedentProfile;