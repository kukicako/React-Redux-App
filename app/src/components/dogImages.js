import React from 'react';
import {connect} from 'react-redux'
import {Image} from './image'
const DogImage = (props) => {
    if (props.isFetching) {
        return <h2>Loading Dog Image..</h2>
    }
return(
    <div>
        {props.error && <p>{props.error}</p>}
        {props.dogImage.map(image => {
            <Image key={image.url} />
        } 

        )}
    </div>
)
};
const mapStateToProps = state => {
    return {
        dogImage: state.dogImage,
        isFetching: state.isFetching,
        error: state.error
    }
}


export default connect(mapStateToProps, {})(DogImage);