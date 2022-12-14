import React, { useState, useEffect, useMemo } from 'react'
// import moment from 'moment';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css"
// import DatePicker from "react-datepicker"
// import 'react-datepicker/dist/react-datepicker.css'
// import axios from 'axios';
// import validator from "validator";

function CollegeFormPage() {
    const [dob, setDate] = useState()
    // Get Data From Query Element 
    // const { search } = useLocation();
    // const query = new URLSearchParams(search);
    // const college = query.get('college');
    // const course = window.atob(query.get('course'))
    // const type = query.get('type');


   // dummy data
   const course = "B.Com"
   const college = "Parul University (University)"
   const type = "UG"

    // try to Solve the issue 
    const [collegeList, setCollegeList] = useState([])
    useEffect(() => {
        const getColleges = async () => {
            try {
                let response
                if (college) {
                    response = await axios.get(`https://getyourcollege.in/gyc_admin/api/get_college_by_id.php?collegeid=${college}`);
                    setCollegeList(response.data.college)
                }
            } catch (error) {
                console.log(error.message)
            }
        }
        getColleges()
    }, [college])


 
    const initialValues = useMemo(() => {
        if (type === "3") {
            return {
                fullname: "",
                email: "",
                phone: "",
                dob: "",
                course,
                coaching_id: college,
                city: ""
            }
        }
        else {
            return {
                fullname: "",
                email: "",
                phone: "",
                dob: "",
                course,
                college_id: college,
                city: ""
            }
        }
    }, [course, college, type])

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [maxDate] = useState(() => {
        const maxDate = new Date()
        maxDate.setDate(maxDate.getDate() - 1)
        return maxDate
    })
    const [minDate] = useState(() => {
        const minDate = new Date()
        minDate.setFullYear(maxDate.getFullYear() - 100)
        return minDate
    })
    const validate = (values) => {
        let errors = {};
        const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        const cityRegex = /^[a-zA-Z',.\s-]{1,25}$/
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
        if (!values.dob) {
            errors.dob = "DOB is required";
        }
        if (!values.course) {
            errors.course = "Course is required";
        }
        if (!values.city) {
            errors.city = "City is required";
        } else if (!cityRegex.test(values.city)) {
            errors.city = "Please enter valid city name";
        }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
    }

    const handleDate = (str) => {
        if (str) {
            const dob = moment(str).format("DD-MM-YYYY")
            setDate(str)
            setFormValues({ ...formValues, dob })
        }

    }

    useEffect(() => {
        const submitForm = async () => {
            try {
                if (type === "3") {
                    const result = await axios.post('https://getyourcollege.in/gyc_admin/api/add_coaching_enquiry.php', formValues);
                    if (result.data.status) {
                        toast.success(result.data.message);
                    } else {
                        toast.error(result.data.message)
                    }
                }
                else {
                    const result = await axios.post('https://getyourcollege.in/gyc_admin/api/add_college_enquiry.php', formValues);
                    if (result.data.status) {
                        toast.success(result.data.message);
                    } else {
                        toast.error(result.data.message)
                    }
                }
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
            setFormValues(initialValues)
            setDate(null)
            setIsSubmitting(false)
        }
    }, [isSubmitting, formErrors, formValues, initialValues, type])


    return (
        <>
            <section className=' md-my-5 my-1 py-md-5 '>
                <div className="container ">
                    <div className="form-container row">
                        <div className="col-lg-12 p-0">
                            <div className='shadow-lg'>
                                <form noValidate className='row d-flex justify-content-center '>
                                    {
                                        `${collegeList[0]?.college_img_path}${collegeList[0]?.college_image} ` && <img src={`${collegeList[0]?.college_img_path}${collegeList[0]?.college_image} `} className="img-fluid" alt="..." />
                                    }
                                    <h2 className='sub-heading mt-4'>Please Fill The Form</h2>
                                    {collegeList[0]?.college_name &&
                                        <h4 className='main-heading mt-2'>{collegeList[0]?.college_name}</h4>
                                    }
                                    <div className="input-field col-5 my-md-3 my-1 ">
                                        <input
                                            type="text "
                                            placeholder='Enter Your Full Name'
                                            id='fullname'
                                            name='fullname'
                                            value={formValues.fullname}
                                            onChange={handleChange}
                                            className={formErrors.fullname && "input-error"}
                                            autoComplete="off"
                                        />
                                        {formErrors.fullname && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.fullname}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="number" id='phone'
                                            placeholder='Enter Your Phone Number'
                                            name='phone'
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            className={formErrors.phone && "input-error"}
                                            autoComplete="off"
                                        />
                                        {formErrors.phone && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.phone}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="email" id='email'
                                            placeholder='Enter Your Email'
                                            name='email'
                                            value={formValues.email}
                                            onChange={handleChange}
                                            className={formErrors.email && "input-error"}
                                            autoComplete="off"
                                        />
                                        {formErrors.email && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.email}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <DatePicker
                                            selected={dob ? dob : null}
                                            onChange={(date) => handleDate(date)}
                                            className={formErrors.dob && 'input-error'}
                                            id="dob" name='dob' placeholderText="Enter DOB"

                                            dateFormat={"dd-MM-yyyy"}

                                            autoComplete='off'
                                            showYearDropdown
                                            minDate={minDate ? minDate : new Date()}
                                            maxDate={maxDate ? maxDate : new Date()}
                                        />
                                        {formErrors.dob && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.dob}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="text" id='course'
                                            name='course'
                                            value={formValues.course}
                                            onChange={handleChange}
                                            className={formErrors.course && "input-error"}
                                            autoComplete="off"
                                            readOnly
                                            disabled
                                        />
                                        {formErrors.course && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.course}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input
                                            type="text"
                                            id='collegeName'
                                            name='collegeName'
                                            value={collegeList[0]?.college_name}
                                            autoComplete="off"
                                            disabled
                                        />
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="text" id='city' name='city'
                                            placeholder='Enter Your City'
                                            value={formValues.city}
                                            onChange={handleChange}
                                            className={formErrors.city && "input-error"}
                                            autoComplete="off" />
                                        {formErrors.city && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.city}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-md-8 col-10 my-3">
                                        <button type="button" className='btn btn-outline-success submit-button ' onClick={handleSubmit}>Apply Now </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
    // return (

    //     <h1>Dvendra</h1>
    // )
}

export default CollegeFormPage
