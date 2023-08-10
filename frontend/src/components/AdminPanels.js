import axios from "axios"



export const adminPanels = {
    EventPanel : async () => {

    const eventRequest = await axios.get('/events')
    const eventData = eventRequest.data
    console.log('event data in admin panel: ', eventData)
      
    return (
      <section className="admin-panel event-admin-panel">
        <section className="event-admin-panel-list" ></section>
        <section className="event-admin-panel-actions"></section>
      </section>
    )
  },
  ServicesPanel: async () => {

    const servicesRequest = await axios.get('/services')
    const servicesData = servicesRequest.data
    console.log('services data in admin panel: ', servicesData)
      
    return (
      <section className="admin-panel services-admin-panel">
          <section className="services-admin-panel-list" ></section>
          <section className="services-admin-panel-actions"></section>
      </section>
    )
  },
  SponsorsPanel: async () => {

    const sponsorsRequest = await axios.get('/sponsors')
    const sponsorsData = sponsorsRequest.data
    console.log('sponsors data in admin panel: ', sponsorsData)
      
    return (
      <section className="admin-panel sponsors-admin-panel">
            <section className="sponsors-admin-panel-list" ></section>
            <section className="sponsors-admin-panel-actions"></section>
      </section>
    )
  },
  LandingPagePanel: async () => {

    const landingPageRequest = await axios.get('/landingPage')
    const landingPageData = landingPageRequest.data
    console.log('landingPage data in admin panel: ', landingPageData)
      
    return (
      <section className="admin-panel landing-page-admin-panel">
            <section className="landing-page-panel-list" ></section>
            <section className="landing-page-panel-actions"></section>
      </section>
    )
  }
}