export function validateStep1(formData) {
  const errors = {};

  // Loan Type
  if (!formData.loanType) {
    errors.loanType = "Please select a loan type.";
  }

  // Loan Amount
  if (!formData.loanAmount) {
    errors.loanAmount = "Loan amount is required.";
  } else if (Number(formData.loanAmount) < 10000) {
    errors.loanAmount = "Minimum loan amount is ₹10,000.";
  }

  // Loan Tenure
  if (!formData.loanTenure) {
    errors.loanTenure = "Please select the loan tenure.";
  }

  // Loan Purpose
  if (!formData.loanPurpose.trim()) {
    errors.loanPurpose = "Please enter the purpose of the loan.";
  } else if (formData.loanPurpose.trim().length < 10) {
    errors.loanPurpose =
      "Purpose should contain at least 10 characters.";
  }

  return errors;
}