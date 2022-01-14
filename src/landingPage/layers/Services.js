import React from 'react'

const Services = () => {
    return (
        <div style={{ height: '80vh', backgroundColor: '#F2F4F1' }}>
            <div style={{ height: '90%' }} className="container-fluid row align-items-center justify-content-center">
                <div>
                    <div className="row justify-content-center p-3 pt-5">
                        <div className="col col-lg-2">
                            <h2>Services</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col col-lg-8">
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel gravida felis, id tempor ex. Suspendisse congue purus eu neque auctor, eget dictum ipsum facilisis. Sed scelerisque sodales lorem,</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col text-center">
                        <img src='/assets/services/cloud-icon.svg' />
                        <h3>Stet clita kasd gubergren</h3>
                    </div>
                    <div class="col text-center">
                        <img src='/assets/services/globe-icon.svg' />
                        <h3>At vero eos et accusam</h3>
                    </div>
                    <div class="col text-center">
                        <img src='/assets/services/headset-icon.svg' />
                        <h3>Sed ut perspiciatis unde</h3>
                    </div>
                    <div class="col text-center">
                        <img src='/assets/services/users-icon.svg' />
                        <h3>Lorem ipsum dolor sit amet</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services
