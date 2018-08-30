import React, { Component }  from 'react';
import { connect } from 'react-redux'
import { getAllPosts, addNewPost } from '../actions/todo.action';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state ={
            text: ''
        }
    }

    componentDidMount() {
        this.props.getAllPosts()
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitPost = () => {
        const { text } = this.state;
        if (text) {
            const id = this.props.posts.length + 1;
            this.props.addNewPost({
                id,
                text
            })
        }
    }

    allposts = () => {
        const posts = this.props.posts
        return posts.map(post => (
            <div key={post.id}>
                <span className="id">{post.id}. </span>
                <span className="text">{post.text}</span>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <h1>Hello world! These are my posts!</h1>
                <div>
                    <input
                        type="text"
                        name="text"
                        onChange={this.onChange}
                        value={this.state.text}
                    />
                    <button onClick={this.submitPost}>Submit</button>
                </div>
                {this.allposts()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps, { getAllPosts, addNewPost })(Home);
