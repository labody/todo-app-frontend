"use client"; 
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "../api";
import { useRouter } from "next/navigation";

const AddTodo = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTodoValue, setNewTodoValue] = useState<string>('');

    const handleCreateNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        await addTodo({
            title: newTodoValue
        })
        setNewTodoValue("");
        setModalOpen(false);
        router.refresh();
    }

    return (
     <div>
        <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">Add new Todo<AiOutlinePlus className="ml-2" size={18}/>
    </button>
    <Modal modalOpen = {modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleCreateNewTodo}>
            <h3 className="font-bold text-lg">Add new Todo </h3>
            <div className="modal-action">
            <input value={newTodoValue} onChange={e => setNewTodoValue(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full " />
            <button type="submit" className="btn ">Create</button>
            </div>
        </form>
    </Modal>
     </div>
    );
};

export default AddTodo