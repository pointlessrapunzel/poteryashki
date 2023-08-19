import moment from 'moment';

interface Age {
  years: number;
  months: number;
  days: number;
}

function formatAge(age: Age): string {
  if (age.years > 0) {
    return age.years + ' г.';
  }

  if (age.months > 0) {
    return age.months + ' м.';
  }

  if (age.days > 0) {
    return age.days + ' д.';
  }

  return 'неверная дата';
}
export function getAge(birthday: string): string {
  const now = moment();

  const birthdate = moment(moment(birthday), 'DD.MM.YYYY');

  const years = now.diff(birthdate, 'years');
  birthdate.add(years, 'years');

  const months = now.diff(birthdate, 'months');
  birthdate.add(months, 'months');

  const days = now.diff(birthdate, 'days');

  return formatAge({ years, months, days });
}
