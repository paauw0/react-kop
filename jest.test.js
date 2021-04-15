test('myTest common matcher', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)
})

test('myTest to be true or false', () => {
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})

test('myTest number', () => {
    expect(4).toBeGreaterThan(3)
    expect(2).toBeLessThan(3)
})

test('myTest object', () => {
    expect({name: 'paauw'}).toEqual({name: 'paauw'})
})