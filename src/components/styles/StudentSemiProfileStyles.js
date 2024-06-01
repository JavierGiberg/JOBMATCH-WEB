import { styled } from "@mui/system";

export const StudentProfileContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 16,
});

export const ProfileHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: 16,
  marginBottom: 16,
});

export const ProfileAvatar = styled("img")({
  width: "200px",
  height: "200px",
  marginRight: 16,
});

export const StudentInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export const StudentName = styled("h1")({
  marginBottom: 8,
});

export const StudentMajor = styled("p")({
  marginBottom: 4,
});

export const StudentStatus = styled("p")({
  marginBottom: 4,
});

export const ProfileBody = styled("div")({
  width: "100%",
});

export const Section = styled("div")({
  padding: 16,
  marginBottom: 16,
});

export const SectionTitle = styled("h2")({
  marginBottom: 8,
});

export const ScrollableContent = styled("div")({
  maxHeight: "200px",
  overflowY: "auto",
});

export const CourseRecord = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const CourseName = styled("span")({
  fontWeight: "bold",
});

export const CourseGrade = styled("span")({});

export const LanguageInfo = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const LanguageName = styled("span")({
  fontWeight: "bold",
});

export const ProjectsCount = styled("span")({});
