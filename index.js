
const calculateSIP = (monthlyInvestment, annualRateOfInterest, timePeriod) => {

  if(!monthlyInvestment || !annualRateOfInterest || !timePeriod) return {ERROR: "Input missing!"}
  
  let r = annualRateOfInterest/12/100;

  let n = timePeriod * 12;

  const fv = monthlyInvestment * ((Math.pow((1 + r), n) - 1) / r) * (1 + r);
  const amountInvested = monthlyInvestment*12*timePeriod;
  
  return {
    investedAmount: Number((amountInvested).toFixed(2)),
    estimatedReturn: Number((fv-amountInvested).toFixed(2)),
    totalValue: Number(fv.toFixed(2))
  };

}

export default calculateSIP;