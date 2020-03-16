import React from "react"
import Link from "gatsby-link"
import Map from "google-maps-react"

export default () => <div>
        <h1>Beaches are Us!</h1>
        <span style={{font:"garamonde", color:"blue", background:"black"}}>
in the beginning.. there was water.
        </span>
        <br/>
        <br/>
        <Link to="/page-2">Page 2</Link>
        <br />
        <Link to="/counter/">counter page</Link>
        <Link to="/map/">Map Page</Link>
        <Map></Map>
        
Hello world!</div>
