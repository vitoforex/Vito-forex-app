export function formatDate(inputDate) {
  const date = new Date(inputDate);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const dayWithSuffix = `${day}${getDaySuffix(day)}`;

  const formattedDate = `${dayWithSuffix} ${months[month]}, ${year}`;

  return formattedDate;
}


function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return "TH";
  }
  switch (day % 10) {
    case 1:
      return "ST";
    case 2:
      return "ND";
    case 3:
      return "RD";
    default:
      return "TH";
  }
}




