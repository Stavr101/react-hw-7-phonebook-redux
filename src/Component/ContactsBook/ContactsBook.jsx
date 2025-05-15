import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { ContactsList } from "./ContactList/ContactList";
import { FindContact } from "./FindContact/FindContact";
import { ContactForm } from "./ContactForm/ContactForm";

import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";

import { getErrors, getIsLoading } from "../../redux/selectors";

export const ContactsBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getErrors);

  return (
    <div className="card">
      <h1>Phonebook</h1>
      <div
        style={{
          margin: 8,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <FindContact />

        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsBook;
