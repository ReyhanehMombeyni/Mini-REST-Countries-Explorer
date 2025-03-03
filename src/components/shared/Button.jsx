import { NavLink } from "react-router"

const Button = ({styleLink, pathLink, text}) => {
  return (
    <button className={styleLink}>
        <NavLink to={pathLink}>
            {text}
        </NavLink>
    </button>
  )
}

export default Button