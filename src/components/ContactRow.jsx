import PropTypes from "prop-types";

export default function ContactRow({ contact, setSelectedContactId, setSelectedContact }) {
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

// Add prop types validation for the 'contact', 'setSelectedContactId', and 'setSelectedContact' props
ContactRow.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  setSelectedContactId: PropTypes.func.isRequired,
  setSelectedContact: PropTypes.func.isRequired,
};
