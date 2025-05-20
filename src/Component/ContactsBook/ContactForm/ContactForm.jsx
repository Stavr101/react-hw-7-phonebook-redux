import { useAddContactMutation } from "../../../redux/contactsSlice";
import InputContact from "../InputContact/InputContact";
import { InputNumber } from "../InputNumber/InputNumber";
// import { useDispatch, useSelector } from "react-redux";
// import { getContacts } from "../../../redux/selectors";
// import { addContact } from "../../../redux/operations";

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();

  // const dispatch = useDispatch();

  // const contacts = useSelector(getContacts);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.name.value;
    const phone = form.phone.value;
    await addContact({ name, phone }).unwrap();
    form.reset();

    if (!name.trim() || !phone.trim()) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // const isDuplicate = contacts.some(
    //   (contact) => contact.name.toLowerCase() === name.toLowerCase()
    // );
    // if (isDuplicate) {
    //   alert(`${name} is already in contacts.`);
    //   return;
    // }

    // dispatch(addContact({ name, phone }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <InputContact />
        </label>
        <label htmlFor="phone">
          Number
          <InputNumber />
        </label>

        <button type="submit" style={{ margin: 30 }}>
          Add contact
        </button>
      </form>
    </>
  );
};
