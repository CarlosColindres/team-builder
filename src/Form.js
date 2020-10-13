import React from 'react'

const Form = ({formValues, update, submitForm}) => {

    const onChange = e => {
        const {name, value} = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submitForm()
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
            </label>
            <input
            onChange={onChange}
            type='text'
            name='name'
            value={formValues.name}
            placeholder='Type your name'
            />
            <label>
                Email:
            </label>
            <input
            onChange={onChange}
            type='email'
            name='email'
            value={formValues.email}
            placeholder='Type your name'
            />
            <select name='role' value={formValues.role} onChange={onChange}>
                <option>==Select Role==</option>
                <option value='backend-engineer'>Backend Engineer</option>
                <option value='frontend-engineer'>Frontend Engineer</option>
                <option value='designer'>Designer</option>
            </select>
            <button>Submit</button>
        </form>
    )
}

export default Form
