// src/App.jsx
import { useState, useRef } from 'react'
import './App.css'
import { toPng } from 'html-to-image'
import download from 'downloadjs'

// ─── 0) IMPORT DYNAMIQUE DES IMAGES ───────────────────────────────────────────
const posterModules = import.meta.glob(
  './assets/Posters/Poster*/Fiche*match*.png',
  { eager: true, import: 'default' }
)

const posterSets = {}
for (const path in posterModules) {
  const m = path.match(/\.\/assets\/Posters\/(Poster\d+)\/Fiche(\d+)match/)
  if (!m) continue
  const [, folder, numStr] = m
  const num = parseInt(numStr, 10)
  const src = posterModules[path]
  if (!posterSets[folder]) posterSets[folder] = []
  posterSets[folder].push({ src, num })
}
Object.values(posterSets).forEach(arr =>
  arr.sort((a, b) => a.num - b.num)
)

// ─── LISTE PRÉDÉFINIE DES ÉQUIPES ────────────────────────────────────────────
const teamOptions = [
  'SPV1',
  'SPV2',
  'PAC95',
  'CO Bolbec-Nointot',
  'UC Montoire',
  'USAC',
  'Alfortville',
  'Oakenden',
  'Hells Bells'
]

function App() {
  // ─── STATE & REFS ───────────────────────────────────────────────────────────
  const [matches, setMatches] = useState([
    { team1: '', score1: '', team2: '', score2: '' },
  ])
  const [selectedSet, setSelectedSet] = useState(
    Object.keys(posterSets)[0] || ''
  )
  const posterRef = useRef(null)

  // ─── PRÉPARATION DES FONDS ───────────────────────────────────────────────────
  const selectedArr = posterSets[selectedSet] || []
  const TOTAL = selectedArr.length
  const backgrounds = selectedArr.map(item => item.src)
  const backgroundSizes = selectedArr.map((_, i) => ({
    width: 1080,
    height: 460 + i * 120,
  }))

  // ─── STYLES DE TEXTE ─────────────────────────────────────────────────────────
  const teamColor = '#004096'
  const scoreColor = '#FFFFFF'
  const teamSize = 36
  const scoreSize = 48
  const font = 'Antonio'

  // ─── GESTION DES LIGNES ──────────────────────────────────────────────────────
  const addMatch = () =>
    setMatches(prev => [
      ...prev,
      { team1: '', score1: '', team2: '', score2: '' },
    ])

  const removeMatch = idx =>
    setMatches(prev => prev.filter((_, i) => i !== idx))

  const handleMatchChange = (idx, field, value) =>
    setMatches(prev => {
      const copy = [...prev]
      copy[idx] = { ...copy[idx], [field]: value }
      return copy
    })

  // ─── EXPORT PNG ──────────────────────────────────────────────────────────────
  const handleDownload = () => {
    const bgIndex = Math.min(matches.length - 1, TOTAL - 1)
    const size = backgroundSizes[bgIndex] || backgroundSizes[0]
    if (!posterRef.current) return
    toPng(posterRef.current, {
      cacheBust: true,
      pixelRatio: 1,
      width: size.width,
      height: size.height,
    })
      .then(dataUrl => download(dataUrl, 'affiche-match.png'))
      .catch(err => console.error('Erreur export :', err))
  }

  // ─── POSITIONNEMENT SUR LE POSTER ────────────────────────────────────────────
  const getY = i => 347 + i * 120
  const bgIndex = Math.min(matches.length - 1, TOTAL - 1)
  const currentSize = backgroundSizes[bgIndex] || {
    width: 1080,
    height: 460,
  }
  const background = backgrounds[bgIndex] || ''

  return (
    <div className="app-wrapper no-sidebar">
      <div className="main">
        {/* FORMULAIRE DE SAISIE */}
        <div className="forms-list">
          {matches.map((m, i) => (
            <div className="match-item" key={i}>
              <span className="match-number">Match {i + 1}</span>
              <div className="form">
                {/* Nom équipe 1 : saisie libre + suggestions */}
                <input
                  type="text"
                  placeholder="Nom équipe 1"
                  list="team-list"
                  value={m.team1}
                  onChange={e =>
                    handleMatchChange(i, 'team1', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Score 1"
                  value={m.score1}
                  onChange={e =>
                    handleMatchChange(i, 'score1', e.target.value)
                  }
                />
                {/* Nom équipe 2 : saisie libre + suggestions */}
                <input
                  type="text"
                  placeholder="Nom équipe 2"
                  list="team-list"
                  value={m.team2}
                  onChange={e =>
                    handleMatchChange(i, 'team2', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Score 2"
                  value={m.score2}
                  onChange={e =>
                    handleMatchChange(i, 'score2', e.target.value)
                  }
                />
                <button onClick={() => removeMatch(i)}>❌</button>
              </div>
            </div>
          ))}
        </div>

        {/* CONTRÔLES : Ajouter / Choix Poster / Télécharger */}
        <div className="form-buttons">
          <button onClick={addMatch}>➕ Ajouter un match</button>
          <select
            value={selectedSet}
            onChange={e => setSelectedSet(e.target.value)}
          >
            {Object.keys(posterSets).map(folder => (
              <option key={folder} value={folder}>
                {folder}
              </option>
            ))}
          </select>
          <button onClick={handleDownload}>📸 Télécharger l’affiche</button>
        </div>

        {/* DATASLIST POUR LES ÉQUIPES */}
        <datalist id="team-list">
          {teamOptions.map(team => (
            <option key={team} value={team} />
          ))}
        </datalist>

        {/* APERÇU DE L’AFFICHE */}
        <div
          className="poster"
          ref={posterRef}
          style={{
            width: currentSize.width,
            height: currentSize.height,
          }}
        >
          <img src={background} alt="Affiche" className="background" />
          {matches.map((m, i) => {
            const y = getY(i)
            return (
              <div key={i}>
                <span
                  className="element"
                  style={{
                    left: 70,
                    top: y,
                    color: scoreColor,
                    fontSize: `${scoreSize}px`,
                    fontFamily: font,
                  }}
                >
                  {m.score1}
                </span>
                <span
                  className="element"
                  style={{
                    left: 340,
                    top: y,
                    color: teamColor,
                    fontSize: `${teamSize}px`,
                    fontFamily: font,
                  }}
                >
                  {m.team1}
                </span>
                <span
                  className="element"
                  style={{
                    left: 740,
                    top: y,
                    color: teamColor,
                    fontSize: `${teamSize}px`,
                    fontFamily: font,
                  }}
                >
                  {m.team2}
                </span>
                <span
                  className="element"
                  style={{
                    left: 1010,
                    top: y,
                    color: scoreColor,
                    fontSize: `${scoreSize}px`,
                    fontFamily: font,
                  }}
                >
                  {m.score2}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
