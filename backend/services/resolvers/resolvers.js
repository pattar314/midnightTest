const Contact = require("../models/contactModel")
const Event = require("../models/eventModel")

const createContact = ({contactInfo}) => {
    const newContact = new Contact({...contactInfo})
    console.log('new contact in resolvers: ', newContact)
    newContact.save()
    return newContact
}

const getContacts = async ({id}) => {
  if(id){
  const foundContact = await Contact.findById(contactId).data
  console.log('get single contact resolver: ', foundContact)
  return foundContact
  } else {
    const allContacts = await Contact.find({})
    console.log('all contacts from resolvers: ', allContacts)
    return allContacts
  }

}



const updateContact = async ({contactID, updateData}) => {
  const contactToUpdate = await Contact.findById(contactID)
  console.log('contactToUpdate in resolvers: ', contactToUpdate)
  contactToUpdate = {...contactToUpdate, ...updateData}
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

const getSingleEvent = async (eventID) => {
  console.log('test: ', eventID)
  const singleEvent = await Event.findById(eventID)
  console.log('singleEvent in resolvers: ', singleEvent)
  return singleEvent
}

const updateEvent = async ({eventID, updateData}) => {
  console.log(`eventId: ${eventID}, updateData: ${updateData}`)
  const eventToUpdate = await Event.findByIdAndUpdate(eventID, updateData)
  console.log('eventToUpdate in resolvers: ', eventToUpdate)
  return eventToUpdate
}

const deleteEvent = async ({deleteId}) => {
  console.log('delete id: ', deleteId)
  const eventToDelete = await Event.findByIdAndDelete(deleteId)
  console.log('eventToDelete in resolvers: ', eventToDelete) 
  return eventToDelete
}

//service 
/* servicecreate
servicereadOne
servicereadAll
serviceUpdate
serviceDelete */

//projects


// sponsors

module.exports = { createContact, getContacts, updateContact, deleteContact, createEvent, getAllEvents, getSingleEvent, updateEvent, deleteEvent }