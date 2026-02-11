import { useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom'


export default function Nav() {

    const navigate = useNavigate()

    const [showsidebar, setShowsidebar] = useState(false)
    const [ham, setHam] = useState(false)


    return (
        <>

            <div className={`sidebar ${showsidebar ? "active" : ""}`}>




            </div>
            <nav>
                <div>
                    <div>


                        <div
                            onClick={() => {
                                setShowsidebar(prev => !prev)

                                setHam(prev => !prev)


                            }}
                            className={`ham-menu ${ham ? "active" : ""}`}
                        >
                            <span></span>
                            <span></span>
                            <span></span>


                        </div>

                    </div>

                    <div
                        onClick={() => {
                            navigate('/')
                        }}
                        className='logo'>


                        <img src="src\Images\logo (2).png" alt="" />
                    </div >

                </div >


                <div>
                    <div className='imaxBlock'>
                        <img src="src\Images\logo_imax_white.png" alt="" />
                    </div>

                    <div >
                        Львів

                    </div>
                    <div className='strelka'>
                        <img src="src\Images\strelkaVnyz.png" alt="" />
                    </div>





                    <div className='profileLogin'>



                        <a
                            onClick={e => {
                                e.preventDefault()


                            }}
                            href="#">Увійти</a>

                        <div className='profileIcon'>
                            <img src="src\Images\nd2m6os0tmc9env4gc8jh3er0j.png" alt="" />
                        </div>
                    </div>

                </div>
            </nav >



        </>
    )
}