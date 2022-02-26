import GreetingsFunction from '../components/function/GreetingsFunction'

const Header = () => {

    return <div className='row'>
        <div className="col-6">
            <h1>React First App</h1>
        </div>
        <div className="col-6">
            <GreetingsFunction />
        </div>
    </div>
}

export default Header;