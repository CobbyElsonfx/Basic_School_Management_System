import { useState } from 'react';
import Breadcrumb from '@/Components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '@/Layouts/DefaultLayout';

const AdmissionForms = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Step titles array
  const stepTitles = [
    "Personal Details",
    "Parent/Guardian Info",
    "Address and Emergency Contact",
    "Academic Details",
    "Health Details",
    "Upload Documents",
  ];

  const [formData, setFormData] = useState({
    personalDetails: {
      firstName: '',
      lastName: '',
      otherName: '',
      dob: '',
      placeOfBirth: '',
      gender: '',
      nationality: '',
      religion: '',
      disabilityStatus: '',
      hobbiesOrInterests: '',
    },
    
    guardianInfo: {
        name: '',
        email: '',
        address: '',
        relationship: '',
        contact: '',
        occupation: '',
        maritalStatus: '',
    },
    
    addressDetails: {
      residentialAddress: '',
      digitalAddressCode: '',
      postalAddress: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
    },

    academicDetails: {
      previousSchool: '',
      admissionClass: '',
      admissionDate: '',
      transferCertificate: null,
      reasonForTransfer: '',
    },

    healthDetails: {
      allergies: '',
      chronicConditions: '',
      immunizationRecords: '',
      bloodGroup: '',
      specialDietaryNeeds: '',
    },
    
    additionalDetails: {
      modeOfTransport: '', // School bus, walking, etc.
      siblingInformation: [], // Array of siblings in the school: { name, class, relationship }
      parentalApprovalForActivities: false,
      specialSkillsOrTalents: '',
      parentalGoalsOrExpectations: '',
    },
    
    documents: {
      birthCertificate: null,
      passportPhoto: null,
      previousSchoolRecords: null,
      healthInsuranceCard: null,
      proofOfResidence: null,
      studentReportCard: null,
    },
    studentId: '',
  });

  

  const handleInputChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const goToNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Admission Management" />
      <div className="p-6 bg-white rounded-lg shadow-default dark:bg-boxdark">
        <header className="mb-6">
          <h3 className="text-lg font-medium text-black dark:text-white">
            New Enrollment Form
          </h3>
          <p className="text-sm text-gray-500">
            Complete the steps below to enroll a new student.
          </p>
        </header>

        {/* Step Indicator */}
        <div className="mb-6">
          <p className="text-sm font-medium">
            Step {currentStep} of 7: <span className="text-primary">{stepTitles[currentStep - 1]}</span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${(currentStep / 7) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Steps */}
        <form>
        {currentStep === 1 && (
          <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Personal Details
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">First Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.firstName}
        onChange={(e) =>
          handleInputChange('personalDetails', 'firstName', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Last Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.lastName}
        onChange={(e) =>
          handleInputChange('personalDetails', 'lastName', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Other Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.otherName}
        onChange={(e) =>
          handleInputChange('personalDetails', 'otherName', e.target.value)
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Date of Birth</label>
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.dob}
        onChange={(e) =>
          handleInputChange('personalDetails', 'dob', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Place of Birth</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.placeOfBirth}
        onChange={(e) =>
          handleInputChange('personalDetails', 'placeOfBirth', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Gender</label>
      <select
        className="w-full p-2 border rounded"
        value={formData.personalDetails.gender}
        onChange={(e) =>
          handleInputChange('personalDetails', 'gender', e.target.value)
        }
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Nationality</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.nationality}
        onChange={(e) =>
          handleInputChange('personalDetails', 'nationality', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Religion</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.religion}
        onChange={(e) =>
          handleInputChange('personalDetails', 'religion', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Disability Status</label>
      <select
        className="w-full p-2 border rounded"
        value={formData.personalDetails.disabilityStatus}
        onChange={(e) =>
          handleInputChange('personalDetails', 'disabilityStatus', e.target.value)
        }
      >
        <option value="">Select Status</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Hobbies/Interests</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.personalDetails.hobbiesOrInterests}
        onChange={(e) =>
          handleInputChange('personalDetails', 'hobbiesOrInterests', e.target.value)
        }
      />
    </div>
  </div>
</div>


)}

{currentStep === 2 && (
  <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Parent/Guardian Info
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.name}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'name', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Relationship</label>
      <select
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.relationship}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'relationship', e.target.value)
        }
      >
        <option value="">Select Relationship</option>
        <option value="Father">Father</option>
        <option value="Mother">Mother</option>
        <option value="Guardian">Guardian</option>
      </select>
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Contact</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.contact}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'contact', e.target.value)
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Email</label>
      <input
        type="email"
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.email}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'email', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.address}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'address', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Marital Status</label>
      <select
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.maritalStatus}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'maritalStatus', e.target.value)
        }
      >
        <option value="">Select Marital Status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Divorced">Divorced</option>
        <option value="Widowed">Widowed</option>
      </select>
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Occupation</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.guardianInfo.occupation}
        onChange={(e) =>
          handleInputChange('guardianInfo', 'occupation', e.target.value)
        }
      />
    </div>
  </div>
</div>

)}

