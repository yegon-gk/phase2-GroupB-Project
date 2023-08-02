import React from 'react'

function Home() {
  return (
    <div className="home-page">
      <div className="home-main">
        <h1 className="home-title">Embrace the Adventure</h1>
        <p className="home-text">Choose Your Favourite Destination</p>
      </div>

      <div className="home-content">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
      </div>

      <div className="home-section">
        <div className="home-right-section">
          <h2>A pool in a yard.</h2>
          <p>
            This villa is situated off the main road in the quickly developing
            area of Canggu, and it is not far from the main road. It is located
            a short walk from Deus, all the other trendy cafes and shops, and
            the renowned Echo Beach with its stunning ocean sunsets and surf
            spots. Built to high standards, this large 3-bedroom holiday villa
            offers tranquility and comfort.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1635108201275-f2858f087bd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvb2wlMjBpbiUyMGElMjB5YXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
          alt="pool in a yard"
        />
      </div>

      <div className="home-section-unhidden">
        <img src="https://tinyurl.com/237dsfx8" alt="Oasis" />
        <div className="home-left-section">
          <h2>Introducing Enchanted Oasis.</h2>
          <p>
            Nestled in the heart of an idyllic landscape, "Enchanted Oasis"
            beckons you with its irresistible allure. This exquisite 3-bedroom
            haven boasts an aura of enchantment that will whisk you away from
            the mundane and immerse you in a world of pure bliss. Surrounded by
            lush foliage and vibrant blooms, the villa exudes an air of
            tranquility that invites you to escape the bustle of everyday life
            and embrace the magic of this extraordinary retreat.
          </p>
        </div>
      </div>

      <div className="home-section-hidden">
        <div className="home-right-section">
          <h2>Mt.Daguldul, Bantangas</h2>
          <p>
            Nestled amidst the enchanting landscapes of Batangas, Philippines,
            Mt. Daguldul invites you to embark on an unforgettable adventure.
            This hidden gem offers a sanctuary of natural beauty, with lush
            green valleys, sparkling rivers, and majestic mountains waiting to
            be explored. Wander along its scenic trails, breathe in the crisp
            mountain air, and marvel at the stunning panoramic views from the
            summit.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1447727214830-cbcbf097b52c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1896&q=80" alt='bantagus' />
      </div>

      <div className="home-section">
        <div className="home-right-section">
          <h2>Brown wooden dock on blue lake during daytime</h2>
          <p>
            Serenity Haven is a luxurious and private villa nestled amidst
            breathtaking natural surroundings. Situated on a secluded hilltop,
            this exquisite retreat offers unparalleled panoramic views of lush
            green valleys, sparkling rivers, and majestic mountains. The villa's
            architecture seamlessly blends modern elegance with traditional
            charm, creating a perfect harmony with its surroundings.
          </p>
        </div>
        <img src="https://tinyurl.com/2y7fswym" alt="wooden-dock" />
      </div>
    </div>
  );
}

export default Home
