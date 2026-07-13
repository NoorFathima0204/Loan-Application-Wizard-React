import { useFormData } from "../hooks/useFormData";

function Step2PersonalInfo() {
  const { formData, updateFormData } = useFormData();

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData({
      [name]: value,
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Step 2: Personal Information</h2>

      <label>Full Name</label>
      <br />
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="Enter your full name"
        style={{ width: "100%", padding: "10px", marginTop: "5px" }}
      />

      <br />
      <br />

      <label>Email</label>
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        style={{ width: "100%", padding: "10px", marginTop: "5px" }}
      />

      <br />
      <br />

      <label>Mobile Number</label>
      <br />
      <input
        type="tel"
        name="mobile"
        value={formData.mobile}
        onChange={handleChange}
        placeholder="Enter your mobile number"
        style={{ width: "100%", padding: "10px", marginTop: "5px" }}
      />

      <br />
      <br />

      <label>Date of Birth</label>
      <br />
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", marginTop: "5px" }}
      />

      <br />
      <br />

      <label>Gender</label>
      <br />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", marginTop: "5px" }}
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <br />
      <br />

      <label>Marital Status</label>
      <br />
      <select
        name="maritalStatus"
        value={formData.maritalStatus}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", marginTop: "5px" }}
      >
        <option value="">Select Status</option>
        <option>Single</option>
        <option>Married</option>
        <option>Divorced</option>
        <option>Widowed</option>
      </select>
    </div>
  );
}

export default Step2PersonalInfo;