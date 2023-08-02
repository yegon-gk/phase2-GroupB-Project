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
      
    </div>
  );
}

export default Home
