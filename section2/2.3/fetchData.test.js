const {fetchUserCallback, fetchUserPromise, fetchError}= require('./fetchData')

test('Fetch user using done callback', (done) => {
  fetchUserCallback((data)=>{
    try {
        expect(data).toEqual({ id: 1, name: 'DECI Student' })
        done()
    } catch (error) {
        done(error)
    }
  })
})

test('Fetch user using async/await', async () => {
  const data = await fetchUserPromise()
  expect(data).toEqual({id: 1, name: 'DECI Student' })
})

test('Fetch user using resolves matcher',async () => {
  await expect(fetchUserPromise()).resolves.toEqual({id: 1, name: 'DECI Student' })
})

test('Fetch fails with network error',async () => {
  await expect(fetchError()).rejects.toMatch('Network Error')
})