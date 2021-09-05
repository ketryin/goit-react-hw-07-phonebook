import { useEffect } from "react";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import {
  getContacts,
  addContact,
  removeContact,
} from "./redux/items/contactsOperations";
import { updateFilter } from "./redux/filter/filterActions";
import { useDispatch, useSelector } from "react-redux";
import contactsSelectors from "./redux/contactsSelector";

function App() {
  const items = useSelector(contactsSelectors.getFilteredContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  const onContactAdd = (contact) => dispatch(addContact(contact));
  const onFilterUpdate = (value) => dispatch(updateFilter(value));
  const onContactDelete = (id) => dispatch(removeContact(id));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form onSubmit={onContactAdd} />
      {items.length > 0 && (
        <>
          <h1>Contacts</h1>
          <Filter
            filter={filter}
            handleFilter={(e) => onFilterUpdate(e.currentTarget.value)}
          />
          <ContactsList
            filter={filter}
            contacts={items}
            onDeleteContact={onContactDelete}
          />
        </>
      )}
    </div>
  );
}

export default App;
