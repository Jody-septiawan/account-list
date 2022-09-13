import ListAccountCard from "../components/ListAccountCard";
import datas from "../data/account.json";

export default function Home() {
  return (
    <div className="bg-[#2B2D42] h-screen">
      <div className="border-4 w-[25%] h-screen mx-auto p-2 bg-[#EDF2F4]">
        {datas.map((data) => (
          <ListAccountCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
