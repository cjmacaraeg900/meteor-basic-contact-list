import React from "react";
import { ContactsCollection } from "../api/ContactsCollection";
import { useTracker } from "meteor/react-meteor-data";

export const ContactList = () => {
  // Note: if you dont use useTracker, it will no renders the updated data in database

  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch(); //useTracker for watching the data and propagating data into database
  });

  //   const contacts = ContactsCollection.find({}); // no use tracker

  return (
    <>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </>
  );
};
