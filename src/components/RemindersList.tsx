import Reminder from "../interfaces/reminder";

interface RemindersListProps {
  items: Reminder[];
}

function RemindersList({ items }: RemindersListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item.id} className="list-group-item">
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default RemindersList;
