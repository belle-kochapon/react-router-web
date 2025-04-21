import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus aliquid minus eum vitae? Sequi, autem! Nesciunt, illum itaque labore dolor quasi corporis placeat tempore facilis, nam, at quo praesentium animi!
        </p>
        <Link to="login">
        <button>Login</button>
        </Link>
    </div>
  ); 


// Long version  
//   if (isLogin) {
//     return <h1>Dashboard</h1>
//   } else {
//     return <h1>Not Login</h1>
//   }
}

export default Dashboard