import React from 'react'
import classes from "./Loader.module.css"
function index() {
    return (
        <div className={`${classes.image_box}`}>
            <div className={`${classes.image}`}>
                <img src="/Image/logo/gyclogo.png" alt="..." />
                <span>Loading... </span>
            </div>
        </div>
    )
}

export default index