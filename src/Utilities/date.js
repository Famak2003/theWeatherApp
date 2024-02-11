function date() {
  const currentDate = new Date();

  const dayNum = currentDate.getDate();
  const yearNum = currentDate.getFullYear();

  const day = { weekday: "long" };
  const month = { month: "short" };

  const dayString = currentDate.toLocaleDateString("en-US", day);
  const monthString = currentDate.toLocaleDateString("en-us", month);

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();

  // Format the time as HH:MM
  const currentTime = `${hours}:${minutes}`;

  return `${currentTime} - ${dayString.toLowerCase()} ${dayNum} ${monthString}'${yearNum}  `;
}

export default date;
