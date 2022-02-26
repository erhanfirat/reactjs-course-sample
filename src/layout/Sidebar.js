import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const studentsState = useSelector(state => state.students);

    return <div className='navbar-dark'>
        <ul className='navbar-nav '>
            <li className='nav-item'><Link className='nav-link' to="/">Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/counter">Counter</Link></li>
            <li className='nav-item'><Link className='nav-link' to="/student-form">Create Student</Link></li>
            <li className='nav-item'>
                <Link className='nav-link' to="/students">
                    Students
                    <span className='ms-2' style={{ fontSize: "12px", lineHeight: "16px" }}>
                        [{studentsState.count}]
                    </span>
                </Link>
            </li>
        </ul>
    </div>
}

export default Sidebar;