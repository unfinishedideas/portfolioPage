import React, {useState, useEffect} from 'react';

const NavLink = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [currentTab, setCurrentTab] = useState(false)

    const navigate = () => {
        console.log('hiii');
    }

    useEffect(() => {
        if(props.currentTab === true) {
            setCurrentTab(true);
        }
    },[])

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
        borderColor: 'red',
        borderWidth: '2px',
        borderStyle: 'solid'
    },
    currentTab: {
        borderColor: 'purple',
        borderWidth: '2px',
        borderStyle: 'solid'
    },
    btn: {

    },
    btnFocus: {
        backgroundColor: 'red'
    },
}