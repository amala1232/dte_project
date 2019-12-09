import React,{Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import bg from './assets/bg.jpg';
import Tabs from './static components/tabs_component';

// import MIGreanPowerComponent from './static components/MIGreenPowerComponent';
// import SolarComponent from './static components/SolarComponent';
// import WindComponent from './static components/WindComponent';
// import DetailComponent from './static components/DetailComponent';


class App extends Component {
  constructor(){
    super();
  }
  render(){
  return (
    <div >
    <div id="imageClass" className="cropped">
 
        <img src={bg} />
        
    </div>
<div>
<Tabs />


{/* <div><button type="button" class="btn btn-sm btn-fb"><i class="fab fa-facebook-f pr-1">Facebook</i> </button> */}
{/* <button><a href="https://www.facebook.com/FacebookforDevelopers/"><img src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.2365-6/34929128_2542370199321677_3462617962773479424_n.png?_nc_cat=1&_nc_ohc=4nbMnfDtAgsAQkh9DknEBmc4lb1dHV_7hFdiyl1hWNeAxe9E61a5V1qjA&_nc_ht=scontent-ort2-1.xx&oh=08ed99cd76d68ca0d547f9814be6bbb3&oe=5E8C3C2E"></img>
</a>
</button> */}
{/* <div class="fb-post" data-href="{your-post-url}"></div> */}
{/* <div class="fb-post" 
      data-href="https://www.facebook.com/20531316728/posts/10154009990506729/"
      data-width="500"></div> */}
</div>
</div>

    

   

  );
}
}
export default App;
