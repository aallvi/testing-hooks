import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"



describe('first', () => { 


    test('should show the home page ', () => { 


        render( <MemoryRouter> <MainApp/>   </MemoryRouter>  )


     

        expect(screen.getByText('HomePage')).toBeTruthy()





     })

     test('should show login page', () => { 


        render( <MemoryRouter initialEntries={['/login']} > <MainApp/>   </MemoryRouter>  )

        expect( screen.getByText('LoginPage') ).toBeTruthy()

        screen.debug()





      })






 })