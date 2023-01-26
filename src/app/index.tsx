import React from 'react'
import AddAccount from './AddAccount.tsx'

function App() {
  return (
    <div>
      {false ? (
        <h1>nope</h1>
        //<EnterPassword />
      ): (
        <AddAccount />
      )}
    </div>
  )
}

export default App

