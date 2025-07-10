export default function tableResults (
  firstName,
  lastName,
  email,
  gender,
  phone,
  day,
  month,
  year,
  subjects,
  hobby,
  address,
  state,
  city
) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return {
    'Student Name': `${firstName} ${lastName}`,
    'Student Email': `${email}`,
    Gender: `${gender}`,
    Mobile: `${phone}`,
    'Date of Birth': `${year} ${monthNames[month - 1]},${day}`,
    Subjects: `${subjects.join(', ')}`,
    Hobbies: `${hobby}`,
    Picture: '',
    Address: `${address}`,
    'State and City': `${state} ${city}`
  };
};
