import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// sorgu için kullanılack fonksiyon
const getQuotes = () => axios.get("https://dummyjson.com/quotes");

const Updated = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuotes,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>v: {error.message}</p>;

  return (
    <div>
      {data.data.quotes.map((i) => (
        <p>
          <span>{i.quote}</span>
          <br />
          <b>{i.author}</b>

          <br />
          <br />
        </p>
      ))}
    </div>
  );
};

export default Updated;
