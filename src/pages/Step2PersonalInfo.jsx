import { useFormHandlers } from "../hooks/useFormHandlers";

function Step2PersonalInfo() {
  const { formData, errors, handleChange } = useFormHandlers();

  return (
    <div className="step-container">
      <h2>Step 2: Personal Information</h2>

      <div className="form-group">
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        {errors.fullName && (
          <p className="error">{errors.fullName}</p>
        )}
      </div>

      <div className="form-group">
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}
      </div>

      <div className="form-group">
        <label>Mobile Number</label>

        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter your mobile number"
        />

        {errors.mobile && (
          <p className="error">{errors.mobile}</p>
        )}
      </div>

      <div className="form-group">
        <label>Date of Birth</label>

        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />

        {errors.dob && (
          <p className="error">{errors.dob}</p>
        )}
      </div>

      <div className="form-group">
        <label>Gender</label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {errors.gender && (
          <p className="error">{errors.gender}</p>
        )}
      </div>

      <div className="form-group">
        <label>Marital Status</label>

        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
        >
          <option value="">Select Status</option>
          <option>Single</option>
          <option>Married</option>
          <option>Divorced</option>
          <option>Widowed</option>
        </select>

        {errors.maritalStatus && (
          <p className="error">{errors.maritalStatus}</p>
        )}
      </div>
    </div>
  );
}

export default Step2PersonalInfo;