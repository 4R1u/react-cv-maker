import { useState } from "react";

function DynamicSection({ legend, name, template }) {
  const firstkey = crypto.randomUUID();
  const [list, setList] = useState({ [firstkey]: template({ key: firstkey }) });

  function addEntry() {
    const newKey = crypto.randomUUID();
    setList({ ...list, [newKey]: template({ key: newKey }) });
  }

  function removeEntry(key) {
    const newList = { ...list };
    delete newList[key];
    setList(newList);
  }

  return (
    <fieldset className="dynamic-section section" data-name={name}>
      <legend>{legend}</legend>
      {Object.keys(list).map((key) => (
        <div className="removable-entry" key={key}>
          {list[key]}{" "}
          <button
            type="button"
            onClick={() => {
              removeEntry(key);
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEntry}>
        Add Entry
      </button>
    </fieldset>
  );
}

export default DynamicSection;
