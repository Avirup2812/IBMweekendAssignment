import React from 'react'
import "./ContactCrud.css";

const ContactCrud = (props) => {
    return (
        <>
            <div className="listGroup">
                {props.contacts.map(item => {
                    return (
                        <>
                            <ol className="data">
                                <li>{item.name}</li>
                                <li>{item.email}</li>
                                <button className='deleteBtn' onClick={() => props.handleDelete(item.email)}>Delete</button>
                                <button className='editBtn' onClick={() => props.handleEdit(item.email)}>Edit</button>
                            </ol>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ContactCrud