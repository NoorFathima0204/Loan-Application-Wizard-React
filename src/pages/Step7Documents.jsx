import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useFormData } from "../hooks/useFormData";

function Step7Documents() {
  const { formData, updateFormData } = useFormData();

  const createDropzone = (fieldName) => {
    return useDropzone({
      multiple: false,

      onDrop: (acceptedFiles) => {
        updateFormData({
          [fieldName]: acceptedFiles[0],
        });
      },
    });
  };

  const panDropzone = createDropzone("panDocument");
  const aadhaarDropzone = createDropzone("aadhaarDocument");
  const salaryDropzone = createDropzone("salarySlip");
  const bankDropzone = createDropzone("bankStatement");

  const uploadBoxStyle = {
    border: "2px dashed #888",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "10px",
    marginBottom: "20px",
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Upload Documents</h2>

      <br />

      <div {...panDropzone.getRootProps()} style={uploadBoxStyle}>
        <input {...panDropzone.getInputProps()} />

        <strong>PAN Card</strong>

        <br />
        <br />

        {formData.panDocument
          ? formData.panDocument.name
          : "Drag & Drop or Click to Upload"}
      </div>

      <div {...aadhaarDropzone.getRootProps()} style={uploadBoxStyle}>
        <input {...aadhaarDropzone.getInputProps()} />

        <strong>Aadhaar Card</strong>

        <br />
        <br />

        {formData.aadhaarDocument
          ? formData.aadhaarDocument.name
          : "Drag & Drop or Click to Upload"}
      </div>

      <div {...salaryDropzone.getRootProps()} style={uploadBoxStyle}>
        <input {...salaryDropzone.getInputProps()} />

        <strong>Salary Slip</strong>

        <br />
        <br />

        {formData.salarySlip
          ? formData.salarySlip.name
          : "Drag & Drop or Click to Upload"}
      </div>

      <div {...bankDropzone.getRootProps()} style={uploadBoxStyle}>
        <input {...bankDropzone.getInputProps()} />

        <strong>Bank Statement</strong>

        <br />
        <br />

        {formData.bankStatement
          ? formData.bankStatement.name
          : "Drag & Drop or Click to Upload"}
      </div>
    </div>
  );
}

export default Step7Documents;