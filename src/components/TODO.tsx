import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";

type Props = {
  todo: {
    id: number;
    title: string;
    contents: string;
    tags: { name: string; color: string }[];
    complete: boolean;
    createDate: string;
    completeDate: string;
  };
  openDeleteTodoModal: (id: number) => void;
};

const TODO: React.FC<Props> = ({ todo, openDeleteTodoModal }) => {
  /**
   * todo를 체크하는 함수
   * @param id : number
   */
  const todoCheckHandler = (id: number) => {};

  return (
    <li className="todo">
      <div className="todo_header">
        <div className="title">
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => todoCheckHandler(todo.id)}
          />
          <h3 title={todo.title}>{todo.title}</h3>
        </div>
        <div className="btn_wrap">
          <button>
            <RiEditBoxLine />
          </button>
          <button onClick={() => openDeleteTodoModal(todo.id)}>
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
      <div className="tags">
        {todo.tags.map((tag) => (
          <span>{tag.name}</span>
        ))}
      </div>
      <div className="date">
        <span>{`등록: ${todo.createDate}`}</span>
        {todo.completeDate.length > 0 && (
          <span>{`완료: ${todo.completeDate}`}</span>
        )}
      </div>
    </li>
  );
};

export default TODO;
