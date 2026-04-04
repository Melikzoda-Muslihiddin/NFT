import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { loadNfts } from '../../data/nftStorage'
import NftCard from './NftCard'

function MarketplaceSection({ titleKey = 'marketplace.discoverTitle', isHome = false }) {
  const { t } = useTranslation()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [collection, setCollection] = useState('All')
  const [price, setPrice] = useState('All')

  const items = loadNfts()

  const filteredData = useMemo(() => {
    return items.filter((item) => {
      const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'All' ? true : item.category === category
      const matchCollection = collection === 'All' ? true : item.collection === collection
      const matchPrice = price === 'All' ? true : Number(item.price) === Number(price)
      return matchSearch && matchCategory && matchCollection && matchPrice
    })
  }, [items, search, category, collection, price])

  const visibleData = isHome ? filteredData.slice(0, 8) : filteredData

  return (
    <section className="w-full pb-[90px] pt-[70px] md:pb-[110px] md:pt-[90px] lg:pb-[140px] lg:pt-[110px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <h2 className="text-center text-[34px] font-[600] leading-[42px] text-[#141416] md:text-[48px] md:leading-[56px] lg:text-[45px] lg:leading-[54px]">
          {t(titleKey)}
        </h2>

        <div className="mt-[28px] flex flex-col items-center gap-[14px] md:mt-[34px] lg:mt-[38px]">
          <div className="flex w-full flex-col items-center justify-center gap-[10px] md:flex-row md:flex-wrap">
            <input
              type="text"
              placeholder={t('common.searchNft')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-[44px] w-full max-w-[260px] rounded-[14px] border border-[#D9D9D9] bg-white px-[16px] text-[13px] text-[#141416] outline-none md:h-[48px] md:max-w-[220px]"
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-[44px] w-full max-w-[140px] rounded-[14px] border border-[#141416] bg-white px-[14px] text-[13px] font-[500] text-[#141416] outline-none md:h-[48px]">
              <option value="All">{t('common.category')}</option>
              <option value="Art">{t('marketplace.categoryArt')}</option>
              <option value="Collection">{t('marketplace.categoryCollection')}</option>
              <option value="Price">{t('marketplace.categoryPrice')}</option>
            </select>

            <select value={collection} onChange={(e) => setCollection(e.target.value)} className="h-[44px] w-full max-w-[140px] rounded-[14px] border border-[#141416] bg-white px-[14px] text-[13px] font-[500] text-[#141416] outline-none md:h-[48px]">
              <option value="All">{t('common.collection')}</option>
              <option value="Premium">{t('marketplace.collectionPremium')}</option>
              <option value="Classic">{t('marketplace.collectionClassic')}</option>
              <option value="Soft">{t('marketplace.collectionSoft')}</option>
            </select>

            <select value={price} onChange={(e) => setPrice(e.target.value)} className="h-[44px] w-full max-w-[140px] rounded-[14px] border border-[#141416] bg-white px-[14px] text-[13px] font-[500] text-[#141416] outline-none md:h-[48px]">
              <option value="All">{t('common.price')}</option>
              <option value="1.25">1.25</option>
              <option value="1.75">1.75</option>
            </select>
          </div>
        </div>

        <div className="mt-[34px] grid grid-cols-1 gap-[18px] md:mt-[44px] md:grid-cols-3 lg:mt-[56px] lg:grid-cols-4 lg:gap-[32px]">
          {visibleData.map((item) => (
            <NftCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-[34px] flex justify-center md:mt-[50px] lg:mt-[60px] lg:justify-end">
          <button className="flex items-center gap-[10px] text-[16px] font-[500] text-[#ACADB9] lg:text-[20px]">
            {t('common.exploreAll')}
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default MarketplaceSection
