import React, { useState } from 'react'

const AdminMain = () => {
  const [currentAdminPage, setCurrentAdminPage] = useState('landingPage')

  const [actionName, setActionName] = useState(null)
  const [actionMethod, setActionMethod] = useState(null)
  const [actionData, setActionData] = useState(null)

  return (
    <section className='admin-main-wrapper'>
      <section className='admin-sidebar-menu'></section>
      <section className='admin-action-panel'>
        {currentAdminPage}
      </section>
    </section>
  )
}

export default AdminMain




