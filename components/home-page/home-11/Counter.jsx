import { InView, useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const counters = [
  {
    count: 150,
    suffix: "+",
    color: "#00DDC7",
    rating: "Bisnis Top 1 Google Search",
    delay: 0,
  },
  {
    count: 250,
    suffix: "+",
    color: "#FF9F00",
    rating: "Pelanggan kami handle",
    delay: 100,
  },
  {
    count: 20,
    suffix: "+",
    color: "#FF2222",
    rating: "Pelanggan selalu repeat order",
    delay: 200,
  },
];

const Counter = () => {
  return (
    <>
      
      {counters.map((counter, index) => (
        <div className="col-lg-4 col-sm-6" key={index}>
          <div
            className="counter-block-three text-center mt-40"
            data-aos="fade-up"
            data-aos-delay={counter.delay}
          >
            <InView>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className="main-count"
                  style={{ color: counter.color }}
                >
                  {inView ? (
                    <CountUp end={counter.count} duration={2} separator="," />
                  ) : (
                    0
                  )}
                  {counter.suffix}
                </div>
              )}
            </InView>
            <p className="tx-dark fs-18 m0">{counter.rating}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter;
