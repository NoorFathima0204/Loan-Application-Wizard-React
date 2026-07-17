# 🏦 Loan Application Wizard (React)

A modern **multi-step Loan Application Wizard** built using **React** and **Vite**. The application guides users through the complete loan application process, including loan selection, personal details, KYC verification, employment information, document uploads, and final review before submission.

---

## 🌐 Live Demo

🔗 https://noorfathima0204.github.io/Loan-Application-Wizard-React/

---

## ✨ Features

- 📄 8-step loan application workflow
- 🏦 Loan type selection
- 👤 Personal information collection
- 🪪 KYC verification (PAN & Aadhaar)
- 📍 Address information
- 💼 Employment details
- 👥 Co-applicant information
- 📁 Drag & Drop document upload
- ✍️ Digital signature support
- ✅ Review & Submit page
- ✔️ Step-by-step validation
- 📱 Responsive user interface
- 🚀 Deployed using GitHub Pages

---

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Context API
- React Dropzone
- CSS3
- Git
- GitHub
- GitHub Pages

---

## 📂 Project Structure

```text
src/
├── assets/              # Images and static assets
├── components/
│   ├── common/          # Common reusable components
│   ├── layout/          # Layout components
│   └── wizard/
│       ├── ProgressBar.jsx
│       ├── StepNavigation.jsx
│       └── Wizard.jsx
├── context/
│   └── FormContext.jsx
├── data/
├── hooks/
│   ├── useFormData.js
│   └── useFormHandlers.js
├── pages/
│   ├── Step1LoanType.jsx
│   ├── Step2PersonalInfo.jsx
│   ├── Step3KYC.jsx
│   ├── Step4Address.jsx
│   ├── Step5Employment.jsx
│   ├── Step6CoApplicant.jsx
│   ├── Step7Documents.jsx
│   └── Step8Review.jsx
├── styles/
├── utils/
│   └── validation.js
├── validation/
│   └── loanSchemas.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/NoorFathima0204/Loan-Application-Wizard-React.git
```

### Navigate to the project folder

```bash
cd Loan-Application-Wizard-React
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 📸 Screenshots

### Step 1 – Loan Type

![Step 1](screenshots/step1.png)

---

### Step 2 – Personal Information

![Step 2](screenshots/step2.png)

---

### Step 3 – KYC Verification

![Step 3](screenshots/step3.png)

---

### Step 4 – Address Details

![Step 4](screenshots/step4.png)

---

### Step 5 – Employment Details

![Step 5](screenshots/step5.png)

---

### Step 6 – Co-Applicant Details

![Step 6](screenshots/step6.png)

---

### Step 7 – Document Upload

![Step 7](screenshots/step7.png)

---

### Step 8 – Review & Submit

![Step 8](screenshots/step8.png)

---

## 🚀 Future Improvements

- Backend API integration
- Database storage
- User authentication
- Email notifications
- Loan eligibility calculator
- Admin dashboard
- React Hook Form integration
- Complete Zod schema validation
- Dark mode support

---

## 📚 What I Learned

Through this project, I gained practical experience in:

- Building multi-step forms using React
- Managing application state with Context API
- Creating reusable React components
- Form validation techniques
- Drag & Drop file uploads
- Git and GitHub workflow
- Deploying React applications using GitHub Pages
- Writing professional project documentation

---

## 👩‍💻 Developer

**Noor Fathima**

Full Stack Developer | React Enthusiast

Built as part of the **ZeTheta Full Stack Engineer Internship** using **React** and **Vite**.

---

## ⭐ Support

If you found this project helpful or interesting, please consider giving it a ⭐ on GitHub.

Thank you for visiting!
