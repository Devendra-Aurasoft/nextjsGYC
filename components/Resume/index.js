import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal';
import ResumeDownloadForm from "../Form/ResumeDownloadForm"
const index = () => {
    const [selectedDocument, setSelectedDocument] = useState("")
    const [allResumes, setAllResumes] = useState({})
    // const [open, setOpen] = useState(false);
    // const onCloseModel = () => {
    //     setOpen(false)
    // }
    const [show, setShow] = useState(false);

    const handleClose = () => {
        console.log("handleClose");
        setShow(false);
    }
    const handleShow = () => {
        console.log("handleShow");
        setShow(true);
    }
    useEffect(() => {
        const getAllResumes = async () => {
            try {
                const result = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_resumes.php`)
                setAllResumes(result.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getAllResumes()
    }, [])
console.log("selectedDocument resume page", selectedDocument);
    return (
        <section className='resumes bg-light' >
            <div className="container">
                <h4 className='main-heading fs-40'>Sample Resumes</h4>
                <div className="row ">
                    {allResumes.resume && allResumes.resume.map((doc) => {
                        return (
                            <div key={doc.resume_id} className="col-sm-6 col-lg-3 mx-auto">
                                <div className="resume ">
                                    <a href={doc.filepath + doc.filename} style={{ pointerEvents: 'none' }}>{doc.title}
                                    </a>
                                    <i className="ri-download-fill" onClick={() => {
                                            setSelectedDocument(doc)
                                            handleShow()
                                        }} >
                                        <span  style={{ marginLeft: "4px" }}>Download
                                        </span>
                                    </i>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Modal  show={show} onHide={handleClose}>
                <ResumeDownloadForm selectedDocument={selectedDocument}  onCloseModel={handleClose} />
            </Modal>


        </section>

    )
}

export default index