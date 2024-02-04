import './Header.css'

function Header(){
    return <header>
        <h1 className='title'>Tekken 8</h1>
        <nav className='menu'>
            <a className='link' href="">Settings</a><a className='link' href="">Info</a><a className='link' href="">Notes</a>
        </nav>
    </header>
}

export default Header