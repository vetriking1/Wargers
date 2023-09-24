import 'style.css'
function FunLogin(){
    return (
        <>
        <h1>Login page</h1>
        <div className="container">
      <div className="card">
        <h2>Sign Up</h2>
        <form>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-container">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="button-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}

export default FunLogin