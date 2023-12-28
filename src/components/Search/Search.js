import { alpha, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  width: "100%",
  padding: theme.spacing(0, 2),
}));

export default Search;
