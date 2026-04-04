import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function NftCard({ item }) {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <article
      onClick={() => navigate(`/info/${item.id}`)}
      className="cursor-pointer rounded-[23px] bg-white p-[10px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] transition duration-200 hover:translate-y-[-2px] md:p-[14px]"
    >
      <div className="relative">
        <img src={item.image} alt={item.title} className="h-[180px] w-full rounded-[18px] object-cover md:h-[200px] lg:h-[250px]" />

        <div className="absolute right-[11px] top-[11px] rounded-[9px] bg-[rgba(28,29,32,0.35)] px-[12px] py-[7px] text-[11px] font-[500] leading-[14px] text-white backdrop-blur-[7px] md:text-[12px]">
          {item.timeLeft}
        </div>
      </div>

      <h3 className="mt-[16px] text-[18px] font-[600] leading-[26px] text-[#141416] md:text-[20px]">{item.title}</h3>

      <div className="mt-[10px] flex items-end justify-between gap-[10px]">
        <div>
          <p className="text-[12px] leading-[18px] text-[#94A3B8]">{t('common.currentBid')}</p>

          <div className="mt-[4px] flex items-center gap-[4px]">
            <span className="text-[14px] text-[#141416]">♦</span>
            <span className="text-[15px] font-[500] leading-[22px] text-[#141416]">{item.price}</span>
          </div>
        </div>

        <button onClick={(e) => e.stopPropagation()} className="h-[40px] rounded-[12px] bg-[#141416] px-[16px] text-[11px] font-[600] uppercase text-white md:h-[44px] md:px-[20px]">
          {t('common.placeBid')}
        </button>
      </div>
    </article>
  )
}

export default NftCard
