import { act, render, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('test in use form', () => { 

 
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@google.com'
    }

 
    test('should return the default values', () => {

        const {result} = renderHook( () => useForm(initialForm) )

        // console.log(result.current)

        expect(result.current).toEqual({
            name: 'Fernando',
            email: 'fernando@google.com',
            formState: { name: 'Fernando', email: 'fernando@google.com' },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          })

     })

     test('should change the name on the form', () => { 

        const {result} = renderHook( () => useForm(initialForm) )

         const { onInputChange, formState } = result.current

         act( () => onInputChange(  { target: {name:'name', value:'alvaro'}}   ))

         expect(result.current.name).toBe('alvaro') 

         expect(result.current.formState.name).toBe('alvaro') 



      })

      test('should reset the form,', () => { 


        const {result} = renderHook( () => useForm(initialForm) )

        const { onInputChange, formState, onResetForm } = result.current

        act( () => onInputChange(  { target: {name:'name', value:'alvaro'}}   ))


        act( () => onResetForm())

        

        expect(result.current.name).toBe(initialForm.name) 

        expect(result.current.formState.name).toBe(initialForm.name) 





       })


 })