it('test regex pattern validate variable names for golang', () => {
  // if string starts with a-z or A-Z and only contains a-zA-Z0-9_
  const reg = /^[a-zA-Z]\w*$/

  let validate = ['abx', 'e445', 'A90__322', 'Wu99', 'VariableName88']
  let invalid = ['$__Euw', '(0sxa9', 'some-name', 'invalid_na-me', '901', '-don\'t get it']

  for (let str of validate) {
    let res = reg.test(str)
    // console.log(str, res)
    expect(res).toBeTruthy()
  }

  for (let str of invalid) {
    let res = reg.test(str)
    // console.log(str, res)
    expect(res).toBeFalsy()
  }
})