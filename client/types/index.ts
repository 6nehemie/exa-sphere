export interface IAddress {
  id: number;
  title: string;
  address: string;
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
  fullName: string;
  email: string;
  description: string;
  phone: string;
  addresses: IAddress[];
  education: IEducation[];
}
