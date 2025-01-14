import React, { Component } from 'react';

import history from './history'

import logo from './pictures/logo.png'

class HeaderCitoyen extends Component {

    render() {
      return (
       <div>
        <div>
          <div className="header">
            <div className="header-container">
              <div className="img-logo">
                <img src={logo}></img>
              </div>
              <div className="search-bar">
                <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                <input className="search" type="text" placeholder="Rechercher" autoFocus required></input>
              </div>
            </div>
          </div> 
        </div>
        <div>
        <div className="menu-bar">
          <div className="menu-container">
            <div className="right-side-container">

              <button className="acceuil" type="button" onClick={() => history.push({pathname: "/HomeCitoyen",
                                state: {id: this.props.id}})}><a>Accueil</a></button>
              <button className="infos" type="button" onClick={() => history.push({pathname: "/NewsPageCitoyen",
                                state: {id: this.props.id}})}>Actualités </button>
              <button className="infos" type="button" onClick={() => history.push({pathname: "/CandidatureCitoyen",
                                state: {id: this.props.id}})}>Careers Center </button>
              <button className="infos" type="button" onClick={() => history.push({pathname: "/DemarchesCitoyen",
                                state: {id: this.props.id}})}>Demarches</button>
            </div>
            <div className="left-side-container">
              <button className="se-déconnecter" type="button" onClick={() => history.push('/Home')}>Se déconnecter</button>
            </div>
          </div>
        </div>
        </div>
       </div>
        
      )
    }
}

export default HeaderCitoyen;