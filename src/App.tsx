import { useEffect, useState } from "react";
import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminder from "./interfaces/reminder";
import reminderService from "./services/reminder";

function App() {
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

  return (
    <div className="App">
      <RemindersList items={reminders} />
    </div>
  );
}

export default App;
