import { useState } from 'react'
import './App.css'

type ViewState = 'home' | 'lecturas' | 'hechizos' | 'coach'

export function App() {
  const [view, setView] = useState<ViewState>('home')

  // Datos reales de tus redes y perfil
  const profile = {
    handle: '@eltarotde_luna',
    instagramHandle: '@eltarotde._luna',
    role: 'Brujita & Tarotista ✧',
    twitterUrl: 'https://x.com/eltarotde_luna',
    instagramUrl: 'https://www.instagram.com/eltarotde._luna/',
  }

  // Tus dos playlists de YouTube en la pantalla de inicio
  const youtubePlaylists = [
    {
      id: 1,
      title: 'Música para manifestar',
      note: 'Playlist general de manifestación',
      url: 'https://www.youtube.com/watch?v=bcQ7CE679Hk&list=PLVLytibRvYw6X47lAGnvF9rRJVb8dd5f8',
      length: 'YouTube ↗',
    },
    {
      id: 2,
      title: 'Mis audios subliminales',
      note: 'Playlist personal (¡no son míos!)',
      url: 'https://www.youtube.com/watch?v=mJ24LAa72Kc&list=PLVLytibRvYw4R3-0iOZrxph0g4Nmtv4sr',
      length: 'YouTube ↗',
    },
  ]

  const navigateTo = (nextView: ViewState) => {
    setView(nextView)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="carrd-shell">
      <main className="carrd-container">
        {/* CABECERA CON TU FOTO:
            - En 'home': Foto protagonista con @eltarotde_luna
            - En 'lecturas', 'hechizos' o 'coach': Se compacta arriba con el botón de "Casita" para volver al inicio */}
        <header className={`hero-photo-box ${view !== 'home' ? 'is-compact' : ''}`}>
          <img
            src="/profile.jpg"
            alt="Foto de perfil de @eltarotde_luna con la carta El Colgado"
            className="hero-img"
          />

          <div className="hero-gradient">
            <div className="hero-identity">
              <span className="hero-handle">{profile.handle}</span>
              {view === 'home' && <span className="hero-subtitle">{profile.role}</span>}
            </div>

            {view !== 'home' && (
              <button
                type="button"
                className="hero-corner-btn"
                onClick={() => navigateTo('home')}
                aria-label="Volver al inicio"
                title="Volver al inicio"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3.2 3 10.7h2.6V20h5v-5.3h2.8V20h5v-9.3H21L12 3.2z" />
                </svg>
              </button>
            )}
          </div>
        </header>

        {/* CUERPO PRINCIPAL: Pasa de vista limpiamente sin botones extra ni espacio de más */}
        <section className="card-body">
          {/* =========================================================
              VISTA 0: INICIO (Botones Lecturas / Hechizos / Coach + 2 Playlists)
             ========================================================= */}
          {view === 'home' && (
            <div className="view-content">
              <div className="action-pills-row">
                <button
                  type="button"
                  className="action-pill-btn"
                  onClick={() => navigateTo('lecturas')}
                >
                  <span className="action-pill-icon" aria-hidden="true">
                    ▶
                  </span>
                  <span>Lecturas</span>
                </button>

                <button
                  type="button"
                  className="action-pill-btn"
                  onClick={() => navigateTo('hechizos')}
                >
                  <span className="action-pill-icon" aria-hidden="true">
                    ✚
                  </span>
                  <span>Hechizos</span>
                </button>

                <button
                  type="button"
                  className="action-pill-btn"
                  onClick={() => navigateTo('coach')}
                >
                  <span className="action-pill-icon" aria-hidden="true">
                    ✦
                  </span>
                  <span>Coach</span>
                </button>
              </div>

              <div className="tracklist-header">
                <span># Playlist</span>
                <span>Link</span>
              </div>

              <div className="tracklist-rows">
                {youtubePlaylists.map((playlist) => (
                  <a
                    key={playlist.id}
                    href={playlist.url}
                    target="_blank"
                    rel="noreferrer"
                    className="tracklist-row"
                  >
                    <div className="track-left">
                      <span className="track-num">{playlist.id}</span>
                      <div className="track-info">
                        <span className="track-title">{playlist.title}</span>
                        <span className="track-note">{playlist.note}</span>
                      </div>
                    </div>
                    <span className="track-length">{playlist.length}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================
              VISTA 1: PÁGINA COMPLETA DE LECTURAS
             ========================================================= */}
          {view === 'lecturas' && (
            <div className="view-content">
              <div className="page-section-header">
                <h1 className="page-hash-title"># Lecturas</h1>
              </div>

              {/* 1. LENORMAND */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Lenormand</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Concretas (Simples sí/no)</h3>
                    <div className="item-prices-list">
                      <span className="item-price-line">1x: $3.000 / 4.44 USD</span>
                      <span className="item-price-line">3x: $7.000 / 9 USD</span>
                    </div>
                  </article>
                </div>
              </div>

              {/* 2. ESTÁNDAR */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Estándar</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Concretas (Completas)</h3>
                    <div className="item-prices-list">
                      <span className="item-price-line">1x: $6.500 / 8 USD</span>
                      <span className="item-price-line">3x: $14.500 / 16 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Espectro completo</h3>
                    <p className="item-description">
                      Diseñado para comprender TODO acerca de una situación, revelando
                      cómo se conecta el pasado con tu presente y hacia dónde se dirige
                      el futuro.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$18.000 / 20 USD</span>
                    </div>
                  </article>
                </div>
              </div>

              {/* 3. AMOR */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Amor</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Espejo del Alma & Intenciones</h3>
                    <p className="item-description">
                      Lectura para descubrir qué piensa, qué siente y cuáles son sus
                      verdaderas intenciones hacia vos, integrando el plano energético y
                      astrológico (Baraja estándar + Oráculo astrológico).
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$9.000 / 10.44 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Tu Futura Pareja</h3>
                    <p className="item-description">
                      Lectura para conocer cómo será tu próxima pareja, qué
                      características tiene, en qué contexto se conocerán y una
                      estimación de tiempo (Baraja estándar + Lenormand).
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$9.000 / 10.44 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Ex Vínculo & Retorno</h3>
                    <p className="item-description">
                      Analizamos en qué punto está hoy el vínculo con tu ex, qué podés
                      esperar a corto plazo (acercamiento, regreso o distancia definitiva)
                      y cuáles son los bloqueos actuales entre ambos.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$9.500 / 11 USD</span>
                    </div>
                  </article>
                </div>
              </div>

              {/* 4. DINERO */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Dinero</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Brújula de Proyectos & Decisiones</h3>
                    <p className="item-description">
                      ¿Mi proyecto o emprendimiento va a funcionar? ¿Qué obstáculos debo
                      prevenir y cuál es la mejor decisión para avanzar con éxito?
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$7.000 / 9 USD</span>
                    </div>
                  </article>
                </div>
              </div>

              {/* 5. PERSONAL / CLARIDAD ESPIRITUAL */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Personal / Claridad espiritual</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Presente Espiritual & Evolución</h3>
                    <p className="item-description">
                      Ideal para encontrar claridad en momentos de duda personal,
                      identificar patrones que se repiten y entender qué aprendizaje te
                      trae tu etapa actual.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$7.000 / 9 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Diagnóstico Energético de Hechizo</h3>
                    <p className="item-description">
                      Evaluación para conocer cómo está actuando un ritual o hechizo ya
                      realizado: en qué fase se encuentra la energía, si ya impactó o si
                      existe alguna resistencia, junto con una guía sobre cómo continuar.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$7.000 / 9 USD</span>
                    </div>
                  </article>
                </div>
              </div>

              <p className="custom-reading-note">
                (Para lecturas personalizadas escribime al DM)
              </p>
            </div>
          )}

          {/* =========================================================
              VISTA 2: PÁGINA COMPLETA DE HECHIZOS
             ========================================================= */}
          {view === 'hechizos' && (
            <div className="view-content">
              <div className="page-section-header">
                <h1 className="page-hash-title"># Hechizos</h1>
              </div>

              {/* 1. INDIVIDUALES */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Individuales</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Autoendulzamiento</h3>
                    <p className="item-description">
                      Ritual de amor propio diseñado para elevar tu autoestima,
                      reconectar con tu valor personal y magnetizar energías positivas en
                      tu día a día.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">Simple: $35.000 / 38 USD</span>
                      <span className="item-price-line">Potenciado: $55.000 / 60 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Corte de lazos</h3>
                    <p className="item-description">
                      Ritual de liberación energética para soltar apegos emocionales,
                      vínculos tóxicos del pasado y energías externas que te drenan.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$30.000 / 34 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Ansi-holic</h3>
                    <p className="item-description">
                      Trabajo de armonización para bajar la ansiedad, calmar la mente y
                      regular el sistema nervioso, devolviéndote tu centro, paz interior
                      y estabilidad emocional.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$28.000 / 31 USD</span>
                    </div>
                  </article>
                </div>
              </div>

              {/* 2. VINCULARES */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Vinculares</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Endulzamiento</h3>
                    <p className="item-description">
                      Potencia el amor, la ternura y el deseo dentro de tu vínculo
                      sentimental, suavizando roces para recuperar la armonía y la
                      comunicación fluida.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$45.000 / 47 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Retorno</h3>
                    <p className="item-description">
                      Trabajo energético enfocado en propiciar el acercamiento y regreso
                      de un ex vínculo <em>(magia blanca… o quizás no)</em>.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">
                        $25.000 / 29 USD <span className="offer-badge">¡OFERTA!</span>
                      </span>
                    </div>
                  </article>
                </div>
              </div>

              {/* 3. PERSONALIZADOS Y ALTA INTENSIDAD */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Personalizados & Alta Magia</h2>

                <p className="item-description" style={{ marginBottom: '14px' }}>
                  Según tu caso y lo que quieras lograr, podés solicitar un ritual a
                  medida combinando dos o más trabajos energéticos.{' '}
                  <strong>Consultame por DM para armar el tuyo.</strong>
                </p>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Destrabe y purgado</h3>
                    <span className="item-subtitle-tag">
                      Limpieza energética profunda + Purgado espiritual
                    </span>
                    <p className="item-description">
                      Ideal para eliminar bloqueos pesados, restos de trabajos mal
                      cerrados o cargas densas adheridas a tu energía, purificando y
                      restaurando tu campo áurico por completo.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$30.000 / 34 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Desespero y Asfixia Mental</h3>
                    <p className="item-description">
                      Trabajo intensivo de intranquilidad y fijación mental para que no
                      pueda dejar de pensarte ni resistirse a buscarte.{' '}
                      <strong>—SIN USO DE MAGIA BLANCA—</strong>
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$50.000 / 55 USD</span>
                    </div>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Sumisión y dominancia</h3>
                    <p className="item-description">
                      Ritual enfocado en doblegar el orgullo de la persona objetivo y
                      tomar el control energético del vínculo. A diferencia de un dominio
                      tradicional, fusiona alquimia ritual con arcanos de tarot
                      consagrados a la hechicería.
                    </p>
                    <div className="item-prices-list">
                      <span className="item-price-line">$35.000 / 38 USD</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              VISTA 3: PÁGINA COMPLETA DE COACH & MANIFESTACIÓN
             ========================================================= */}
          {view === 'coach' && (
            <div className="view-content">
              <div className="page-section-header">
                <h1 className="page-hash-title"># Coach & Manifestación (Experimental)</h1>
              </div>

              {/* 1. SESIONES Y MÉTODOS BASE */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Diagnóstico & Estrategia</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Resolución general</h3>
                    <p className="item-description">
                      Espacio de charla profunda 1 a 1 donde analizamos tu situación
                      actual, detectamos bloqueos inconscientes o creencias limitantes y
                      definimos qué técnicas de manifestación o hechizos son los más
                      efectivos para tu caso.
                    </p>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Método personalizado</h3>
                    <p className="item-description">
                      Diseño de una rutina y método de manifestación único, creado desde
                      cero según tu energía y tu objetivo puntual (amor, dinero,
                      autoconcepto o cambios de realidad), combinando programación mental
                      y práctica esotérica.
                    </p>
                  </article>
                </div>
              </div>

              {/* 2. PLANES DE ACOMPAÑAMIENTO */}
              <div className="catalog-category-block">
                <h2 className="category-underline-title">Planes de acompañamiento</h2>

                <div className="catalog-items-stack">
                  <article className="catalog-item">
                    <h3 className="item-title">Plan Reprogramación & Autoconcepto</h3>
                    <span className="item-subtitle-tag">
                      Enfoque mental, energético y magnético
                    </span>
                    <p className="item-description">
                      Acompañamiento guiado para transformar tu diálogo interno, sostener
                      el estado del deseo cumplido, eliminar la ansiedad por el resultado
                      y volverte un imán para lo que estás manifestando.
                    </p>
                  </article>

                  <article className="catalog-item">
                    <h3 className="item-title">Plan Seguimiento Intensivo 1 a 1</h3>
                    <span className="item-subtitle-tag">
                      Mentoría continua + Ajustes en tiempo real
                    </span>
                    <p className="item-description">
                      Para quienes buscan guía constante durante su proceso. Incluye
                      acompañamiento directo para sostener tu disciplina mental, evaluar
                      avances energéticos, destrabar recaídas y potenciar tus resultados
                      paso a paso.
                    </p>
                  </article>
                </div>
              </div>

              <p className="custom-reading-note">
                (Consultar por DM)
              </p>
            </div>
          )}

          {/* Barra inferior fija con @eltarotde_luna y prioridad en los íconos de X e Instagram */}
          <footer className="card-footer-bar">
            <span className="footer-handle">{profile.handle}</span>

            <div className="footer-social-icons">
              <a
                href={profile.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-icon-circle"
                aria-label="X / Twitter (@eltarotde_luna)"
                title="X / Twitter (@eltarotde_luna)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href={profile.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-icon-circle"
                aria-label="Instagram (@eltarotde._luna)"
                title="Instagram (@eltarotde._luna)"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
