import { InputBase, styled } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(0, 4),
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    width: "100%",
  },
}));
export default StyledInputBase;
