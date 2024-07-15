import { feedbacks } from "../constants";

import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[65%] h-[65%] -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full flex items-center justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What people are <br className="sm:block hidden" />
          saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6 flex justify-end">
          <p className={`${styles.paragraph} max-w-[450px] text-left `}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap xl:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedbacks.map((feedback) => (
          <FeedbackCard key={feedback.id} {...feedback} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
