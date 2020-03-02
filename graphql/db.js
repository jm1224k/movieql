export const people = [
    {
      id: "0",
      name: "jeongmee",
      age: 26,
      gender: "female"
    },
    {
      id: "1",
      name: "jisu",
      age: 25,
      gender: "female"
    },
    {
      id: "2",
      name: "nicolas",
      age: 28,
      gender: "male"
    },
    {
      id: "3",
      name: "kevin",
      age: 18,
      gender: "male"
    },
    {
      id: "4",
      name: "lisa",
      age: 12,
      gender: "female"
    },
    {
      id: "5",
      name: "jennie",
      age: 24,
      gender: "female"
    },
    {
      id: "6",
      name: "hinata",
      age: 16,
      gender: "female"
    }
  ]

export const getById = id => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
}
