import { React } from "react";
import "./StudentSemiProfile.css"; // Make sure to create a CSS file with this name

const StudentSemiProfile = (props) => {
  debugger;
  useEffect(() => {
    if (props.studentData) {
      props.setStudentData(props.studentData);
    }
  }, []);

  return (
    <div className="student-profile-container">
      <div className="profile-header">
        <img
          src={props.studentData.github_info.avatar_url}
          alt={props.studentData.student.name}
          className="profile-avatar"
        />
        <div className="student-info">
          <h1 className="student-name">{props.studentData.student.name}</h1>
          <p className="student-major">
            שנה : {props.studentData.student.major}
          </p>
          <p className="student-major">
            {props.studentData.student.degree} : תואר
          </p>
          <p className="student-status">
            {" "}
            סטטוס : {props.studentData.student.status}{" "}
          </p>
        </div>
      </div>

      <div className="profile-body">
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <strong>Email:</strong> {props.studentData.student.email}
          </p>
          <p>
            <strong>Phone:</strong> {props.studentData.student.phone}
          </p>
          <p>
            <strong>Address:</strong> {props.studentData.student.address}
          </p>
        </section>

        <section className="academic-info">
          <h2>Academic Record</h2>
          <div className="scrollable-content">
            {props.studentData.courses.map((course) => (
              <div key={course.id} className="course-record">
                <span className="course-name">{course.course_name}</span>
                <span className="course-grade">{course.grade}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="github-info">
          <h2>GitHub Information</h2>
          <p>
            <strong>Username:</strong> {props.studentData.github_info.name}
          </p>
          <p>
            <strong>Followers:</strong>{" "}
            {props.studentData.github_info.followers}
          </p>
          <p>
            <strong>Following:</strong>{" "}
            {props.studentData.github_info.following}
          </p>
          <p>
            <strong>Public Repos:</strong>{" "}
            {props.studentData.github_info.public_repos}
          </p>
        </section>

        <section className="programming-languages">
          <h2>Programming Languages</h2>
          <div className="scrollable-content">
            {props.studentData.github_languages.map((language) => (
              <div key={language.language} className="language-info">
                <span className="language-name">{language.language}</span>
                <span className="projects-count">
                  {language.projects_count} projects
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentSemiProfile;
