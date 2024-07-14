// import {useState} from 'react';

export class User {
  constructor(public id: number, public name: string, public email: string) {}
}

// interface UserProps {
//   initialId: string;
//   initialName: string;
//   initialEmail: string;
// }

// const UserFunc = ({initialId, initialName, initialEmail}: UserProps): any => {
//   const [id, setId] = useState<string>(initialId);
//   const [name, setName] = useState<string>(initialName);
//   const [email, setEmail] = useState<string>(initialEmail);

//   return {id, setId, name, setName, email, setEmail};
// };

export default User;
