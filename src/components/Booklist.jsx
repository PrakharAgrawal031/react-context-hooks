import React, { Component } from 'react'

class Booklist extends Component {
    state = {  } 
    render() { 
        return (
            <div className="book-list">
                <ul>
                    <li>The way of Kings</li>
                    <li>Words of Radiance</li>
                    <li>Oathbringer</li>
                    <li>Rythm of War</li>
                </ul>
            </div>
        );
    }
}
 
export default Booklist;