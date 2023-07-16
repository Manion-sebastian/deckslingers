import React from 'react'
import { useEffect, useState } from 'react'

// const [form, setForm] = useState({
//     cardName: '',
//     cardType: '',
//     cardAffiliation: '',
//     cardCost: 0,
//     cardEffect: '',
//     cardRarity: '',
//     cardSetNumber: 0,
//     cardArtist: '',
//     cardKeywords: [''],

// })

const CardForm = () => {

    const createCard = (e) => {
        e.preventDefault()
        console.log('working')
    }

    return (
      <div className="cardForm">
        <form className="form" onSubmit={createCard}>
          <label>Card Name: </label>
          <input name="cName" id="cName" type="text" required />
          <label>Card Effect: </label>
          <textarea name='cEffect' id='cEffect'></textarea>
          <label>Card Type:</label>
          <select name="type" id="type" required>
            <option value={""} disabled selected>
              Select Card Type
            </option>
            <option value={"Attack"}>Attack - Runespell</option>
            <option value={"Spirit"}>Spirit - Runespell</option>
            <option value={"Utility"}>Utility - Runespell</option>
            <option value={"Boon"}>Boon - Defense Card</option>
            <option value={"Weapon Trinket"}>
              {" "}
              Weapon Trinket - Defense Card
            </option>
            <option value={"Armor Trinket"}>
              {" "}
              Armor Trinket - Defense Card
            </option>
            <option value={"Curio Trinket"}>
              {" "}
              Curio Trinket - Defense Card
            </option>
            <option value={"Chant"}> Chant - Defense Card</option>
            <option value={"Runeslinger"}>Runeslinger</option>
            <option value={"Stance"}>Stance</option>
            <option value={"Ability"}>Ability</option>
          </select>
          <label>Card Class:</label>
          <select name="class" id="class" required>
            <option value={""} disabled selected>
              Select Card Class
            </option>
            <option value={"Lightward"}>Lightward</option>
            <option value={"Striker"}>Striker</option>
            <option value={"Hexmancer"}>Hexmancer</option>
            <option value={"Runeseer"}>Runeseer</option>
            <option value={"Basic"}>Basic</option>
            <option value={"Trinket"}>Trinket</option>
          </select>
          <label>Keyword 1</label>
          <select name="keyword1" id="keyword1" required>
            <option value={""} selected>
              None
            </option>
            <optgroup label="Ail">
              <option value={"Ail 1"}>Ail 1</option>
              <option value={"Ail 2"}>Ail 2</option>
              <option value={"Ail 3"}>Ail 3</option>
              <option value={"Ail 4"}>Ail 4</option>
            </optgroup>
            <optgroup label="Token">
              <option value={"Token 1"}>Token 1</option>
              <option value={"Token 2"}>Token 2</option>
              <option value={"Token 3"}>Token 3</option>
              <option value={"Token 4"}>Token 4</option>
            </optgroup>
            <option value={"Charge"}>Charge</option>
            <option value={"Fate"}>Fate</option>
            <option value={"Choice"}>Choice</option>
            <option value={"Quick"}>Quick</option>
            <option value={"Pierce"}>Pierce</option>
            <option value={"Distract"}>Distract</option>
          </select>
          <label>Keyword 2</label>
          <select name="keyword2" id="keyword2" required>
            <option value={""} selected>
              None
            </option>
            <optgroup label="Ail">
              <option value={"Ail 1"}>Ail 1</option>
              <option value={"Ail 2"}>Ail 2</option>
              <option value={"Ail 3"}>Ail 3</option>
              <option value={"Ail 4"}>Ail 4</option>
            </optgroup>
            <optgroup label="Token">
              <option value={"Token 1"}>Token 1</option>
              <option value={"Token 2"}>Token 2</option>
              <option value={"Token 3"}>Token 3</option>
              <option value={"Token 4"}>Token 4</option>
            </optgroup>
            <option value={"Charge"}>Charge</option>
            <option value={"Fate"}>Fate</option>
            <option value={"Choice"}>Choice</option>
            <option value={"Quick"}>Quick</option>
            <option value={"Pierce"}>Pierce</option>
            <option value={"Distract"}>Distract</option>
          </select>
          <label>Keyword 3</label>
          <select name="keyword3" id="keyword3" required>
            <option value={""} selected>
              None
            </option>
            <optgroup label="Ail">
              <option value={"Ail 1"}>Ail 1</option>
              <option value={"Ail 2"}>Ail 2</option>
              <option value={"Ail 3"}>Ail 3</option>
              <option value={"Ail 4"}>Ail 4</option>
            </optgroup>
            <optgroup label="Token">
              <option value={"Token 1"}>Token 1</option>
              <option value={"Token 2"}>Token 2</option>
              <option value={"Token 3"}>Token 3</option>
              <option value={"Token 4"}>Token 4</option>
            </optgroup>
            <option value={"Charge"}>Charge</option>
            <option value={"Fate"}>Fate</option>
            <option value={"Choice"}>Choice</option>
            <option value={"Quick"}>Quick</option>
            <option value={"Pierce"}>Pierce</option>
            <option value={"Distract"}>Distract</option>
          </select>
          <label>Defense</label>
          <select name='cDefense' id='cDefense' required>
            <option value={''} selected>None</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
          <button type='submit'>Create</button>
        </form>
      </div>
    );
}

export default CardForm;