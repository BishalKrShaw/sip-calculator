
const calculateSIP = (monthlyInvestment, annualRateOfInterest, timePeriod) => {

  if(!monthlyInvestment || !annualRateOfInterest || !timePeriod) return {ERROR: "Input missing!"}
  
  let r = annualRateOfInterest/12/100;
  // console.log("Rate: ", r);

  let n = timePeriod * 12;
  // console.log("No. of investment: ", n);

  const fv = monthlyInvestment * ((Math.pow((1 + r), n) - 1) / r) * (1 + r);
  const amountInvested = monthlyInvestment*12*timePeriod;
  
  return {
    investedAmount: (amountInvested).toFixed(2),
    estimatedReturn: (fv-amountInvested).toFixed(2),
    totalValue: fv.toFixed(2)
  };

}

// const totalValue = calculateSIP(5000, 12, 10);
// console.log(totalValue);

export default calculateSIP;