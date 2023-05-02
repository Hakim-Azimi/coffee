import "./coffee-time.css";

const CoffeTimes = () => {
  return (
    <div className="time-coffee">
      <h1>When is the Best Time to Drink Coffee?</h1>
      <div className="line"></div>
      <div className="times">
        <div className="c-times-left">
          <img id="coffee-packet" src={process.env.PUBLIC_URL + "598.jpg"} />
        </div>
        <div className="c-times-right">
          <div className="card-1">
            <p>
              Coffee is one of the most popular beverages in the world, with
              millions of people enjoying a cup of joe every day. In addition to
              its rich flavor and aroma, coffee also contains caffeine, a
              natural stimulant that can help increase alertness and improve
              mental performance. However, many people wonder when the best time
              to drink coffee is. In this article, we'll explore the best times
              to drink coffee and why timing matters.
            </p>
          </div>
        </div>
      </div>

      <div className="time-article">
      <div className="line"></div>
      <div className="t-a-1">
      <div className="t-a-1-1">
      <h3>Avoid drinking coffee too early in the morning</h3>
      <p>
        Many people start their day with a cup of coffee, but it's important to
        avoid drinking coffee too early in the morning. Your body naturally
        produces cortisol, a hormone that helps you feel awake, in the morning.
        Drinking coffee too early in the morning can interfere with this natural
        process and reduce the effectiveness of cortisol. It's recommended to
        wait at least an hour after waking up before drinking coffee.
      </p>
      <h3>Mid-morning is a good time to drink coffee</h3>
      <p>
        Between 9:30 and 11:30 a.m. is a good time to drink coffee. By this
        time, your cortisol levels have started to drop, and the caffeine can
        help you feel more alert. This is why many people enjoy a mid-morning
        coffee break at work. It's a great way to boost your energy and focus
        for the rest of the morning.
      </p>
      </div>
      <div id="pink-pic">
      <img src={process.env.PUBLIC_URL + "m021t0222_d_hourglass_25jul22.jpg"}/>


      </div>
      </div>
      <div className="line"></div>
      <div className="t-a-2">
      <div>
      <h3>Early afternoon can help you power through the day</h3>
      <p>
        Another good time to drink coffee is in the early afternoon, between
        1:00 and 3:00 p.m. This can help you power through the afternoon slump
        and stay focused. It's common to experience an energy slump during this
        time of day, especially if you've had a heavy lunch. Drinking coffee can
        help combat this energy slump and help you stay alert and productive.
      </p>
      <h3>Avoid drinking coffee too late in the day</h3>
      <p>
        onsuming coffee late in the day can interfere with your sleep. Caffeine
        can stay in your system for up to 6 hours, so it's recommended to avoid
        drinking coffee after 3:00 p.m. if you want to ensure a good night's
        sleep. If you're sensitive to caffeine, you may want to avoid drinking
        coffee even earlier in the day.
      </p>
      </div>
      <img src={process.env.PUBLIC_URL + "5143410_1_-removebg-preview.png"}/>

      </div>
      <h3>Listen to your body</h3>
      <p>
        Remember that everyone's body reacts differently to caffeine, so it's
        important to listen to your body and adjust your coffee consumption
        accordingly. If you find that drinking coffee late in the day makes it
        difficult for you to fall asleep, you may want to avoid it altogether.
        On the other hand, if you have a high tolerance for caffeine and find
        that it doesn't affect your sleep, you may be able to drink coffee later
        in the day without any problems. In conclusion, the best times to drink
        coffee are mid-morning and early afternoon. Drinking coffee during these
        times can help you stay alert, focused, and productive throughout the
        day. Just be mindful of your caffeine intake and avoid drinking coffee
        too early in the morning or too late in the day. With a little bit of
        planning, you can enjoy your coffee without interfering with your
        natural sleep patterns.
      </p>

      </div>
    </div>
  );
};

export default CoffeTimes;
