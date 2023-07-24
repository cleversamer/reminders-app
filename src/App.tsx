import "./App.css";
import RemindersList from "./components/RemindersList";
import Reminder from "./interfaces/reminder";

const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];

function App() {
  return (
    <div className="App">
      <RemindersList items={reminders} />
    </div>
  );
}

export default App;
