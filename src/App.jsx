import FormProvider from "./context/FormContext";
import Wizard from "./components/wizard/Wizard";

function App() {
  return (
    <FormProvider>
      <div>
        <Wizard />
      </div>
    </FormProvider>
  );
}

export default App;