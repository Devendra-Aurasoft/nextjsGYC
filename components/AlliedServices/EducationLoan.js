import React from 'react'

function EducationLoan({ Loan }) {
    return (
        <>
            <section className='Bank_list pb-md-5 pb-1'>
                <div className="container ">
                    {/* <h4 className='heading fs-40'> Bank List</h4> */}
                    <div className="row  s mx-auto">
                        {
                            Loan.loans.length !== 0
                                ?
                                Loan.loans.map((item) => {
                                    return <div key={item.loan_id} className=" p-md-2 p-1 col-md-4 col-sm-6 col-12 m-auto" >
                                        <div className="card bank_list " >
                                            <div className="card-header">
                                                <h4>{item.bank_name}</h4>
                                            </div>
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                {
                                                    item.max_amount &&
                                                    <h5 className="card-title"><span>Amount :</span> {item.max_amount} &#8377;</h5>
                                                }
                                                {
                                                    item.contact &&
                                                    <p className="card-text mb-0"><span><i className="fas fa-phone"></i> Contact :</span> {item.contact}</p>
                                                }
                                                {
                                                    item.description &&
                                                    <p className="card-text"> {window.atob(item.description)} </p>
                                                }
                                                <button className='btn loan_BTN mx-auto' >Enquire Now</button>
                                            </div>

                                        </div>
                                    </div>
                                })
                                :
                                <h6 className='text-danger text-center'>No data is available yet!</h6>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default EducationLoan