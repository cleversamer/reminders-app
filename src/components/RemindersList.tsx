import Reminder from "../interfaces/reminder";

interface RemindersListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function RemindersList({
  items,
  onRemoveReminder,
}: RemindersListProps): JSX.Element {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item.id} className="list-group-item">
          {item.title}

          <button
            className="btn btn-outline-danger mx-2 rounded-pill"
            onClick={() => onRemoveReminder(item.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RemindersList;
