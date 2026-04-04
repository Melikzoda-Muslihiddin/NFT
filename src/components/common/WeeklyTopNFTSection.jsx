import { Component, createRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import topNftData from "../../data/topNftData";

class WeeklyTopNFTSection extends Component {
  constructor(props) {
    super(props);

    this.swiperRef = createRef();

    this.recentViewed = [
      {
        id: 1,
        name: "Alex Ca.",
        username: "Alexy",
        image: "/images/card2.png",
        value: "8,456",
        change: "+23,00%",
        changeColor: "text-[#10C352]",
      },
      {
        id: 2,
        name: "Juliya S.",
        username: "JuliyaS",
        image: "/images/card3.png",
        value: "5,327",
        change: "-32,01%",
        changeColor: "text-[#E23333]",
      },
    ];
  }

  handlePrev = () => {
    if (this.swiperRef.current) {
      this.swiperRef.current.slidePrev();
    }
  };

  handleNext = () => {
    if (this.swiperRef.current) {
      this.swiperRef.current.slideNext();
    }
  };

  renderCard = (item) => {
    return (
      <div className="w-full rounded-[23px] bg-white p-[14px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] md:rounded-[25px] md:p-[14px] lg:rounded-[23px] lg:p-[14px]">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="h-[180px] w-full rounded-[18px] object-cover md:h-[200px] md:rounded-[20px] lg:h-[253px] lg:rounded-[18px]"
          />

          <div className="absolute right-[11px] top-[13px] rounded-[9px] bg-[rgba(28,29,32,0.35)] px-[14px] py-[8px] text-[12px] font-[500] leading-[15px] text-white backdrop-blur-[7px]">
            {item.timeLeft}
          </div>
        </div>

        <h3 className="mt-[18px] text-[18px] font-[600] leading-[25px] text-[#141416] md:text-[19px] lg:mt-[20px] lg:text-[26px] lg:leading-[36px]">
          {item.title}
        </h3>

        <div className="mt-[12px] flex items-end justify-between gap-[12px]">
          <div>
            <p className="text-[13px] font-[400] leading-[18px] text-[#94A3B8] lg:text-[14px] lg:leading-[20px]">
              Current bid
            </p>

            <div className="mt-[4px] flex items-center gap-[4px]">
              <span className="text-[15px] text-[#141416]">♦</span>
              <span className="text-[15px] font-[500] leading-[22px] text-[#141416] lg:text-[16px]">
                {item.bid}
              </span>
            </div>
          </div>

          <button className="h-[44px] rounded-[12px] bg-[#141416] px-[20px] text-[12px] font-[600] uppercase leading-[18px] text-white transition duration-200 hover:opacity-90 lg:h-[50px] lg:px-[24px] lg:rounded-[12px]">
            Place Bid
          </button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <section className="w-full pt-[70px] pb-[90px] md:pt-[90px] md:pb-[120px] lg:pt-[110px] lg:pb-[160px]">
        <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
          <h2 className="text-center text-[34px] font-[600] leading-[42px] tracking-[-1px] text-[#C5C5C5] md:text-[42px] md:leading-[52px] lg:text-[45px] lg:leading-[54px]">
            Weekly - Top NFT
          </h2>

          <div className="mt-[50px] md:mt-[64px] lg:mt-[72px]">
            <Swiper
              spaceBetween={22}
              slidesPerView={1.25}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2.2,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 4.35,
                  centeredSlides: false,
                },
              }}
              onSwiper={(swiper) => {
                this.swiperRef.current = swiper;
              }}
              className="weeklyTopNftSwiper !overflow-visible"
            >
              {topNftData.map((item) => (
                <SwiperSlide key={item.id}>{this.renderCard(item)}</SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mt-[38px] flex justify-center md:mt-[48px] lg:mt-[65px]">
            <div className="flex h-[68px] w-[166px] items-center justify-center rounded-[17px] bg-white shadow-[0px_24px_44px_rgba(197,197,197,0.35)]">
              <button
                onClick={this.handlePrev}
                className="flex h-full w-[50%] items-center justify-center text-[22px] text-[#808080]"
              >
                ←
              </button>

              <div className="h-[32px] w-[1px] bg-[#E6E8EC]" />

              <button
                onClick={this.handleNext}
                className="flex h-full w-[50%] items-center justify-center text-[22px] text-[#141416]"
              >
                →
              </button>
            </div>
          </div>

          <div className="mt-[50px] flex justify-center md:justify-end lg:mt-[40px]">
            <div className="w-full max-w-[310px] rounded-[20px] bg-white px-[20px] py-[22px] shadow-[0px_20px_50px_rgba(197,197,197,0.28)] md:max-w-[340px] lg:w-[345px] lg:rounded-[18px] lg:px-[20px] lg:py-[24px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[22px] font-[600] leading-[30px] text-[#1A202C]">
                  Recent Viewed
                </h3>

                <span className="text-[24px] leading-none text-[#CBD5E1]">
                  ···
                </span>
              </div>

              <div className="mt-[22px] flex flex-col gap-[22px]">
                {this.recentViewed.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-[12px]"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-[42px] w-[42px] rounded-full object-cover"
                        />

                        <div className="absolute bottom-[-2px] right-[-2px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F4F4F4] text-[10px] font-[700] text-[#141416]">
                          {index + 1}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[18px] font-[500] leading-[24px] text-[#141416]">
                          {item.name}
                        </h4>
                        <p className="mt-[3px] text-[14px] font-[400] leading-[20px] text-[#64748B]">
                          {item.username}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center justify-end gap-[4px]">
                        <span className="text-[14px] text-[#141416]">♦</span>
                        <span className="text-[22px] font-[600] leading-[30px] text-[#141416]">
                          {item.value}
                        </span>
                      </div>

                      <p
                        className={`mt-[4px] text-[14px] font-[500] leading-[20px] ${item.changeColor}`}
                      >
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WeeklyTopNFTSection;
