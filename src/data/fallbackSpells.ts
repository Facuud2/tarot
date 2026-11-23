export interface PublicPriceTier {
  label: string;
  priceArs: number;
  priceUsd: number;
  regularPriceArs?: number | null;
  regularPriceUsd?: number | null;
  discountPercent?: number | null;
}

export interface PublicSpell {
  id: string;
  title: string;
  subtitleTag: string | null;
  description: string | null;
  isOffer: boolean;
  offerLabel: string | null;
  prices: PublicPriceTier[];
}

export interface PublicSpellCategory {
  id: string;
  name: string;
  slug: string;
  intro: string | null;
  spells: PublicSpell[];
}

export const FALLBACK_SPELLS_CATALOG: PublicSpellCategory[] = [
  {
    id: 'cat-individuales',
    name: 'Individuales',
    slug: 'individuales',
    intro: null,
    spells: [
      {
        id: 'spell-autoendulzamiento',
        title: 'Autoendulzamiento',
        subtitleTag: null,
        description:
          'Ritual de amor propio diseñado para elevar tu autoestima, reconectar con tu valor personal y magnetizar energías positivas en tu día a día.',
        isOffer: false,
        offerLabel: null,
        prices: [
          { label: 'Simple', priceArs: 35000, priceUsd: 38 },
          { label: 'Potenciado', priceArs: 55000, priceUsd: 60 },
        ],
      },
      {
        id: 'spell-corte-lazos',
        title: 'Corte de lazos',
        subtitleTag: null,
        description:
          'Ritual de liberación energética para soltar apegos emocionales, vínculos tóxicos del pasado y energías externas que te drenan.',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 30000, priceUsd: 34 }],
      },
      {
        id: 'spell-ansi-holic',
        title: 'Ansi-holic',
        subtitleTag: null,
        description:
          'Trabajo de armonización para bajar la ansiedad, calmar la mente y regular el sistema nervioso, devolviéndote tu centro, paz interior y estabilidad emocional.',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 28000, priceUsd: 31 }],
      },
    ],
  },
  {
    id: 'cat-vinculares',
    name: 'Vinculares',
    slug: 'vinculares',
    intro: null,
    spells: [
      {
        id: 'spell-endulzamiento',
        title: 'Endulzamiento',
        subtitleTag: null,
        description:
          'Potencia el amor, la ternura y el deseo dentro de tu vínculo sentimental, suavizando roces para recuperar la armonía y la comunicación fluida.',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 45000, priceUsd: 47 }],
      },
      {
        id: 'spell-retorno',
        title: 'Retorno',
        subtitleTag: null,
        description:
          'Trabajo energético enfocado en propiciar el acercamiento y regreso de un ex vínculo (magia blanca… o quizás no).',
        isOffer: true,
        offerLabel: '¡OFERTA!',
        prices: [
          {
            label: '',
            priceArs: 25000,
            priceUsd: 29,
            regularPriceArs: 35000,
            regularPriceUsd: 38,
            discountPercent: 29,
          },
        ],
      },
    ],
  },
  {
    id: 'cat-alta-magia',
    name: 'Personalizados & Alta Magia',
    slug: 'personalizados-alta-magia',
    intro:
      'Según tu caso y lo que quieras lograr, podés solicitar un ritual a medida combinando dos o más trabajos energéticos. Consultame por DM para armar el tuyo.',
    spells: [
      {
        id: 'spell-destrabe-purgado',
        title: 'Destrabe y purgado',
        subtitleTag: 'Limpieza energética profunda + Purgado espiritual',
        description:
          'Ideal para eliminar bloqueos pesados, restos de trabajos mal cerrados o cargas densas adheridas a tu energía, purificando y restaurando tu campo áurico por completo.',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 30000, priceUsd: 34 }],
      },
      {
        id: 'spell-desespero-asfixia',
        title: 'Desespero y Asfixia Mental',
        subtitleTag: null,
        description:
          'Trabajo intensivo de intranquilidad y fijación mental para que no pueda dejar de pensarte ni resistirse a buscarte. —SIN USO DE MAGIA BLANCA—',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 50000, priceUsd: 55 }],
      },
      {
        id: 'spell-sumision-dominancia',
        title: 'Sumisión y dominancia',
        subtitleTag: null,
        description:
          'Ritual enfocado en doblegar el orgullo de la persona objetivo y tomar el control energético del vínculo. A diferencia de un dominio tradicional, fusiona alquimia ritual con arcanos de tarot consagrados a la hechicería.',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 35000, priceUsd: 38 }],
      },
    ],
  },
  {
    id: 'cat-amor-vinculares',
    name: 'Hechizos de Amor y Dinámicas Vinculares',
    slug: 'hechizos-de-amor-y-dinamicas-vinculares',
    intro: null,
    spells: [
      {
        id: 'spell-desespero',
        title: 'Desespero',
        subtitleTag: null,
        description:
          'Generar urgencia mental y necesidad de comunicación en el objetivo',
        isOffer: false,
        offerLabel: null,
        prices: [{ label: '', priceArs: 30000, priceUsd: 34 }],
      },
    ],
  },
]
