import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class Booklist extends Component {
    state = {  } 
    render() { 
       
        return (
            <ThemeContext.Consumer>{(context)=>{
                const {isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return(
                    <div className="book-list" style={{background:theme.bg, color:theme.color}}>
                    <ul>
                        <li style={{background:theme.ui}}>The way of Kings</li>
                        <li style={{background:theme.ui}}>Words of Radiance</li>
                        <li style={{background:theme.ui}}>Oathbringer</li>
                        <li style={{background:theme.ui}}>Rythm of War</li>
                    </ul>
                </div>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default Booklist;