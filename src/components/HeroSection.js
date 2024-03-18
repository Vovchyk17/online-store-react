// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/autoplay'

export default function HeroSection() {
  const imagePaths = ['slide-1.jpg', 'slide-2.jpg', 'slide-3.jpg']

  return (
    <div className="hero_section mx-auto mb-12 max-w-screen-lg">
      <Swiper
        className="h-[480px]"
        modules={[EffectFade, Autoplay]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay
        speed={200}
      >
        {imagePaths.map((imagePath, i) => (
          <SwiperSlide key={`slide_${i}`}>
            <img
              src={require(`../img/${imagePath}`)}
              alt="slide"
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
