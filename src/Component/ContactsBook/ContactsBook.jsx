// import { useState } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { ContactsList } from "./ContactList/ContactList";
import { FindContact } from "./FindContact/FindContact";
import { ContactForm } from "./ContactForm/ContactForm";
import {
  addContact,
  deleteContacts,
  setFilter,
} from "../../redux/contactsSlice";

export const ContactsBook = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector((state) => state.contacts);
  const getFormData = (form) => {
    const { name, number } = form.elements;
    return {
      name: name.value.trim(),
      number: number.value.trim(),
    };
  };
  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    const { name, number } = getFormData(form);
    console.log("🚀 ~ handleSubmit ~ name:", name);
    console.log("🚀 ~ handleSubmit ~ number:", number);
    // const name = form.name.value;
    // const number = form.number.value;

    if (!name.trim() || !number.trim()) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const isDublicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDublicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
  };

  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  const filterContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

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
        <ContactForm onSubmit={handleSubmit} />

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <FindContact onChange={handleFilterChange} />

        <ContactsList contacts={filterContacts} deleteContact={deleteContact} />
      </div>
    </div>
  );
};

export default ContactsBook;
