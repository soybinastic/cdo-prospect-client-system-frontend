

import { useField } from 'formik'

const FieldValue = ({ name }) => {
    const [field] = useField(name)
  return field.value
}

export default FieldValue