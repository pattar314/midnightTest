const Contact = require("../models/contactModel")

const createContact = ({contactInfo}) => {
    const newContact = new Contact({...contactInfo})
    console.log('new contactModel in resolvers: ', newContact)
    newContact.save()
    // return
}

const getAllContacts = async () => {
  const allContacts = await Contact.find({})
  return
}

const getSingleContact = async ({contactId}) => {
  const foundContact = await Contact.findById(contactId).data
  console.log('get single contact resolver: ', foundContact)
  //return
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
 // return
}

const createEvent = async ({eventInfo}) => {
  
 // return
}

const getAllEvents = async () => {
  
 // return
}

const getSingleEvent = async ({eventID}) => {
  
 // return
}

const updateEvent = async ({eventID}) => {
  
 // return
}

const deleteEvent = async ({eventID}) => {
  
 // return
}



module.exports = { createContact, getAllContacts, getSingleContact, updateContact, deleteContact, createEvent, getAllEvents, getSingleEvent, updateEvent, deleteEvent }