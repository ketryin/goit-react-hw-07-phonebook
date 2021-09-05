import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as actions from "./items/contactsActions";
import { updateFilter } from "./filter/filterActions";

const contactItems = createReducer([], {
  [actions.getContactsSuccess]: (_, action) => action.payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isPending = createReducer(false, {
  [actions.getContactsPending]: () => true,
  [actions.addContactPending]: () => true,
  [actions.deleteContactPending]: () => true,
  [actions.getContactsSuccess]: () => false,
  [actions.getContactsError]: () => false,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [actions.getContactsError]: (_, { payload }) => payload,
  [actions.addContactError]: (_, { payload }) => payload,
  [actions.deleteContactError]: (_, { payload }) => payload,
  [actions.addContactPending]: () => null,
  [actions.getContactsPending]: () => null,
  [actions.deleteContactPending]: () => null,
});

const filter = createReducer("", {
  [updateFilter]: (_, action) => action.payload ?? "",
});

const items = combineReducers({ contactItems, isPending, error });

export const contactsReducer = combineReducers({
  items: items,
  filter: filter,
});
