// ==========================
// STEP 1 VALIDATION
// ==========================

export function validateStep1(formData) {
  const errors = {};

  if (!formData.loanType) {
    errors.loanType = "Please select a loan type.";
  }

  if (!formData.loanAmount) {
    errors.loanAmount = "Loan amount is required.";
  } else if (Number(formData.loanAmount) < 10000) {
    errors.loanAmount = "Minimum loan amount is ₹10,000.";
  }

  if (!formData.loanTenure) {
    errors.loanTenure = "Please select the loan tenure.";
  }

  if (!formData.loanPurpose.trim()) {
    errors.loanPurpose = "Loan purpose is required.";
  } else if (formData.loanPurpose.trim().length < 10) {
    errors.loanPurpose =
      "Loan purpose must contain at least 10 characters.";
  }

  return errors;
}

// ==========================
// STEP 2 VALIDATION
// ==========================

export function validateStep2(formData) {
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email address.";
  }

  if (!formData.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (!/^\d{10}$/.test(formData.mobile)) {
    errors.mobile = "Mobile number must contain exactly 10 digits.";
  }

  if (!formData.dob) {
    errors.dob = "Date of birth is required.";
  }

  if (!formData.gender) {
    errors.gender = "Please select your gender.";
  }

  if (!formData.maritalStatus) {
    errors.maritalStatus = "Please select your marital status.";
  }

  return errors;
}

// ==========================
// STEP 3 VALIDATION
// ==========================

export function validateStep3(formData) {
  const errors = {};

  if (!formData.pan.trim()) {
    errors.pan = "PAN number is required.";
  } else if (
    !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(formData.pan.toUpperCase())
  ) {
    errors.pan = "Invalid PAN number.";
  }

  if (!formData.aadhaar.trim()) {
    errors.aadhaar = "Aadhaar number is required.";
  } else if (!/^\d{12}$/.test(formData.aadhaar)) {
    errors.aadhaar = "Aadhaar number must contain exactly 12 digits.";
  }

  if (!formData.consent) {
    errors.consent = "Please provide your consent.";
  }

  return errors;
}

// ==========================
// STEP 4 VALIDATION
// ==========================

export function validateStep4(formData) {
  const errors = {};

  if (!formData.address1.trim()) {
    errors.address1 = "Address Line 1 is required.";
  }

  if (!formData.city.trim()) {
    errors.city = "City is required.";
  }

  if (!formData.state.trim()) {
    errors.state = "State is required.";
  }

  if (!formData.pincode.trim()) {
    errors.pincode = "Pincode is required.";
  } else if (!/^\d{6}$/.test(formData.pincode)) {
    errors.pincode = "Pincode must contain exactly 6 digits.";
  }

  if (!formData.country.trim()) {
    errors.country = "Country is required.";
  }

  return errors;
}

// ==========================
// STEP 5 VALIDATION
// ==========================

export function validateStep5(formData) {
  const errors = {};

  if (!formData.employmentType) {
    errors.employmentType = "Please select employment type.";
  }

  if (
    formData.employmentType === "Salaried" &&
    !formData.companyName.trim()
  ) {
    errors.companyName = "Company name is required.";
  }

  if (
  (formData.employmentType === "Self Employed" ||
    formData.employmentType === "Business Owner") &&
  !formData.businessName.trim()
) {
  errors.businessName = "Business name is required.";
}

  if (!formData.monthlyIncome) {
    errors.monthlyIncome = "Monthly income is required.";
  } else if (Number(formData.monthlyIncome) < 10000) {
    errors.monthlyIncome = "Monthly income should be at least ₹10,000.";
  }

  if (!formData.workExperience) {
    errors.workExperience = "Please select work experience.";
  }

  return errors;
}

// ==========================
// STEP 6 VALIDATION
// ==========================

export function validateStep6(formData) {
  const errors = {};

  if (!formData.hasCoApplicant) {
    errors.hasCoApplicant =
      "Please specify whether you have a co-applicant.";
  }

  if (formData.hasCoApplicant === "Yes") {
    if (!formData.coApplicantName.trim()) {
      errors.coApplicantName = "Co-applicant name is required.";
    }

    if (!formData.relationship.trim()) {
      errors.relationship = "Relationship is required.";
    }

    if (!formData.coApplicantMobile.trim()) {
      errors.coApplicantMobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.coApplicantMobile)) {
      errors.coApplicantMobile =
        "Enter a valid 10-digit mobile number.";
    }

    if (!formData.coApplicantIncome) {
      errors.coApplicantIncome = "Annual income is required.";
    }
  }

  return errors;
}

// ==========================
// STEP 7 VALIDATION
// ==========================

export function validateStep7(formData) {
  const errors = {};

  if (!formData.panDocument) {
    errors.panDocument = "Please upload your PAN Card.";
  }

  if (!formData.aadhaarDocument) {
    errors.aadhaarDocument = "Please upload your Aadhaar Card.";
  }

  if (!formData.salarySlip) {
    errors.salarySlip = "Please upload your Salary Slip.";
  }

  if (!formData.bankStatement) {
    errors.bankStatement = "Please upload your Bank Statement.";
  }

  return errors;
}

// ==========================
// STEP 8 VALIDATION
// ==========================

export function validateStep8() {
  return {};
}