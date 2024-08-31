import React, { useState } from 'react';
import './Contact.css'; // Ensure this file contains your contact-specific CSS

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        setSubmitted(true); // Update the state to show the submission message
        // Here, you can add code to handle the form data, like sending it to a server
    };

    return (
        <div id="contact">
            <h1>Contact Me</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="Write your name here" required /><br /><br />
                    <label htmlFor="phone">Phone:</label><br />
                    <input type="tel" id="phone" name="phone" placeholder="Write your phone number here" required /><br /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" name="email" placeholder="Write your email here" required /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            ) : (
                <p>Thank you! Your form has been submitted.</p>
            )}
        </div>
    );
};

export default Contact;
