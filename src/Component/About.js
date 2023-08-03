import Navbar from "./Navbar";
import Footer from "./Footer";

const blogs = [
  {
    src: "https://tinyurl.com/2ykhczkz",
    title: "Best Place To visit In Africa in 2023: Kenya",
    bio: "August 3, 2023",
  },
  {
    src: "https://tinyurl.com/23dblk5y",
    title: "Wild Encounters Await: Masai Mara Game Drive Exploration",
    bio: "September 20,2022",
  },
  {
    src: "https://tinyurl.com/228xjvxe",
    title: "Serenity Unveiled: Witness the Enchanting Sunset at Diani Beach.",
    bio: "December 8,2022",
  },
];

function About() {
  return (
    <div>
      <Navbar />
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
              Airbnb is an online marketplace that connects people who want to
              rent out their property with people who are looking for
              accommodations in specific locales. Airbnb offers people an easy,
              relatively stress-free way to earn some income from their property
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/positive-customer-feedback.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
              Airbnb Plus is a new tier of homes on Airbnb that have been
              verified for quality and comfort, and was inspired by some of
              Airbnb's best hosts and homes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center flex-col md:flex-row gap-10">
            <img
              src="https://www.tourmyindia.com/imgnew/recognition-tour-01.svg"
              alt="not found"
              width={80}
            />
            <p className="lg:w-[800px] md:w-[600px] w-fit p-2 text-left">
              A selection of pristine, expertly designed homes with high-end
              amenities, services, and dedicated trip designers.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10 mx-auto text-center">
        <h2 className="font-bold text-2xl mt-4 mb-4">
          Discover Dream Destinations with Airbnb Tales.
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
      <Footer />
    </div>
  );
}

export default About;