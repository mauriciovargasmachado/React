import { faker } from '@faker-js/faker';

const generateRandomData = () => {
  
  const randomName = faker.person.fullName();
  const jobTitle = faker.name.jobTitle();
  const review = faker.lorem.paragraph();

  return { randomName, jobTitle, review };
};

export default generateRandomData;
