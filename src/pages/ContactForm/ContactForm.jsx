import "./ContactForm.css";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// todo: move sensitive information in env variables
// const serviceId='service_gtif0q7';
// const templateId='template_x2z2zjb';
// const publicKey='EMyMRmZnzoa-erEYf';(daca nu merge .env)

const ContactForm = () => {

  const [forceRerender, render] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_NEXT_PUBLIC_EMAILJS_SERVICEID, process.env.REACT_APP_NEXT_PUBLIC_EMAILJS_TEMPLATEID, formRef.current, process.env.REACT_APP_NEXT_PUBLIC_EMAILJS_PUBLICKEY)
    // emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)(daca nu merge .env)
      .then((result) => {
          console.log(result.text);
          render(!forceRerender);
          alert("Thank you! Your message has been sent.")
      }, (error) => {
          console.log(error.text);
          alert(error.text);
      });
  };

    return (
      <div className="contactForm-container">
        <Form key={forceRerender} onSubmit={sendEmail} ref={formRef}>
            <h3 style={{fontFamily: "Arial", color:"rgb(95, 57, 87)"}}>Contact Form:</h3>
            <p style={{fontWeight: 'bold', color:"rgb(95, 57, 87)"}}>The fields marked with `*` are mandatory</p>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Name*</Form.Label>
          <Form.Control type="text" name = "user_name" placeholder="Your first and last name" required/>
        </Form.Group>      
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" name = "user_email" placeholder="name@example.com" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message:</Form.Label>
          <Form.Control type='text' as="textarea"  rows={4} name="message" placeholder="Hello!" required/>
        </Form.Group>

        <Button className= "btn" variant="primary" type="submit" style={{background: 'rgb(245, 235, 235)', borderColor: "rgb(95, 57, 87", color: "rgb(95, 57, 87"}}> Send </Button>
      </Form>
    </div>
    )
}
export default ContactForm;

// VARIANTA 2, NESTILIZATA
// const ContactForm = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_gtif0q7', 'template_x2z2zjb', form.current, 'EMyMRmZnzoa-erEYf')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }

// export default ContactForm;