import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import datas from "../data/account.json";

export default function AccountDetail() {
  let navigate = useNavigate();
  let { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    setData(datas.find((data) => data.id == id));
  }, []);

  return (
    <div className="bg-[#2B2D42] h-screen">
      <div className="border-4 w-[25%] h-screen mx-auto p-2 bg-[#EDF2F4]">
        <div className="bg-[#d3d3d3] p-2 rounded py-8">
          <div className="flex flex-col items-center mb-5">
            <img
              src={data.image}
              alt={data.username}
              className="w-[130px] h-[130px] object-cover rounded-full border border-[#e01e37] border-[5px]"
            />
            <span className="font-medium text-lg mt-2">@{data.username}</span>
          </div>
          <div className="flex mx-20">
            <div className="flex-1 text-center">
              <div className="text-xl font-bold">{data.follower}</div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-xl font-bold">{data.following}</div>
              <div className="text-sm">Following</div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 ">
          <span
            className="cursor-pointer text-3xl hover:text-7xl"
            onClick={() => navigate("/")}
          >
            🔙
          </span>
        </div>
      </div>
    </div>
  );
}
