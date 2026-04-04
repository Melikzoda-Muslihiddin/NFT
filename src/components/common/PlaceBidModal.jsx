function PlaceBidModal({ isOpen, onClose, currentItem }) {
  if (!isOpen) return null;

  const bidHistory = [
    {
      id: 1,
      name: "Repo",
      date: "May 17, 2022 at 12:08",
      price: 1.75,
      image: "/images/card3.png",
    },
    {
      id: 2,
      name: "Travo",
      date: "May 16, 2022 at 12:08",
      price: 1.57,
      image: "/images/card5.png",
    },
    {
      id: 3,
      name: "Jennifer",
      date: "May 16, 2022 at 6:08",
      price: 1.44,
      image: "/images/card2.png",
    },
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(20,22,22,0.35)] px-[16px] backdrop-blur-[10px]">
      <div className="relative w-full max-w-[304px] rounded-[24px] border border-[#141416] bg-[#FCFCFD] px-[15px] pt-[26px] pb-[24px] shadow-[0px_30px_80px_rgba(15,15,15,0.22)] md:max-w-[420px] md:rounded-[28px] md:px-[22px] md:pt-[30px] md:pb-[28px]">
        <button
          onClick={onClose}
          className="absolute right-[14px] top-[12px] text-[22px] leading-none text-[#141416] md:right-[18px] md:top-[14px]"
        >
          ×
        </button>

        <h2 className="text-[14px] font-[600] leading-[20px] text-[#141416] md:text-[24px] md:leading-[32px]">
          History of Bid
        </h2>

        <p className="mt-[2px] text-[10px] leading-[14px] text-[#B1B5C3] md:text-[14px] md:leading-[20px]">
          Oct 14, 2022
        </p>

        <div className="mt-[12px] flex flex-col gap-[10px] md:mt-[18px] md:gap-[14px]">
          {bidHistory.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-[12px] bg-white px-[10px] py-[10px] shadow-[0px_10px_25px_rgba(197,197,197,0.16)] md:rounded-[16px] md:px-[14px] md:py-[14px]"
            >
              <div className="flex items-center gap-[10px] md:gap-[12px]">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[38px] w-[38px] rounded-full object-cover md:h-[50px] md:w-[50px]"
                  />
                  <div className="absolute right-[-2px] top-[-2px] flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#3B82F6] text-[7px] text-white md:h-[16px] md:w-[16px] md:text-[9px]">
                    ✓
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-[600] leading-[16px] text-[#141416] md:text-[18px] md:leading-[24px]">
                    {item.name}
                  </h3>
                  <p className="text-[9px] leading-[13px] text-[#B1B5C3] md:text-[13px] md:leading-[18px]">
                    {item.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[4px]">
                <span className="text-[12px] text-[#141416] md:text-[16px]">
                  ♦
                </span>
                <span className="text-[12px] font-[600] leading-[16px] text-[#141416] md:text-[20px] md:leading-[28px]">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[18px] md:mt-[26px]">
          <h3 className="text-[14px] font-[600] leading-[20px] text-[#141416] md:text-[24px] md:leading-[32px]">
            Your Bid
          </h3>

          <div className="mt-[10px] flex h-[44px] overflow-hidden rounded-[12px] border border-[#141416] bg-white md:mt-[14px] md:h-[60px] md:rounded-[16px]">
            <select className="w-[96px] border-r border-[#141416] bg-[#141416] px-[12px] text-[14px] font-[600] text-white outline-none md:w-[118px] md:px-[16px] md:text-[18px]">
              <option>ETH</option>
            </select>

            <input
              type="text"
              placeholder=""
              className="flex-1 bg-white px-[12px] text-[14px] text-[#141416] outline-none md:px-[16px] md:text-[16px]"
            />
          </div>

          <button className="mt-[10px] flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[12px] bg-[#141416] text-[14px] font-[600] text-white md:mt-[14px] md:h-[56px] md:rounded-[16px] md:text-[18px]">
            <span className="text-[13px] md:text-[16px]">▣</span>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceBidModal;
