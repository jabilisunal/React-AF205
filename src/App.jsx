import React, { useState } from "react";

function App() {
  const [signIn, setSignIn] = useState(true);

  function Login() {
    setSignIn(true);
  }

  function Logout() {
    setSignIn(false);
  }

  return (
    <>
      {signIn ? (
        <div>
          <button onClick={Logout}>Sign In</button>
          <p>Welcome my Page</p>
          <h1>Leyla bu shert correcdi</h1>
        </div>
      ) : (
        <div>
          <button onClick={Login}>Sign Out</button>
          <p>Comeback ...</p>
          <h1>Leyla bu shert uncorrectdir</h1>

        </div>
      )}
    </>
  );
}

export default App;
