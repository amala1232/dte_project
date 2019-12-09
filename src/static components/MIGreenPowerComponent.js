import React from 'react';
import App from '../App';
import EnrollComponent from '../transactional components/EnrollComponent';

const MIGreanPowerComponent=()=>{
   var isEnroll=false;
   if(!isEnroll){
    return (


<div className="padd20">
<div className="n-lgrey row margin-top20px"> 
<div className="col-xs-12 padd20">
    <div className="font20">MIGreanPower</div>
    <div className="PADDT10PX">
    MIGreenPower is a simple and affordable program that empowers you to attribute a greater percentage of your energy use to DTE Energy's newest wind and solar projects. Whether you are a business owner, homeowner or a renter, joining MIGreenPower can help you go green without installing special equipment or making exterior home or building alterations. Beyond lowering your carbon footprint, participating helps to protect the environment for future generations. 
    </div>
</div>
</div>
    {/* <div className="row">
    <div className="col-xs-12 paddBR20px">
    <div className="col-xs-3 paddr20px enrollBtnpadd">
    <a className="btn btn-primary width-100" onClick={(e)=>{e.preventDefault();
isEnroll=!isEnroll;
return (
    <EnrollComponent enroll={true}/>
    )
    }}>Enroll Now</a>
    </div>
    <div className="col-xs-9 ">
    <div className="fontB">Join MIGreenPower</div>
    </div>
    </div>
    </div> */}
    
    <div className="row paddBR20px">
    <div className="col-xs-3 paddr20px enrollBtnpadd">
    <a className="btn btn-primary width-100" onClick={(e)=>{e.preventDefault();
isEnroll=!isEnroll;
return (
    <EnrollComponent enroll={true}/>
    )
    }}>Enroll Now</a>
    </div>
    <div className="col-9"> <div className="fontB">Join MIGreenPower</div></div>
    </div>
   

<div className="row">
<div className="col-sm-12">
<div className="alnCenter">
<span>Program Benefits</span> </div>
</div>
</div>



<div className="row gridEx">
<table>
    <thead>
    <tr>
    <th><div className="col-6 col-sm-4">.col-6 .col-sm-4</div></th>
    <th><div className="col-6 col-sm-4">.col-6 .col-sm-4</div></th>
    </tr>
    </thead>
    <tbody></tbody>
   
    </table>
    {/* <!-- Force next columns to break to new line at md breakpoint and up --> */}
    <div className="w-100 d-none d-md-block"></div>

    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
   
  </div>
<div className="bg-info clearfix">
  <button type="button" className="btn btn-primary float-left">Example Button floated left</button>
  <button type="button" className="btn btn-primary float-right">Example Button floated right</button>

</div>
<div className="row">
<button type="button" className="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>
<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>

<div><div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container! tyyuhd djjjd</div>
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-inline-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">Flex item 1</div>
  <div class="p-2 bd-highlight">Flex item 2</div>
  <div class="p-2 bd-highlight">Flex item 3</div>
</div>
<div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Flex item</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Flex item</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="mr-auto p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
  <div class="p-2 bd-highlight">Flex item</div>
</div>


</div>

  </div>




    );
}
else if (!isEnroll){
    return(
        <div>
<div><EnrollComponent enroll={true}/></div>
        </div>
    );
}
}

export default MIGreanPowerComponent;