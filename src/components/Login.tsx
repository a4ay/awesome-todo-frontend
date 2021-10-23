import "../styles/Login.css"


export default function Login() {

  const handleLogin = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  }
  return (
    <section className="login-section">
      <div className="logo">
        <img src="/img/logo.png" alt="todo-logo" />
      </div>
      <h1>Awesome Todo</h1>
      <p>Have a Timetable but no Routine.</p>
      <button onClick={handleLogin} className="googleSignIn googleSignIn--white">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/G-on-clear.svg" alt="Google logo" />
        <span className="googleSignIn__text">Sign in with Google</span>
      </button>
    </section>
  )
}
