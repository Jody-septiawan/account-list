import { useNavigate } from "react-router-dom";

export default function ListAccountCard({ data }) {
  let navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/account/${data.id}`)}
      className="hover:bg-[#8D99AE] hover:text-black text-white bg-[#2B2D42] mb-2 p-2 rounded flex cursor-pointer"
    >
      <div className="mr-3">
        <img
          src={data.image}
          alt={data.username}
          className="w-[70px] h-[70px] object-cover rounded-full"
        />
      </div>
      <div className="justify-center flex flex-col">
        <div>
          <div className="font-medium text-lg">@{data.username}</div>
          <div className="text-sm	">
            Followers: <span className="font-bold">{data.follower}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
