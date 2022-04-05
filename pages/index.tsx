import type { NextPage } from 'next'
import Head from 'next/head'
import IMage from 'next/image'
import styles from '../styles/Home.module.css'

import primeira from './../img/primeira.jpg'
import segunda from './../img/segunda.jpg'
import terceira from './../img/terceira.jpg'
import quarta from './../img/quarta.jpg'
import quinta from './../img/quinta.jpg'
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(()=>{
    const imgId = document.querySelectorAll('#img')

    imgId.forEach((item, index) => {
      
      item.addEventListener('load', () =>{
        console.log('carregou' + index)
      })
    })

    // const img = new Image()

    // img.onload = (e) => {
    //   console.log(e)
    // }
  },[])


  return (
      <main className={styles.main}>

      <IMage id="img" src={primeira} width={1600} height={900}/>
      <IMage id="img" src={segunda} width={1600} height={900}/>
      <IMage id="img" src={terceira} width={1600} height={900}/>
      <IMage id="img" src={quarta} width={1600} height={900}/>
      <IMage id="img" src={quinta} width={1600} height={900}/>

      </main>
  )
}

export default Home
