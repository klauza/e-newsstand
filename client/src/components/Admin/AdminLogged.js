import React from 'react'

const AdminLogged = ({logout}) => {
  return (
    <div>
      logged in
      <button onClick={logout}>Log out</button>
    </div>
  )
}

export default AdminLogged
