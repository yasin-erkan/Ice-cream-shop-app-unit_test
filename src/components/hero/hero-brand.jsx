const HeroBrand = () => {
  return (
    <div className="max-w-[660px] flex flex-col gap-[25px]">
      <h1 className="fs-1 font-semibold">Caramel Royal Swirl</h1>

      <p>
        Silky caramel swirls and creamy vanilla come together for a royally
        indulgent treat. One scoop, and you are in dessert heaven! 🍦✨
      </p>

      <div className="flex gap-[40px]">
        <button className="hero-btn">Sipariş Et</button>
        <button className="hero-btn bg-white/15 border-0">Rezarvasyon</button>
      </div>
    </div>
  );
};

export default HeroBrand;
