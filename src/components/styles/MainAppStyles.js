import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const MainContainer = styled(Box)({
  textAlign: "center",
  padding: "16px",
  fontFamily: "Roboto, Arial, sans-serif",
});

export const TableSection = styled(Box)({
  marginTop: "16px",
});

export const ScrollableTableContainer = styled(Box)({
  maxHeight: "400px",
  overflowY: "auto",
  marginTop: "16px",
});
