import { useState } from "react";
import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminder from "./interfaces/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);

  return (
    <div className="App">
      <RemindersList items={reminders} />
    </div>
  );
}

export default App;
