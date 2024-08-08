const Rating = ({ point }) => {
  // rating rengini belirleme
  const color =
    point >= 4 ? "bg-green-500" : point >= 3 ? "bg-yellow-500" : "bg-red-500";

  const text =
    point >= 4.5
      ? "Excellent"
      : point >= 4
      ? "Great"
      : point >= 3
      ? "Good"
      : point >= 2
      ? "Poor"
      : "Very Poor";

  return (
    <div className="flex gap-2 items-center">
      <span className={`${color} text-white p-2 rounded-md`}>{point}</span>
      <span className="font-semibold text-lg">{text}</span>
    </div>
  );
};

export default Rating;
