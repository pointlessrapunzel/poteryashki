import cats from './cats.json'

function getRandomColor() {
  const colors = ['Черный', 'Белый', 'Рыжий', 'Двухцветный', 'Трехцветный']
  return colors[Math.floor(Math.random() * colors.length)]
}
function getRandomCoat() {
  const coats = ['Короткая', 'Длинная']
  return coats[Math.floor(Math.random() * coats.length)]
}

export function genCatsData() {
  return cats.map((c) => ({
    id: c.id,
    name: c.name,
    age: c.age,
    gender: c.gender,
    traits: [
      { key: 'Пол', value: c.gender },
      { key: 'Возраст', value: c.age },
      { key: 'Порода', value: 'Смешанная' },
      { key: 'Шерсть', value: getRandomCoat() },
      { key: 'Окрас', value: getRandomColor() },
    ],
    moreTraits: {
      Стерилизован: true,
      Вакцинирован: true,
      'Обработан от паразитов': true,
      Чипирован: true,
    },
    photos: new Array(4).fill(null).map((i) => c.image),
    description: `${c.name} - это весёлый, игривый подросток, с которым точно не соскучишься, а ещё он любит людей и ласку. Спать предпочитает с человеком, но так, что бы не потревожить его сон. Совершенно не любит оставаться один, поэтому предпочитает всегда находится где-то рядом.`,
  }))
}
