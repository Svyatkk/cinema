import './Nav.css'



export default function Nav() {

    return (
        <>

            <nav>
                <div>
                    <div>
                        <img src="src\Images\image.png" alt="" />


                    </div>

                    <div className='logo'>



                    </div>

                </div>


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
            </nav>



        </>
    )
}