import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          type="button"
          onClick={() =>
            window.open("https://github.com/Zijing-Liu/AI_summarizer")
          }
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your readings with Summize, an open-source article summarizer
        that transforms lengthy into clear and conscise summaries
      </h2>
    </header>
  );
};

export default Hero;
