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
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  const onContactAdd = (contact) => {
    if (
      contacts.find((c) => c.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert("Error! Can not add existing contact.");
      return;
    }

    dispatch(addContact(contact));
  };
  const onFilterUpdate = (value) => dispatch(updateFilter(value));
  const onContactDelete = (id) => dispatch(removeContact(id));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <Form onSubmit={onContactAdd} />
      {filteredContacts.length > 0 && (
        <>
          <h1>Contacts</h1>
          <Filter
            filter={filter}
            handleFilter={(e) => onFilterUpdate(e.currentTarget.value)}
          />
          <ContactsList
            filter={filter}
            contacts={filteredContacts}
            onDeleteContact={onContactDelete}
          />
        </>
      )}
    </div>
  );
}

export default App;
