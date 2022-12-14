import React from 'react'

function Accommodation({ accommodation }) {
  return (
    <>
      <section className='accommodation_list pb-5'>
        <div className="container ">
          {/* <h4 className='heading fs-40'> Accommodation</h4> */}
          <div className="row  s mx-auto">
            {
              accommodation.accommodation.length !== 0
                ?
                accommodation.accommodation.map((item, index) => {
                  return <div key={item.accommodation_id} className=" p-md-2 p-1 col-md-4 col-sm-6 col-12 m-auto" >
                    <div className="card acmd_card" >
                      <img src={item.imagepath + item.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        {
                          item.accommodation_name &&
                          <h4 className="card-title acmd_name ">{item.accommodation_name}</h4>
                        }
                        {
                          item.address &&
                          <p className="card-text acmd_address"><i className="fas fa-map-marker-alt"></i> {item.address}</p>
                        }
                        {
                          item.contact &&
                          <p className="card-text acmd_contact"><span><i className="fas fa-phone"></i> mobile no : </span> {item.contact}</p>
                        }
                        <button className='btn acmd_BTN' >Enquire Now</button>
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

export default Accommodation