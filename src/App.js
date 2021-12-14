import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  let priceList = [
    {
        plan: "FREE",
        price: 0,
        currency: "$",
        period: "month",
        features: [
            {
                name: "Single User",
                enable: true
            },
            {
                name: "50GB Storage",
                enable: true
            },
            {
                name: "Unlimited Public Projects",
                enable: true
            },
            {
                name: "Community Access",
                enable: true
            },
            {
                name: "Unlimited Private Projects",
                enable: false
            },
            {
                name: "Dedicated Phone Support",
                enable: false
            },
            {
                name: "Unlimited Free Subdomains",
                enable: false
            },
            {
                name: "Monthly Status Reports",
                enable: false
            }
        ]
    },
    {
        plan: "PLUS",
        price: 9,
        currency: "$",
        period: "month",

        features: [
            {
                name: "5 Users",
                enable: true,
                isStrong: true
            },
            {
                name: "50GB Storage",
                enable: true
            },
            {
                name: "Unlimited Public Projects",
                enable: true
            },
            {
                name: "Community Access",
                enable: true
            },
            {
                name: "Unlimited Private Projects",
                enable: true
            },
            {
                name: "Dedicated Phone Support",
                enable: true
            },
            {
                name: "Unlimited Free Subdomains",
                enable: true
            },
            {
                name: "Monthly Status Reports",
                enable: false
            }
        ]
    },
    {
        plan: "PRO",
        price: 49,
        currency: "$",
        period: "month",

        features: [
            {
                name: "Unlimited User",
                enable: true,
                isStrong: true
            },
            {
                name: "150GB Storage",
                enable: true
            },
            {
                name: "Unlimited Public Projects",
                enable: true
            },
            {
                name: "Community Access",
                enable: true
            },
            {
                name: "Unlimited Private Projects",
                enable: true
            },
            {
                name: "Dedicated Phone Support",
                enable: true
            },
            {
                name: "Unlimited Free Subdomains",
                enable: true,
                isStrong: true
            },
            {
                name: "Monthly Status Reports",
                enable: true
            }
        ]
    }

]
    return (
    //  <div className="App">
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
             <Card data={priceList[0]}></Card>
             <Card data={priceList[1]} style="display:inline"></Card> 
             <Card data={priceList[2]}></Card>
        </div>
             
        </div>
    </section>
     );
}

export default App;
