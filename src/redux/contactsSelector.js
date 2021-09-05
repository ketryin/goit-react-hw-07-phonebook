import { createSelector } from "@reduxjs/toolkit";

const getItems = (state) => state.contactsReducer.items;
const getFilter = (state) => state.contactsReducer.filter;

const getFilteredContacts = createSelector(
  [getItems, getFilter],
  ({ contactItems }, filter) => {
    return contactItems.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const contactsSelectors = {
  getItems,
  getFilter,
  getFilteredContacts,
};

export default contactsSelectors;
