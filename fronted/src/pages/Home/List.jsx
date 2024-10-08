import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../api";
import Loader from "../../components/Loader";
import Card from "./Card";
import Error from "../../components/Error";
import { useSearchParams } from "react-router-dom";

const List = () => {
  // urldeki parametrleri alip nesne haline getir
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());

  // places sorgusu
  const { isLoading, error, data } = useQuery({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj),
    retry: 2,
  });

  return (
    <div className="max-lg:mt-10">
      <h1 className="font-bold text-2xl mt-3">Nearby destinations</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} queryKey={"places"} />
        ) : (
          <div className="grid grid-cols-2 max-md:grid-cols-1 justify-between gap-5 mt-5">
            {data.places.map((place) => (
              <Card place={place} key={place.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
