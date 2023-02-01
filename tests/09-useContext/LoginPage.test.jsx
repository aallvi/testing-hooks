import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext"
import { LoginPage } from "../../src/09-useContext/LoginPage"






describe('test LoginPage', () => { 
   
    // const setUser = jest.fn()



    test('should show component without user', () => { 

        render( <UserContext.Provider value={{user:null}}  >  <LoginPage/> </UserContext.Provider>  )

        screen.debug()





     })


    test('should call setuser when click in button', () => { 

        const setUserMock = jest.fn()
      
        render( <UserContext.Provider value={{user:null, setUser:setUserMock }}  >  <LoginPage/> </UserContext.Provider>  )

        const btn = screen.getByRole('button')

        fireEvent.click(btn)

        expect(setUserMock).toHaveBeenCalled()

        expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' })

     






     })





 })