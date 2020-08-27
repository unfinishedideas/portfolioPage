import React, {useState, useEffect, useContext} from 'react';
import { ScreenContext } from '../context';

const NavLink = (props) => {
    const { currentScreen, setCurrentScreen } = useContext(ScreenContext);
    const [isFocused, setIsFocused] = useState(false);
    const [currentTab, setCurrentTab] = useState(false)

    const navigate = () => {
        setCurrentScreen(props.title);
    }

    useEffect(() => {
        if(currentScreen === props.title) {
            setCurrentTab(true);
        } else {
            setCurrentTab(false);
        }
    }, [currentScreen])

    return(
        <div 
            style={currentTab ? {...styles.navWrapper, ...styles.currentTab} : styles.navWrapper}
            onMouseEnter={() => {setIsFocused(true)}}
            onMouseLeave={() => {setIsFocused(false)}}
        >
            <button onClick={navigate} style={isFocused ? {...styles.btn ,...styles.btnFocus} : styles.btn}>
                {props.title}
            </button>
        </div>
    )
}

export default NavLink;

const styles = 
{
    navWrapper: {
        // borderColor: 'red',
        // borderWidth: '2px',
        // borderStyle: 'solid'
    },
    currentTab: {
        borderColor: 'purple',
        borderBottomWidth: '2px',
        borderBottomStyle: 'solid'
    },
    btn: {
        fontFamily: "courier",
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        borderStyle: 'none',
        fontSize: 20
    },
    btnFocus: {
        backgroundColor: 'rgb(100,0,100)'
    },
}