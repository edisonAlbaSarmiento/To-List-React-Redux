import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post'

class AllPost extends Component {
    render(){
        return(
            <div>
                <h1>Todas las post</h1>
                {this.props.posts.map((post) => 
                    <Post key={post.id} post={post} />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}


export default connect(mapStateToProps)(AllPost)