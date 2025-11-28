export const posts = [
  {
    id: 1,
    title: "The Future of Credit Risk Modeling",
    date: "Oct 2024",
    category: "Strategy",
    summary: "How AI and machine learning are reshaping traditional scorecard development in consumer lending.",
    content: `
      <p>Traditional credit scoring models have relied on logistic regression for decades. While interpretable and robust, they often miss non-linear relationships in data that can predict default risk with greater accuracy.</p>
      
      <h3>The Shift to Machine Learning</h3>
      <p>The integration of Gradient Boosting Machines (GBM) and Neural Networks into credit risk frameworks allows for the processing of unstructured data—like transaction metadata and behavioral patterns—alongside traditional bureau data.</p>
      
      <h3>Regulatory Challenges</h3>
      <p>The primary hurdle remains "explainability." Regulators require lenders to explain adverse actions. Techniques like SHAP (SHapley Additive exPlanations) values are bridging this gap, allowing complex models to meet compliance standards.</p>
    `
  },
  {
    id: 2,
    title: "Optimizing Portfolio Health in Volatile Markets",
    date: "Aug 2024",
    category: "Analytics",
    summary: "Strategies for dynamic line management and exposure reduction during economic downturns.",
    content: `
      <p>In periods of economic volatility, static credit limits become a liability. A proactive approach to line management is essential for minimizing exposure without alienating good customers.</p>
      
      <h3>Dynamic Line Management</h3>
      <p>By utilizing real-time transaction data, we can identify "stress signals" in commercial accounts weeks before a delinquency occurs. This allows for surgical line reductions rather than broad-brush policies.</p>
    `
  },
  {
    id: 3,
    title: "Data-Driven Decisioning for Commercial Lending",
    date: "May 2024",
    category: "Finance",
    summary: "Leveraging alternative data sources to underwrite thin-file commercial entities.",
    content: `
      <p>Small business underwriting has historically suffered from a lack of standardized financial data. The "thin file" problem prevents creditworthy businesses from accessing capital.</p>
      
      <p>By integrating cash-flow analytics (via open banking APIs) and firmographic data, lenders can construct a more holistic view of an entity's ability to pay, independent of personal credit scores.</p>
    `
  }
];

