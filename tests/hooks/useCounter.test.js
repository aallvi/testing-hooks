const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks/useCounter")

describe('test in useCount', () => { 


     test('should return default values', () => { 


         const { result } =  renderHook( () => useCounter() )

         const { counter, decrement, increment, reset } = result.current

         expect(counter).toBe(10)

         expect(decrement).toEqual(expect.any(Function))
         expect(increment).toEqual(expect.any(Function))
         expect(reset).toEqual(expect.any(Function))

        //  console.log(result)


      })

      test('should generate the counter with the value of 100', () => { 

        const { result } = renderHook( () => useCounter(100) )

        // console.log(result)

        const {counter} = result.current

        expect(counter).toBe(100)


       })

       test('should increment the counter', () => { 

        const { result } =  renderHook( () => useCounter() )

        const { counter, increment  } = result.current

        act( () => {
            
            increment()
     
        })

        expect( result.current.counter  ).toBe(11)





        })

       test('should decrement the counter', () => { 

        const { result } =  renderHook( () => useCounter() )

        const { counter, decrement  } = result.current

        act( () => {
            
            decrement()
     
        })

        expect( result.current.counter  ).toBe(9)





        })
       test('should reset the counter', () => { 

        const { result } =  renderHook( () => useCounter() )

        const { counter, reset , increment } = result.current

        act( () => {
            
            increment()
     
        })

        act( () => {
            
            reset()
     
        })

        expect( result.current.counter  ).toBe(10)





        })


 })