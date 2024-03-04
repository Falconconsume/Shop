
export const products = [

    // ТОВАРИ КАТЕГОРІЇ "ВЕРХНІЙ ОДЯГ"

    {
        id: 1,
        name: 'Кофта-бомбер Pull&Bear',
        price: 80,
        categoryId: 'category_UpperClothes',
        img: require('../data/imgs/Category_UpperClothes.jpg'),
        manufacture: 'Pull&Bear',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['green', 'burgundy', 'black'],
        description: 'Модна та зручна кофта-бомбер від Pull&Bear. Підійде для створення стильного образу в будь-яку погоду.'
    },

    {
        id: 2,
        name: 'Рубашка з коротким рукавом H&M',
        price: 40,
        categoryId: 'category_UpperClothes',
        img: require('../data/imgs/Category_UpperClothes.jpg'),
        manufacture: 'H&M',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['blue', 'white', 'striped'],
        description: 'Класична рубашка з коротким рукавом від H&M. Ідеальний вибір для літніх прогулянок та повсякденного використання.'
    },

    {
        id: 3,
        name: 'Теніска з довгим рукавом Zara',
        price: 60,
        categoryId: 'category_UpperClothes',
        img: require('../data/imgs/Category_UpperClothes.jpg'),
        manufacture: 'Zara',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'grey', 'white'],
        description: 'Зручна теніска з довгим рукавом від Zara. Підійде як для повсякденного використання, так і для створення спортивного образу.'
    },

    {
        id: 4,
        name: 'Сорочка з льону Mango',
        price: 70,
        categoryId: 'category_UpperClothes',
        img: require('../data/imgs/Category_UpperClothes.jpg'),
        manufacture: 'Mango',
        sizes: ['XS', 'S', 'M'],
        colors: ['beige', 'blue', 'white'],
        description: 'Легка сорочка з льону від Mango. Ідеальний вибір для літніх днів та відпочинку на природі.'
    },

    {
        id: 5,
        name: 'Пуловер з V-вирізом Stradivarius',
        price: 50,
        categoryId: 'category_UpperClothes',
        img: require('../data/imgs/Category_UpperClothes.jpg'),
        manufacture: 'Stradivarius',
        sizes: ['S', 'M', 'L'],
        colors: ['pink', 'grey', 'black'],
        description: 'Затишний пуловер з V-вирізом від Stradivarius. Ідеальний вибір для прохолодної погоди.'
    },
    {
        id: 6,
        name: 'Кофта з капюшоном',
        price: 90,
        categoryId: 'category_UpperClothes',
        img: '#',
        manufacture: 'Hype',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['black', 'red', 'blue'],
        description: 'Стильна кофта з капюшоном та яскравим написом від Hype. Забезпечить вам модний та комфортний образ.'
    },

    // ТОВАРИ КАТЕГОРІЇ "ФУТБОЛКИ ТА ТОПИ"

    {
        id: 7,
        name: 'Футболка з вишитим малюнком H&M',
        price: 25,
        categoryId: 'category_TShirts',
        img: require('./imgs/Category_TShirt.jpg'),
        manufacture: 'H&M',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['white', 'black', 'grey'],
        description: 'Класична футболка з вишитим малюнком від H&M. Ідеальний вибір для літніх днів та прогулянок.'
    },

    {
        id: 8,
        name: 'Футболка з логотипом adidas',
        price: 30,
        categoryId: 'category_TShirts',
        img: require('./imgs/Category_TShirt.jpg'),
        manufacture: 'adidas',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'white', 'red'],
        description: 'Класична футболка з вишитим логотипом adidas на грудях. Ідеальний вибір для спортивних тренувань та повсякденного використання.'
    },

    {
        id: 9,
        name: 'Футболка з геометричним принтом Pull&Bear',
        price: 20,
        categoryId: 'category_TShirts',
        img: require('./imgs/Category_TShirt.jpg'),
        manufacture: 'Pull&Bear',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['blue', 'green', 'yellow'],
        description: 'Стильна футболка з геометричним принтом від Pull&Bear. Ідеальний вибір для молодіжного образу.'
    },

    {
        id: 10,
        name: 'Футболка з малюнком "Унікорн" Stradivarius',
        price: 22,
        categoryId: 'category_TShirts',
        img: require('./imgs/Category_TShirt.jpg'),
        manufacture: 'Stradivarius',
        sizes: ['S', 'M', 'L'],
        colors: ['pink', 'white'],
        description: 'Ніжна футболка з малюнком "Унікорн" від Stradivarius. Ідеальний вибір для романтичних образів.'
    },

    {
        id: 11,
        name: 'Футболка з малюнком "Космос" Zara',
        price: 28,
        categoryId: 'category_TShirts',
        img: require('./imgs/Category_TShirt.jpg'),
        manufacture: 'Zara',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['black', 'blue'],
        description: 'Цікава футболка з малюнком "Космос" від Zara. Ідеальний вибір для любителів науково-фантастичних мотивів.'
    },

    {
        id: 12,
        name: 'Футболка з принтом "Графіті" Nike',
        price: 32,
        categoryId: 'category_TShirts',
        img: require('./imgs/Category_TShirt.jpg'),
        manufacture: 'Nike',
        sizes: ['S', 'M', 'L'],
        colors: ['white', 'black', 'red'],
        description: 'Стильна футболка з принтом "Графіті" від Nike. Ідеальний вибір для молодіжного та спортивного образу.'
    },

    // ТОВАРИ КАТЕГОРІЇ "СВЕТРИ ТА КАРДІГАНИ"

    {
        id: 13,
        name: 'Вовняний светр Pull&Bear',
        price: 70,
        categoryId: 'category_Sweaters',
        img: require('./imgs/Category_Sweaters.jpg'),
        manufacture: 'Pull&Bear',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['grey', 'blue', 'burgundy'],
        description: 'Теплий та затишний вовняний светр від Pull&Bear. Ідеальний для прохолодної погоди.'
    },

    {
        id: 14,
        name: 'Кардиган з пелюшевою обробкою H&M',
        price: 60,
        categoryId: 'category_Sweaters',
        img: require('./imgs/Category_Sweaters.jpg'),
        manufacture: 'H&M',
        sizes: ['XS', 'S', 'M'],
        colors: ['pink', 'beige', 'grey'],
        description: 'Елегантний кардиган з пелюшевою обробкою від H&M. Забезпечить вам комфорт та стиль протягом усього дня.'
    },

    {
        id: 15,
        name: 'Шерстяний пуловер Mango',
        price: 75,
        categoryId: 'category_Sweaters',
        img: require('./imgs/Category_Sweaters.jpg'),
        manufacture: 'Mango',
        sizes: ['S', 'M', 'L'],
        colors: ['blue', 'grey', 'black'],
        description: 'Затишний шерстяний пуловер від Mango. Ідеальний вибір для прохолодної погоди та затишних вечорів.'
    },

    {
        id: 16,
        name: 'Тепла кофта з написом "Love" Stradivarius',
        price: 45,
        categoryId: 'category_Sweaters',
        img: require('./imgs/Category_Sweaters.jpg'),
        manufacture: 'Stradivarius',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['pink', 'grey', 'white'],
        description: 'Тепла кофта з написом "Love" від Stradivarius. Ідеальний вибір для створення ніжного та романтичного образу.'
    },

    {
        id: 17,
        name: 'Комфортний светр з капюшоном Zara',
        price: 65,
        categoryId: 'category_Sweaters',
        img: require('./imgs/Category_Sweaters.jpg'),
        manufacture: 'Zara',
        sizes: ['S', 'M', 'L'],
        colors: ['black', 'grey', 'blue'],
        description: 'Зручний светр з капюшоном від Zara. Ідеальний вибір для повсякденного використання та спортивних занять.'
    },

    {
        id: 18,
        name: 'Пуловер з геометричним візерунком H&M',
        price: 55,
        categoryId: 'category_Sweaters',
        img: require('./imgs/Category_Sweaters.jpg'),
        manufacture: 'H&M',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['blue', 'grey', 'white'],
        description: 'Елегантний пуловер з геометричним візерунком від H&M. Ідеальний вибір для офісних образів та повсякденного використання.'
    },

    // ТОВАРИ КАТЕГОРІЇ "СУКНІ"

    {
        id: 19,
        name: 'Літня сукня-сорочка H&M',
        price: 45,
        categoryId: 'category_Dresses',
        img: require('./imgs/Category_Dress.jpg'),
        manufacture: 'H&M',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['blue', 'white', 'striped'],
        description: 'Легка та затишна літня сукня-сорочка від H&M. Ідеальний вибір для літніх прогулянок та відпочинку на природі.'
    },

    {
        id: 20,
        name: 'Коктейльна сукня зі стрейчевою тканиною Mango',
        price: 90,
        categoryId: 'category_Dresses',
        img: require('./imgs/Category_Dress.jpg'),
        manufacture: 'Mango',
        sizes: ['S', 'M', 'L'],
        colors: ['black', 'red', 'blue'],
        description: 'Елегантна коктейльна сукня зі стрейчевою тканиною від Mango. Ідеальний вибір для вечірніх виходів та особливих подій.'
    },

    {
        id: 21,
        name: 'Сукня з мереживним верхом Stradivarius',
        price: 55,
        categoryId: 'category_Dresses',
        img: require('./imgs/Category_Dress.jpg'),
        manufacture: 'Stradivarius',
        sizes: ['XS', 'S', 'M'],
        colors: ['white', 'pink', 'black'],
        description: 'Елегантна сукня з мереживним верхом від Stradivarius. Ідеальний вибір для романтичних вечорів та виходів у світ.'
    },

    {
        id: 22,
        name: 'Повсякденна сукня з лляної тканини Pull&Bear',
        price: 40,
        categoryId: 'category_Dresses',
        img: require('./imgs/Category_Dress.jpg'),
        manufacture: 'Pull&Bear',
        sizes: ['S', 'M', 'L'],
        colors: ['blue', 'beige', 'striped'],
        description: 'Класична повсякденна сукня з лляної тканини від Pull&Bear. Ідеальний вибір для літніх прогулянок та повсякденного використання.'
    },

    {
        id: 23,
        name: 'Вечірня сукня з глибоким декольте Zara',
        price: 120,
        categoryId: 'category_Dresses',
        img: require('./imgs/Category_Dress.jpg'),
        manufacture: 'Zara',
        sizes: ['XS', 'S', 'M'],
        colors: ['black', 'red', 'navy'],
        description: 'Елегантна вечірня сукня з глибоким декольте від Zara. Ідеальний вибір для вечірок та урочистих подій.'
    },

    {
        id: 24,
        name: 'Сукня-міді з гудзиками Mango',
        price: 70,
        categoryId: 'category_Dresses',
        img: require('./imgs/Category_Dress.jpg'),
        manufacture: 'Mango',
        sizes: ['S', 'M', 'L'],
        colors: ['blue', 'white', 'striped'],
        description: 'Елегантна сукня-міді з гудзиками від Mango. Ідеальний вибір для офісних образів та повсякденного використання.'
    },

    // ТОВАРИ КАТЕГОРІЇ "ШТАНИ"

    {
        id: 25,
        name: 'Джинси "Skinny" H&M',
        price: 50,
        categoryId: 'category_Pants',
        img: require('./imgs/Category_Pants.jpg'),
        manufacture: 'H&M',
        sizes: ['24', '26', '28', '30'],
        colors: ['blue', 'black', 'grey'],
        description: 'Класичні джинси "Skinny" від H&M. Ідеальний вибір для повсякденного використання та створення стильних образів.'
    },

    {
        id: 26,
        name: 'Штани-чіноси з кишенями Pull&Bear',
        price: 35,
        categoryId: 'category_Pants',
        img: require('./imgs/Category_Pants.jpg'),
        manufacture: 'Pull&Bear',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['beige', 'green', 'navy'],
        description: 'Комфортні штани-чіноси з кишенями від Pull&Bear. Ідеальний вибір для повсякденних образів та прогулянок.'
    },

    {
        id: 27,
        name: 'Спортивні штани з манжетами Nike',
        price: 60,
        categoryId: 'category_Pants',
        img: require('./imgs/Category_Pants.jpg'),
        manufacture: 'Nike',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'grey', 'blue'],
        description: 'Зручні спортивні штани з манжетами від Nike. Ідеальний вибір для активного відпочинку та спортивних занять.'
    },

    {
        id: 28,
        name: 'Лляні брюки-кюлоти Mango',
        price: 45,
        categoryId: 'category_Pants',
        img: require('./imgs/Category_Pants.jpg'),
        manufacture: 'Mango',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['beige', 'black', 'white'],
        description: 'Легкі лляні брюки-кюлоти від Mango. Ідеальний вибір для літнього відпочинку та прогулянок.'
    },

    {
        id: 29,
        name: 'Джоггери з лампасами Pull&Bear',
        price: 40,
        categoryId: 'category_Pants',
        img: require('./imgs/Category_Pants.jpg'),
        manufacture: 'Pull&Bear',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['black', 'grey', 'red'],
        description: 'Комфортні джоггери з лампасами від Pull&Bear. Ідеальний вибір для активного відпочинку та спортивних занять.'
    },

    {
        id: 30,
        name: 'Штани "Cargo" з кишенями Zara',
        price: 55,
        categoryId: 'category_Pants',
        img: require('./imgs/Category_Pants.jpg'),
        manufacture: 'Zara',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['green', 'khaki', 'black'],
        description: 'Практичні штани "Cargo" з кишенями від Zara. Ідеальний вибір для повсякденних образів та активного відпочинку.'
    },

    // ТОВАРИ КАТЕГОРІЇ "СПОРТИВНИЙ ОДЯГ"

    {
        id: 31,
        name: 'Комплект спортивного одягу "Трекінг" Puma',
        price: 90,
        categoryId: 'category_SportClothes',
        img: require('./imgs/Category_Sport.jpg'),
        manufacture: 'Puma',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'grey', 'blue'],
        description: 'Комфортний комплект спортивного одягу "Трекінг" від Puma. Ідеальний вибір для активного відпочинку та тренувань.'
    },

    {
        id: 32,
        name: 'Спортивний топ з контрастними вставками Nike',
        price: 35,
        categoryId: 'category_SportClothes',
        img: require('./imgs/Category_Sport.jpg'),
        manufacture: 'Nike',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['black', 'white', 'pink'],
        description: 'Зручний спортивний топ з контрастними вставками від Nike. Ідеальний вибір для активних занять у спортзалі.'
    },

    {
        id: 33,
        name: 'Шорти для бігу з відводом вологи adidas',
        price: 40,
        categoryId: 'category_SportClothes',
        img: require('./imgs/Category_Sport.jpg'),
        manufacture: 'adidas',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'blue', 'grey'],
        description: 'Зручні шорти для бігу з відводом вологи від adidas. Ідеальний вибір для інтенсивних тренувань на свіжому повітрі.'
    },

    {
        id: 34,
        name: 'Комплект спортивного одягу "Фітнес" H&M',
        price: 80,
        categoryId: 'category_SportClothes',
        img: require('./imgs/Category_Sport.jpg'),
        manufacture: 'H&M',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['black', 'pink', 'grey'],
        description: 'Комфортний комплект спортивного одягу "Фітнес" від H&M. Ідеальний вибір для тренувань у спортзалі та фітнесу.'
    },

    {
        id: 35,
        name: 'Термобілизна з відводом вологи Under Armour',
        price: 55,
        categoryId: 'category_SportClothes',
        img: require('./imgs/Category_Sport.jpg'),
        manufacture: 'Under Armour',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'grey'],
        description: 'Термобілизна з відводом вологи від Under Armour. Ідеальний вибір для інтенсивних занять на свіжому повітрі у прохолодну погоду.'
    },

    {
        id: 36,
        name: 'Спортивні штани "Cargo" з кишенями Puma',
        price: 60,
        categoryId: 'category_SportClothes',
        img: require('./imgs/Category_Sport.jpg'),
        manufacture: 'Puma',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['black', 'grey', 'blue'],
        description: 'Комфортні спортивні штани "Cargo" з кишенями від Puma. Ідеальний вибір для активних тренувань та повсякденного використання.'
    },
];

export default products;