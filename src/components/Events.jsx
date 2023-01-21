import Event from "./Event";
import { useState } from "react";
import { IoMdOptions } from "react-icons/io";
import dateFormat from "dateformat";

const Events = ({ data, setSelectedProfile, onClick }) => {
  const [filter, setFilter] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [active, setActive] = useState(null);

  const handleFilter = (e, filterName) => {
    let filtering = data.filter((event) => {
      return event[filterName] === e.target.value;
    });
    setFilterData(filtering);
  };

  const handleDateFilter = (e) => {
    let filter = data.filter(({ Date }) => {
      let formatDate = dateFormat(Date, "yyyy-mm-dd");
      return formatDate === e.target.value;
    });
    setFilterData(filter)
  };

  const navigate = (id) => {
    setActive(id);
  };

  return (
    <div className='events'>
      <div className='events-header'>
        <h5>Events</h5>
        <button onClick={() => setFilter(!filter)}>
          <IoMdOptions />
        </button>
      </div>
      <div className='event-container'>
        {filter && (
          <div className='filter-container '>
            <label>
              {" "}
              Gender :{" "}
              <select onChange={(e) => handleFilter(e, "Gender")}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </label>

            <label>
              {" "}
              Location :{" "}
              <select onChange={(e) => handleFilter(e, "Location")}>
                <option value='Bangalore'>Bangalore</option>
                <option value='Chennai'>Chennai</option>
                <option value='Hyderabad'>Hyderabad</option>
              </select>
            </label>

            <label>
              {" "}
              Date : <input type='date' onChange={(e) => handleDateFilter(e)} />
            </label>
          </div>
        )}
        {filterData.length === 0
          ? data.map((event) => (
              <Event
                event={event}
                key={event.ID}
                isActive={active === event.ID}
                setActive={setActive}
                setSelectedProfile={setSelectedProfile}
                onClick={navigate}
              />
            ))
          : filterData.map((item) => (
              <Event
                event={item}
                key={item.ID}
                setActive={setActive}
                isActive={active === item.ID}
                setSelectedProfile={setSelectedProfile}
                onClick={navigate}
              />
            ))}
      </div>
    </div>
  );
};

export default Events;
