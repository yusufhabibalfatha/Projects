import  Error from './Error'
import enter from '../asset/enter-icon.png'

const Header = ({ inputCity, error}) => {
    return (
        <header>
            <h1>Weather App</h1>
            <label htmlFor="search">Search :</label>
            <div>
                <input type="text" id="search" placeholder="city region country" autoComplete="off"/>
                <img src={enter} alt="arrow-enter" className="enter" onClick={(e)=>inputCity(e)} />
            </div>
            {error && <Error error={error} />}
        </header>
    );
}
 
export default Header;