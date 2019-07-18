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
