import { useNavigate } from "react-router-dom";

function InnerCollectorSection() {
  const navigate = useNavigate();

  const features = [
    "Best Seller All Around World",
    "$2M+ Transactions Every Day",
    "Secure Transactions",
    "Exclusive Collections From Sellers",
    "Easy Buying and Selling",
    "Join Our Community",
  ];

  const sellers = [
    {
      id: 1,
      name: "Alex Ca.",
      username: "@Alexy",
      image: "/images/card1.png",
      action: "Follow",
      rank: 1,
    },
    {
      id: 2,
      name: "Juliya S.",
      username: "@JuliyaS",
      image: "/images/card3.png",
      action: "Follow",
      rank: 2,
    },
    {
      id: 3,
      name: "Juliya Sa.",
      username: "@JuliyaS",
      image: "/images/card2.png",
      action: "Follow",
      rank: 2,
    },
    {
      id: 4,
      name: "Trevor Pu.",
      username: "@TrevorP",
      image: "/images/card3.png",
      action: "Unfollow",
      rank: 3,
    },
  ];

  const recentViewed = [
    {
      id: 1,
      name: "Alex Ca.",
      username: "Alexy",
      image: "/images/card1.png",
      value: "8,456",
      change: "+23,00%",
      changeColor: "text-[#10C352]",
      rank: 1,
    },
    {
      id: 2,
      name: "Juliya S.",
      username: "JuliyaS",
      image: "/images/card2.png",
      value: "5,327",
      change: "-32,01%",
      changeColor: "text-[#E23333]",
      rank: 2,
    },
  ];

  return (
    <section className="w-full pt-[80px] pb-[90px] md:pt-[100px] md:pb-[110px] lg:pt-[120px] lg:pb-[140px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <div className="mb-[38px] hidden h-[1px] w-full bg-[#D9D9D9] lg:block" />

        <div className="flex flex-col gap-[50px] lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full lg:max-w-[560px]">
            <h2 className="text-center text-[56px] font-[600] leading-[60px] tracking-[-2px] text-[#C5C5C5] md:text-[64px] md:leading-[68px] lg:text-left lg:text-[75px] lg:leading-[72px]">
              Just Unleash -
            </h2>

            <h3 className="mt-[2px] text-center text-[58px] font-[600] leading-[62px] tracking-[-2px] text-[#141416] md:text-[68px] md:leading-[72px] lg:text-left lg:text-[75px] lg:leading-[80px]">
              Your Inner Collector
            </h3>

            <div className="mt-[26px] hidden flex-col gap-[20px] lg:flex">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-[14px]">
                  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#141416] text-[12px] text-white">
                    ✓
                  </span>
                  <p className="text-[24px] font-[400] leading-[36px] text-[#646464]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[500px] w-full max-w-[520px] md:h-[560px] lg:mx-0 lg:h-[560px] lg:max-w-[650px]">
            <div className="absolute right-[18px] top-[54px] z-[2] w-[290px] rounded-[18px] bg-white px-[16px] py-[18px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] md:right-[58px] md:w-[330px] lg:right-[62px] lg:top-[68px] lg:w-[322px] lg:rounded-[21px] lg:px-[18px] lg:py-[22px]">
              <h4 className="text-[22px] font-[600] leading-[30px] text-[#141416] lg:text-[24px]">
                Best Sellers
              </h4>

              <div className="mt-[18px] flex flex-col gap-[16px] lg:mt-[20px] lg:gap-[18px]">
                {sellers.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-[10px]"
                  >
                    <div className="flex items-center gap-[10px]">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-[46px] w-[46px] rounded-full object-cover lg:h-[52px] lg:w-[52px]"
                        />
                        <div className="absolute right-[-4px] top-[-4px] flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#141416] text-[10px] font-[700] text-white">
                          {item.rank}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[16px] font-[500] leading-[22px] text-[#141416] lg:text-[18px]">
                          {item.name}
                        </h5>
                        <p className="text-[12px] leading-[18px] text-[#808191] lg:text-[14px]">
                          {item.username}
                        </p>
                      </div>
                    </div>

                    <button
                      className={`h-[34px] rounded-[10px] px-[14px] text-[12px] font-[600] ${
                        item.action === "Unfollow"
                          ? "bg-[#EDEDED] text-[#141416]"
                          : "border border-[#D9D9D9] bg-white text-[#141416]"
                      }`}
                    >
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute right-[0px] top-[0px] z-[3] flex w-[300px] items-center justify-between gap-[10px] rounded-[18px] bg-white px-[14px] py-[10px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] md:right-[10px] md:w-[330px] lg:right-[0px] lg:w-[318px]">
              <div className="flex items-center gap-[10px]">
                <span className="text-[12px] text-[#141416]">•</span>

                <div className="relative">
                  <img
                    src="/images/card2.png"
                    alt="bid"
                    className="h-[44px] w-[44px] rounded-full object-cover lg:h-[48px] lg:w-[48px]"
                  />
                  <div className="absolute right-[-2px] top-[-2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#38C976] text-[8px] text-white">
                    ✓
                  </div>
                </div>

                <div>
                  <p className="text-[13px] leading-[18px] text-[#808191]">
                    New bid{" "}
                    <span className="font-[600] text-[#141416]">Rotation</span>
                  </p>
                  <p className="text-[14px] font-[700] text-[#141416]">
                    0.002 ETH
                  </p>
                  <p className="text-[11px] leading-[16px] text-[#B1B5C3]">
                    6 Oct 2022, 11:44 PM
                  </p>
                </div>
              </div>

              <img
                src="/images/card2.png"
                alt="preview"
                className="h-[52px] w-[52px] rounded-[12px] object-cover"
              />
            </div>

            <div className="absolute bottom-[44px] left-[0px] z-[4] w-[220px] rounded-[18px] bg-white px-[14px] py-[16px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] md:w-[280px] lg:bottom-[12px] lg:left-[0px] lg:w-[299px] lg:rounded-[21px] lg:px-[18px] lg:py-[20px]">
              <div className="flex items-center justify-between">
                <h4 className="text-[18px] font-[600] leading-[24px] text-[#141416] lg:text-[20px]">
                  Recent Viewed
                </h4>
                <span className="text-[#CBD5E1]">···</span>
              </div>

              <div className="mt-[14px] flex flex-col gap-[14px]">
                {recentViewed.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-[10px]"
                  >
                    <div className="flex items-center gap-[10px]">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-[34px] w-[34px] rounded-full object-cover lg:h-[40px] lg:w-[40px]"
                        />
                        <div className="absolute bottom-[-2px] right-[-2px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white text-[8px] font-[700] text-[#141416] shadow-sm">
                          {item.rank}
                        </div>
                      </div>

                      <div>
                        <h5 className="text-[14px] font-[500] leading-[18px] text-[#141416]">
                          {item.name}
                        </h5>
                        <p className="text-[11px] leading-[16px] text-[#808191]">
                          {item.username}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center justify-end gap-[3px]">
                        <span className="text-[12px] text-[#141416]">♦</span>
                        <span className="text-[16px] font-[600] text-[#141416]">
                          {item.value}
                        </span>
                      </div>
                      <p
                        className={`text-[11px] font-[500] ${item.changeColor}`}
                      >
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[86px] right-[8px] hidden h-[160px] w-[140px] grid-cols-6 gap-[8px] md:grid lg:bottom-[30px] lg:right-[14px] lg:h-[168px] lg:w-[162px]">
              {Array.from({ length: 36 }).map((_, index) => (
                <span
                  key={index}
                  className="h-[3px] w-[3px] rounded-full bg-[red]"
                />
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:hidden">
            <button
              onClick={() => navigate("/creators")}
              className="mt-[18px] flex h-[64px] items-center gap-[14px] rounded-[18px] bg-[#141416] px-[34px] text-[26px] font-[500] text-white"
            >
              Explore More
              <span className="text-[30px]">→</span>
            </button>
          </div>
        </div>

        <div className="mt-[36px] hidden lg:block">
          <button
            onClick={() => navigate("/creators")}
            className="flex h-[64px] items-center gap-[14px] rounded-[16px] bg-[#141416] px-[30px] text-[24px] font-[500] text-white"
          >
            Explore More
            <span className="text-[28px]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default InnerCollectorSection;
