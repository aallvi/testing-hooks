import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"


describe('test in TodoItem', () => { 

    const todo = {
        id:1,
        description: 'Piedra de Alma',
        done:false
    
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach( () => jest.clearAllMocks() )



   test('should show todo pending', () => { 

      render( <TodoItem   todo={todo} onDeleteTodo={onDeleteTodoMock}  onToggleTodo={onToggleTodoMock} /> )
         

        const liElement = screen.getByRole('listitem')

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('align-self-center')



    })


   test('should show todo complete', () => { 

      todo.done =true


      render( <TodoItem   todo={todo} onDeleteTodo={onDeleteTodoMock}  onToggleTodo={onToggleTodoMock} /> )
         

        const spanElement = screen.getByLabelText('span')

        expect(spanElement.className).toContain('text-decoration-line-through')


    })

   test('should show todo complete', () => { 

    
      render( <TodoItem   todo={todo} onDeleteTodo={onDeleteTodoMock}  onToggleTodo={onToggleTodoMock} /> )
         
      const spanElement = screen.getByLabelText('span')

      fireEvent.click(spanElement)

      expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
          



    })


   test('button should call delete todocomplete', () => { 

    
      render( <TodoItem   todo={todo} onDeleteTodo={onDeleteTodoMock}  onToggleTodo={onToggleTodoMock} /> )
         
      const btn = screen.getByRole('button')



      fireEvent.click(btn)

      expect(onDeleteTodoMock).toHaveBeenCalled()
          



    })




 })