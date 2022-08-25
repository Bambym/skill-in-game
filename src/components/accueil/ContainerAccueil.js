import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ("../../css/container-accueil.css")

export default class Containeraccueil extends Component {
    render() {
        return (
            <div id="containerAccueil">
                <div id="accueil">
                <h2>Trouve ton Partenaire de Jeu</h2>
                <p>Salut, </p>
                <p>tu souhaites avoir un meilleur skill, être imbattable dans tes jeux préfèrés ?</p>
                <p>Tu en as marre de tomber sur des ramdoms qui à la moindre difficulté 
                rage-quitte et te laisse en galère.
                </p>
                <p>Nous avons la solution idéale, dépose ton annonce pour trouver les meilleurs
                 co-équipiers, accepte leur demande d'ami et rentre dans une nouvelle ère de jeu 
                 où tu atteindras les meilleurs classements.
                </p> 
                <button className='box'><Link to="/signUp" style={{color:"white",textDecoration:"none"}}>Inscription</Link></button>
                <button className='box'><Link to="/login" style={{color:"white",textDecoration:"none"}}>Connexion</Link></button>

                
                </div>
                
                
            </div>
        )
    }
}
