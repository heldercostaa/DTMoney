import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
}
