import React, { useState } from 'react'
import ContactCrud from "./ContactCrud"
import "./ContactCrud.css";
const ContactCrudApp = () => {

    const [newName, setNewName] = useState("")

    const [newEmail, setNewEmail] = useState("")

    const [contacts, setContacts] = useState([

    ])

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setNewEmail(event.target.value)
    }

    const handleContactSubmit = () => {
        setContacts([...contacts, { name: newName, email: newEmail }]);
        setNewName("");
        setNewEmail("");
    }

    const handleDelete = (emailId) => {
        const newContacts = contacts.filter(item => item.email !== emailId);
        setContacts(newContacts);
    }

    const handleEdit = (emailId) => {
        const newContacts = [...contacts];
        const index = newContacts.findIndex(el => el.email === emailId);
        newContacts[index] = { name: newName, email: newEmail };
        setContacts(newContacts);
        setNewName("");
        setNewEmail("");
    }

    return (
        <>
            <div className="container"><span className="heading"><b><u>CRUD OPERATION</u></b></span>
                <form>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" onChange={handleNameChange} value={newName} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" onChange={handleEmailChange} value={newEmail} />
                        </div>
                    </div>
                    <button type="button" className="addContact" onClick={handleContactSubmit}><b>Submit</b></button>
                </form>
            </div>
            <ContactCrud contacts={contacts} handleDelete={handleDelete} handleEdit={handleEdit} />
        </>
    )
}

export default ContactCrudApp