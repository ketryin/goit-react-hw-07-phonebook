import { createSelector } from "@reduxjs/toolkit";

const items = (state) => state.contactsReducer.items.contactItems;
const filter = (state) => state.contactsReducer.filter;

const getFilteredContacts = createSelector([items, filter], (items, filter) => {
  return items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
});

const getContacts = createSelector([items], (items) => items);
const getFilter = createSelector([filter], (filter) => filter);

const contactsSelectors = {
  getContacts,
  getFilter,
  getFilteredContacts,
};

export default contactsSelectors;
