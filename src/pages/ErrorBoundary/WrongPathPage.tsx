
import { Link } from 'react-router'

const WrongPathPage = () => {
    return (
        <div>
            <h1>Oops! 404 Not found</h1>
            <Link to="/">
                <p className='underline cursor-pointer'>Return home</p>
            </Link>
        </div>
    )
}

export default WrongPathPage