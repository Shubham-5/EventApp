import { useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
const Navbar = ({ data }) => {
  const [male, setMale] = useState(0);
  const [female, setFemale] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      let male = data.filter((male) => male.Gender === "Male");
      let female = data.filter((female) => female.Gender === "Female");
      setFemale(female.length);
      setMale(male.length);
    }
  }, [data]);

  return (
    <nav>
      <h2>
        <a href='/'>SecqureAlse</a>
      </h2>

      <div className='nav-items-group'>
        <form>
          <div className='search-container'>
            <div className='search-icon'>
              <MdSearch />
            </div>
            <input className='nav-item' type='text' />
          </div>
        </form>
        <button className='nav-item green'>{male}</button>
        <button className='nav-item red'>{female}</button>
      </div>
    </nav>
  );
};

export default Navbar;
