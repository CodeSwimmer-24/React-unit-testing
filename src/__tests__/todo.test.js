import {render, screen, cleanup} from "@testing-library/react";
import Todo from "../components/Todo";

afterEach(() => {
    cleanup();
})

test('should render todo components',() => {
    const todo = {  id:1, title:"wash Dishes", compleated:false, }
    render(<Todo todo={todo}/>) ;
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("wash Dishes");
});

test('should render todo components',() => {
    const todo = {  id:2, title:"Study Maths", compleated:false, }
    render(<Todo todo={todo}/>) ;
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Study Maths");
    expect 
});