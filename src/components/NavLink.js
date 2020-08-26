import React, {useState, useEffect} from 'react';

const NavLink = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    // const [currentTab, setCurrentTab] = useState(false);

    // useEffect(() => {
    //     if(props.currentTab === true) {
    //         setIsCurrentTab(true);
    //     }
    // }, [])

    const navigate = () => {
        console.log('hiii')
    }

    return(
        <div 
            onMouseEnter={() => {setIsFocused(true)}}
            onMouseLeave={() => {setIsFocused(false)}}
        >
            <button onClick={navigate}>{props.title}</button>

        </div>
    )
}

export default NavLink;