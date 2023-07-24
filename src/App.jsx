import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
          SelectedContact={selectedContact}
        />
      ) : (
        <ContactList
          setSelectedContactId={setSelectedContactId}
          setSelectedContact={setSelectedContact} 
        />
      )}
    </>
  );
}
