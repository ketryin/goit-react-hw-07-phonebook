import React from "react";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.contact} key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
