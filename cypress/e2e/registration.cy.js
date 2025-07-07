/// <reference types='cypress' />

describe('Student Registration page', () => {
  before(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
  });

  it(`should correct fill all fields exept 'picture'`, () => {
    const {
      firstName,
      lastName,
      email,
      gender,
      phone,
      birthDate,
      subjects,
      hobbies,
      address
    } = generateUser();

    // cy.generateUser().then((user) => {
    //   const {
    //     firstName,
    //     lastName,
    //     email,
    //     gender,
    //     phone,
    //     birthDate,
    //     subjects,
    //     hobbies,
    //     address
    //   } = user;
    // })

    cy.get('h1').should('contain.text', 'Practice Form');
  });
});
