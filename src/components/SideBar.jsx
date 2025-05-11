import "../styles/SideBar.css"
import sideIcon from "../assets/sidebar-dashboard-icon.svg"
import taskIcon from "../assets/sidebar-task-icon.svg"
import employeeIcon from "../assets/sidebar-employees-icon.svg"
import systemLogo from "../assets/system-logo.svg"

function SideBar() {
    return ( 
        <div className="sidebar">
            <div className="sidebar-header">
                <img className="sidebar-logo" src={systemLogo} alt="System Logo" />
                <div className="sidebar-text">
                    <span className="blue-task">TASK</span> <span>TRACKER</span>
                </div>
            </div>

            <div className="menu">
                <nav>
                    <ul>
                        <li className="menu-item active" >
                            <img src={sideIcon} alt="" /><span style={{color: 'black'}}>Dashboard</span>                           
                        </li>
                        <li className="menu-item">
                            <img src={taskIcon} alt="" />Tasks</li>
                        <li className="menu-item">
                        <img src={employeeIcon} alt="" />Employees</li>
                    </ul>
                </nav>
            </div>
        </div>
     );
}

export default SideBar;