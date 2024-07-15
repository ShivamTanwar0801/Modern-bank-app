const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient hover:bg-gradient-to-r from-sky-400 to-indigo-300 font-poppins font-medium text-[18px] text-primary outline-none ${styles} transition-all duration-300`}
    >
      Get Started
    </button>
  );
};

export default Button;
