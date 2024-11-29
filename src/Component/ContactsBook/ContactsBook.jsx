import { Component } from "react";
import { nanoid } from "nanoid";
import "../../App.css";

import { ContactList } from "./ContactList/ContactList";
import { FindContact } from "./FindContact/FindContact";
import { ContactForm } from "./ContactForm/ContactForm";

export class ContactsBook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, number } = this.state;

    if (!name.trim() || !number.trim()) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { name: prevState.name, number: prevState.number, id: nanoid() },
      ],
      name: "",
      number: "",
    }));

    event.currentTarget.reset();
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filterContacts = contacts.filter(
      (contact) =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
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
          <ContactForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />

          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <FindContact onChange={this.handleChange} />

          <ContactList
            contacts={filterContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

export default ContactsBook;
