import PropTypes from 'prop-types';

export default function ContactRow({ setSelectedContactId, setSelectedContact, contact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
        setSelectedContact(contact);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

ContactRow.propTypes = {
  setSelectedContactId: PropTypes.func.isRequired,
  setSelectedContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};



