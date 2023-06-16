import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
export default function Nav(){
    return(
        <>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"yellow"}}>
 <b><a class="navbar-brand" href="#" style={{color:"black"}}><img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Commonwealth_Bank_Logo.svg" width="30%" height="10%"></img></a></b> 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      {/* <li class="nav-item active">
        <a class="nav-link" href="#/bank">Bank <span class="sr-only"></span></a>
      </li> */}
      <li class="nav-item">
        <a class="nav-link" href="#/register" style={{color:"black"}}>Create Account</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/login" style={{color:"black"}}>Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/deposit" style={{color:"black"}}>Deposit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#/withdraw" style={{color:"black"}}>Withdraw</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#/alldata" style={{color:"black"}}>All Data</a>
      </li>
    </ul>
  </div>
</nav>
        </>

    )
}