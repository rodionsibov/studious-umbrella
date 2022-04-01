export interface User {
  id: number;
  address: {
    suite: string;
    city: string;
    street: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
}
