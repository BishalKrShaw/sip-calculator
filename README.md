# sip-calculator

NPM pakage to calculate SIP (Systematic Investment Plan)

## 📦 Installation

Using npm

```Javascript
npm i sip-calculator
```

## 🚀 Usage

Import the package and use it to calculate SIP (Systematic Investment Plan) returns.

```Javascript
import calculateSIP from 'sip-calculator';

const monthlyInvestment = 5000; // ₹
const annualRateOfInterest = 12; // %
const timePeriod = 10; // years

// Arguments order should be same
console.log(calculateSIP(monthlyInvestment, annualRateOfInterest, timePeriod));
```

## Returns

```Javascript
{
  investedAmount: 600000.00,  // type is Number
  estimatedReturn: 561695.38, // type is Number
  totalValue: 1161695.38      // type is Number
}
```

## 📄 License

Apache-2.0