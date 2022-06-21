import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClientProvider ,QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from "./Router";

function App() {
  const query = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F26659",
      },
      secondary:{
        main: "#F0EFF4"
      }
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={query}>
          <Router/>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
