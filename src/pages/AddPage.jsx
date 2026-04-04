import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NftForm from '../components/common/NftForm'
import { buildNftFromForm, getNextNftId, loadNfts, saveNfts } from '../data/nftStorage'

function AddPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleAdd = (formData) => {
    const items = loadNfts()
    const newItem = buildNftFromForm(formData, getNextNftId(items))
    saveNfts([...items, newItem])
    navigate('/profile')
  }

  return (
    <NftForm
      title={t('form.title')}
      buttonText={t('form.create')}
      initialData={{
        name: '',
        description: '',
        royalty: '10%',
        size: '1000 x 1000',
        tags: '',
        currency: 'ETH',
        price: '',
        stock: '001',
        putOnSale: true,
        directSale: false,
        image: '/images/card1.png',
      }}
      onSubmit={handleAdd}
    />
  )
}

export default AddPage
