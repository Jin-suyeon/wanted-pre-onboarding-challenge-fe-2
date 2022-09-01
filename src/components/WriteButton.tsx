import { useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import CreateTodoModal from "./CreateTodoModal";

type Props = {
  openCreateTodoModal: () => void;
};

/**
 *
 * @param {openCreateTodoModal} : create todo modal 열기
 * @returns
 */

const WriteButton: React.FC<Props> = ({ openCreateTodoModal }) => {
  return (
    <div className="WriteButton" onClick={openCreateTodoModal}>
      <RiEdit2Line />
    </div>
  );
};

export default WriteButton;
