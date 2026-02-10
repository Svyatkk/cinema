import './Main.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import BlockFilm from '../BlockFilm/BlockFilm'
import { useEffect, useState } from 'react'

export default function Main() {
    const [films, setFilms] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/films')
            .then(res => res.json())
            .then(data => setFilms(data))
            .catch(err => console.error(err))
    }, [])



    return (
        <main>
            <Swiper
                spaceBetween={0}
                slidesPerView={4.5}
                grabCursor={true}
                loop={false}
                className="mySwiper"
            >
                {films.map((item, index) => (
                    <SwiperSlide className='slide' key={index}>
                        <BlockFilm film={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    )
}
