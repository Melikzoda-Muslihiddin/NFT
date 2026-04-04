import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import NftCard from '../components/common/NftCard'
import PlaceBidModal from '../components/common/PlaceBidModal'
import { loadNfts } from '../data/nftStorage'

function InfoPage() {
  const { id } = useParams()
  const { t } = useTranslation()
  const [isBidModalOpen, setIsBidModalOpen] = useState(false)

  const items = loadNfts()
  const currentItem = items.find((item) => item.id === Number(id)) || items[0]
  const creatorItems = items.slice(0, 5)

  return (
    <>
      <section className="w-full pb-[70px] pt-[26px] md:pb-[90px] md:pt-[36px] lg:pb-[120px] lg:pt-[40px]">
        <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
          <Link to="/discover" className="inline-flex items-center gap-[10px] text-[16px] font-[500] text-[#141416]">
            <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#EDEDED] text-[14px]">←</span>
            {t('info.productDetail')}
          </Link>

          <div className="mt-[26px] rounded-[24px] bg-white p-[14px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)] md:mt-[30px] md:p-[18px] lg:mt-[34px] lg:flex lg:items-start lg:gap-[40px] lg:p-[16px]">
            <div className="w-full lg:max-w-[530px]">
              <img src={currentItem.image} alt={currentItem.title} className="h-[300px] w-full rounded-[18px] object-cover md:h-[360px] lg:h-[500px]" />
            </div>

            <div className="mt-[20px] lg:mt-[0] lg:flex-1">
              <h1 className="text-[30px] font-[600] leading-[38px] text-[#141416] md:text-[36px] lg:text-[48px] lg:leading-[58px]">
                {t('info.project')} {currentItem.title}
              </h1>

              <p className="mt-[12px] max-w-[420px] text-[14px] leading-[24px] text-[#808191] md:text-[16px] md:leading-[26px]">
                {currentItem.description}
              </p>

              <div className="mt-[24px] flex items-center gap-[20px] md:gap-[34px]">
                <div className="flex items-center gap-[10px]">
                  <img src={currentItem.creatorAvatar} alt={currentItem.creatorName} className="h-[44px] w-[44px] rounded-full object-cover md:h-[52px] md:w-[52px]" />
                  <div>
                    <p className="text-[12px] leading-[18px] text-[#808191]">{t('info.createdBy')}</p>
                    <h3 className="text-[15px] font-[600] text-[#141416] md:text-[18px]">{currentItem.creatorName}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-[10px]">
                  <img src={currentItem.ownerAvatar} alt={currentItem.ownerName} className="h-[44px] w-[44px] rounded-full object-cover md:h-[52px] md:w-[52px]" />
                  <div>
                    <p className="text-[12px] leading-[18px] text-[#808191]">{t('info.ownedBy')}</p>
                    <h3 className="text-[15px] font-[600] text-[#141416] md:text-[18px]">{currentItem.ownerName}</h3>
                  </div>
                </div>
              </div>

              <div className="mt-[26px] flex items-end justify-between gap-[20px]">
                <div>
                  <p className="text-[12px] leading-[18px] text-[#808191]">{t('info.currentBid')}</p>
                  <div className="mt-[6px] flex items-center gap-[4px]">
                    <span className="text-[16px]">♦</span>
                    <span className="text-[28px] font-[600] text-[#141416] md:text-[32px]">{currentItem.price}</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[12px] leading-[18px] text-[#808191]">{t('info.endIn')}</p>
                  <p className="mt-[6px] text-[13px] font-[500] text-[#141416] md:text-[16px]">{currentItem.endDate}</p>
                </div>
              </div>

              <button onClick={() => setIsBidModalOpen(true)} className="mt-[24px] h-[54px] w-full rounded-[14px] bg-[#141416] text-[14px] font-[600] text-white md:mt-[30px] md:h-[58px]">
                {t('common.placeBid')}
              </button>
            </div>
          </div>

          <div className="mt-[40px] md:mt-[50px] lg:mt-[58px]">
            <h2 className="text-[22px] font-[600] text-[#C0C0C0] md:text-[26px]">{t('info.fromCreator')}</h2>

            <div className="mt-[24px] grid grid-cols-1 gap-[16px] md:grid-cols-3 lg:grid-cols-5 lg:gap-[18px]">
              {creatorItems.map((item) => (
                <NftCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <PlaceBidModal isOpen={isBidModalOpen} onClose={() => setIsBidModalOpen(false)} currentItem={currentItem} />
    </>
  )
}

export default InfoPage
