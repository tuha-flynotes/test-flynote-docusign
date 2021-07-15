import Calendar from '../assets/calendar.svg';
import Signature from '../assets/signature.svg';
import Building from '../assets/building.svg';
import Patient from '../assets/patient.svg';
import Map from '../assets/map.svg';

export const standardFields = [
  {
    icon: Calendar,
    type: 'text',
    displayName: 'Date Signed',
    labelName: '<<Date_Signed>>'
  },
  {
    icon: Signature,
    type: "signature",
    displayName: "Signature",
    labelName: 'Sign'
  },
  {
    icon: Building,
    type: 'text',
    displayName: 'Practice Name',
    labelName: '<<Practice_Name>>'
  },
  {
    icon: Patient,
    type: 'text',
    displayName: 'Patient Name',
    labelName: '<<Practice_Name>>'
  },
  {
    icon: Map,
    type: 'text',
    displayName: 'P.Address line 1',
    labelName: '<<Patient_Address_Line1>>'
  },
  {
    icon: Map,
    type: 'text',
    displayName: 'P.Address line 2',
    labelName: '<<Patient_Address_Line2>>'
  },
  {
    icon: Map,
    type: 'text',
    displayName: 'P.Address line 3',
    labelName: '<<Patient_Address_Line3>>'
  },
  {
    icon: Map,
    type: 'text',
    displayName: 'P.Address PostCode',
    labelName: '<<Patient_Address_PostCode>>'
  },
  {
    icon: Calendar,
    type: 'text',
    displayName: 'Todays Date',
    labelName: '<<Todays_Date>>'
  },
  {
    icon: Patient,
    type: 'text',
    displayName: 'Clinician name',
    labelName: '<<Clinician_Name>>'
  },
];