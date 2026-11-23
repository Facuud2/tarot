import { useEffect, useState } from 'react'
import {
  FALLBACK_SPELLS_CATALOG,
  type PublicSpellCategory,
} from '../data/fallbackSpells'

const CACHE_KEY = 'tarotdeluna-public-spells-v3'
const DEFAULT_CATALOG_API_URL =
  'https://apphechizos.vercel.app/api/public/catalog'

export function formatDualAmount(priceArs: number, priceUsd: number): string {
  const ars = `$${Math.round(priceArs).toLocaleString('es-AR')}`
  const usd = `${Math.round(priceUsd * 100) / 100} USD`
  return `${ars} / ${usd}`
}

export function formatPublicPriceLine(
  label: string,
  priceArs: number,
  priceUsd: number
): string {
  const pair = formatDualAmount(priceArs, priceUsd)
  return label ? `${label}: ${pair}` : pair
}

export function resolveTierDiscount(tier: {
  priceArs: number
  priceUsd: number
  regularPriceArs?: number | null
  regularPriceUsd?: number | null
  discountPercent?: number | null
}): {
  hasDiscount: boolean
  regularPriceArs: number | null
  regularPriceUsd: number | null
  discountPercent: number | null
} {
  const regArs =
    tier.regularPriceArs && tier.regularPriceArs > tier.priceArs
      ? tier.regularPriceArs
      : null
  const regUsd =
    tier.regularPriceUsd && tier.regularPriceUsd > tier.priceUsd
      ? tier.regularPriceUsd
      : null
  const pct =
    tier.discountPercent && tier.discountPercent > 0
      ? tier.discountPercent
      : regArs
        ? Math.round(((regArs - tier.priceArs) / regArs) * 100)
        : regUsd
          ? Math.round(((regUsd - tier.priceUsd) / regUsd) * 100)
          : null

  return {
    hasDiscount: Boolean(regArs || regUsd),
    regularPriceArs: regArs,
    regularPriceUsd: regUsd,
    discountPercent: pct,
  }
}

export function usePublicSpellsCatalog() {
  const [categories, setCategories] = useState<PublicSpellCategory[]>(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed as PublicSpellCategory[]
        }
      }
    } catch {
      // Ignore storage errors
    }
    return FALLBACK_SPELLS_CATALOG
  })

  useEffect(() => {
    const envUrl = (
      import.meta.env.VITE_CATALOG_API_URL as string | undefined
    )?.trim()
    const apiUrl = envUrl || DEFAULT_CATALOG_API_URL

    const controller = new AbortController()

    fetch(apiUrl, {
      signal: controller.signal,
      cache: 'no-store',
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && Array.isArray(data.categories)) {
          setCategories(data.categories as PublicSpellCategory[])
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data.categories))
          } catch {
            // Ignore storage errors
          }
        }
      })
      .catch(() => {
        // Keep cached or fallback catalog gracefully
      })

    return () => controller.abort()
  }, [])

  return categories
}
