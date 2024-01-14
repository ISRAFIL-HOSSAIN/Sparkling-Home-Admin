import { object, string, ref } from 'yup';

const addConditionValidationSchema = object({
  name: string().required("Condition Name is Required"),
  checkboxText: string().required("Checkbox Text is Required"),
  content: string().required("Content is Required"),
  
});

export default addConditionValidationSchema;
