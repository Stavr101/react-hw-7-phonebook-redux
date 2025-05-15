import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../../redux/filterSlice";
export const FindContact = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (event) => {
    dispatch(setStatusFilter(event.target.value));
  };
  return (
    <div>
      <input
        onChange={handleFilterChange}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};
