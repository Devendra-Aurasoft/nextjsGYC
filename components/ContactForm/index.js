import classses from "./contactForm.module.css"
import React, { useEffect, useMemo, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const ContactForm = (props) => {
    const initialValues = useMemo(() => {
        return {
            fullname: "",
            phone: "",
            email: "",
            message: ""
        }
    }, [])
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values) => {
        let errors = {};
        const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        if (!values.fullname) {
            errors.fullname = "Full name is required";
        } else if (!nameRegex.test(values.fullname.trim())) {
            errors.fullname = "Please enter valid name";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!validator.isMobilePhone(values.phone)) {
            errors.phone = "Please enter valid phone number";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!validator.isEmail(values.email)) {
            errors.email = "Please enter valid email address";
        }
        if (!values.message) {
            errors.message = "Please fill this field"
        }
        return errors;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
    }

    useEffect(() => {
        const PostData = async () => {
            try {
                console.log("i am try ");
                const url = 'https://getyourcollege.in/gyc_admin/api/add_contact_enquiry.php'
                const result = await axios.post(url, formValues)
                console.log("result",result);
                if (result.data.status) {
                    toast.success(result.data.message, { position: "top-center", });
                } else {
                    toast.error(result.data.message)
                }
            } catch (e) {
                toast.error(e, { position: "top-center", });
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            console.log("Hello I am in");
            PostData()
            setFormValues(initialValues)
            setIsSubmitting(false)
            console.log("Hello I am in");
        }
    }, [formErrors, isSubmitting, initialValues, formValues])
    return (
        <>
            <Container center>
                <div className=' '>
                    <form onSubmit={handleSubmit} noValidate >
                        <h3 className='Form_main_heading'>Connect with us</h3>
                        <div className="input-field">
                            <input
                                type="text "
                                placeholder='Enter Your Full Name'
                                id='fullname'
                                name='fullname'
                                value={formValues.fullname}
                                onChange={handleChange}
                                className={formErrors.fullname && "input-error"}
                            />
                            {formErrors.fullname && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.fullname}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field">

                            <input type="number" id='phone'
                                placeholder='Enter Your Phone Number'
                                name='phone'
                                value={formValues.phone}
                                onChange={handleChange}
                                className={formErrors.phone && "input-error"}
                            />
                            {formErrors.phone && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.phone}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field">

                            <input type="email" id='email'
                                placeholder='Enter Your Email'
                                name='email'
                                value={formValues.email}
                                onChange={handleChange}
                                className={formErrors.email && "input-error"}
                            />
                            {formErrors.email && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.email}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field text-area">

                            <textarea id='message'
                                placeholder='Enter your message'
                                name='message'
                                value={formValues.message}
                                onChange={handleChange}
                                className={formErrors.message && "input-error"}
                            />
                            {formErrors.message && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.message}</small>
                                </div>
                            )}
                        </div>


                        <div className="input-field">
                            <button type="submit" className='btn btn-outline-success  '>Send Message </button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default ContactForm