function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getAugustanMonthIndex(date) {
  const gregorianDate = new Date(date);
  const currentYear = gregorianDate.getFullYear();

  const augustanYear = currentYear - (
    gregorianDate.getMonth() === 11 &&
    gregorianDate.getDate() >= (isLeapYear(currentYear) ? 27 : 26) ? 0 : 1
  );

  const augustanYearStart = new Date(
    augustanYear,
    11,
    isLeapYear(augustanYear + 1) ? 27 : 26
  );

  const diffTime = gregorianDate - augustanYearStart;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return Math.min(9, Math.floor(diffDays / 40));
}

module.exports = {
  isLeapYear,
  getAugustanMonthIndex
};
