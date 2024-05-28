import { styled } from "@mui/system";

export const MainContainer = styled("div")({
  textAlign: "center",
  padding: 16,
});

export const AppPageContainer = styled("div")({
  textAlign: "center",
  padding: 16,
});

export const Logo = styled("img")({
  height: "40vmin",
  pointerEvents: "none",
  animation: "App-logo-spin infinite 20s linear",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: "App-logo-spin infinite 20s linear",
  },
});

export const Button = styled("button")({
  padding: "0.75rem 1.5rem",
  border: "none",
  background: "#007bff",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s",
  "&:hover": {
    background: "#0056b3",
  },
  "@media (max-width: 768px)": {
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
  },
  "@media (max-width: 480px)": {
    padding: "0.5rem",
    fontSize: "0.8rem",
  },
});
