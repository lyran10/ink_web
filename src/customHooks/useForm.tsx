import React,{ChangeEvent, useState} from 'react'

export type FormData = {
    firstName : string,
    lastName : string,
    phone : string,
    email : string
}

export const UseForm = () => {
const [formData,setFormData] = useState<FormData>({firstName : "", lastName : "", phone : "", email : ""})

const change = (e : ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.currentTarget.name] : e.currentTarget.value})
}

const events = {
    onChange : change
}

return [ formData, events ]
}
