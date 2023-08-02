import AppRouter from "./components/AppRouter";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
};

export default App;
