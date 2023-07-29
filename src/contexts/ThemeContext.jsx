import React, {createContext, Component, Children } from 'react'

export const ThemeContext = createContext();

class ThemeProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {color: '#010101', ui:'#3BEEB7', bg:'#F4F9FD' },
        dark: {color:'#010101', ui: '#3BEEB7', bg:'#484846'}
     } 

     toggleTheme=()=>{
        this.setState({isLightTheme: !this.state.isLightTheme})
     }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeProvider;