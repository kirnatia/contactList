
import ContactList from './components/ContactList';
import './App.css';

export default function App() {
  const contacts = [];

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}