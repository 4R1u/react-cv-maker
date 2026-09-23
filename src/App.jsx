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

  const empTemplate = function({key}) {
    return (<Section legend={"Organization"} key={key} fields={
      [
        {name: `comp_name_${key}`, label: "Company name", type: "text"},
        {name: `comp_title_${key}`, label: "Position Title", type: "text"},
        {name: `comp_role_${key}`, label: "Main Responsibilites", type: "text"},
        {name: `comp_date_${key}`, label: "Start and end date", type: "text"}
      ]
    }/>);
  };

  return (
    <>
      <Header />
      <form>
        <Section legend={generalInfo.legend} fields={generalInfo.fields} />
        <DynamicSection legend="Educational Experience" template={eduTemplate}/>
        <DynamicSection legend="Practical Experience" template={empTemplate}/>
        <button className={"submit-button"} type='button' onClick={toggleInputs}>Submit</button>
      </form>
    </>
  )
}

export default App

function toggleInputs() {
  const inputs = document.querySelectorAll("input").length;
  if (inputs > 0)
    commitInputs();
  else
    restoreInputs();
}

function commitInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(element => {
    const parent = element.parentElement;
    const newText = document.createElement("p");
    newText.textContent = element.value;
    for (const attr of element.attributes) {
      newText.setAttribute(attr.name, attr.value);
    }
    parent.removeChild(element);
    parent.appendChild(newText);
  });
}

function restoreInputs() {
  const ps = document.querySelectorAll("p");
  ps.forEach(element => {
    const parent = element.parentElement;
    const newInput = document.createElement("input");
    newInput.value = element.textContent;
    for (const attr of element.attributes) {
      newInput.setAttribute(attr.name, attr.value);
    }
    parent.removeChild(element);
    parent.appendChild(newInput);
  });
}
