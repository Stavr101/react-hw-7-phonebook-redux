import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

const contactsInitialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};
const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContacts, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
