const Hero = () => {
  return (
    <div className="h-[20vh] md:h-[30vh] grid place-items-center relative bg-hero-pattern bg-center bg-cover rounded-3xl p-5 ">
      <div className="text-white text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
          Book your stay with StayEase
        </h1>
        <p>1,340,076 rooms worldwide are waiting for you!</p>
      </div>
    </div>
  );
};

export default Hero;
