//用例
test('test common matcher', () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

test('test to be true or false', () => {
  expect(1).toBeTruthy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
  expect(4).toBeLessThan(5)
})

test('test object', () => {
  // toBe是全等，toEqual是值相等
  expect({name:'matrix'}).toEqual({name:'matrix'})
})

