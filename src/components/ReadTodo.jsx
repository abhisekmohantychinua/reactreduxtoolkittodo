import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TiTickOutline, TiDeleteOutline } from 'react-icons/ti';
import { removeTodo, completeTodo } from '../slice/todo/todoSlice';

const ReadTodo = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<div className='w-full flex flex-col justify-start items-center mt-10'>
			{todos.map((todo) => (
				<div
					className=' w-10/12 p-3 flex items-center border-2 border-white rounded-xl mt-3'
					key={todo.id}
				>
					<div className='text-center text-lg w-8/12'>
						{todo.text.todo}
					</div>
					<div className='w-4/12 flex justify-around'>
						<button
							className={
								'w-[100px] h-[40px] border-2 rounded-lg ' +
								(todo.text.completed
									? 'text-green-500 border-green-500'
									: 'text-red-500 border-red-500')
							}
						>
							{todo.text.completed
								? 'Completed'
								: 'Incomplete'}
						</button>
						{!todo.text.completed ? (
							<button
								className='w-[40px] bg-green-600  rounded-lg text-3xl hover:bg-green-500'
								onClick={() =>
									dispatch(completeTodo(todo.id))
								}
							>
								<TiTickOutline className='mx-auto' />
							</button>
						) : null}
						<button
							className='w-[40px] bg-red-600 rounded-lg text-3xl hover:bg-red-500'
							onClick={() => dispatch(removeTodo(todo.id))}
						>
							<TiDeleteOutline className='mx-auto' />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
export default ReadTodo;
