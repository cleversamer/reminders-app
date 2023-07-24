import { useEffect, useState } from "react";
import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminder from "./interfaces/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

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

  const handleRemoveReminder = (id: number) => {
    try {
      const newReminders = reminders.filter((reminder) => reminder.id !== id);
      setReminders(newReminders);
    } catch (err) {}
  };

  const handleAddReminder = async (title: string) => {
    try {
      const reminder = await reminderService.addReminder(title);
      setReminders([reminder, ...reminders]);
    } catch (err) {}
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={handleAddReminder} />
      <RemindersList
        items={reminders}
        onRemoveReminder={handleRemoveReminder}
      />
    </div>
  );
}

export default App;
