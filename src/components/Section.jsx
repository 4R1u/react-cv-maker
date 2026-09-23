function Section(props) {
    return (
        <fieldset>
            <legend>{props.legend}</legend>
            {props.fields.map((field) => {
                return (
                    <div className="field" key={field.name} >
                        <label htmlFor={field.name}>{field.label}</label>
                        <input name={field.name} id={field.name} type={field.type} autoComplete="on"/>
                    </div>
                );
            })}
        </fieldset>
    );
}

export default Section;
