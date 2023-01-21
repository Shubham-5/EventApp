import dateFormat from "dateformat";

const Event = ({ event, setSelectedProfile, isActive, onClick }) => {
  let formatDate = dateFormat(event.Date, "dd-mm-yy");
  return (
    <div
      className={isActive ? "event active" : "event "}
      onClick={(e) => {
        setSelectedProfile(event);
        onClick(event.ID);
      }}>
      <div className='event-details'>
        <p>
          {event.ID} : {event.Location}
        </p>
        <p>
          {formatDate}
          {"  "}
          {event.Time}
        </p>
      </div>
      <p>Person detected</p>
    </div>
  );
};

export default Event;
