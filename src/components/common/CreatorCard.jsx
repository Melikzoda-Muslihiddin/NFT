function CreatorCard({ item }) {
  return (
    <article className="rounded-[18px] bg-white p-[10px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] md:rounded-[22px] md:p-[12px]">
      <div className="relative">
        <img
          src={item.cover}
          alt={item.name}
          className="h-[72px] w-full rounded-[14px] object-cover md:h-[98px] lg:h-[120px]"
        />

        <div className="absolute left-[50%] top-[100%] h-[48px] w-[48px] translate-x-[-50%] translate-y-[-50%] rounded-full border-[3px] border-white bg-white md:h-[62px] md:w-[62px] lg:h-[74px] lg:w-[74px]">
          <img
            src={item.avatar}
            alt={item.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>

      <div className="pt-[30px] text-center md:pt-[38px] lg:pt-[44px]">
        <div className="flex items-center justify-center gap-[6px]">
          <h3 className="text-[14px] font-[600] leading-[20px] text-[#141416] md:text-[16px] lg:text-[20px]">
            {item.name}
          </h3>
          <span className="text-[10px] text-[#3772FF]">●</span>
        </div>

        <div className="mt-[12px] grid grid-cols-4 gap-[6px] text-center md:mt-[14px] lg:mt-[16px]">
          <div>
            <p className="text-[10px] font-[600] leading-[14px] text-[#141416] md:text-[11px] lg:text-[12px]">
              {item.items}
            </p>
            <p className="mt-[2px] text-[7px] leading-[10px] text-[#848586] md:text-[8px] lg:text-[9px]">
              {item.itemsLabel}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-[600] leading-[14px] text-[#141416] md:text-[11px] lg:text-[12px]">
              {item.followers}
            </p>
            <p className="mt-[2px] text-[7px] leading-[10px] text-[#848586] md:text-[8px] lg:text-[9px]">
              Items
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-[2px]">
              <span className="text-[8px] text-[#141416]">♦</span>
              <p className="text-[10px] font-[600] leading-[14px] text-[#141416] md:text-[11px] lg:text-[12px]">
                {item.floorPrice}
              </p>
            </div>
            <p className="mt-[2px] text-[7px] leading-[10px] text-[#848586] md:text-[8px] lg:text-[9px]">
              Floor Price
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center gap-[2px]">
              <span className="text-[8px] text-[#141416]">♦</span>
              <p className="text-[10px] font-[600] leading-[14px] text-[#141416] md:text-[11px] lg:text-[12px]">
                {item.traded}
              </p>
            </div>
            <p className="mt-[2px] text-[7px] leading-[10px] text-[#848586] md:text-[8px] lg:text-[9px]">
              Traded
            </p>
          </div>
        </div>

        <div className="mt-[14px] grid grid-cols-3 gap-[6px] md:mt-[16px] lg:mt-[18px]">
          <img
            src={item.preview1}
            alt="preview"
            className="h-[38px] w-full rounded-[8px] object-cover md:h-[46px] lg:h-[52px]"
          />
          <img
            src={item.preview2}
            alt="preview"
            className="h-[38px] w-full rounded-[8px] object-cover md:h-[46px] lg:h-[52px]"
          />
          <div className="relative h-[38px] overflow-hidden rounded-[8px] md:h-[46px] lg:h-[52px]">
            <img
              src={item.preview3}
              alt="preview"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[rgba(20,22,22,0.45)] text-[11px] font-[600] text-white md:text-[12px] lg:text-[14px]">
              +55
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CreatorCard;
