import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact contact={selectedContact} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} setSelectedContact={setSelectedContact} />
      )}
    </>
  );
}
