import { useState } from "react";
import { readResource } from "../../services/resourceManagement";

  
  
  
export const eventForms = {
  createForm: async () => {
    const [eventName, setEventName] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventMainImage, setEventMainImage] = useState(null)

    const formSubmit = (e) => {
      e.preventDefault()
      return (null)
    } 

    return (
      <form className="admin-action-form event-create-form" onSubmit={createFormSubmit}>
        <input className="event-create-form-name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        <input className="event-create-form-date" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        <input className="event-create-form-description" value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        <input className="event-create-form-main-image" type="file" value={eventMainImage} onChange={(e) => setEventMainImage(e.target.value)} />
        <input className="event-create-form-extra-images" type="file" multiple value={eventExtraImages} />
        <button type='submit'>submit</button>
      </form>
    )
  },
  readEvents: async (id) => {
    if(id){
      axios.get('/events/id')
    } else() {

    }
  },
  updateForm: async () => {

    const FormSubmit = await (e) => {
      e.preventDefault()

    } 

    return (
      <form className="admin-action-form-" onSubmit={updateFormSubmit}>

      </form>
    )
  },
  deleteForm: async () => {

    const FormSubmit = await (e) => {
      e.preventDefault()

    } 

    return (
      <form className="admin-action-form" onSubmit={deleteFormSubmit}>

      </form>
    )
  },
}