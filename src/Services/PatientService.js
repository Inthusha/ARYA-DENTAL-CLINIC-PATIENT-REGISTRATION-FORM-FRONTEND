import axios from 'axios';
 
const PATIENTS_BASE_API_URL="http://localhost:8081/api/patients"
class PatientService
{
   registerPatient(formData)
   {
      return axios.post(`${PATIENTS_BASE_API_URL}/register`,formData);
   }
}

export default new PatientService()

