import './styles/index.scss';

const user = {
  age: 12,
};

const newUser = {
  ...user,
  name: 'John Smith',
};

console.log(newUser.name);
