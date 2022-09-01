import { useRef } from "react";
import "./DeleteTodoModal.scss";

type Props = {
  closeDeleteTodoModal: () => void;
  todoId: number;
};

const DeleteTodoModal: React.FC<Props> = ({ closeDeleteTodoModal, todoId }) => {
  const ref = useRef(null);
  /**
   * todo를 삭제하는 함수
   * @param todoId : number
   */
  const deleteTodoHandler = (todoId: number) => {};

  /**
   * 모달을 닫는 함수
   * @param e : any
   */
  const closeModalHandler = (e: any) => {
    if (ref.current === e.target) {
      closeDeleteTodoModal();
    }
  };

  return (
    <div
      ref={ref}
      className="DeleteTodoModal_container"
      onClick={(e) => closeModalHandler(e)}
    >
      <div className="DeleteTodoModal">
        <h2>삭제하시겠습니까?</h2>
        <div className="btn_wrap">
          <button onClick={() => deleteTodoHandler(todoId)}>삭제</button>
          <button onClick={closeDeleteTodoModal}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTodoModal;
