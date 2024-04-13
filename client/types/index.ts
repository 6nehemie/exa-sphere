export interface IAddress {
  id: number;
  title: string;
  street: string;
  city: string;
  zip: string;
  state: string;
  country: string;
}

export interface IEducation {
  id: number;
  school: string;
  degree: string;
  graduationYear: number;
}

export interface IUser {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  description: string;
  phoneNumber: IPhoneNumber;
  phone: string;
  address: IAddress;
  // education: IEducation[];
}

export interface IPhoneNumber {
  countryCode: string;
  number: string;
}

export interface IProfile {
  id: number;
  title: string;
  description: string;
  skills: string;
  experience: {
    jobTitle: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    responsibilities: string;
    achievements?: string;
  };
  experience2?: IExperience;
  experience3?: IExperience;
  characteristics: string;
}

export interface IExperience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
  achievements?: string;
}

export interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
    accessToken: string;
  };
}

export interface User {
  id: number | null;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  description: string | null;
  authType: string;
}
