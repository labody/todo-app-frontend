"use client";
import { ITodo } from '../../../types/todos';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { FormEventHandler, useState } from 'react';
import Modal from './Modal';
import { useRouter } from 'next/navigation';
import { editTodo } from '../api';

interface TodoProps {
    todo: ITodo;
}

const Todo: React.FC<TodoProps> = ({todo}) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [todoToEdit, setTodoToEdit] = useState<string>(todo.title);

    const handleEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await editTodo({
            title: todoToEdit
        });
        setTodoToEdit("");
        setOpenModalEdit(false);
        router.refresh();
    }

  return (
    <tr>
    <td className='w-full'>{todo.title}</td>
    <td className='flex gap-5'>
        <FiEdit onClick={()=> setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25}/>
        <Modal modalOpen = {openModalEdit} setModalOpen={setOpenModalEdit}>
        <form onSubmit={handleEditTodo}>
            <h3 className="font-bold text-lg">EditTodo </h3>
            <div className="modal-action">
            <input value={todoToEdit} onChange={e => setTodoToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full " />
            <button type="submit" className="btn ">Submit</button>
            </div>
        </form>
    </Modal>
        <FiTrash2 onClick={()=> setOpenModalDelete(true)} cursor="pointer" className="text-red-500" size={25}/>
    </td>
</tr>
  );
}

export default Todo