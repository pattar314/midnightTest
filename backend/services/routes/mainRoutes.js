const { Router } = require("express");
const { getAllEvents, getSingleEvent, deleteEvent, updateEvent } = require("../resolvers/resolvers");
const Event = require("../models/eventModel");


const mainRouter = Router()

mainRouter.get('/events', async (req, res) => {
  if(req.body.id){
    const eventId = req.body.id
    console.log('event id in main routes: ', eventId)
    const fetchedEvent = await getSingleEvent(eventId)
    res.status(200).send(fetchedEvent)
  } else {
      const allEvents = await getAllEvents()
    res.status(200).send(allEvents)
  }
})

mainRouter.post('/events', async (req, res) => {
  const newEvent = new Event({...req.body})
  console.log('new event in mainroutes: ', newEvent)
  try{
    const savedEvent = await newEvent.save()
    console.log('saved event in main routes: ', savedEvent)
    res.status(201).send(savedEvent)
  } catch (error){
    console.log('there was an error making new event in mainRoutes: ', error)
  }
})

mainRouter.delete('/events', async (req, res) => {
  try {
    const deleteId = req.body.eventID
    console.log('test 1: ', deleteId)
    const eventToDelete = await deleteEvent({deleteId})
    console.log('event to delete in main router: ', eventToDelete)
    res.status(200).send(eventToDelete)
  } catch (error) {
    console.log('there was an error: ', error)
  }
  
})

mainRouter.put('/events', async (req, res) => {
  console.log('request body:', req.body)
  try {
    const eventID = req.body.id
    console.log('event Id: ', eventID)
    console.log('updateData: ', req.body.updateData)
    const editEvent = await updateEvent({eventID: eventID, updateData: req.body.updateData})
    console.log('edit event in mainRoutes: ', editEvent)
    res.status(201).send(editEvent)
  } catch (error) {
    console.log('there was an error in main routes edit event: ', error)
  } 
})



module.exports = mainRouter



