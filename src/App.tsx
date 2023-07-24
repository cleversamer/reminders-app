import { useEffect, useState } from "react";
import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminder from "./interfaces/reminder";
import reminderService from "./services/reminder";

function App(): JSX.Element {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    try {
      const reminders = await reminderService.getReminders();
      setReminders(reminders);
    } catch (err) {}
  };

  const handleRemoveReminder = async (id: number) => {
    try {
      const newReminders = reminders.filter((reminder) => reminder.id !== id);
      setReminders(newReminders);
    } catch (err) {}
  };

  return (
    <div className="App">
      <RemindersList
        items={reminders}
        onRemoveReminder={handleRemoveReminder}
      />
    </div>
  );
}

export default App;
