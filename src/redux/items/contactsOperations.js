import * as actions from "./contactsActions";
import {
  fetchContacts,
  createContact,
  deleteContact,
} from "../../api/contactsApi";

export const getContacts = (_) => (dispatch) => {
  dispatch(actions.getContactsPending());

  return fetchContacts()
    .then((contacts) => dispatch(actions.getContactsSuccess(contacts)))
    .catch((error) => dispatch(actions.getContactsError(error.message)));
};

export const addContact = (data) => (dispatch) => {
  dispatch(actions.addContactPending());

  return createContact(data)
    .then((contact) => dispatch(actions.addContactSuccess(contact)))
    .catch((error) => dispatch(actions.addContactError(error.message)));
};

export const removeContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactPending());

  return deleteContact(id)
    .then((_) => dispatch(actions.deleteContactSuccess(id)))
    .catch((error) => dispatch(actions.deleteContactError(error.message)));
};
