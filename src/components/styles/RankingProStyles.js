import { styled } from "@mui/system";
import { Box } from "@mui/material";

export const RankingContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const RankingItem = styled(Box)({
  padding: "8px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#fff",
  cursor: "move",
  transition: "background-color 0.2s",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
});
