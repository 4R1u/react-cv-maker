import { useState } from 'react'
import Header from './header.jsx'
import Section from './Section.jsx'
import DynamicSection from './DynamicSection.jsx'

function App() {
  const generalInfo = {
    legend: "General Info",
    fields: [
      {name: "full_name", label: "Full name", type: "text"},
      {name: "email", label: "Email", type: "email"},
      {name: "phone", label: "Phone Number", type: "tel"}
    ]
  }

  const eduTemplate = function({key}) {
    return (<Section legend={"Institute"} key={key} fields={
      [
        {name: `school_name_${key}`, label: "School name", type: "text"},
        {name: `school_title_${key}`, label: "Title of Study", type: "text"},
        {name: `school_date_${key}`, label: "Date of Study", type: "text"}
      ]
    }/>);
  };

  return (
    <>
      <Header />
      <form>
        <Section legend={generalInfo.legend} fields={generalInfo.fields} />
        <DynamicSection legend="Educational Experience" template={eduTemplate}/>
        <button type='button'>Submit</button>
      </form>
    </>
  )
}

export default App
