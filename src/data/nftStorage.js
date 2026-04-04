import defaultNfts from './data'

const STORAGE_KEY = 'nft_marketplace_items'

export function getDefaultNfts() {
  return defaultNfts.map((item) => ({ ...item }))
}

export function loadNfts() {
  if (typeof window === 'undefined') return getDefaultNfts()

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return getDefaultNfts()

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed) || parsed.length === 0) return getDefaultNfts()

    return parsed
  } catch {
    return getDefaultNfts()
  }
}

export function saveNfts(items) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function getNextNftId(items) {
  if (!items.length) return 1
  return Math.max(...items.map((item) => Number(item.id) || 0)) + 1
}

export function buildNftFromForm(formData, id) {
  return {
    id,
    title: formData.name.trim() || 'Untitled NFT',
    category: formData.category || 'Art',
    collection: formData.collection || 'Premium',
    price: Number(formData.price) || 0,
    image: formData.image || '/images/card1.png',
    timeLeft: formData.timeLeft || '07h 09m 12s',
    creatorName: formData.creatorName || 'Perperzon',
    ownerName: formData.ownerName || 'Videz',
    creatorAvatar: formData.creatorAvatar || formData.image || '/images/card1.png',
    ownerAvatar: formData.ownerAvatar || '/images/card2.png',
    description: formData.description.trim() || 'No description added yet.',
    endDate: formData.endDate || 'Jun 17, 2023 at 05:08',
    royalty: formData.royalty,
    size: formData.size,
    tags: formData.tags,
    currency: formData.currency,
    stock: formData.stock,
    putOnSale: Boolean(formData.putOnSale),
    directSale: Boolean(formData.directSale),
  }
}
