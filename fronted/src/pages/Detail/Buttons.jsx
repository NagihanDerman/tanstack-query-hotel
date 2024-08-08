import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = ({ id }) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationKey: "delete",
    mutationFn: () => deletePlace(id),
    onSuccess: () => {
      toast.info("Hotel removed from feed");
      navigate("/");
    },
    onError: () => {
      toast.error("Sorry, an error occurred");
    },
  });

  return (
    <div className="flex justify-between mb-5">
      <Link
        to={"/"}
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-gray-200 hover:shadow"
      >
        <MdKeyboardArrowLeft />
        Back
      </Link>

      <button
        disabled={mutation.isPending}
        onClick={mutation.mutate}
        className="flex items-center gap-2 border py-1 px-3 rounded-md transition hover:bg-red-200 hover:shadow"
      >
        <FaRegTrashAlt />
        Delete
      </button>
    </div>
  );
};

export default Buttons;
