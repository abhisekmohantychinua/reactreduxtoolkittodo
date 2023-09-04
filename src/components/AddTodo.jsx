import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slice/todo/todoSlice';

const AddTodo = () => {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addTodo({
				todo: todo,
				completed: false,
			})
		);
		setTodo('');
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='h-1/5 w-full flex flex-col justify-around items-center'
		>
			<label
				htmlFor='todo'
				className='text-2xl'
			>
				Enter your todo
			</label>
			<input
				type='text'
				id='todo'
				className='w-2/6 bg-black border-b-2 focus:outline-none'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
				autoComplete='off'
				required
			/>
			<button
				type='submit'
				className='h-[40px] w-[100px] border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition'
			>
				Submit
			</button>
		</form>
	);
};

export default AddTodo;
