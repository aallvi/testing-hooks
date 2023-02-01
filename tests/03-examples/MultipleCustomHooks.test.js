import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from "../../src/hooks/useCounter"
import { useFetch } from "../../src/hooks/useFetch"

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')



describe('test multiple custom hook', () => { 


    const mockIncrement = jest.fn()

         useCounter.mockReturnValue({
            counter:1,
            increment:mockIncrement
        })

        beforeEach( () => {
            jest.clearAllMocks()
        } )


    // test('should show the component', () => { 

    //      useFetch.mockReturnValue({
    //         data:null,
    //         isLoading: null,
    //         hasError:null
    //      })

    //      render(  <MultipleCustomHooks/>  )

    //      expect(screen.getByText('Loading...') )
    //      expect(screen.getByText('BreakingBad Quotes') )

    //      const nextButton = screen.getByRole('button' , {name: 'Next quote'} )

    //      expect(nextButton.disabled ).toBeTruthy()

    



    //  })


     test('should show a quote', () => { 


            useFetch.mockReturnValue({
               data:[{author:'Fernando', quote:'Hola Mundo' }],
               isLoading: false,
               hasError:null
            })
  
         render(  <MultipleCustomHooks/>  )

         expect(screen.getByText('Hola Mundo')).toBeTruthy()
         expect(screen.getByText('Fernando')).toBeTruthy()
           
         screen.debug()

         const nextButton = screen.getByRole('button' , {name: 'Next quote'} )

         expect(nextButton.disabled).toBeFalsy()




      })

      test('should call function of increment', () => { 

         
            useFetch.mockReturnValue({
                data:[{author:'Fernando', quote:'Hola Mundo' }],
                isLoading: false,
                hasError:null
            })

         
            render(  <MultipleCustomHooks/>  )

            const nextButton = screen.getByRole('button' , {name: 'Next quote'} )

            fireEvent.click(nextButton)


            expect(mockIncrement).toHaveBeenCalled()

       })




 })