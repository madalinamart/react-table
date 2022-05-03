import React, {useEffect, useState} from 'react'
import { editUser, getUsers } from '../api/api'
import { useNavigate, useParams } from 'react-router-dom'

const initialValues = {
    firstName: '',
    lastName:'',
    email:'',
    role:'',
    gender:'',
    date:'',
    nationality:'',
}

const EditUser = () => {

    const [employee, setEmployee] = useState(initialValues)
    const {firstName, lastName, email, role, gender, nationality, date} = employee
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () => {
        const response = await getUsers(id);
        setEmployee(response.data);
    }

    const handleChange = e => {
        const {name, value} = e.target
        setEmployee({
            ...employee,
            [name]: value
        })
    }

    const editUserDetails = async () => {
        const newEmployee = {name: firstName + ' ' + lastName, email : email, role: role, gender: gender, date: date, nationality: nationality}
        await editUser(id,newEmployee);
        navigate('./all')
    }

  return (      
    <div className='add-user-wrapper'>
      <p><span>User &gt;</span> Add User</p>
      <h1> Edit User </h1>
      <p className='mandatory'>*Mandatory fields</p>
      <form className='add-user-form' >
          <div className='inputs'>
            <div className='input'>
          <label htmlFor='firstName'>First Name:<span>*</span></label>
          <input type='text' name='firstName' id='firstName' required placeholder='First name' value={firstName} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='lastName'>Last Name:<span>*</span></label>
          <input type='text' name='lastName' id='lastName' required placeholder='Last name' value={lastName} onChange={handleChange}/>
          </div>

          <div className='input'>
          <label htmlFor='email'>Email address:<span>*</span></label>
          <input type='email' name='email' id='email' required placeholder='Email' value={email} onChange={handleChange}/>
          </div>

          <div className='role-gender'>
              <div className='input'>
              <label htmlFor='role'>Role:<span>*</span></label>
              <select name='role' value={role} onChange={handleChange}>
                  <option>Select</option>
                  <option value='Administrator'>Administrator</option>
                  <option value='Office Administrator'>Office Administrator</option>
                  <option value='Employee'>Employee</option>
              </select>
              </div>

              <div className='input'>
              <label htmlFor='role'>Gender:<span>*</span></label>
              <select name='gender' value={gender} onChange={handleChange}>
                  <option>Select</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
              </select>
              </div>

            </div>
          <div className='input'>
          <label htmlFor='nationality'>Nationality:<span>*</span></label>
          <input type='text' name='nationality' id='nationality' required placeholder='Romanian (RO)' value={nationality} onChange={handleChange}/>
          </div>
          
          </div>
          
          <div className='submit'>
          <div className='input'>
          <label htmlFor='date'>Birth Date</label>
          <input type='date' name='date' value={date} onChange={handleChange}/>
          </div>
          <div className='buttons'>
          <button >Reset Form</button>
          <button type='submit' onClick={()=> editUserDetails()}>SUBMIT</button>
          </div>
          </div>
      </form>
    </div>
  )
}

export default EditUser