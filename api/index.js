import axios from "axios";

const API_KEY = "44239376-462a72ece4954f3d5a0368187";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
  //{q, page, category, order}
  let url = apiUrl + "&per_page=25&safesearch=true&editors_choise=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  // console.log("final url", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (error) {
    console.log("got error", error.message);
    return { success: false, msg: error.message };
  }
};

// const sample = {
//     var API_KEY = "44239376-462a72ece4954f3d5a0368187";
//     var URL =
//       "https://pixabay.com/api/?key=" +
//       API_KEY +
//       "&q=" +
//       encodeURIComponent("red roses");
//     $.getJSON(URL, function (data) {
//       if (parseInt(data.totalHits) > 0)
//         $.each(data.hits, function (i, hit) {
//           console.log(hit.pageURL);
//         });
//       else console.log("No hits");
//     });
//   }
