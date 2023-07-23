import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

const dummyContacts = [];

export default function ContactList({ setSelectedContactId, setSelectedContact }) {
  const [contacts, setContacts] = useState(dummyContacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch contacts');
        }
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow
            key={contact.id}
            contact={contact}
            setSelectedContactId={setSelectedContactId}
            setSelectedContact={setSelectedContact}
          />
        ))}
      </tbody>
    </table>
  );
}

ContactList.propTypes = {
  setSelectedContactId: PropTypes.func.isRequired,
  setSelectedContact: PropTypes.func.isRequired,
};

