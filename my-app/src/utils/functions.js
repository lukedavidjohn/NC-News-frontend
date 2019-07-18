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
