import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className="coffee-seed">
        <img
          alt="coffee seeds"
          src={
            process.env.PUBLIC_URL +
            "coffee-go-art-composition_1284-35973_1-removebg-preview.png"
          }
        />
      </div>

      <div className="coffee-main">
<h2>coffee</h2>
<p>makes your day special</p>
<img src={
     process.env.PUBLIC_URL + "coffee-beans-levitate-white-background_485709-33-removebg-preview.png"
}/>
<p>
    the key that people find dificult to understand is that <br/>coffee is more than just a coffee 
</p>


      </div>
      <div className="coffee-play">
<p>
Coffee is one of the most popular beverages in the world, with millions of people starting their day with a cup of coffee to energize their body and mind. However, not all coffee is created equal, and if you're looking for the best coffee, you'll want to consider factors like the quality of the beans, the roast, the brewing method, and the flavor profile
</p>
<Link id='shop-now' to="/shop">shop now </Link>
      </div>
    </main>
  );
};

export default Home;
