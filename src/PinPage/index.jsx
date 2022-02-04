//IMAGES
import logo from './images/logo.png';
import info from './images/info.png';
import arrow from './images/arrow.png';
import pic from './images/pic.png';
//MATERIAL-UI
import useMediaQuery from '@mui/material/useMediaQuery';
//REACT-PIN-INPUT
import PinInput from 'react-pin-input';
//STYLE
import './css/style.css';
import './css/index.css';


//FUNCTION TO RECEIVE PIN
const getPin = (pin) => { alert(pin); }


function PinPage() {
    const matches1200 = useMediaQuery('(min-width:1200px)');
    const matches1050 = useMediaQuery('(min-width:1050px)');
    const matches880 = useMediaQuery('(min-width:1050px)');
    const matches665 = useMediaQuery('(min-width:665px)');
    const matches480 = useMediaQuery('(min-width:480px)');


    return (
        <div
            className="pinpage"
        >
            <div
                className="box"
                style={{
                    boxShadow: "2px 16px 59px -12px rgba(0, 0, 0, 0.25)",
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <div className="pinpage_left" style={{ display: "flex" }}>
                    <div style={{ flex: 1, marginTop: "1rem" }}>
                        <img src={logo} alt="logo"/>
        
                        <p className="pinpage_left_heading"> Enter QR PIN </p>

                        <p className="pinpage_left_codepin">
                            <PinInput
                                length={4}
                                secret={false}
                                focus={true}
                                type="numeric" 
                                inputMode="number"
                                style={{padding: '10px'}}  
                                inputFocusStyle={{borderColor: '#1dc1f3'}}
                                inputStyle={{
                                    borderColor: 'black',
                                    border: "2px solid black",
                                    borderRadius: "2px",
                                    marginLeft: "2px",
                                    borderRadius: "5px",
                                    width: matches480?(matches665?(matches880?(matches1050?(matches1200?"3rem":"2.8rem"):"2.6rem"):"2.4rem"):"2rem"):"1.5rem",
                                    height: matches480?(matches665?(matches880?(matches1050?(matches1200?"3rem":"2.8rem"):"2.6rem"):"2.4rem"):"2rem"):"1.5rem",
                                }}
                                onComplete={(value, index) => {
                                    getPin(value);
                                }}
                                autoSelect={true}
                                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                            />
                        </p>
        
                        <div className="pinpage_left_text">
                            <span> Need PIN Helper? </span>
            
                            <button>
                                <img src={info} alt="info"/>
                            </button>
                        </div>
                    </div>

                    <div className="pinpage_left_bottom">
                       <span> PROCEED </span>
        
                        <button>
                            <img src={arrow} alt="arrow"/>
                        </button>
                    </div>
                </div>
    
                <div className="pinpage_right">
                    <img src={pic} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default PinPage;