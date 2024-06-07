import React from 'react'
import NavBar from './NavBar'

const AddAlbum = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <marquee><h1>ADD ALBUM</h1></marquee>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">album id</div>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">id</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">

                                <div className="label form-label">title</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <div className="label form-label">quality</div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="label form-label">size</div>
                               <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
                                <button className="btn btn-success">submit</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddAlbum