// Locale-keyed content provides a single entry point for a future English translation.
export const content = { ru: {
  title: 'Кыргызстан, который ты почувствуешь',
  navigation: [['Туры', '#tours'], ['Направления', '#destinations'], ['Индивидуальные туры', '#tailor-made'], ['О нас', '#about'], ['Контакты', '#contact']],
  destinations: [
    { name: 'Иссык-Куль', caption: 'Озеро, которое похоже на море', tag: 'Вода и тишина', image: 'lake' },
    { name: 'Сон-Куль', caption: 'Под небом кочевников', tag: 'Жизнь на джайлоо', image: 'pasture' },
    { name: 'Сказка', caption: 'Другой мир из красного песка', tag: 'Каньоны', image: 'canyon' },
    { name: 'Каракол', caption: 'Город, с которого начинаются горы', tag: 'Культура и природа', image: 'mountain' },
    { name: 'Ала-Куль', caption: 'Награда за каждый шаг', tag: 'Высокогорный треккинг', image: 'alakul' },
  ]
} } as const;
export const photos = {
  mountain: { label: 'Горы Кыргызстана' },
  lake: { label: 'Озеро Иссык-Куль' },
  pasture: { label: 'Высокогорное озеро Сон-Куль' },
  canyon: { label: 'Каньон Сказка' },
  alakul: { label: 'Высокогорное озеро Ала-Куль' },
  culture: { label: 'Культура Кыргызстана' },
} as const;
export type PhotoKey = keyof typeof photos;
