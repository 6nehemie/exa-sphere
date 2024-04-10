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
  education: IEducation[];
}

export interface IPhoneNumber {
  countryCode: string;
  number: string;
}
