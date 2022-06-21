import Layout from "./pages/Layout";
import { QueryClientProvider ,QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  const query = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={query}>
        <Layout/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
