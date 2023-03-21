import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { UserProvider } from "./UserProvider";
import { useState, useEffect} from 'react'
import { CheckSession } from "./Services/Auth";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [mood, setMood] = useState(null)
  const [toolkit, setToolkit] = useState([])
  const [searchQuery, setSearchQuery] = useState([])
  const [resources, setResources] = useState([])


  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null);
    setMood (null);
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
      <UserProvider.Provider value={{user, setUser, toolkit, setToolkit, authenticated, toggleAuthenticated, handleLogOut, mood, setMood, searchQuery, setSearchQuery, resources, setResources}}>
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
