import { useState } from "react";

function DynamicSection({ legend, name, template }) {
  const [list, setList] = useState([template({ key: crypto.randomUUID() })]);

  function addEntry() {
    setList(list.concat(template({ key: crypto.randomUUID() })));
  }

  return (
    <fieldset className="dynamic-section section" data-name={name}>
      <legend>{legend}</legend>
      {list.map((field) => field)}
      <button type="button" onClick={addEntry}>
        Add Entry
      </button>
    </fieldset>
  );
}

export default DynamicSection;
