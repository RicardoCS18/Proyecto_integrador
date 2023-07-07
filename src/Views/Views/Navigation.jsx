import { Link } from "react-router-dom"
const Navigation = (props)=> {
    return (
        <>
        <Link to="/home"> <div>Home</div> </Link>
        <Link to="/about"> <div>About</div> </Link>
        <button onClick={props.handleLogOut}>Log Out</button>
        <hr></hr>
        </>
    )
}
export default Navigation