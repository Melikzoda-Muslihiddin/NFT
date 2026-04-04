import topCollectionData from "../../data/topCollectionData";

function TopCollectionSection() {
  return (
    <section className="w-full pt-[70px] pb-[90px] md:pt-[90px] md:pb-[110px] lg:pt-[110px] lg:pb-[140px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <h2 className="text-center text-[42px] font-[600] leading-[50px] tracking-[-1.5px] text-[#141416] md:text-[54px] md:leading-[62px] lg:text-[45px] lg:leading-[54px]">
          Top Collection
        </h2>

        <div className="mt-[44px] md:mt-[56px] lg:mt-[66px]">
          <div className="hidden lg:block">
            <div className="grid grid-cols-[2.2fr_1fr_0.9fr_1fr_1fr_0.8fr] items-center border-b border-[#E6E8EC] pb-[24px]">
              <p className="text-[28px] font-[500] leading-[40px] text-[#93989A]">
                Collection
              </p>
              <p className="text-center text-[28px] font-[500] leading-[40px] text-[#93989A]">
                Volume
              </p>
              <p className="text-center text-[28px] font-[500] leading-[40px] text-[#93989A]">
                24h %
              </p>
              <p className="text-center text-[28px] font-[500] leading-[40px] text-[#93989A]">
                Floor Price
              </p>
              <p className="text-center text-[28px] font-[500] leading-[40px] text-[#93989A]">
                Owners
              </p>
              <p className="text-center text-[28px] font-[500] leading-[40px] text-[#93989A]">
                Items
              </p>
            </div>

            <div>
              {topCollectionData.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[2.2fr_1fr_0.9fr_1fr_1fr_0.8fr] items-center border-b border-[#E6E8EC] py-[26px]"
                >
                  <div className="flex items-center gap-[23px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-[84px] w-[84px] rounded-full object-cover"
                    />

                    <div>
                      <h3 className="text-[31px] font-[500] leading-[44px] tracking-[-1px] text-[#141416]">
                        {item.name}
                      </h3>
                      <p className="text-[23px] font-[400] leading-[33px] text-[#64748B]">
                        By {item.author}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-[6px]">
                    <span className="text-[24px] text-[#141416]">♦</span>
                    <span className="text-[28px] font-[600] leading-[40px] text-[#141416]">
                      {item.volume}
                    </span>
                  </div>

                  <p
                    className={`text-center text-[28px] font-[500] leading-[40px] ${
                      item.changeType === "up"
                        ? "text-[#10C352]"
                        : "text-[#E23333]"
                    }`}
                  >
                    {item.change}
                  </p>

                  <div className="flex items-center justify-center gap-[6px]">
                    <span className="text-[24px] text-[#141416]">♦</span>
                    <span className="text-[28px] font-[600] leading-[40px] text-[#141416]">
                      {item.floorPrice}
                    </span>
                  </div>

                  <p className="text-center text-[28px] font-[500] leading-[40px] text-[#141416]">
                    {item.owners}
                  </p>

                  <p className="text-center text-[28px] font-[500] leading-[40px] text-[#141416]">
                    {item.items}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <div className="grid grid-cols-[1fr_auto] items-center border-b border-[#E6E8EC] pb-[18px]">
              <p className="text-[24px] font-[500] leading-[34px] text-[#93989A]">
                Collection
              </p>
              <p className="text-[24px] font-[500] leading-[34px] text-[#93989A]">
                Volume
              </p>
            </div>

            <div>
              {topCollectionData.map((item, index) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1fr_auto] items-center border-b border-[#E6E8EC] py-[22px]"
                >
                  <div className="flex items-center gap-[14px]">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[58px] w-[58px] rounded-full object-cover"
                      />

                      <div className="absolute bottom-[-2px] right-[-4px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white text-[14px] font-[700] text-[#141416] shadow-sm">
                        {index + 1}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[28px] font-[500] leading-[30px] tracking-[-1px] text-[#141416]">
                        {item.name}
                      </h3>
                      <p className="mt-[10px] text-[21px] font-[400] leading-[24px] text-[#64748B]">
                        {item.username}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-[4px]">
                      <span className="text-[18px] text-[#141416]">♦</span>
                      <span className="text-[28px] font-[600] leading-[30px] text-[#141416]">
                        {item.volume}
                      </span>
                    </div>

                    <p
                      className={`mt-[12px] text-[22px] font-[500] leading-[24px] ${
                        item.changeType === "up"
                          ? "text-[#10C352]"
                          : "text-[#E23333]"
                      }`}
                    >
                      {item.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[44px] flex justify-center lg:mt-[54px] lg:justify-end">
            <button className="flex items-center gap-[11px] text-[20px] font-[500] leading-[30px] text-[#ACADB9] transition duration-200 hover:text-[#141416] lg:text-[18px] lg:leading-[27px]">
              Explore All
              <span className="text-[24px]">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopCollectionSection;
