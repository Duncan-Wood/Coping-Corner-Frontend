import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { UserProvider } from "./UserProvider";
import { useState, useEffect} from 'react'
import { CheckSession } from "./Services/Auth";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  
  const [toolkit, setToolkit] = useState([])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  return (
    <div className="App">
      <UserProvider.Provider value={{user, setUser, toolkit, setToolkit, authenticated, toggleAuthenticated, handleLogOut}}>
        <header className="App-header">
          <Header />
        </header>
        <main>
        <Main />
        </main>
      </UserProvider.Provider>
    </div>
  );
}

export default App;
