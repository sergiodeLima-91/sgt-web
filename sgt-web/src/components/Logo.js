import logo from './logo.png'

function Logo(w, h) {
    return (
        <div>
        <img src={logo} style={{width: `${w.width}`, height:`${h.height}`}}/>
        </div>
    )
}

export default Logo;