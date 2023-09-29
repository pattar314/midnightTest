import React from 'react'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/admin/landingPage' element={<Admin page={landingPage} />} />
      <Route path='/admin/events' element={<Admin page={events} />} />
      <Route path='/admin/services' element={<Admin page={services} />} />
      <Route path='/admin/projects' element={<Admin page={projects} />} />
      <Route path='/admin/sponsors' element={<Admin page={sponsors} />} />
      <Route path='/admin/contact' element={<Admin page={contact} />} />
    </Routes>
  )
}

export default AdminRoutes






