import { useDropzone } from "react-dropzone";
import { useFormHandlers } from "../hooks/useFormHandlers";

function Step7Documents() {
  const { formData, errors, updateFormData } = useFormHandlers();

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

  return (
    <div className="step-container">
      <h2>Step 7: Upload Documents</h2>

      <div {...panDropzone.getRootProps()} className="upload-box">
        <input {...panDropzone.getInputProps()} />

        <strong>PAN Card</strong>

        <br />
        <br />

        {formData.panDocument
          ? formData.panDocument.name
          : "Drag & Drop or Click to Upload"}

        {errors.panDocument && (
          <p className="error">{errors.panDocument}</p>
        )}
      </div>

      <div {...aadhaarDropzone.getRootProps()} className="upload-box">
        <input {...aadhaarDropzone.getInputProps()} />

        <strong>Aadhaar Card</strong>

        <br />
        <br />

        {formData.aadhaarDocument
          ? formData.aadhaarDocument.name
          : "Drag & Drop or Click to Upload"}

        {errors.aadhaarDocument && (
          <p className="error">{errors.aadhaarDocument}</p>
        )}
      </div>

      <div {...salaryDropzone.getRootProps()} className="upload-box">
        <input {...salaryDropzone.getInputProps()} />

        <strong>Salary Slip</strong>

        <br />
        <br />

        {formData.salarySlip
          ? formData.salarySlip.name
          : "Drag & Drop or Click to Upload"}

        {errors.salarySlip && (
          <p className="error">{errors.salarySlip}</p>
        )}
      </div>

      <div {...bankDropzone.getRootProps()} className="upload-box">
        <input {...bankDropzone.getInputProps()} />

        <strong>Bank Statement</strong>

        <br />
        <br />

        {formData.bankStatement
          ? formData.bankStatement.name
          : "Drag & Drop or Click to Upload"}

        {errors.bankStatement && (
          <p className="error">{errors.bankStatement}</p>
        )}
      </div>
    </div>
  );
}

export default Step7Documents;