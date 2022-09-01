import { ChangeEvent, useRef } from "react";
import "./CreateTodoModal.scss";

type Props = {
  closeCreateTodoModal: () => void;
};

/**
 *
 * @param {closeCreateTodoModal} : 모달 닫는 함수
 * @returns
 */
const CreateTodoModal: React.FC<Props> = ({ closeCreateTodoModal }) => {
  const ref = useRef(null);

  /**
   * ref를 감지해서 비교해주는 함수
   * 감지하여 같다면 closeCreateTodoModal 함수 실행
   * @param {e} : any
   */
  const closeModalHandler = (e: any) => {
    console.log(ref.current == e.target, ref.current, e.target);
    // if (ref.current === e.target) {
    closeCreateTodoModal();
    // }
  };

  return (
    <div
      className="CreateTodoModal_container"
      ref={ref}
      onClick={(e) => closeModalHandler(e)}
    >
      <table className="CreateTodoModal_table">
        <colgroup>
          <col width={"100px"} />
          <col width={"*"} />
        </colgroup>
        <tbody>
          <tr>
            <th>해야할 일</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>태그 추가</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>추가된 태그</th>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreateTodoModal;
