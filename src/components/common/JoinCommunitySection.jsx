function JoinCommunitySection() {
  const orbitItems = [
    {
      id: 1,
      image: "/images/card3.png",
      className:
        "left-[52px] top-[192px] h-[42px] w-[42px] md:left-[82px] md:top-[70px] md:h-[52px] md:w-[52px] lg:left-[184px] lg:top-[82px] lg:h-[58px] lg:w-[58px]",
    },
    {
      id: 2,
      image: "/images/card2.png",
      className:
        "right-[18px] top-[118px] h-[34px] w-[34px] md:right-[42px] md:top-[110px] md:h-[40px] md:w-[40px] lg:right-[188px] lg:top-[110px] lg:h-[44px] lg:w-[44px]",
    },
    {
      id: 3,
      image: "/images/card4.png",
      className:
        "left-[-14px] top-[310px] h-[34px] w-[34px] md:left-[-8px] md:top-[270px] md:h-[38px] md:w-[38px] lg:left-[112px] lg:top-[256px] lg:h-[42px] lg:w-[42px]",
    },
    {
      id: 4,
      image: "/images/card3.png",
      className:
        "right-[74px] top-[162px] h-[34px] w-[34px] md:right-[126px] md:top-[160px] md:h-[38px] md:w-[38px] lg:right-[300px] lg:top-[154px] lg:h-[42px] lg:w-[42px]",
    },
    {
      id: 5,
      image: "/images/card1.png",
      className:
        "right-[54px] top-[430px] h-[42px] w-[42px] md:right-[88px] md:top-[520px] md:h-[46px] md:w-[46px] lg:right-[226px] lg:top-[454px] lg:h-[52px] lg:w-[52px]",
    },
    {
      id: 6,
      image: "/images/card4.png",
      className:
        "right-[106px] top-[596px] h-[34px] w-[34px] md:right-[162px] md:top-[650px] md:h-[38px] md:w-[38px] lg:right-[330px] lg:top-[618px] lg:h-[42px] lg:w-[42px]",
    },
    {
      id: 7,
      image: "/images/card3.png",
      className:
        "left-[216px] top-[720px] h-[38px] w-[38px] md:left-[300px] md:top-[770px] md:h-[42px] md:w-[42px] lg:left-[476px] lg:top-[742px] lg:h-[46px] lg:w-[46px]",
    },
    {
      id: 8,
      image: "/images/card1.png",
      className:
        "left-[154px] top-[554px] h-[36px] w-[36px] md:left-[206px] md:top-[606px] md:h-[40px] md:w-[40px] lg:left-[84px] lg:top-[566px] lg:h-[42px] lg:w-[42px]",
    },
  ];

  return (
    <section className="w-full pt-[80px] pb-[90px] md:pt-[100px] md:pb-[120px] lg:pt-[120px] lg:pb-[140px]">
      <div className="mx-auto max-w-[1440px] px-[0px] md:px-[20px] lg:px-[40px]">
        <div className="relative mx-auto h-[820px] w-full max-w-[460px] overflow-hidden md:h-[900px] md:max-w-[760px] lg:h-[880px] lg:max-w-[1260px]">
          <div className="absolute left-[50%] top-[50%] h-[900px] w-[900px] translate-x-[-50%] translate-y-[-50%] rounded-full border border-[#D8D8D8] md:h-[760px] md:w-[760px] lg:h-[700px] lg:w-[700px]" />

          <div className="absolute left-[50%] top-[50%] h-[520px] w-[520px] translate-x-[-50%] translate-y-[-50%] rounded-full border border-[#D8D8D8] md:h-[590px] md:w-[590px] lg:h-[524px] lg:w-[524px]" />

          {orbitItems.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt="orbit nft"
              className={`absolute rounded-full object-cover shadow-[0px_10px_20px_rgba(197,197,197,0.18)] ${item.className}`}
            />
          ))}

          <div className="absolute left-[50%] top-[50%] z-[5] w-full max-w-[320px] translate-x-[-50%] translate-y-[-50%] px-[20px] text-center md:max-w-[420px] lg:max-w-[620px]">
            <h2 className="text-[38px] font-[600] leading-[46px] tracking-[-1.2px] text-[#141416] md:text-[56px] md:leading-[62px] md:tracking-[-1.8px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-2px]">
              Join The
            </h2>

            <h3 className="mt-[2px] text-[38px] font-[600] leading-[46px] tracking-[-1.2px] text-[#C5C5C5] md:text-[56px] md:leading-[62px] md:tracking-[-1.8px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-2px]">
              Community
            </h3>

            <p className="mx-auto mt-[24px] max-w-[310px] text-[16px] font-[400] leading-[30px] text-[#646464] md:mt-[28px] md:max-w-[430px] md:text-[18px] md:leading-[32px] lg:mt-[26px] lg:max-w-[520px] lg:text-[20px] lg:leading-[36px]">
              Our vibrant community is full of collectors, artists, and
              enthusiasts who share a passion for one-of-a-kind digital.
            </p>

            <button className="mt-[28px] h-[50px] rounded-[14px] bg-[#141416] px-[22px] text-[14px] font-[500] text-white md:mt-[34px] md:h-[56px] md:px-[28px] md:text-[15px] lg:mt-[34px] lg:h-[60px] lg:rounded-[16px] lg:px-[32px] lg:text-[16px]">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinCommunitySection;
