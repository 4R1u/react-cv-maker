import { useState } from 'react'
import Header from './header.jsx'
import Section from './Section.jsx'
import DynamicSection from './DynamicSection.jsx'

function App() {
  let generalInfo = {
    legend: "General Info",
    fields: [
      {name: "full_name", label: "Full name", type: "text"},
      {name: "email", label: "Email", type: "email"},
      {name: "phone", label: "Phone Number", type: "tel"}
    ]
  }

  let eduTemplate = function({key}) {
    return (<div className='section-entry' key={key}>
      <div className='field'>
        <label htmlFor={`school_name_${key}`}>School name</label>
        <input type="text" name={`school_name_${key}`} id={`school_name_${key}`} autoComplete='on'/>
      </div>
      <div className='field'>
        <label htmlFor={`study_title_${key}`}>Title of study</label>
        <input type="text" name={`stduy_title_${key}`} id={`study_title_${key}`} autoComplete='on'/>
      </div>
      <div className='field'>
        <label htmlFor={`date_of_study_${key}`}>Date of study</label>
        <input type="text" name={`date_of_study_${key}`} id={`date_of_study_${key}`} autoComplete='on'/>
      </div>
    </div>);
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
