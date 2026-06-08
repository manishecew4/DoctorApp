interface Route {
  name: string;
  id: string;
}


type RouteKey =
  | 'Splash'
  | 'Login'
  | 'Signup'
  | 'DoctorDashboard'
  | 'PatientDashboard'
  | 'PatientAppointments'
  | 'PatientProfile'
  | 'DoctorAppointmentsList';

const Routes = {
  Splash: {
    name: 'Splash',
    id: 'Splash',
  },
  Login: {
    name: 'Login',
    id: 'Login',
  },
  Signup: {
    name: 'Signup',
    id: 'Signup',
  },
  DoctorDashboard: {
    name: 'Doctor Dashboard',
    id: 'DoctorDashboard',
  },
  PatientDashboard: {
    name: 'Patient Dashboard',
    id: 'PatientDashboard',
  },
  PatientAppointments: {
    name: 'Patient Appointments',
    id: 'PatientAppointments',
  },
  PatientProfile: {
    name: 'Patient Profile',
    id: 'PatientProfile',
  },
  DoctorAppointmentsList: {
    name: 'Doctor Appointments List',
    id: 'DoctorAppointmentsList',
  },
} as const;

export default Routes;
export type { RouteKey };