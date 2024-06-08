import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import {
  StudentProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  StudentInfo,
  StudentName,
  StudentMajor,
  StudentStatus,
  ProfileBody,
  Section,
  SectionTitle,
  ScrollableContent,
  CourseRecord,
  CourseName,
  CourseGrade,
  LanguageInfo,
  LanguageName,
  ProjectsCount,
} from "../styles/StudentSemiProfileStyles";

const StudentSemiProfile = (props) => {
  useEffect(() => {
    if (props.studentData) {
      props.setStudentData(props.studentData);
    }
  }, [props]);

  return (
    <StudentProfileContainer>
      <ProfileHeader>
        <ProfileAvatar
          src={props.studentData.github_info.avatar_url}
          alt={props.studentData.student.name}
        />
        <StudentInfo>
          <StudentName>{props.studentData.student.name}</StudentName>
          <StudentMajor>שנה: {props.studentData.student.major}</StudentMajor>
          <StudentMajor>{props.studentData.student.degree}: תואר</StudentMajor>
          <StudentStatus>
            סטטוס: {props.studentData.student.status}
          </StudentStatus>
        </StudentInfo>
      </ProfileHeader>

      <ProfileBody>
        <Section>
          <SectionTitle>Contact Information</SectionTitle>
          <Typography variant="body1">
            <strong>Email:</strong> {props.studentData.student.email}
          </Typography>
          <Typography variant="body1">
            <strong>Phone:</strong> {props.studentData.student.phone}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {props.studentData.student.address}
          </Typography>
        </Section>

        <Section>
          <SectionTitle>Academic Record</SectionTitle>
          <ScrollableContent>
            {props.studentData.courses.map((course) => (
              <CourseRecord key={course.id}>
                <CourseName>{course.course_name}</CourseName>
                <CourseGrade>{course.grade}</CourseGrade>
              </CourseRecord>
            ))}
          </ScrollableContent>
        </Section>

        <Section>
          <SectionTitle>GitHub Information</SectionTitle>
          <Typography variant="body1">
            <strong>Username:</strong> {props.studentData.github_info.name}
          </Typography>
          <Typography variant="body1">
            <strong>Followers:</strong>{" "}
            {props.studentData.github_info.followers}
          </Typography>
          <Typography variant="body1">
            <strong>Following:</strong>{" "}
            {props.studentData.github_info.following}
          </Typography>
          <Typography variant="body1">
            <strong>Public Repos:</strong>{" "}
            {props.studentData.github_info.public_repos}
          </Typography>
        </Section>

        <Section>
          <SectionTitle>Programming Languages</SectionTitle>
          <ScrollableContent>
            {props.studentData.github_languages.map((language) => (
              <LanguageInfo key={language.language}>
                <LanguageName>{language.language}</LanguageName>
                <ProjectsCount>
                  {language.projects_count} projects
                </ProjectsCount>
              </LanguageInfo>
            ))}
          </ScrollableContent>
        </Section>
      </ProfileBody>
    </StudentProfileContainer>
  );
};

export default StudentSemiProfile;
