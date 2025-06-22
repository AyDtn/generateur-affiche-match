// src/App.jsx
import { useState, useRef } from 'react'
import './App.css'
import { toPng } from 'html-to-image'
import download from 'downloadjs'

function App() {
  const [matches, setMatches] = useState([
    { team1: '', score1: '', team2: '', score2: '' },
  ])
  const posterRef = useRef(null)

  const backgrounds = [
    '/background1.png',
    '/background2.png',
    '/background3.png',
  ]
  const backgroundSizes = [
    { width: 1080, height: 460 },
    { width: 1080, height: 580 },
    { width: 1080, height: 700 },
  ]
  const teamColor = '#004096'
  const scoreColor = '#FFFFFF'
  const teamSize = 36
  const scoreSize = 48
  const font = 'Antonio'

  const addMatch = () => {
    setMatches([
      ...matches,
      { team1: '', score1: '', team2: '', score2: '' },
    ])
  }

  const removeMatch = (index) => {
    setMatches(matches.filter((_, i) => i !== index))
  }

  const handleMatchChange = (index, field, value) => {
    const updated = [...matches]
    updated[index][field] = value
    setMatches(updated)
  }

  const handleDownload = () => {
    const bgIndex = Math.min(matches.length - 1, backgrounds.length - 1)
    const size = backgroundSizes[bgIndex]
    if (!posterRef.current) return
    toPng(posterRef.current, {
      cacheBust: true,
      pixelRatio: 1,
      width: size.width,
      height: size.height,
    })
      .then((dataUrl) => download(dataUrl, 'affiche-match.png'))
      .catch((err) => console.error('Erreur export :', err))
  }

  const getY = (line) => 347 + line * 120
  const currentBgIndex = Math.min(matches.length - 1, backgrounds.length - 1)
  const currentSize = backgroundSizes[currentBgIndex]
  const background = backgrounds[currentBgIndex]

  return (
    <div className="app-wrapper no-sidebar">
      <div className="main">

        {/* 1) Liste de tous les matchs, avec espacement contrôlé */}
        <div className="forms-list">
          {matches.map((match, index) => (
            <div className="match-item" key={index}>
              {/* 2) Label « Match N » */}
              <span className="match-number">Match {index + 1}</span>
              <div className="form">
                <input
                  type="text"
                  placeholder="Nom équipe 1"
                  value={match.team1}
                  onChange={(e) =>
                    handleMatchChange(index, 'team1', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Score 1"
                  value={match.score1}
                  onChange={(e) =>
                    handleMatchChange(index, 'score1', e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Nom équipe 2"
                  value={match.team2}
                  onChange={(e) =>
                    handleMatchChange(index, 'team2', e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Score 2"
                  value={match.score2}
                  onChange={(e) =>
                    handleMatchChange(index, 'score2', e.target.value)
                  }
                />
                <button onClick={() => removeMatch(index)}>❌</button>
              </div>
            </div>
          ))}
        </div>

        <div className="form-buttons">
          <button onClick={addMatch}>➕ Ajouter un match</button>
          <button onClick={handleDownload}>📸 Télécharger l’affiche</button>
        </div>

        <div
          className="poster"
          ref={posterRef}
          style={{
            width: currentSize.width,
            height: currentSize.height,
          }}
        >
          <img src={background} alt="Affiche" className="background" />

          {matches.map((match, index) => {
            const y = getY(index)
            return (
              <div key={index}>
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
                  {match.score1}
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
                  {match.team1}
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
                  {match.team2}
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
                  {match.score2}
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
