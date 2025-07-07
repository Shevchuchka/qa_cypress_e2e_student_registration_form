import { faker } from "@faker-js/faker";

export default function generateUser() {
  const gender = faker.helpers.arrayElement(['Male', 'Female', 'Other']);
  const fullName = faker.person.fullName(gender);
  const [firstName, lastName] = fullName.split(' ');
  const userName = firstName.toLowerCase() + lastName;
  const email = `${userName}@gmail.com`;
  const phone = faker.phone.number().splice('-').join('');
  const birthDate = faker.date.birthdate();
  const subjects = faker.helpers
    .arrayElements(
      ['Math', 'English', 'History', 'Biology', 'Physics', 'Geography', 'Art'],
      { min: 1, max: 3 }
    );
  const hobbies = faker.helpers
    .arrayElements(['Sports', 'Reading', 'Music']);

  const address = faker.location.streetAddress(false);

  return {
    firstName,
    lastName,
    email,
    gender,
    phone,
    birthDate,
    subjects,
    hobbies,
    address
  };
};

