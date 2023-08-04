
interface ICardProp {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const Card = ({ id, image, title, desc }: ICardProp) => {
  return (
    <div className="relative w-full h-[380px] rounded-md overflow-hidden group">
      <img
        className="absolute w-full h-full object-cover top-0 bottom-0 left-0 ring-0 block group-hover:scale-125 ease-in-out duration-300"
        src={image}
        alt={`${title}-${id}`}
      />
      <div className="absolute w-full h-full bg-gradient-to-b from-slate-800/90 to-slate-900/90 top-[100%] group-hover:top-0 ease-in-out duration-300 p-6 flex justify-between items-start flex-col md:p-8">
        <h3 className="text-4xl font-bold text-[#CBFFA9] md:text-6xl">
          {title}
        </h3>
        <p className="text-gray-300 text-lg font-light md:text-2xl">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
