import axios from "axios";

const BASE_URL = "https://ldjr-be-nc-news.herokuapp.com/api";

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data;
};

export const fetchArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data;
};
