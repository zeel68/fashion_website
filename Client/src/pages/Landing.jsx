import React from 'react'
import Homebox from '../Componets/homebox/Homebox'
import Homeoffer from '../Componets/homeoffer/Homeoffer'
import Boxbnr from '../Componets/Menstrend/Boxbnr'
import Trenditem from '../Componets/Menstrend/Trenditem'
import Womensbnr from '../Componets/womenstrend/womensbnr'
import Featured from '../Componets/womenstrend/Featured'
import Testimonial from '../Componets/Testimonial/Testimonial'
import Tredishnalbnr from '../Componets/Tredishnals/Tredishnalbnr'
import Hero from '../Componets/Hero'
import Homevideo from '../Componets/Tredishnals/Homevideo'
import Bestselr from '../Componets/bestselr/Bestselr'

const Landing = () => {
    return (
        <>
            <Hero />
            <Homebox />
            <Homeoffer />
            <Boxbnr />
            <Trenditem category="Mens" />
            <Womensbnr />
            <Featured />
            <Testimonial category={'customerstories'} />
            <Tredishnalbnr />
            <Homevideo />
            <Bestselr />
        </>
    )
}

export default Landing