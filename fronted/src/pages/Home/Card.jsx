import { Link } from "react-router-dom";
import Availability from "../../components/Availability";

const Card = ({ place }) => {
  // rating rengini belirleme
  const color =
    place.rating >= 4
      ? "bg-green-500"
      : place.rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <Link
      to={`/place/${place.id}`}
      className="border border-zinc-400 rounded-lg p-4 flex gap-2 hover:cursor-pointer h-full"
    >
      <div className="col-span-2">
        <img
          className="w-full h-full max-w-96 rounded-md object-cover"
          src={place.image_url}
        />
      </div>

      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl ">{place.name}</h1>

            <Availability status={place.availability} />
          </div>
          <p>{place.location}</p>
          <div className="flex gap-4">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span className="border p-1 rounded-md" key={key}>
                {i}
              </span>
            ))}
          </div>
          <p className={`${color} p-1 rounded-lg text-white font-bold w-fit`}>
            {place.rating}
          </p>
        </div>

        <div className="flex flex-col items-end self-end">
          <span className="text-2xl font-bold">{place.price_per_night}$</span>
          <span className="text-xs text-gray-400">Taxes and fees included</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
