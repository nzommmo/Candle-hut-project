const HeroSection = () => {
  return (

    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <div className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Candle Hut
            {" "}
    <br />
            <span>
                Home to scented candles
            </span>
        </div>
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <div className="border border-customGreen mx-2 my-4">
                <img src="" alt="" srcset="" />
                Vanilla scent

            </div>
            <div className="border border-customGreen mx-2 my-4">
                <img src="./assets/1.jpeg" alt="" srcset="" />
                Mango scent

            </div>
        </div>
    </div>

  )
}

export default HeroSection