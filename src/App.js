import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppRouter from "./AppRoutes";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  // #1D8CE0 : (29,140,224) : primary color
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  const app_style = {
    marginLeft: matches ? "8%" : "2%",
    marginRight: matches ? "8%" : "2%",
  };

  return (
    <div style={app_style}>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
