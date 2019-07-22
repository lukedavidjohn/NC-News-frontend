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

export const randomPicturesThumbs = [
  "https://www.placecage.com/300/200",
  "https://placekitten.com/300/200",
  "https://www.fillmurray.com/300/200",
  "https://baconmockup.com/300/200",
  "https://www.fillmurray.com/g/300/200",
  "https://placebeard.it/300x200",
  "https://www.placecage.com/c/300/200",
  "https://placebear.com/300/200",
  "https://stevensegallery.com/300/200",
  "https://placekitten.com/300/200"
];

export const randomPicturesMain = [
  "https://www.placecage.com/700/526",
  "https://placekitten.com/700/526",
  "https://www.fillmurray.com/700/526",
  "https://baconmockup.com/700/526",
  "https://www.fillmurray.com/g/700/526",
  "https://placebeard.it/700x526",
  "https://www.placecage.com/c/700/526",
  "https://placebear.com/700/526",
  "https://stevensegallery.com/700/526",
  "https://placekitten.com/700/526"
];
