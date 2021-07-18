import Calendar from '../assets/calendar.svg';
import Signature from '../assets/signature.svg';
import Building from '../assets/building.svg';
import Patient from '../assets/patient.svg';
import Map from '../assets/map.svg';

export const standardFields = [
  {
    name: 'dateSigned',
    icon: Calendar,
    type: 'text',
    displayName: 'Date Signed',
    labelName: '<<Date_Signed>>'
  },
  {
    name: 'signature',
    icon: Signature,
    type: "signature",
    displayName: "Signature",
    labelName: 'Sign'
  },
  {
    name: 'practiceName',
    icon: Building,
    type: 'text',
    displayName: 'Practice Name',
    labelName: '<<Practice_Name>>'
  },
  {
    name: 'patientName',
    icon: Patient,
    type: 'text',
    displayName: 'Patient Name',
    labelName: '<<Patient_Name>>'
  },
  {
    name: 'patientAddressLine1',
    icon: Map,
    type: 'text',
    displayName: 'P.Address line 1',
    labelName: '<<Patient_Address_Line1>>'
  },
  {
    name: 'patientAddressLine2',
    icon: Map,
    type: 'text',
    displayName: 'P.Address line 2',
    labelName: '<<Patient_Address_Line2>>'
  },
  {
    name: 'patientAddressLine3',
    icon: Map,
    type: 'text',
    displayName: 'P.Address line 3',
    labelName: '<<Patient_Address_Line3>>'
  },
  {
    name: 'patientAddressPostCode',
    icon: Map,
    type: 'text',
    displayName: 'P.Address PostCode',
    labelName: '<<Patient_Address_PostCode>>'
  },
  {
    name: 'todayDate',
    icon: Calendar,
    type: 'text',
    displayName: 'Todays Date',
    labelName: '<<Todays_Date>>'
  },
  {
    name: 'clinicianName',
    icon: Patient,
    type: 'text',
    displayName: 'Clinician name',
    labelName: '<<Clinician_Name>>'
  },
];