import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("allContacts", function publishAllContacts() {
  return ContactsCollection.find(); // Live Query or Cursor
});

Meteor.publish("contacts", function publishAllContacts() {
  return ContactsCollection.find({ archived: { $ne: true } }); // Live Query or Cursor
});
