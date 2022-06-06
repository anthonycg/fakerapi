const faker = require("faker");
console.log(faker.datatype.uuid());

const generateUserObj = () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.namelastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const generateCompanyObj = () => ({
  _id: faker.datatype.uuid,
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});

console.log(generateCompanyObj());

app.get("/api/users/new", (req, res) => {
  const newUser = generateUserObj();
  res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
  const newCompany = generateCompanyObj();
  res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
  const newUser = generateUserObj();
  const newCompany = generateCompanyObj();
  const userCompanyObj = {
      user: newUser,
      company: newCompany
  }
  res.json(userCompanyObj);
});

app.listen(port, () => console.log(`express server running on port ${port}`))