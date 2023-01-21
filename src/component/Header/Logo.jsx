import HargeisaLogo  from "../../images/logo.png";

const Logo = () => {
    return ( <div className="logo">
    <img src={HargeisaLogo} alt="Dubai-icon" className="logo-img" />
    <div className="logo-text">
        <b>HARGEISA</b>
        <b>SAFARI</b>
        <b>DESERT</b>
    </div>
</div> );
}
 
export default Logo;