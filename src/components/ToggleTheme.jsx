import React, { Component, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { ThemeContext } from "../contexts/ThemeContext";


class ToggleTheme extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme, light, dark, toggleTheme} = this.context;
        const theme = isLightTheme ? light : dark;
        // const {toggleTheme} = this.context;
        return (
            <>
               {isLightTheme ?
                   <RiMoonFill color={theme.ui} size={27} onClick ={toggleTheme}/> :
                   <RiSunFill color={theme.ui} size={27} onClick ={toggleTheme}/>
               }
           </>
        );
    }
}
 
export default ToggleTheme;
