export const formatDate = date => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    new Date(date).getDate() +
    " " +
    months[Number(new Date(date).getMonth())] +
    " " +
    new Date(date).getFullYear()
  );
};

export const compareTopics = (a, b) => {
  const slugA = a.slug;
  const slugB = b.slug;
  let comparison = 0;
  if (slugA > slugB) {
    comparison = 1;
  } else if (slugA < slugB) {
    comparison = -1;
  }
  return comparison;
};

export const randomPictures = {
  0: "https://www.placecage.com/300/200",
  1: "https://picsum.photos/300/200",
  2: "https://www.fillmurray.com/300/200",
  3: "https://stevensegallery.com/300/200",
  4: "https://placekitten.com/300/200",
  5: "https://www.placecage.com/c/300/200",
  6: "https://baconmockup.com/300/200",
  7: "https://placebeard.it/300x200",
  8: "http://placeimg.com/300/200/any",
  9: "https://placebear.com/300/200"
};
