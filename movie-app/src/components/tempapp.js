import React, { useEffect } from 'react'
import { useState } from 'react'


const Tempapp = () => {
    const [movie, setMovie] = useState([])
    const [text, setText] = useState("")


    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://www.omdbapi.com/?s=${text}&apikey=9bd3036`
            const response = await fetch(url)

            const resJson = await response.json();
            setMovie(resJson.Search)

        }
        fetchApi();


    }, [text])



    const getMovie = (event) => {
        event.preventDefault();
        let value = event.target["input-data"].value
        setText(value)
    }
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-dark-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Search Movie</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <form class="d-flex" role="search" onSubmit={getMovie} >
                                <input className="form-control me-2" type="search" placeholder="Search Moive by Name " aria-label="Search" name="input-data" onClick={() => {
                                    setMovie();

                                }} />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <div>

                {
                    !movie ? (<div style={{ color: 'red' }}> No Movie Fonud  </div>) :
                        (<div className="container   ">
                            <div className="row justify-centent-center">

                                {
                                    movie.map((value, index) => {
                                        return (
                                            <div className="col-3 mx-3 my-3  text-center" >
                                                <div className="card" style={{ width: "18rem" }}>
                                                    <img src={value.Poster} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h3 className="card-title">{value.Title}</h3>
                                                        <p className="card-text">{value.Year}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>)
                }
            </div>


        </div>
    )
}

export default Tempapp;