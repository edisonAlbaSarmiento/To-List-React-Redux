import React, { Component } from 'react'

class PostForm extends Component {
    render(){
        return(
            <div>
                <h1>Crear nuevo post</h1>
                <form>
                    <input required type='text'placeholder='Ingresar titulo de post'/><br/><br/>
                    <textarea required rows='5' cols='28' placeholder='ingresar post'/><br/><br/>
                    <button>Crear</button>
                </form>
            </div>
        )
    }
}

export default PostForm