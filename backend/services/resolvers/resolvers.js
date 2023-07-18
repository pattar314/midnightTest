const Contact = require("../models/contactModel")
const Event = require("../models/eventModel")

const createContact = ({contactInfo}) => {
    const newContact = new Contact({...contactInfo})
    console.log('new contact in resolvers: ', newContact)
    newContact.save()
    return newContact
}

const getAllContacts = async () => {
  const allContacts = await Contact.find({})
  console.log('all contacts from resolvers: ', allContacts)
  return allContacts
}

const getSingleContact = async ({contactId}) => {
  const foundContact = await Contact.findById(contactId).data
  console.log('get single contact resolver: ', foundContact)
  return foundContact
}

const updateContact = async ({contactID, updateData}) => {
  const contactToUpdate = await Contact.findById(contactID)
  console.log('contactToUpdate in resolvers: ', contactToUpdate)
  contactToUpdate = {contactToUpdate, ...updateData}
  console.log('updated contact: ', updatedContact)
  const savedUpdate = await contactToUpdate.save()
  console.log('savedUpdate: ', savedUpdate)
  return savedUpdate
}

const deleteContact = async ({contactID}) => {
  const contactToDelete = await Contact.findByIdAndDelete(contactID)
  console.log('contactToDelete in resolvers: ', contactToDelete)
  return contactToDelete
}

const createEvent = async ({eventInfo}) => {
  const newEvent = new Event({eventInfo})
  console.log('newEvent in resolvers: ', newEvent)
  const newEventReturn = await newEvent.save()
  console.log('newEventReturn in resolvers: ', newEventReturn)
  return newEventReturn
}

const getAllEvents = async () => {
  const allEvents = await Event.find({})
  console.log('allEvents in resolvers: ', allEvents)
  return allEvents
}

const getSingleEvent = async ({eventID}) => {
  const singleEvent = await Event.findById(eventID)
  console.log('singleEvent in resolvers: ', singleEvent)
  return singleEvent
}

const updateEvent = async ({eventID, updateData}) => {
  const eventToUpdate = await Event.findByIdAndUpdate(eventID, updateData)
  console.log('eventToUpdate in resolvers: ', eventToUpdate)
  return eventToUpdate
}

const deleteEvent = async ({eventID}) => {
  const eventToDelete = await Event.findByIdAndDelete(eventID)
  console.log('eventToDelete in resolvers: ', eventToDelete) 
  return eventToDelete
}



module.exports = { createContact, getAllContacts, getSingleContact, updateContact, deleteContact, createEvent, getAllEvents, getSingleEvent, updateEvent, deleteEvent }