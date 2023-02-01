import React from "react";
import imgIcon from "../images/imageIcon.png"

export default function Main() {

  const [meme, setMeme] = React.useState(
    {
      TopText: "",
      BottomText: "",
      randomImage: ""
    }
  )

  const [allMeme, setAllMeme] = React.useState()

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setMeme(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMeme(data.data.memes)
    }
    getMemes()
  }, [])

  function generateMeme() {
    const rand = Math.floor(Math.random() * allMeme.length);
    const imgSRC = allMeme[rand].url
    setMeme(prev => {
      return (
        {
          ...prev,
          randomImage: imgSRC
        }
      )
    })
  }

  return (
    <div className="main">
      <div className="inputs-btn">
        <div className="inputs">

          <input
            type="text" 
            placeholder="Top Text"
            name="TopText"
            value={meme.TopText}
            onChange={handleChange}
          />

          <input
            type="text" 
            placeholder="Bottom Text"
            name="BottomText"
            value={meme.BottomText}
            onChange={handleChange}
          />

        </div>
        <button onClick={generateMeme} className="btn">
          {meme.randomImage.length > 0 ? "Get New Meme Images" : "Generate Meme Image"}
          <img src={imgIcon} />
          </button>
      </div>
      <div className="meme-cont">
        <img src={meme.randomImage} />
        {meme.randomImage.length > 1 && <h2 className="meme-text top">{meme.TopText}</h2>}
        {meme.randomImage.length > 1 && <h2 className="meme-text bottom">{meme.BottomText}</h2>}
      </div>
    </div>
  )
}