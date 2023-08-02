import About from "../Components/About";

function About() {
  return (
    <div>
      <div className="text-center mt-10 mx-auto p-4">
        <h2 className="font-bold text-2xl mt-4 ">Why Choose Us?</h2>
        <p className="mt-2 text-gray-600 text-sm">
          More Than 10 Years Of Experience, Variety Of Tour Packages, Best Deals
          And Personalised Services.
        </p>

        <div className=" flex flex-wrap justify-center items-center gap-10 mt-10">
          <div className="flex flex-wrap flex-col justify-center items-center md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/experience.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
            Airbnb is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations in specific locales.
            Airbnb offers people an easy, relatively stress-free way to earn some income from their property 
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/positive-customer-feedback.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
            Airbnb Plus is a new tier of homes on Airbnb that have been verified for quality and comfort,
            and was inspired by some of Airbnb's best hosts and homes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/recognition-tour-01.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores dolores eius dolore obcaecati itaque, reiciendis
              recusandae. Eligendi amet ex voluptatum atque reprehenderit
              reiciendis aspernatur repudiandae! Dolorum, atque blanditiis
              distinctio cupiditate dignissimos accusantium natus corporis, quis
              laudantium ipsam qui expedita soluta.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-10 mx-auto text-center">
        <h2 className="font-bold text-2xl mt-4 mb-4">
          Exclusive Collection Of Travel Blogs
        </h2>

        <div className="mx-auto p-4 flex flex-wrap gap-2 justify-evenly items-center">
          {blogs.map(function (item, index) {
            return (
              <div
                key={index}
                className="w-[400px] min-h-[300px] shadow-xl p-2 flex flex-col justify-center items-center"
              >
                <img
                  src={item.src}
                  className="mt-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-300 mb-2 hover:shadow-lg"
                  alt="not found"
                  key={item.index}
                  loading="lazy"
                  width={350}
                />
                <p>{item.bio}</p>
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}

export default About;