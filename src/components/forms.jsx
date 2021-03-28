import React from 'react';
import Select from 'react-select';

const Forms = (props) => {
    const [data, setData] = React.useState({});
    const [selectedoption, setSelectedOption] = React.useState(null);

    const handleChange = selectedOption => {
        console.log(selectedOption)
        setSelectedOption(selectedOption);
        props.handleChange({ [props.name]: selectedOption.value }, props.name)
    };
    const handleInputs = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        props.getValues(e)

    }
    const submit = (e) => {
        e.preventDefault()
        props.submit()
    }

    const Input = () => {
        if (props.type !== 'select') {
            if (props.type !== 'button') {
                return (
                    <div className="form-group">
                        {/* <label className="col-sm-12 col-form-label mt-4 mb-3">Name</label> */}
                        <label htmlFor="name" className="col-form-label">{props.label}</label>
                        <input type={props.type} className="form-control" name={props.name} placeholder={props.placeholder} id={props.name} aria-describedby={`${props.name}Feedback`} defaultValue={data[props.name]} onBlur={(e) => handleInputs(e)} required={props.required} />
                        <div style={{ display: props.errorMessage ? 'block' : 'none' }} id={`${props.name}Feedback`} className="invalid-feedback">
                            {props.errorMessage}
                        </div>
                    </div>
                )
            } else if (props.type === 'button') {
                return (
                    <button className="btn btn-success btn-block" onClick={(e) => submit(e, props.formError)}>{props.title}</button>
                )
            }

        } else if (props.type === 'select') {
            return (
                <div className="form-group">
                    <label className="col-form-label">{props.label}</label>
                    <Select
                        value={selectedoption}
                        onChange={handleChange}
                        options={props.options}
                        placeholder="Choose"
                    />
                    <div style={{ display: props.errorMessage ? 'block' : 'none' }} id={`${props.name}Feedback`} className="invalid-feedback">
                        {props.errorMessage}
                    </div>
                </div>
            )

        }
    }
    return (
        <div className="form">
            <Input />
        </div>
    )
}

export default Forms
