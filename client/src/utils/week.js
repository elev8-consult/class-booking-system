// Utility to get week number from a date
export function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  const weekNum = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
  return weekNum;
}

// Utility to get all weeks in a year
export function getWeeksInYear(year) {
  const weeks = [];
  let d = new Date(year, 0, 1);
  // Set to nearest Monday
  d.setDate(d.getDate() + (1 - d.getDay() + 7) % 7);
  let week = 1;
  while (d.getFullYear() === year) {
    weeks.push({
      week,
      start: new Date(d),
      end: new Date(d.getFullYear(), d.getMonth(), d.getDate() + 6)
    });
    d.setDate(d.getDate() + 7);
    week++;
  }
  return weeks;
}
