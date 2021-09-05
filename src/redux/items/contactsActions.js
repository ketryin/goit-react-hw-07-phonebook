import { createAction } from "@reduxjs/toolkit";

export const getContactsPending = createAction("contacts/getAllPending");
export const getContactsSuccess = createAction("contacts/getAllSuccess");
export const getContactsError = createAction("contacts/getAllError");

export const addContactPending = createAction("contacts/addPending");
export const addContactSuccess = createAction("contacts/addSuccess");
export const addContactError = createAction("contacts/addError");

export const deleteContactPending = createAction("contacts/deletePending");
export const deleteContactSuccess = createAction("contacts/deleteSuccess");
export const deleteContactError = createAction("contacts/deleteError");
