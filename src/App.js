import logo from './logo.svg';
import './App.css';
import Pricecard from './Pricecard';
import { useState } from 'react';

function App() {
  const[toggle, setToggle]= useState([]);
  
   let pricetag = [   
      
    {
      isPopular: false,
      plan: "BASIC",
      members: "3-5",
      price: 28,
      pricey: 240,
      period: "month",
      save: 20,
      features: [
         {
           name: "Perfect of Small Team"
         },
         {
          name: "Unlimited Invoices"
         },
         {
          name: "Project Management"
         },
         {
          name: ""
         },
         {
          name: ""
         },
         {
          name: ""
         },{
          name: ""
         },
         {
          name: ""
         }
      ]
    },
    {
      isPopular: true,
      plan: "INTERMEDIATE",
      members: "5-10",
      price: 39,
      pricey: 400,
      period: "month",
      save: 30,
      features: [
         {
           name: "Perfect of Small Team"
         },
         {
          name: "Unlimited Invoices"
         },
         {
          name: "Project Management"
         },
         {
          name: "Team Management"
         },
         {
          name: ""
         },
         {
          name: ""
         }

      ]
    },
    {
      isPopular: false,
      plan: "HIGH CLASS",
      members: "10-25",
      price: 58,
      pricey: 600,
      period: "month",
      save: 50,
      features: [
         {
           name: "Perfect of Small Team"
         },
         {
          name: "Unlimited Invoices"
         },
         {
          name: "Project Management"
         },
         {
          name: "Team Management"
         },
         {
          name: "Time Tracking"
         }
      ]
    },
    {
      isPopular: false,
      plan: "SUPREME",
      members: "25-100",
      price: 99,
      pricey: 1000,
      period: "month",
      save: 80,
      features: [
         {
           name: "Perfect of Small Team"
         },
         {
          name: "Unlimited Invoices"
         },
         {
          name: "Project Management"
         },
         {
          name: "Team Management"
         },
         {
          name: "Time Tracking"
         }
      ]
    }
   ];    


   
  return (<div class="pricing1 py-5 bg-light">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
          <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
          <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
            <span class="font-14 font-weight-medium">MONTHLY</span>
            <div class="onoffswitch position-relative mx-2">
              <input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox d-none" id="myonoffswitch1" onClick={() => setToggle(!toggle)}/>
              <label class="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
                              <span class="onoffswitch-inner d-block"></span>
                              <span class="onoffswitch-switch d-block bg-white position-absolute"></span>
              </label>
            </div>
            <span class="font-14 font-weight-medium">YEARLY</span>
          </div>
        </div>
      </div>
      {/* <!-- Row  --> */}
      <div class="row mt-5">
        {
           pricetag.map(obj => <Pricecard data={obj}> </Pricecard>)
        }
    </div>
  </div>
</div>
  );
}

export default App;
