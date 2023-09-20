const TestM = (oldJson) => {

  return ({
    data:oldJson,
    Display() {
      return this.data;
    },
    Add(addJson) {
      return this.data.push(addJson);
    },
  })
}

export default TestM;