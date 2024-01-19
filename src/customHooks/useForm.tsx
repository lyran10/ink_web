import React,{ChangeEvent, FormEvent, useState} from 'react'

export type FormData = {
    firstName : string,
    lastName : string,
    phone : string,
    email : string,
    when : string
}

export const UseForm = () => {
const [formData,setFormData] = useState<FormData>({firstName : "", lastName : "", phone : "", email : "",when : ""})
const [error,setError] = useState<boolean>(false)

const change = (e : ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
}

const handleClick = (e : FormEvent<HTMLButtonElement>) => {
e.preventDefault()
const {firstName, lastName, phone, email, when} = formData
if(!firstName || !lastName || !phone || !email || !when){
    setError(true)
    return
}
}

const events = {
    onChange : change
}

const buttonEvents = {
    onSubmit : handleClick
}

return [ formData, events, buttonEvents, error ]
}
