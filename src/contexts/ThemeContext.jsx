import React, {createContext, Component, Children } from 'react'

export const ThemeContext = createContext();

class ThemeProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {color: '#555', ui:'#ddd', bg:'#eee' },
        dark: {color:'#eee', ui: '#333', bg:'#555'}
     } 
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeProvider;