import React, { Component } from 'react';

class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // load unata psse set span funtion ekata call krnawa
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({spans: spans});
    }

    render() {
            // methana this kynne imageCard component eka call krpu thena dapu ewata
            const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={description} src={urls.small} />
            </div>
        );
    }

}

export default ImageCard;