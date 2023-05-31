import * as React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './fire';

function App() {
  const [user, setUser] = React.useState(null);
  const [authState, setAuthState] = React.useState(null);

  React.useEffect(() => {
    const unSubscribeAuth = onAuthStateChanged(auth,
      async authenticatedUser => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setAuthState('home')
        } else {
          setUser(null);
          setAuthState('login');
        }
      })

    return unSubscribeAuth;
  }, [user]);

  if (authState === null) return <h2>Loading.....</h2>
  if (authState === "register") return <Register setAuthState={setAuthState} setUser={setUser} />
  if (authState === "login") return <Login setAuthState={setAuthState} setUser={setUser} />
  if (user) return <Home setAuthState={setAuthState} setUser={setUser} user={user} />

  return (
    <div className="App">
      <div>
        <Register />
      </div>
    </div>
  );
}

export default App;