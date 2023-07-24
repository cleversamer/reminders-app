import { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (!title) return;
      onAddReminder(title);
      setTitle("");
    } catch (err) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        className="form-control"
        placeholder="Enter the reminder title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit" className="btn btn-primary rounded-pill my-3">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
