import { useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { GrReturn } from "react-icons/gr";
import { useState } from "react";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = async (e) => {
    alert("submited");
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/** search */}

      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          action="/"
          method="post"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            className="absolute left-0 my-2 ml-3 w-5"
            alt="Link_icon"
          />
          <input
            type="url"
            className="url_input peer"
            placeholder="Enter a url"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
          />
          <button
            type="submit"
            className="submit_btn
            peer-focus:border-gray-700
            peer-focus:text-gray-700"
          >
            <GrReturn />
          </button>
        </form>

        {/** Browse the URL History */}
        {/** Display Results */}
      </div>
    </section>
  );
};

export default Demo;
