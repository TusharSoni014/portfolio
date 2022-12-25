import React from 'react'
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import {FaBrain} from 'react-icons/fa'
import {BsGearFill, BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='navigation'>
        <ul>
        
            <li style={{'--i':'#cd9765','--o':'#db179d'}}><Link to='/'><AiFillHome/></Link></li>
            <li style={{'--i':'#56ab2f','--o':'#a8e063'}}><Link to='/skills'><FaBrain/></Link></li>
            <li style={{'--i':'#56ab2f','--o':'#a8e063'}}><Link to='/projects'><BsGearFill/></Link></li> 
            <li style={{'--i':'#56ab2f','--o':'#a8e063'}}><Link to='/about'><AiFillInfoCircle/></Link></li>
            <li style={{'--i':'#56ab2f','--o':'#a8e063'}}><Link to='/contact-me'><BsFillPersonFill/></Link></li>
        </ul>
    </div>
  )
}
