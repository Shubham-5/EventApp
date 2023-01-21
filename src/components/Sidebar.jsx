import { GoThreeBars } from "react-icons/go";
import { BiLogIn } from "react-icons/bi";
const Sidebar = () => {
  return (
    <div>
      <div className='sidebar'>
        <div className='sidebar-btn'>
          <GoThreeBars />
        </div>
        <div className='sidebar-btn'>
          <BiLogIn />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
