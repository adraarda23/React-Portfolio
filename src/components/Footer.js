import React from 'react'
import "./Styles/Footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';



function Footer() {
  return (
    <footer className='mainFooter bg-dark'>
<div className='footer-content'>
  <div className='icons'>
    <a href="https://www.linkedin.com/in/ardaaydınkılınç/"><LinkedInIcon className='icon'/></a>
    <a href="https://twitter.com/ardaydinkilinc"><TwitterIcon className='icon'/></a>
  </div>
  <div className='cr'><h4>Copyright2023© Arda Aydın Kılınç</h4></div>
</div>

    </footer>
  )
}

export default Footer