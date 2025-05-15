import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "../../../redux/selectors";
import { deleteContact } from "../../../redux/operations";

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filterContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.phone.includes(filter)
  );

  return (
    <ul>
      {filterContacts.map((contact) => (
        <li
          key={contact.id}
          // style={{
          //   marginBottom: "15px",
          //   padding: "12px 20px",
          //   border: "1px solid #ccc",
          //   borderRadius: "8px",
          //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          //   display: "flex",
          //   justifyContent: "space-between",
          //   alignItems: "center",
          //   backgroundColor: "#f9f9f9",
          // }}
        >
          <div style={{ display: "flex" }}>
            <strong style={{ margin: "15px" }}>{contact.name}</strong>

            <strong style={{ margin: "15px" }}> {contact.phone}</strong>
          </div>
          <button
            type="button"
            onClick={() => contactDelete(contact.id)}
            style={{ border: "red" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
