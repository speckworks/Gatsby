import React from "react"
import Link from "gatsby-link"
// import image from "gatsby-image"
import image from "./assets/womanDog.jpeg"
// import styled from "styled-components"
// import img from "./assets/kkkart.jpeg"


// const StyledImg = styled(img)`
//         display: block; 
// `
// const Wrapper = styled.figure`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const WrappedImg = props => (<Wrapper><StyledImg {...props} /></Wrapper>)

// export default StyledImg

export default () => <div>
        <h1 style={{display: 'flex',  
                justifyContent:'center', 
                alignItems:'center',
                fontFamily:'Archivo+Black',
                fontSize:"48px"
                }}>
                JANICE SPECK
                </h1>
                <div style={{
                display: 'flex',  
                justifyContent:'center', 
                alignItems:'center' 
        }}>
        <img 
        src={image} 
        style={{ height: "50%",
                width: "50%"
        }}
        />
        </div>
        <br/>
        <br/>
        <Link to="/page-2">Page 2</Link>
        <br />
        <Link to="/counter/">counter page</Link> 
!</div>
