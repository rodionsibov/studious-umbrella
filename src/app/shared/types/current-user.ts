export interface CurrentUser {
  id: number;
  address: Address;
  company: Company;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface Address {
  suite: string;
  city: string;
  street: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
}
