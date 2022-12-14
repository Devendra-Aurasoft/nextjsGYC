import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios'
import validator from "validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ResumeDownloadForm = (props) => {
    const { onCloseModel, selectedDocument } = props;
    console.log("selectedDocument", selectedDocument);
    const initialValues = useMemo(() => {
        return {
            fullname: "",
            email: "",
            phone: "",
            resume_id: selectedDocument.resume_id
        }
    }, [selectedDocument.resume_id])
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [downLink, setDownloadLink] = useState("")

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
    const getHtml = (content) => {
        if (content) {
            return {
                __html: content
            }
        } else {
            return;
        }
    }
    useEffect(() => {
        const PostData = async () => {
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/download_resume.php`
                const result = await axios.post(url, formValues)
                if (result.data.status) {
                    console.log("result", result);
                    toast.success(result.data.message)
                    setDownloadLink(result.data.message)
                } else {
                    toast.error(result.data.message)
                }
            } catch (e) {
                console.log('error :-', e.message);
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            PostData()
            setFormValues(initialValues)
            setIsSubmitting(false)
        }
    }, [formErrors, onCloseModel, isSubmitting, initialValues, formValues])
    return (<>
        {downLink ?
            <h5 className="message m-0 " style={{ background: "white" }} dangerouslySetInnerHTML={getHtml(downLink)}></h5>
            :
            <div className=' shadow-lg '>
                <form onSubmit={handleSubmit} noValidate >
                    <h3 className='Form_main_heading'>Download {selectedDocument.title} </h3>
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
                    <div className="input-field mb-3">
                        <button type="submit" className='btn btn-outline-success  '> Get Download Link </button>
                    </div>
                </form>
            </div>
        }
    </>
    )
    return (
        <h1>ResumeDownloadForm</h1>
    )
}

export default ResumeDownloadForm