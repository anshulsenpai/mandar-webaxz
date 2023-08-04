import { cardData } from "@/assets/Data";
import Card from "./Card";

const Services = () => {
  return (
    <div id="services" className="w-full min-h-screen h-full">
      <h2 className="text-xl text-gray-300 font-semibold mb-5 mt-[100px] text-center">
        Services we provide
      </h2>

      <div className="mt-12 w-full min-h-screen h-full grid grid-cols-1 content-center justify-items-center md:grid-cols-2 p-4 gap-4">
        {cardData?.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