{currentStep === 3 && (
  <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Address and Emergency Contact
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Residential Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.addressDetails.residentialAddress}
        onChange={(e) =>
          handleInputChange('addressDetails', 'residentialAddress', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Digital Address Code</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.addressDetails.digitalAddressCode}
        onChange={(e) =>
          handleInputChange('addressDetails', 'digitalAddressCode', e.target.value)
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Postal Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.addressDetails.postalAddress}
        onChange={(e) =>
          handleInputChange('addressDetails', 'postalAddress', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/4 px-2 mb-4">
      <label className="block mb-2">Emergency Contact Name</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.addressDetails.emergencyContactName}
        onChange={(e) =>
          handleInputChange('addressDetails', 'emergencyContactName', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/4 px-2 mb-4">
      <label className="block mb-2">Emergency Contact Phone</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.addressDetails.emergencyContactPhone}
        onChange={(e) =>
          handleInputChange('addressDetails', 'emergencyContactPhone', e.target.value)
        }
      />
    </div>
  </div>
</div>

)}

{
  currentStep === 4 && (
    <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Academic Details
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Previous School</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.academicDetails.previousSchool}
        onChange={(e) =>
          handleInputChange('academicDetails', 'previousSchool', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/4 px-2 mb-4">
      <label className="block mb-2">Admission Class</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.academicDetails.admissionClass}
        onChange={(e) =>
          handleInputChange('academicDetails', 'admissionClass', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/4 px-2 mb-4">
      <label className="block mb-2">Admission Date</label>
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={formData.academicDetails.admissionDate}
        onChange={(e) =>
          handleInputChange('academicDetails', 'admissionDate', e.target.value)
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Transfer Certificate</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('academicDetails', 'transferCertificate', e.target.files[0])
        }
      />
    </div>
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Reason for Transfer</label>
      <textarea
        className="w-full p-2 border rounded"
        value={formData.academicDetails.reasonForTransfer}
        onChange={(e) =>
          handleInputChange('academicDetails', 'reasonForTransfer', e.target.value)
        }
      />
    </div>
  </div>
</div>

  )
}


{
  currentStep === 5 && (
    <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Health Details
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Allergies</label>
      <textarea
        className="w-full p-2 border rounded"
        value={formData.healthDetails.allergies}
        onChange={(e) =>
          handleInputChange('healthDetails', 'allergies', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Chronic Conditions</label>
      <textarea
        className="w-full p-2 border rounded"
        value={formData.healthDetails.chronicConditions}
        onChange={(e) =>
          handleInputChange('healthDetails', 'chronicConditions', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Immunization Records</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('healthDetails', 'immunizationRecords', e.target.files[0])
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Blood Group</label>
      <input
        type="text"
        className="w-full p-2 border rounded"
        value={formData.healthDetails.bloodGroup}
        onChange={(e) =>
          handleInputChange('healthDetails', 'bloodGroup', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Special Dietary Needs</label>
      <textarea
        className="w-full p-2 border rounded"
        value={formData.healthDetails.specialDietaryNeeds}
        onChange={(e) =>
          handleInputChange('healthDetails', 'specialDietaryNeeds', e.target.value)
        }
      />
    </div>
  </div>
</div>

  )

}


{
  currentStep === 6 && (
    <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Additional Details
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Mode of Transport</label>
      <select
        className="w-full p-2 border rounded"
        value={formData.additionalDetails.modeOfTransport}
        onChange={(e) =>
          handleInputChange('additionalDetails', 'modeOfTransport', e.target.value)
        }
      >
        <option value="">Select Mode</option>
        <option value="School Bus">School Bus</option>
        <option value="Walking">Walking</option>
        <option value="Private Vehicle">Private Vehicle</option>
      </select>
    </div>
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Special Skills or Talents</label>
      <textarea
        className="w-full p-2 border rounded"
        value={formData.additionalDetails.specialSkillsOrTalents}
        onChange={(e) =>
          handleInputChange('additionalDetails', 'specialSkillsOrTalents', e.target.value)
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Parental Goals or Expectations</label>
      <textarea
        className="w-full p-2 border rounded"
        value={formData.additionalDetails.parentalGoalsOrExpectations}
        onChange={(e) =>
          handleInputChange('additionalDetails', 'parentalGoalsOrExpectations', e.target.value)
        }
      />
    </div>
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Parental Approval for Activities</label>
      <select
        className="w-full p-2 border rounded"
        value={formData.additionalDetails.parentalApprovalForActivities}
        onChange={(e) =>
          handleInputChange('additionalDetails', 'parentalApprovalForActivities', e.target.value)
        }
      >
        <option value={false}>No</option>
        <option value={true}>Yes</option>
      </select>
    </div>
  </div>
</div>

  )
}

{
  currentStep === 7 && (
    <div>
  <h4 className="mb-4 text-lg font-medium text-black dark:text-white">
    Required Documents
  </h4>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Birth Certificate</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('documents', 'birthCertificate', e.target.files[0])
        }
      />
    </div>
    <div className="w-full sm:w-1/2 px-2 mb-4">
      <label className="block mb-2">Passport Photo</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('documents', 'passportPhoto', e.target.files[0])
        }
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-2">
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Previous School Records</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('documents', 'previousSchoolRecords', e.target.files[0])
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Health Insurance Card</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('documents', 'healthInsuranceCard', e.target.files[0])
        }
      />
    </div>
    <div className="w-full sm:w-1/3 px-2 mb-4">
      <label className="block mb-2">Proof of Residence</label>
      <input
        type="file"
        className="w-full p-2 border rounded"
        onChange={(e) =>
          handleInputChange('documents', 'proofOfResidence', e.target.files[0])
        }
      />
    </div>
  </div>
</div>



  )
}


          {/* Repeat similar sections for steps 3-6 */}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                type="button"
                className="px-4 py-2 text-white sbg-gray-600 rounded hover:bg-gray-500"
                onClick={goToPreviousStep}
              >
                Previous
              </button>
            )}
            {currentStep <= 7 ? (
              <button
                type="button"
                className="px-4 py-2 text-white bg-primary rounded hover:bg-primary-light"
                onClick={goToNextStep}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default AdmissionForms;
