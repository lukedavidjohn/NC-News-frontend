import axios from "axios";

const BASE_URL = "https://ldjr-be-nc-news.herokuapp.com/api";

export const fetchTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data;
};

export const fetchArticles = async (topic, sort_by, order) => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: {
      topic,
      sort_by,
      order
    }
  });
  return data;
};

export const fetchArticleByArticleId = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data;
};

export const postArticle = async article => {
  const { data } = await axios.post(`${BASE_URL}/articles`, article);
  return data;
};

export const fetchCommentsByArticleId = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data;
};
