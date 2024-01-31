import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Loading from './components/Loading'

function App() {
  const [error,setError] =  useState(false)
  const [city, setCity] = useState('jakarta')
  const [location, setLocation] = useState(false)
  const [current, setCurrent] = useState()

  const [isLoading, setIsLoading] = useState(false)

  const inputCity = (e) => {
      setCity(e.target.previousSibling.value)
  }

  return (
    <div className="App">
      {!isLoading  && <Loading />}
      <div className="container">
        <Header inputCity={inputCity} error={error} />
        <Main city={city} setError={setError} location={location} current={current} setCurrent={setCurrent} setLocation={setLocation} setIsLoading={setIsLoading} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
