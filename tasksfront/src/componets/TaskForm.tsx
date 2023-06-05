import { ChangeEvent, FormEvent, useState } from "react";
import { useTasks } from "../context/useTask";

function TaskForm() {

    const [task, setTask] = useState({
        title: "",
        description: "",
        done: false,
    })

    const { createTask } = useTasks();


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    }

    const handeSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createTask(task)
    }

    return (
        <div>
            <form onSubmit={handeSubmit}>

                <input
                    type="text"
                    name="title"
                    className="border2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Write a title"
                    onChange={handleChange}
                />

                <textarea name="description"
                    rows={3}
                    className="border2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    placeholder="Write a title"
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="" className="inline-flex items-center gap-x-2">
                    <input type="checkbox" className="h-5 w-5 text-indigo-600"
                        onChange={() => setTask({ ...task, done: !task.done })}
                    />
                    <span>Done</span>
                </label>

                <button className="bg-indigo-500 px-3 block py-2 w-full">
                    Save
                </button>

            </form>
        </div>
    );
}

export default TaskForm;