import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import MIGreenPowerComponent from './MIGreenPowerComponent';
import SolarComponent from './SolarComponent';
import WindComponent from './WindComponent';
import DetailComponent from './DetailComponent';


const Tabs=(props)=>{
    return (
<div className="container" >
      
                <ul className="nav nav-tabs nav-justified">
                    <li className="active"><a data-toggle="tab" href="#mi">MIGreenPower</a></li>
                    <li><a href="#solar" data-toggle="tab" >Solar</a></li>
                    <li><a href="#wind" data-toggle="tab" > Wind</a></li>
                    <li><a href="#details" data-toggle="tab" >Details</a></li>
                </ul>
                <div className="tab-content">
                    <div id="mi" className="tab-pane fade in active">
                        <MIGreenPowerComponent />
                        </div>
                    <div id="solar" className="tab-pane fade">
                        <SolarComponent />
                        </div>
                    <div className="tab-pane fade" id="wind">
                        <WindComponent />
                        </div>
                    <div className="tab-pane fade" id="details">
                        <DetailComponent/>
                        </div>
                </div>
               
    </div>
              
    );
}

export default Tabs;