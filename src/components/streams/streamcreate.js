import React from 'react';
import StreamForm from './Streamform'
import { streamcreate} from '../../actions'
import { connect } from 'react-redux'


const StreamCreate = (props) => {

const onsubmit = (formValues) => {
    props.streamcreate(formValues);
}

    return (<div><StreamForm onsubmit={onsubmit} /></div>);
}

export default connect(null,{ streamcreate })(StreamCreate) ;