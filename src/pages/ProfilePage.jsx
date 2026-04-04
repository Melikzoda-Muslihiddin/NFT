import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { loadNfts, saveNfts } from '../data/nftStorage'

function ProfilePage() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(loadNfts().slice(0, 8))
  }, [])

  const handleDelete = (id) => {
    const nextItems = loadNfts().filter((item) => item.id !== id)
    saveNfts(nextItems)
    setItems(nextItems.slice(0, 8))
  }

  return (
    <section className="w-full pb-[80px] pt-[36px] md:pb-[100px] md:pt-[46px] lg:pb-[120px] lg:pt-[56px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <div className="flex flex-col gap-[16px] md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-[34px] font-[600] leading-[42px] text-[#141416] md:text-[42px] md:leading-[50px] lg:text-[45px] lg:leading-[54px]">
              {t('profile.title')}
            </h1>
            <p className="mt-[6px] text-[14px] leading-[22px] text-[#808191]">{t('profile.subtitle')}</p>
          </div>

          <button onClick={() => navigate('/add')} className="h-[48px] rounded-[14px] bg-[#141416] px-[22px] text-[14px] font-[600] text-white">
            {t('common.add')}
          </button>
        </div>

        <div className="mt-[30px] grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.id} className="rounded-[20px] bg-white p-[14px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)]">
              <img src={item.image} alt={item.title} className="h-[220px] w-full rounded-[16px] object-cover" />

              <h2 className="mt-[16px] text-[22px] font-[600] leading-[30px] text-[#141416]">{item.title}</h2>

              <p className="mt-[8px] text-[14px] leading-[22px] text-[#808191]">{item.description.slice(0, 90)}...</p>

              <div className="mt-[16px] flex flex-wrap gap-[10px]">
                <button onClick={() => navigate(`/info/${item.id}`)} className="h-[40px] rounded-[12px] border border-[#141416] px-[14px] text-[13px] font-[600] text-[#141416]">
                  {t('common.info')}
                </button>

                <button onClick={() => navigate(`/edit/${item.id}`)} className="h-[40px] rounded-[12px] border border-[#141416] px-[14px] text-[13px] font-[600] text-[#141416]">
                  {t('common.edit')}
                </button>

                <button onClick={() => handleDelete(item.id)} className="h-[40px] rounded-[12px] bg-[#141416] px-[14px] text-[13px] font-[600] text-white">
                  {t('common.delete')}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfilePage
