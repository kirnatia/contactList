import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ContactList.css';

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch contact details');
        }
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContactDetails();
  }, [selectedContactId]);

  // Function to handle the button click and reset selectedContactId
  const handleBackToList = () => {
    setSelectedContactId(null);
  };

  return (
    <div>
      <h2>Selected Contact Details</h2>
      {contact ? (
        <div>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={handleBackToList}>Back to List</button> 
        </div>
      ) : (
        <div>No contact selected</div>
      )}
    </div>
  );
};

SelectedContact.propTypes = {
  selectedContactId: PropTypes.number.isRequired,
  setSelectedContactId: PropTypes.func.isRequired,
};

export default SelectedContact;
