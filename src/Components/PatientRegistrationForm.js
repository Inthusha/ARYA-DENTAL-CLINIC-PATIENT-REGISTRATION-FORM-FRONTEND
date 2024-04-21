import React,{useState} from 'react'
import PatientService from '../Services/PatientService';

function PatientRegistrationForm() 
{
  
  const [formData,setFormData]=useState(
    {
        date:'',
        fullName:'',
        age:'',
        gender:'',
        dateOfBirth:'',
        occupation:'',
        otherOccupation:'',
        phoneNumber:'',
        email:'',
        address:'',
        chiefComplaint:'',
        
        hypertension: false,
        heartDisease: false,
        diabetes: false,
        bloodDisorder: false,
        epilepsy: false,
        gastritis: false,
        respiratoryDisease: false,
        thyroid: false,
        jaundice: false,
        pregnant: false,
        nursingMother:'',
        habitualHistory:'',
        surgicalHistory:'',
        dentalIssue:'',
        regularMediations:'',
        allergies:'',
        

    });

    const[errorMessage,setErrorMessage]=useState('');

    const handleChange=(e)=>{
        const{name,value,type,checked}=e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: type==="checkbox" ? checked:value

        }));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
             await PatientService.registerPatient(formData);
             alert("Patient registered successfully!");
        }
        catch(error){

            console.error('Error:',error);
            setErrorMessage("An error occurred. Please try again later.");

        }

    }

  return (
    <div className="container">
    
    <form className="form-container" onSubmit={handleSubmit}>
        <div className="title">Patient Registration</div>
         <div className='userdetails'>

        <div className='inputbox'>
        <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
        </label>
        </div>

        <div className='inputbox'>    
        <label>
            FullName:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required/>
        </label>
        </div>

        <div className='inputbox'>
        <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required/>
        </label>
        </div>

        <div className='inputbox'>
        <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            
        </label>
        </div>

        <div className='inputbox'>
        <label>
            Date Of Birth:
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required/>
        </label>
        </div>

        <div className='inputbox'>
        <label>
            Occupation:
            <select name="occupation" value={formData.occupation} onChange={handleChange} required>
                <option value="">Select occupation</option>
                <option value="Accountant">Accountant</option>
                <option value="Artist">Artist</option>
                <option value="Consultant">Consultant</option>
                <option value="Construction Worker">Construction Worker</option>
                <option value="Chef">Chef</option>
                <option value="Customer Service Representative">Customer Service Representative</option>
                <option value="Doctor">Doctor</option>
                <option value="Driver">Driver</option>
                <option value="Engineer">Engineer</option>
                <option value="Entrepreneur">Entrepreneur</option>
                <option value="Firefighter">Firefighter</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Government Employee">Government Employee</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Manager">Manager</option>
                <option value="Military Personnel">Military Personnel</option>
                <option value="Nurse">Nurse</option>
                <option value="Programmer">Programmer</option>
                <option value="Pilot">Pilot</option>
                <option value="Police Officer">Police Officer</option>
                <option value="Retired">Retired</option>
                <option value="Retail Worker ">Retail Worker </option>
                <option value="Security officer">Security Officer</option>
                <option value="Student">Student</option>
                <option value="Scientist">Scientist</option>
                <option value="Salesperson">Salesperson </option>
                <option value="Technician">Technician</option>
                <option value="Teacher">Teacher</option>
                <option value="Waiter/Waitress">Waiter/Waitress</option>
                <option value="Other (Specify)">Other (Specify)</option>
                </select>
            </label>

            {formData.occupation==="Other (Specify)" && <label>Other Occupation:
                <input type="text" name="otherOccupation" value={FormData.otherOccupation} onChange={handleChange}/>
                </label>}
          </div>

        <div className='inputbox'>
        <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required/>
        </label>
        </div>

        <div className='inputbox'>
        <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </label>
        </div>


        <div className='inputbox'>
        <label>
            Address:
            <input type="textarea" name="address" value={formData.address} onChange={handleChange} required/>
        </label>
        </div>

        

        <div className='inputbox'>
        <label>
            Chief Complaint:
            <input type="textarea" name="chiefComplaint" value={formData.chiefComplaint} onChange={handleChange} required/>
        </label>
        </div>

        </div>

       

        <div className='medicalHistoryDetails'>
            <label className='medicalHistoryTitle'>Medical History:</label>

        <div className='category1'>
        <div>
         <label>
            HyperTension/BP:
            <input type="checkbox" name="hypertension" checked={formData.hypertension} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            HeartDisease:
            <input type="checkbox" name="heartDisease" checked={formData.heartDisease} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            Diabetes:
            <input type="checkbox" name="diabetes" checked={formData.diabetes} onChange={handleChange} />
         </label>
        </div>
        </div>
     

        <div className='category2'>
        <div>
         <label>
            BloodDisorder:
            <input type="checkbox" name="bloodDisorder" checked={formData.bloodDisorder} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            Epilepsy:
            <input type="checkbox" name="epilepsy" checked={formData.epilepsy} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            Gastritis:
            <input type="checkbox" name="gastritis" checked={formData.gastritis} onChange={handleChange} />
         </label>
        </div>
        </div>
    

    
        <div className='category3'>
        <div>
         <label>
            Respiratory Disease(Asthma,Wheezing,Tb):
            <input type="checkbox" name="respiratoryDisease" checked={formData.respiratoryDisease} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            Thyroid:
            <input type="checkbox" name="thyroid" checked={formData.thyroid} onChange={handleChange} />
         </label>
        </div>
        </div>
      
        <div className='category4'>
        <div>
         <label>
            Jaundice:
            <input type="checkbox" name="jaundice" checked={formData.jaundice} onChange={handleChange} />
         </label>
        </div>
        
  

   
        <div>
         <label>
            Are you pregnant:
            <input type="checkbox" name="pregnant" checked={formData.pregnant} onChange={handleChange} />
         </label>
        </div>
    

     
        <div>
         <label>
            Are you Nursing Mother:
            <input type="checkbox" name="nursingMother" checked={formData.nursingMother} onChange={handleChange} />
         </label>
        </div>
        </div>
 
        <div className='category5'>
        <div>
         <label>
            Habitual History(Smoking/Alcohol/anyOther):
            <input type="checkbox" name="habitualHistory" checked={formData.habitualHistory} onChange={handleChange} />
         </label>
        </div>
        </div>
       
        <div className='category6'>
        <div>
         <label>
            Any surgical Historical:
            <input type="checkbox" name="surgicalHistory" checked={formData.surgicalHistory} onChange={handleChange} />
         </label>
        </div>
        </div>

        </div>
    
  

        <div>
         <label>
            Any serious dental issue in previous Dental visit?:
            <input type="textarea" name="dentalIssue" value={formData.dentalIssue} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            Under any regular medications,if so mention:
            <input type="textarea" name="regularMediations" value={formData.regularMediations} onChange={handleChange} />
         </label>
        </div>

        <div>
         <label>
            Any known allergies for drug?:
            <input type="textarea" name="allergies" value={formData.allergies} onChange={handleChange} />
         </label>
        </div>

        <button type="submit">Submit</button>

        {errorMessage && <p  className="error-message"> {errorMessage}</p>}
       
    </form>
  </div> 
)
}

export default PatientRegistrationForm