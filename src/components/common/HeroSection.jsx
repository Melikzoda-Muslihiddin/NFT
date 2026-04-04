import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useTranslation } from 'react-i18next'
import "swiper/css";
import "swiper/css/effect-cards";

function HeroSection() {
  const { t } = useTranslation()
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "/images/card4.png",
    },
    {
      id: 2,
      image: "/images/card2.png",
    },
    {
      id: 3,
      image: "/images/card3.png",
    },
    {
      id: 4,
      image: "/images/card1.png",
    },
  ];

  const nextIndex = (activeIndex + 1) % heroSlides.length;

  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1440px] px-[20px] pt-[24px] pb-[60px] md:px-[40px] md:pt-[32px] md:pb-[80px] lg:px-[96px] lg:pt-[72px] lg:pb-[90px]">
        <div className="flex flex-col gap-[44px] md:gap-[56px] lg:flex-row lg:items-start lg:justify-between lg:gap-[40px]">
          <div className="w-full lg:max-w-[568px]">
            <div className="flex items-center gap-[12px] lg:hidden">
              <div className="h-[1px] w-[33px] bg-[#C5C5C5]" />
              <p className="text-[9px] font-[600] uppercase tracking-[1.2px] text-[#B1B5C3] md:text-[10px]">
                {t('OVER 1M CREATORS')}
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-[20px]">
              <div className="h-[1px] w-[195px] bg-[#C5C5C5]" />
            </div>

            <h1 className="mt-[18px] max-w-[315px] text-center text-[46px] font-[600] leading-[54px] tracking-[-1.8px] text-[#141416] md:mx-auto md:mt-[20px] md:max-w-[520px] md:text-[68px] md:leading-[76px] md:tracking-[-2.4px] lg:mx-0 lg:mt-[26px] lg:max-w-[567px] lg:text-left lg:text-[75px] lg:leading-[90px] lg:tracking-[-3px]">
              {t('Discover And Create NFTs')}
            </h1>

            <p className="mx-auto mt-[16px] max-w-[315px] text-center text-[14px] font-[400] leading-[24px] text-[#676767] md:mt-[20px] md:max-w-[620px] md:text-[18px] md:leading-[32px] lg:mx-0 lg:mt-[16px] lg:max-w-[500px] lg:text-left">
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{" "}
              <span className="font-[600] text-[#141416]">$20 bonus.</span>
            </p>

            <div className="mt-[32px] flex items-center justify-center gap-[16px] md:mt-[36px] lg:mt-[45px] lg:justify-start">
              <button
                onClick={() => navigate("/discover")}
                className="h-[60px] rounded-[12px] bg-[#141416] px-[24px] text-[14px] font-[500] uppercase leading-[18px] text-white transition duration-200 hover:opacity-90 md:h-[62px] md:px-[32px] md:text-[16px]"
              >
                Explore More
              </button>

              <button className="h-[60px] rounded-[12px] border border-[#141416] bg-transparent px-[24px] text-[14px] font-[500] uppercase leading-[18px] text-[#141416] transition duration-200 hover:bg-[#141416] hover:text-white md:h-[62px] md:px-[32px] md:text-[16px]">
                Create NFT
              </button>
            </div>

            <div className="mt-[40px] hidden items-center gap-[65px] lg:flex">
              <div>
                <h3 className="text-[36px] font-[600] leading-[43px] tracking-[-1px] text-[#141416]">
                  430K+
                </h3>
                <p className="mt-[6px] text-[12px] font-[500] leading-[18px] text-[#848586]">
                  Art Works
                </p>
              </div>

              <div>
                <h3 className="text-[36px] font-[600] leading-[43px] tracking-[-1px] text-[#141416]">
                  159K+
                </h3>
                <p className="mt-[6px] text-[12px] font-[500] leading-[18px] text-[#848586]">
                  Creators
                </p>
              </div>

              <div>
                <h3 className="text-[36px] font-[600] leading-[43px] tracking-[-1px] text-[#141416]">
                  87K+
                </h3>
                <p className="mt-[6px] text-[12px] font-[500] leading-[18px] text-[#848586]">
                  Collections
                </p>
              </div>
            </div>

            <div className="mt-[30px] flex items-center justify-center gap-[10px] md:mt-[34px] lg:hidden">
              <img
                src="/images/trustpilot.png"
                alt="Trustpilot"
                className="h-[20px] w-auto object-contain"
              />
              <div className="flex items-center gap-[4px] text-[#F6B63C]">
                <span className="text-[20px] leading-none">★</span>
                <span className="text-[20px] leading-none">★</span>
                <span className="text-[20px] leading-none">★</span>
                <span className="text-[20px] leading-none">★</span>
                <span className="text-[20px] leading-none">★</span>
              </div>
              <p className="text-[19px] font-[500] leading-[28px] text-[#334155]">
                4900+
              </p>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[360px] md:h-[520px] md:max-w-[420px] lg:mx-0 lg:h-[560px] lg:max-w-[680px]">
            <img
              src="/images/hero-dots.png"
              alt="Dots"
              className="absolute right-[-8px] top-[72px] hidden z-[1] h-[154px] w-[173px] object-contain md:block lg:right-[0px] lg:top-[26px] lg:h-[196px] lg:w-[173px]"
            />

            <img
              src="/images/hero-arrow.png"
              alt="Arrow"
              className="absolute right-[72px] top-[134px] z-[4] h-[72px] w-[88px] object-contain md:right-[84px] md:top-[165px] md:h-[86px] md:w-[110px] lg:right-[157px] lg:top-[100px] lg:h-[130px] lg:w-[140px]"
            />

            <div className="absolute left-[0px] top-[0px] z-[3] h-[264px] w-[234px] md:h-[370px] md:w-[330px] lg:left-[36px] lg:h-[400px] lg:w-[391px]">
              <Swiper
                modules={[EffectCards]}
                effect="cards"
                grabCursor={true}
                loop={true}
                speed={700}
                cardsEffect={{
                  perSlideOffset: 14,
                  perSlideRotate: 2,
                  rotate: true,
                  slideShadows: false,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="heroCardsSwiper h-full w-full"
              >
                {heroSlides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="h-full w-full overflow-hidden rounded-[24px] md:rounded-[28px] lg:rounded-[26px]">
                      <img
                        src={slide.image}
                        alt={`NFT ${slide.id}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="absolute left-[78px] top-[320px] z-[5] flex h-[60px] w-[120px] items-center justify-center rounded-[14px] bg-white shadow-[0px_24px_44px_rgba(197,197,197,0.35)] md:left-[108px] md:top-[412px] md:h-[72px] md:w-[144px] md:rounded-[16px] lg:left-[155px] lg:top-[480px] lg:h-[78px] lg:w-[166px] lg:rounded-[18px]">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-full w-[50%] items-center justify-center text-[18px] text-[#808080] md:text-[20px] lg:text-[22px]"
              >
                ←
              </button>

              <div className="h-[28px] w-[1px] bg-[#E6E8EC] md:h-[34px]" />

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-full w-[50%] items-center justify-center text-[18px] text-[#141416] md:text-[20px] lg:text-[22px]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
