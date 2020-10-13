import React, {useState} from 'react'
import Form from './Form'

const App = () => {
  const team = {
    name: '',
    email: '',
    role:''
  }

  const [teamList, setTeamList] = useState([])

  const [formValues, setFormValues] = useState(team)

  const update = (inputName, inputValue) => setFormValues({
    ...formValues, [inputName]: inputValue,
  })

  const submitform = () => {

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    
    if(!newMember.name || !newMember.email || !newMember.role) return

    setTeamList([...teamList, newMember])
    setFormValues(team)
  }

  return (
    <div>
      <Form
      formValues = {formValues} 
      update={update}
      submitForm={submitform
      }
      />
      {teamList.map(mem => {
        return <div>
          <h1>{mem.name}</h1>
          <h2>{mem.email}</h2>
          <h3>{mem.role}</h3>
        </div>
      })}
    </div>
  )
}

export default App

