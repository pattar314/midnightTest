const { Router } = require("express");
const Contact = require("../models/contactModel");


const contactRouter = Router()

//create
contactRouter.post('/', async (req, res) => {
  console.log('contact create router body:', req.body)
  const newContact = new Contact({...req.body})
  try {
    const savedContact = await newContact.save()
    console.log('saved contact: ', savedContact)
    res.status(201).send(savedContact)
  } catch(error) {
    console.log('there has been an error in create contact function in contact router: ', error)
  }
})

//read one

contactRouter.get('/', async (req, res) => {
  try{
    const requestedContact = await Contact.findById(req.body.id)
    res.status(200).send(requestedContact)
  } catch (error) {
    console.log('there was an error getting contact: ', error)
  }
})

//read all

contactRouter.get('/', async (req, res) => {
  try{
    const requestedContacts = await Contact.find({})
    res.status(200).send(requestedContact)
  } catch (error) {
    console.log('there was an error getting contact: ', error)
  }
})

//update

contactRouter.put('/', async (req, res) => {
  try{
    const requestedContact = await Contact.findByIdAndUpdate(req.body.id, req.body.updateData)
    res.status(200).send(requestedContact)
  } catch (error) {
    console.log('there was an error updating contact: ', error)
  }
})


//delete

contactRouter.delete('/', (req, res) => {
  try{
    const deletedContact = Contact.findByIdAndDelete(req.params.id)
    res.status(200).send(requestedContact)
  } catch (error) {
    console.log('there was an error deleting contact: ', error)
  }
})


module.exports = contactRouter