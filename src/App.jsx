import { useState } from 'react'
import Header from './header.jsx'
import Section from './Section.jsx'

function App() {
  let generalInfo = {
    legend: "General Info",
    fields: [
      {name: "full_name", label: "Full name", type: "text"},
      {name: "email", label: "Email", type: "email"},
      {name: "phone", label: "Phone Number", type: "tel"}
    ]
  }
  return (
    <>
      <Header />
      <form>
        <Section legend={generalInfo.legend} fields={generalInfo.fields} />
        <button type='button'>Submit</button>
      </form>
    </>
  )
}

export default App
