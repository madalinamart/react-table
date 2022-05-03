import axios from 'axios'

const url = 'http://localhost:3006/employees'

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`)
}

export const addUser = async(employee) => {
    return await axios.post(url, employee)
}

export const editUser = async(id,employee) => {
    return await axios.put(`${url}/${id}`, employee)
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}