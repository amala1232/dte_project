import React from 'react';
import App from '../App';

const EnrollComponent=(props)=>{
return(

<div>
    {this.props.enroll?<h1>Enroll Component</h1>:<App />}
</div>
);
}
export default EnrollComponent;