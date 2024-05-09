import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { loginWithRedirect, logout, user, isLoading  } = useAuth0();

  return (
    <>
    {!isLoading && !user && (
    <button onClick={() => loginWithRedirect()}>Log In</button>
    )}
    
    
    {!isLoading && user && 
    <div>
      <img alt='' src={user.picture}></img>
      <p>The UserName is: {user.nickname}</p>
      <p>The User Email is: {user.email}</p>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
    }

    {!isLoading && user && (
        <button onClick={() => logout()}>Log Out</button>
    )}
    </>  
  );
}

export default App;
