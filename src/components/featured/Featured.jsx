import React from "react"
import "../featured/featured.css"

const Featured =()=>{
    return(
<div className="featured">
    <div className="featuredItem">
        <img src="https://www.akshartours.com/wp-content/uploads/2020/07/Best-Places-to-Visit-in-Kerala-01.jpg" alt="" className="featuredImag" />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://www.akshartours.com/wp-content/uploads/2020/07/Best-Places-to-Visit-in-Kerala-01.jpg" alt="" className="featuredImag" />
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    <div className="featuredItem">
        <img src="https://www.akshartours.com/wp-content/uploads/2020/07/Best-Places-to-Visit-in-Kerala-01.jpg" alt="" className="featuredImag" />
        <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>123 properties</h2>
        </div>
    </div>
    
</div>
    )
}

export default Featured