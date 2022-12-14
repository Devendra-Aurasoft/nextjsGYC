import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function index({ college, data }) {
  console.log("data", data, college);
  const getiframe = (iframe) => {
    if (iframe) {
      return {
        __html: iframe
      }
    } else {
      return;
    }
  }
  return (
    <>
      {
        typeof window !== "undefined" && <section id='ReadMorePopup'>
          <Container className='py-5' style={{ background: "rgb(246 246 246)" }}>
            <Row className="d-flex justify-content-center ">
              <Col lg="5" className='align-items-center d-flex'>
                <div className='text-center align-items-center d-flex row'>
                  <img src={data[0].logo_path + data[0].college_logo} className="my-3" alt="LOGO" />
                  <h4 className='heading'> <div style={{ color: "var(--orange)" }} >{data[0].college_name} ({data[0].college_type})</div></h4>
                </div>
              </Col>
              <Col lg="7" className="d-flex readmore_imgSection">
                <>
                  {
                    data[0].iframe !== "" ? <div className='video-container' dangerouslySetInnerHTML={getiframe(window.atob(data[0].iframe))}  ></div>
                      : <img src={data[0].college_img_path + data[0].college_image} style={{ width: "100%" }} className="my-3" alt="LOGO" />
                  }
                </>
              </Col>
              <Col lg="10" className='my-3'>
                {
                  data[0].description && <p className='text-content ' dangerouslySetInnerHTML={getiframe(window.atob(data[0].description))}></p>
                }

                {data[0].address && data[0].city && data[0].state && <p className="card-text"><span><i className="fas fa-map-marker-alt"></i> Address</span> : {data[0].address}, {data[0].city}, {data[0].state}</p>}
                {data[0].phone && <p className="card-text"><span><i className="fas fa-phone"></i> Contact</span> : {data[0].phone}</p>}
                {data[0].email && <p className="card-text"><span><i className="fa-solid fa-envelope"></i> Email</span>  {data[0].email}</p>}
              </Col>
            </Row>
          </Container>
        </section>
      }
    </>

  )
}



export default index


export async function getServerSideProps(context) {
  const { params } = context
  const { college } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_college_by_id.php?collegeid=${college}&slug=1`)
  const data = await response.json()
  return {
    props: {
      college,
      data: data.college
    }
  }
}