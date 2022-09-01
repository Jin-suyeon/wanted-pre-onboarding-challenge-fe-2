import "./TodoListPage.scss";
import TODO from "../components/TODO";
import WriteButton from "../components/WriteButton";
import CreateTodoModal from "../components/CreateTodoModal";
import { useState } from "react";
import { todolist } from "../assets/todolist";
import DeleteTodoModal from "../components/DeleteTodoModal";

const TodoListPage = () => {
  /**
   * @type {createModal} : boolean
   * @type {deleteModal} : boolean
   * @type {todoId} : number
   */
  const [createModal, setCreateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [todoId, setTodoId] = useState(0);

  /**
   * todo를 작성할 수 있는 모달 열어주는 함수
   */
  const openCreateTodoModal = () => {
    setCreateModal(true);
  };

  /**
   * todo를 작성할 수 있는 모달 닫아주는 함수
   */
  const closeCreateTodoModal = () => {
    setCreateModal(false);
  };

  /**
   * todo를 삭제할 수 있는 모달 열어주며 todoId를 state에 담는 함수
   */
  const openDeleteTodoModal = (id: number) => {
    setTodoId(id);
    setDeleteModal(true);
  };

  /**
   * todo를 삭제할 수 있는 모달 닫아주는 함수
   */
  const closeDeleteTodoModal = () => {
    setDeleteModal(false);
  };

  return (
    <>
      {createModal && (
        <CreateTodoModal closeCreateTodoModal={closeCreateTodoModal} />
      )}
      {deleteModal && (
        <DeleteTodoModal
          closeDeleteTodoModal={closeDeleteTodoModal}
          todoId={todoId}
        />
      )}
      <WriteButton openCreateTodoModal={openCreateTodoModal} />
      <div className="TodoListPage_container">
        <h1>TODO LIST</h1>
        <ul className="todoList">
          {todolist.map((todo) => (
            <TODO
              key={todo.id}
              todo={todo}
              openDeleteTodoModal={openDeleteTodoModal}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListPage;
