import React from 'react'
import pdf from "./Assets/Priyank-Updated-resume.pdf";

const Button = () => {
  return (
    <div> <a href={pdf} download class="buttonHome2">Download Resume</a></div>
  )
}

export default Button