import React, { useContext, useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AppRouter from "./components/AppRouter"
import { observer } from "mobx-react-lite"
import { Context } from "."
import { check } from "./http/userAPI";
import { Image } from 'react-bootstrap';
import enot from './img/load-loading.gif'

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(data)
        user.setIsAuth(true)
      })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => setLoading(false))
    }, 1000)
  }, [])

  if (loading) {
    return <div className="loading-screen">
      <Image src={enot} className='enot-centered' />
    </div>
  }
  return (
    <div className="wrapper">
      <div className="conteiner">
        <NavBar />
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
})

export default App;