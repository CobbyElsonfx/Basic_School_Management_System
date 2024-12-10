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
            Step {currentStep} of 6: <span className="text-primary">{stepTitles[currentStep - 1]}</span>
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full"
              style={{ width: `${(currentStep / 6) * 100}%` }}
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
          value={formData.guardianInfor.name}
          onChange={(e) =>
            handleInputChange('guardianInfor', 'name', e.target.value)
          }
        />
      </div>
      <div className="w-full sm:w-1/3 px-2 mb-4">
        <label className="block mb-2">Relationship</label>
        <select
          className="w-full p-2 border rounded"
          value={formData.guardianInfor.relationship}
          onChange={(e) =>
            handleInputChange('guardianInfor', 'relationship', e.target.value)
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
          value={formData.guardianInfor.contact}
          onChange={(e) =>
            handleInputChange('guardianInfor', 'contact', e.target.value)
          }
        />
      </div>
    </div>
    <div className="flex flex-wrap -mx-2">
      <div className="w-full sm:w-1/2 px-2 mb-4">
        <label className="block mb-2">Occupation</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={formData.guardianInfor.occupation}
          onChange={(e) =>
            handleInputChange('guardianInfor', 'occupation', e.target.value)
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
          value={formData.address.residentialAddress}
          onChange={(e) =>
            handleInputChange('address', 'residentialAddress', e.target.value)
          }
        />
      </div>
      <div className="w-full sm:w-1/4 px-2 mb-4">
        <label className="block mb-2">Emergency Contact Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={formData.address.emergencyContactName}
          onChange={(e) =>
            handleInputChange('address', 'emergencyContactName', e.target.value)
          }
        />
      </div>
      <div className="w-full sm:w-1/4 px-2 mb-4">
        <label className="block mb-2">Emergency Contact Phone</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={formData.address.emergencyContactPhone}
          onChange={(e) =>
            handleInputChange('address', 'emergencyContactPhone', e.target.value)
          }
        />
      </div>
    </div>
  </div>
)}

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
            {currentStep < 6 ? (
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
