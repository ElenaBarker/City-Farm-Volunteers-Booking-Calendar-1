
const Slots = ({ slots, onSelectSession }) => {
  return (
    <div>
      <h3>Available Sessions:</h3>
      <ul>
        {slots.map((slot) => (
          <li key={slot.id}>
            <strong>{slot.title}</strong> -{" "}
            <button onClick={() => onSelectSession(slot)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slots;
