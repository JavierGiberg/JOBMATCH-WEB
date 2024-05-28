import { styled } from "@mui/system";

export const AppContainer = styled("div")({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 16,
  fontFamily: "Roboto, Arial, sans-serif",
});

export const Header = styled("div")({
  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
  padding: 16,
  marginBottom: 16,
});

export const Main = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 16,
});

export const Footer = styled("div")({
  display: "flex",
  justifyContent: "center",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
  padding: 16,
  marginTop: 16,
});
