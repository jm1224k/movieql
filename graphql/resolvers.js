const jeongmee = {
  name: "jeongmee",
  age: 26,
  gender: "female"
}

const resolvers = {
  Query: {
    person: function() {return jeongmee}
  }
};

export default resolvers;