import styles from "../style";
import { logo, copyright } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="HooBank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins text-white font-semibold text-[18px] leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-[16px] text-dimWhite leading-[24px] font-poppins font-normal hover:text-secondary cursor-pointer ${
                      index === footerLink.links.length - 1 ? "mb-0" : "mb-4"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between w-full md:flex-row flex-col items-center pt-6 border-t-[1px] border-t-[#3f3e45] ">
        <p className="font-poppins text-dimWhite font-normal text-[18px] leading-[27px] text-center md:mt-0 mt-6">
          Copyright{" "}
          <img
            src={copyright}
            className="w-[16px] h-[16px] inline-block mr-2"
          />{" "}
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6"> 
          {socialMedia.map((item, index) => (
            <img
              src={item.icon}
              key={item.id}
              alt={item.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index === socialMedia.length - 1 ? "mr-0" : "mr-6"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
