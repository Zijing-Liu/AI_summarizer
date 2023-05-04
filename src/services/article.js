//one specific part of the global state
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RapidAPIKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-key", RapidAPIKey);
      headers.set(
        "x-rapidapi-host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3
        }`,
    }),
  }),
});

//useLazyGetSummaryQuery is a hook that will return a function that you can call to trigger the request (on demand)
export const { useLazyGetSummaryQuery } = articleApi;
