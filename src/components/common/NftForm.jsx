import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function NftForm({ title, buttonText, initialData, onSubmit }) {
  const { t } = useTranslation()

  const buildInitialState = () => ({
    name: initialData?.name ?? '',
    description: initialData?.description ?? '',
    royalty: initialData?.royalty ?? '10%',
    size: initialData?.size ?? '1000 x 1000',
    tags: initialData?.tags ?? '',
    category: initialData?.category ?? 'Art',
    collection: initialData?.collection ?? 'Premium',
    currency: initialData?.currency ?? 'ETH',
    price: initialData?.price ?? '',
    stock: initialData?.stock ?? '001',
    putOnSale: initialData?.putOnSale ?? true,
    directSale: initialData?.directSale ?? false,
    image: initialData?.image ?? '/images/card1.png',
  })

  const [form, setForm] = useState(buildInitialState)

  useEffect(() => {
    setForm(buildInitialState())
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleToggle = (field) => {
    setForm((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <section className="w-full pb-[80px] pt-[36px] md:pb-[100px] md:pt-[46px] lg:pb-[120px] lg:pt-[56px]">
      <div className="mx-auto max-w-[1440px] px-[20px] md:px-[40px] lg:px-[96px]">
        <h1 className="text-center text-[34px] font-[600] leading-[42px] text-[#141416] md:text-[42px] md:leading-[50px] lg:text-[45px] lg:leading-[54px]">
          {title}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-[34px] grid grid-cols-1 gap-[28px] md:mt-[42px] lg:grid-cols-[1fr_250px] lg:gap-[30px]"
        >
          <div>
            <div>
              <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.name')}</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('form.namePlaceholder')}
                  className="h-[46px] w-full rounded-[12px] border border-[#D9D9D9] bg-white px-[14px] pr-[38px] text-[14px] outline-none"
                />
                <span className="absolute right-[12px] top-[50%] translate-y-[-50%] text-[#B1B5C3]">✎</span>
              </div>
            </div>

            <div className="mt-[16px]">
              <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.description')}</label>
              <div className="relative">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder={t('form.descriptionPlaceholder')}
                  className="h-[120px] w-full resize-none rounded-[12px] border border-[#D9D9D9] bg-white px-[14px] py-[12px] pr-[38px] text-[14px] outline-none"
                />
                <span className="absolute right-[12px] top-[14px] text-[#B1B5C3]">✎</span>
              </div>
            </div>

            <div className="mt-[16px] grid grid-cols-2 gap-[14px] md:grid-cols-[120px_140px]">
              <div>
                <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.royalty')}</label>
                <select name="royalty" value={form.royalty} onChange={handleChange} className="h-[46px] w-full rounded-[12px] border border-[#D9D9D9] bg-white px-[12px] text-[14px] outline-none">
                  <option value="10%">10%</option>
                  <option value="15%">15%</option>
                  <option value="20%">20%</option>
                </select>
              </div>

              <div>
                <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.size')}</label>
                <select name="size" value={form.size} onChange={handleChange} className="h-[46px] w-full rounded-[12px] border border-[#D9D9D9] bg-white px-[12px] text-[14px] outline-none">
                  <option value="1000 x 1000">1000 x 1000</option>
                  <option value="800 x 800">800 x 800</option>
                  <option value="600 x 600">600 x 600</option>
                </select>
              </div>
            </div>

            <div className="mt-[16px]">
              <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.tags')}</label>
              <div className="relative">
                <input
                  type="text"
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder={t('form.tagsPlaceholder')}
                  className="h-[46px] w-full rounded-[12px] border border-[#D9D9D9] bg-white px-[14px] pr-[38px] text-[14px] outline-none"
                />
                <span className="absolute right-[12px] top-[50%] translate-y-[-50%] text-[#B1B5C3]">✎</span>
              </div>
            </div>

            <div className="mt-[16px] grid grid-cols-2 gap-[14px] md:grid-cols-[1fr_120px]">
              <div>
                <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.price')}</label>
                <div className="grid grid-cols-[84px_1fr] gap-[10px]">
                  <select name="currency" value={form.currency} onChange={handleChange} className="h-[46px] rounded-[12px] border border-[#D9D9D9] bg-white px-[10px] text-[14px] outline-none">
                    <option value="ETH">ETH</option>
                    <option value="BTC">BTC</option>
                  </select>

                  <input
                    type="text"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                    placeholder={t('form.pricePlaceholder')}
                    className="h-[46px] rounded-[12px] border border-[#D9D9D9] bg-white px-[14px] text-[14px] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-[8px] block text-[14px] font-[500] text-[#141416]">{t('form.inStock')}</label>
                <select name="stock" value={form.stock} onChange={handleChange} className="h-[46px] w-full rounded-[12px] border border-[#D9D9D9] bg-white px-[12px] text-[14px] outline-none">
                  <option value="001">001</option>
                  <option value="008">008</option>
                  <option value="010">010</option>
                </select>
              </div>
            </div>

            <div className="mt-[22px] flex items-start justify-between gap-[16px]">
              <div>
                <h3 className="text-[14px] font-[500] text-[#141416]">{t('form.putOnSale')}</h3>
                <p className="mt-[4px] text-[12px] text-[#B1B5C3]">{t('form.putOnSaleHint')}</p>
              </div>

              <button type="button" onClick={() => handleToggle('putOnSale')} className={`relative h-[22px] w-[36px] rounded-full transition ${form.putOnSale ? 'bg-[#141416]' : 'bg-[#E6E6E6]'}`}>
                <span className={`absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white transition ${form.putOnSale ? 'left-[17px]' : 'left-[3px]'}`} />
              </button>
            </div>

            <div className="mt-[18px] flex items-start justify-between gap-[16px]">
              <div>
                <h3 className="text-[14px] font-[500] text-[#141416]">{t('form.directSale')}</h3>
                <p className="mt-[4px] text-[12px] text-[#B1B5C3]">{t('form.directSaleHint')}</p>
              </div>

              <button type="button" onClick={() => handleToggle('directSale')} className={`relative h-[22px] w-[36px] rounded-full transition ${form.directSale ? 'bg-[#141416]' : 'bg-[#E6E6E6]'}`}>
                <span className={`absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white transition ${form.directSale ? 'left-[17px]' : 'left-[3px]'}`} />
              </button>
            </div>

            <button type="submit" className="mt-[30px] h-[54px] w-full rounded-[14px] bg-[#141416] text-[14px] font-[600] text-white md:h-[58px]">
              {buttonText}
            </button>
          </div>

          <div className="lg:pt-[18px]">
            <div className="rounded-[20px] bg-white p-[14px] shadow-[0px_18px_40px_rgba(197,197,197,0.25)]">
              <img src={form.image} alt="preview" className="h-[220px] w-full rounded-[18px] object-cover md:h-[250px] lg:h-[220px]" />
            </div>

            <button type="button" className="mt-[18px] h-[46px] w-full rounded-[14px] bg-[#141416] text-[14px] font-[600] text-white">
              {t('common.upload')}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default NftForm
