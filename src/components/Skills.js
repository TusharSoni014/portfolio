import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {FaReact, FaNodeJs} from 'react-icons/fa'
import {SiRedux, SiSocketdotio, SiJquery, SiElectron, SiExpress, SiHandlebarsdotjs, SiMongodb, SiPython, SiAdobepremierepro, SiGithub} from 'react-icons/si'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <div className='skills-container'>
        <SkillCard icon={<AiFillHtml5/>} language='HTML'/>
        <SkillCard icon={<IoLogoCss3/>} language='CSS'/>
        <SkillCard icon={<IoLogoJavascript/>} language='JavaScript'/>
        <SkillCard icon={<BsFillBootstrapFill/>} language='Bootstrap'/>
        <SkillCard icon={<FaReact/>} language='React.js'/>
        <SkillCard icon={<SiRedux/>} language='Redux'/>
        <SkillCard icon={<SiJquery/>} language='Jquery'/>
        <SkillCard icon={<SiSocketdotio/>} language='Socket.io'/>
        <SkillCard icon={<SiElectron/>} language='Electron.js'/>
        <SkillCard icon={<FaNodeJs/>} language='Node.js'/>
        <SkillCard icon={<SiExpress/>} language='Express.js'/>
        <SkillCard icon={<SiHandlebarsdotjs/>} language='Handlebars'/>
        <SkillCard icon={<SiMongodb/>} language='mongoDB'/>
        <SkillCard icon={<SiPython/>} language='Python'/>
        <SkillCard icon={<SiAdobepremierepro/>} language='Premiere Pro'/>
        <SkillCard icon={<SiGithub/>} language='Github'/>
    </div>
  )
}
