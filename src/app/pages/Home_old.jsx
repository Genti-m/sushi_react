import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ComponentTest from '../components/ComponentTest'

const Home = ({ titolo }) => {
  const [test, setTest] = useState(`${new Date()}`)
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  // commento
  const testFunction = () => setTest(`${new Date()}`)

  //se deps è vuoto lo scatena solo al primo render (chiamato anche mount)
  useEffect(() => {
    console.log('è primo render')
  }, [])

  //side effects
  useEffect(() => {
    console.log('è cambiato test')
  }, [test])

  console.log('render')

  return (
    <div>    
      <p>{test}</p>
      {/* se matcha questa condizione allora mostr cliccando btna */}
      { show && (
        <p>La variable show è {`${show}`}</p>
      )}
      <ComponentTest test='prova' testFunction={ toggleShow } />
    </div>
  )
}

Home.propTypes = {
  titolo: PropTypes.string,
}

export default Home