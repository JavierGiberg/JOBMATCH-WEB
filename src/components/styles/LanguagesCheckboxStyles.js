import { styled } from "@mui/system";
import { Button, Box } from "@mui/material";

export const DropdownButton = styled(Button)({
  margin: "16px 0",
});

export const DropdownContent = styled(Box)({
  display: "flex",
  flexDirection: "column",
  maxHeight: "200px",
  overflowY: "auto",
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#fff",
});
