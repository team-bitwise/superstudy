
import logo from "../assets/logo.png"

const NavBar = (props:any) => {
    return (
        <nav className={`max-h-20 w-full px-16 py-2 flex items-center gap-4 ${props.bgColor}`}>
            <h1 className={`text-4xl leading-none text-${props.textColor}`}>SuperStudy</h1>
            <img src={logo} alt="superstudy" className="w-18 object-contain" />
        </nav>
    )
}

export default NavBar