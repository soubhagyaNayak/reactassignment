import React, { useEffect } from 'react'
import { useState } from 'react'
import './pokemon.css'
import Axios from 'axios'


const Pokemon = () => {
    const [text, setText] = useState('')
    const [detail, setDetail] = useState([])


    useEffect(() => {
        const fetchDetails = async () => {
            const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
            const details = data
            setDetail(details)

        }
        // const fetchApi = async () =>{
        //     const url = ` https://pokeapi.co/api/v2/pokemon/${text}`
        //     const response = await fetch(url)
        //     const resJson = await response.json();
        //     setDetail(resJson)


        // fetchApi();
        fetchDetails();
    }, [text]);

    const getDetails = (event) => {
        event.preventDefault();
        let value = event.target["input-detail"].value
        const Lowercase = value.toLowerCase();
        setText(Lowercase)


    }

    return (
        <div className='main'>
            <div style={{ margin: "20px" }}>
                <form action="" onSubmit={getDetails}>
                    <input style={{ padding: "12px", width: "30vw", borderraduis: "5px", marginRight: "5px", border: "none" }} type="text" placeholder='search you' name="input-detail" />
                    <button style={{ padding: "12px", cursor: "pointer", background: "blue", border: "none", color: "white", font: "bold" }}>Submit</button>
                </form>
            </div>
            <div className='content-box'>
                <div className='first'>
                    <h1> Name : {detail.name}</h1>
                    <p> image : </p>
                    <img style={{ width: "250px " }} src={detail.sprites?.other["official-artwork"].front_default} alt="" />
                </div>
                <div className='secound'>
                    <p > Weight : {detail.weight}</p>
                    <p>Height : {detail.height}</p>

                </div>
            </div>

        </div>
    )
}

export default Pokemon