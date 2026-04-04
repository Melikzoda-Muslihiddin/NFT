import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NftForm from '../components/common/NftForm'
import { buildNftFromForm, loadNfts, saveNfts } from '../data/nftStorage'

function EditPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { t } = useTranslation()

  const items = loadNfts()
  const currentItem = items.find((item) => item.id === Number(id)) || items[0]

  const handleEdit = (formData) => {
    const updatedItems = items.map((item) =>
      item.id === Number(id) ? buildNftFromForm(formData, item.id) : item,
    )
    saveNfts(updatedItems)
    navigate('/profile')
  }

  return (
    <NftForm
      title={t('form.title')}
      buttonText={t('form.update')}
      initialData={{
        name: currentItem.title,
        description: currentItem.description,
        royalty: currentItem.royalty || '10%',
        size: currentItem.size || '1000 x 1000',
        tags: currentItem.tags || `Glass-Sun-Beautiful-Sunset-NFT ${currentItem.title}`,
        category: currentItem.category,
        collection: currentItem.collection,
        currency: currentItem.currency || 'ETH',
        price: String(currentItem.price),
        stock: currentItem.stock || '008',
        putOnSale: currentItem.putOnSale ?? true,
        directSale: currentItem.directSale ?? false,
        image: currentItem.image,
      }}
      onSubmit={handleEdit}
    />
  )
}

export default EditPage
