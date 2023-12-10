import { faker } from '@faker-js/faker';

const generateRandomData = () => {
  
  const randomName = faker.person.fullName();
  const jobTitle = faker.name.jobTitle();
  let review;
  do {
    review = faker.lorem.paragraph();
  } while (review.length <= 500);

  return { randomName, jobTitle, review };
};

export default generateRandomData;
