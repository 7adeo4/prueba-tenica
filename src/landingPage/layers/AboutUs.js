import React from 'react'

const AboutUs = () => {
    return (
        <div style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
            <div className="col-lg-6 text-center " style={{borderInlineStart: '15px solid', borderInlineStartColor:'#E0752F'}}>
                <img src="/assets/about-us/about-us-image.png" />
            </div>
            <div className="col-lg-6 container">
                <h2>About Us</h2>
                <h2 style={{color:'#E0752F'}}>We Help Businesses</h2>
                <p className="col-lg-8 lh-lg my-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                <button type="button" style={{backgroundColor:'#E0752F'}} class="btn text-light rounded-pill px-4">More info</button>
            </div>
        </div>
    )
}

export default AboutUs
