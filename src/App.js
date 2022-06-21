import { QueryClientProvider ,QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from "./Router";

function App() {
  const query = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={query}>
        <Router/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
