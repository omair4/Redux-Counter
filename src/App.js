import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from './components/Auth';
import { useSelector } from 'react-redux';
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header></Header>
      {!isAuthenticated&&<Auth></Auth>}
      <Counter />
      </>
  );
}

export default App;
