import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import { Menu } from './components/Menu';
import { TodoAdd } from './pages/TodoAdd';
import App from './App';

describe('test Todo', () => {
  it('verifie les liens menu', () => {
    render(
      <MemoryRouter initialEntries={['/', '/add', '/list']}>
        <Menu />
      </MemoryRouter>
    )
    //link ca regarde <a> ici c'est le navLink et sous forme d'expression reguliere insensible a la casse
    const homeLink = screen.getByRole('link', { name: /home/i })
    const addLink = screen.getByRole('link', { name: /add/i })
    const listLink = screen.getByRole('link', { name: /list/i })

    expect(homeLink).toHaveAttribute('href', '/')
    expect(addLink).toHaveAttribute('href', '/add')
    expect(listLink).toHaveAttribute('href', '/list')
  })
  it('si le css sur le menu active marche (add)', () => {
    render(
      <MemoryRouter initialEntries={['/add']}>
        <Menu />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i })
    const addLink = screen.getByRole('link', { name: /add/i })
    const listLink = screen.getByRole('link', { name: /list/i })

    expect(homeLink).not.toHaveClass('border-b-2 border-purple-500')
    expect(addLink).toHaveClass('border-b-2 border-purple-500')
    expect(listLink).not.toHaveClass('border-b-2 border-purple-500')
  })
  it('si le css sur le menu active marche (list)', () => {
    render(
      <MemoryRouter initialEntries={['/list']}>
        <Menu />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i })
    const addLink = screen.getByRole('link', { name: /add/i })
    const listLink = screen.getByRole('link', { name: /list/i })

    expect(homeLink).not.toHaveClass('border-b-2 border-purple-500')
    expect(addLink).not.toHaveClass('border-b-2 border-purple-500')
    expect(listLink).toHaveClass('border-b-2 border-purple-500')
  })
  it('si le css sur le menu active marche (home)', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Menu />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i })
    const addLink = screen.getByRole('link', { name: /add/i })
    const listLink = screen.getByRole('link', { name: /list/i })

    expect(homeLink).toHaveClass('border-b-2 border-purple-500')
    expect(addLink).not.toHaveClass('border-b-2 border-purple-500')
    expect(listLink).not.toHaveClass('border-b-2 border-purple-500')
  })
  it('regarde si ca render bien le form todoAdd', () => {

    render(<TodoAdd />)
    const inputElement = screen.getByLabelText('Enter entitle of your todo :')
    const buttonElement = screen.getByText('Add Todo')
    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })
  it('update ou change valeur de l\'input', () => {
    render(<TodoAdd />)
    const inputElement = screen.getByLabelText('Enter entitle of your todo :')
    fireEvent.change(inputElement, { target: { value: 'Test TodoADD' } })
    expect(inputElement).toHaveValue('Test TodoADD')
  })
  it('test de la fonction handleAddTodo dans TodoAdd', () => {
    const handleAddTodo = jest.fn()
    render(<TodoAdd handleAddTodo={handleAddTodo} />)
    const inputElement = screen.getByLabelText('Enter entitle of your todo :')
    const buttonElement = screen.getByText('Add Todo')
    fireEvent.change(inputElement, { target: { value: 'Test TodoADD' } })
    fireEvent.click(buttonElement);
    expect(handleAddTodo).toBeCalledTimes(1)
    expect(handleAddTodo).toBeCalledWith({ title: 'Test TodoADD' })
  })

})