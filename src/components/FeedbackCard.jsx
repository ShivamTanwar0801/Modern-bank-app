import { quotes } from "../assets";

const FeedbackCard = ({ content, title, name, img }) => {
  return (
    <div
      className={`flex flex-col feature-card justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-14 sm:mr-5 mr-0 my-5 `}
    >
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4 ">
          <h4 className="text-[20px] font-poppins font-semibold leading-[32px] text-white">
            {name}
          </h4>
          <p className="text-[16px] text-dimWhite leading-[24px] font-poppins font-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
