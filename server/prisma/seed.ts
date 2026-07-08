import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const usersData: Prisma.UserCreateInput[] = [
  { login: "admin", password: "123", isAdmin: true },
  { login: "user", password: "123", isAdmin: false },
];

const brandsData: Prisma.BrandCreateInput[] = [
  { name: "Wilson" },
  { name: "Head" },
  { name: "Yonex" },
  { name: "Babolat" },
];

const productsData: Prisma.ProductCreateInput[] = [
  {
    name: "Wilson Pro Staff 97 v14",
    model: "Pro Staff 97",
    imageUrl: "http://localhost:4000/Wilson-Pro-Staff-97-v14.jpg",
    price: 259,
    type: "racket",
    year: 2023,
    top10: true,
    description:
      "Классическая ракетка Wilson Pro Staff 97 v14 с отличным контролем и мощностью. Идеальна для игроков, ценящих точность и стабильность.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Blade 98 v8",
    model: "Blade 98",
    imageUrl: "http://localhost:4000/Wilson-Blade-98-v8.jpg",
    price: 249,
    type: "racket",
    year: 2022,
    top10: true,
    description:
      "Wilson Blade 98 v8 — агрессивная ракетка с отличной маневренностью и мощным ударом. Подходит для атакующих игроков.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Clash 100 v2",
    model: "Clash 100",
    imageUrl: "http://localhost:4000/Wilson-Clash-100-v2.jpg",
    price: 239,
    type: "racket",
    year: 2022,
    top10: false,
    description:
      "Wilson Clash 100 v2 обеспечивает превосходную гибкость и комфорт при игре. Идеальный выбор для игроков, ищущих баланс между контролем и мощностью.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Ultra 100 v4",
    model: "Ultra 100",
    imageUrl: "http://localhost:4000/Wilson-Ultra-100-v4.jpg",
    price: 229,
    type: "racket",
    year: 2022,
    top10: true,
    description:
      "Wilson Ultra 100 v4 — ракетка для мощных ударов с отличной скоростью. Отлично подходит для агрессивного стиля игры.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Burn 100 v5",
    model: "Burn 100",
    imageUrl: "http://localhost:4000/Wilson-Burn-100-v5.jpg",
    price: 219,
    type: "racket",
    year: 2021,
    top10: false,
    description:
      "Wilson Burn 100 v5 предлагает улучшенную аэродинамику и контроль при быстром темпе игры. Хороший выбор для любителей агрессивного тенниса.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Pro Staff 97L v14",
    model: "Pro Staff 97L",
    imageUrl: "http://localhost:4000/Wilson-Pro-Staff-97L-v14.jpg",
    price: 239,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Легкая версия Pro Staff 97L v14 с отличным контролем и удобством. Идеальна для игроков, предпочитающих маневренность.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Blade 100L v8",
    model: "Blade 100L",
    imageUrl: "http://localhost:4000/Wilson-Blade-100L-v8.jpg",
    price: 239,
    type: "racket",
    year: 2022,
    top10: false,
    description:
      "Wilson Blade 100L v8 — легкая и мощная ракетка для игроков, нуждающихся в балансе между контролем и скоростью.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Wilson Clash 98 v2",
    model: "Clash 98",
    imageUrl: "http://localhost:4000/Wilson-Clash-98-v2.jpg",
    price: 249,
    type: "racket",
    year: 2022,
    top10: false,
    description:
      "Wilson Clash 98 v2 сочетает в себе гибкость и точность, обеспечивая комфорт и стабильность в каждом ударе.",
    brand: {
      connect: {
        id: 1,
      },
    },
  },
  {
    name: "Head Speed MP 2024",
    model: "Speed MP",
    imageUrl: "http://localhost:4000/Head-Speed-MP-2024.jpg",
    price: 269,
    type: "racket",
    year: 2024,
    top10: true,
    description:
      "Head Speed MP 2024 — универсальная ракетка с отличной скоростью и контролем. Подходит для игроков всех уровней.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Head Speed Pro 2024",
    model: "Speed Pro",
    imageUrl: "http://localhost:4000/Head-Speed-Pro-2024.jpg",
    price: 279,
    type: "racket",
    year: 2024,
    top10: true,
    description:
      "Head Speed Pro 2024 — профессиональная ракетка с максимальной мощностью и точностью ударов. Идеальна для агрессивных игроков.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Head Radical MP 2023",
    model: "Radical MP",
    imageUrl: "http://localhost:4000/Head-Radical-MP-2023.jpg",
    price: 259,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Head Radical MP 2023 обеспечивает хороший баланс между контролем и мощностью. Отличный выбор для универсального стиля игры.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Head Gravity Pro 2023",
    model: "Gravity Pro",
    imageUrl: "http://localhost:4000/Head-Gravity-Pro-2023.png",
    price: 279,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Head Gravity Pro 2023 — точная и стабильная ракетка для продвинутых игроков, ценящих контроль и чувствительность.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Head Extreme MP 2023",
    model: "Extreme MP",
    imageUrl: "http://localhost:4000/Head-Extreme-MP-2023.jpg",
    price: 259,
    type: "racket",
    year: 2023,
    top10: true,
    description:
      "Head Extreme MP 2023 предлагает мощь и вращение, идеально подходя для агрессивных игроков, любящих атакующий стиль.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Head Speed Team 2024",
    model: "Speed Team",
    imageUrl: "http://localhost:4000/Head-Speed-Team-2024.jpg",
    price: 249,
    type: "racket",
    year: 2024,
    top10: false,
    description:
      "Head Speed Team 2024 — легкая и маневренная ракетка для игроков, которые ценят скорость и контроль на корте.",
    brand: {
      connect: {
        id: 2,
      },
    },
  },
  {
    name: "Yonex Ezone 98 2024",
    model: "Ezone 98",
    imageUrl: "http://localhost:4000/Yonex-Ezone-98-2024.jpg",
    price: 265,
    type: "racket",
    year: 2024,
    top10: true,
    description:
      "Yonex Ezone 98 2024 — ракетка с отличной мощностью и контролем, созданная для игроков среднего и продвинутого уровня.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Yonex VCore 100 2023",
    model: "VCore 100",
    imageUrl: "http://localhost:4000/Yonex-VCore-100-2023.jpg",
    price: 255,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Yonex VCore 100 2023 обеспечивает высокую скорость и вращение, идеально подходит для агрессивного тенниса.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Yonex VCore Pro 97 2023",
    model: "VCore Pro 97",
    imageUrl: "http://localhost:4000/Yonex-VCore-Pro-97-2023.jpg",
    price: 275,
    type: "racket",
    year: 2023,
    top10: true,
    description:
      "Yonex VCore Pro 97 2023 — профессиональная ракетка с точным контролем и мощным ударом. Отличный выбор для соревновательных игроков.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Yonex Ezone 100L 2022",
    model: "Ezone 100L",
    imageUrl: "http://localhost:4000/Yonex-Ezone-100L-2022.jpg",
    price: 239,
    type: "racket",
    year: 2022,
    top10: false,
    description:
      "Yonex Ezone 100L 2022 — легкая и удобная ракетка, которая предлагает отличный баланс мощности и контроля.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Yonex Percept 97 2023",
    model: "Percept 97",
    imageUrl: "http://localhost:4000/Yonex-Percept-97-2023.jpg",
    price: 269,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Yonex Percept 97 2023 — ракетка с высокой точностью и комфортом, подходит для игроков, ищущих контроль и стабильность.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Yonex Percept 100 2023",
    model: "Percept 100",
    imageUrl: "http://localhost:4000/Yonex-Percept-100-2023.jpg",
    price: 259,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Yonex Percept 100 2023 обеспечивает отличный баланс мощности и контроля, комфортна для длительных игр.",
    brand: {
      connect: {
        id: 3,
      },
    },
  },
  {
    name: "Babolat Pure Drive 2024",
    model: "Pure Drive",
    imageUrl: "http://localhost:4000/Babolat-Pure-Drive-2024.jpg",
    price: 230,
    type: "racket",
    year: 2024,
    top10: true,
    description:
      "Babolat Pure Drive 2024 — одна из самых популярных ракеток, обеспечивающая мощь и точность ударов.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Pure Aero 2023",
    model: "Pure Aero",
    imageUrl: "http://localhost:4000/Babolat-Pure-Aero-2023.png",
    price: 240,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Babolat Pure Aero 2023 — ракетка для игроков, которые ценят вращение и скорость мяча на корте.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Pure Strike 16x19 2024",
    model: "Pure Strike 16x19",
    imageUrl: "http://localhost:4000/Babolat-Pure-Strike-16x19-2024.png",
    price: 250,
    type: "racket",
    year: 2024,
    top10: false,
    description:
      "Babolat Pure Strike 16x19 2024 — ракетка для точных и мощных ударов с отличным контролем.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Pure Drive Lite 2023",
    model: "Pure Drive Lite",
    imageUrl: "http://localhost:4000/Babolat-Pure-Drive-Lite-2023.jpg",
    price: 210,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Легкая версия Pure Drive Lite 2023 подходит для игроков, ищущих комфорт и хорошую мощность.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Boost Drive",
    model: "Boost Drive",
    imageUrl: "http://localhost:4000/Babolat-Boost-Drive.jpg",
    price: 180,
    type: "racket",
    year: 2022,
    top10: false,
    description:
      "Babolat Boost Drive — доступная ракетка с хорошим балансом мощности и контроля, идеальна для начинающих.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Boost Aero",
    model: "Boost Aero",
    imageUrl: "http://localhost:4000/Babolat-Boost-Aero.png",
    price: 185,
    type: "racket",
    year: 2022,
    top10: false,
    description:
      "Babolat Boost Aero — легкая и удобная ракетка, созданная для развития техники и контроля.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Evo Drive",
    model: "Evo Drive",
    imageUrl: "http://localhost:4000/Babolat-Evo-Drive.png",
    price: 200,
    type: "racket",
    year: 2023,
    top10: false,
    description:
      "Babolat Evo Drive предлагает отличный комфорт и универсальность, подходит для широкого круга игроков.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
  {
    name: "Babolat Pure Aero Rafa 2024",
    model: "Pure Aero Rafa",
    imageUrl: "http://localhost:4000/Babolat-Pure-Aero-Rafa-2024.jpg",
    price: 270,
    type: "racket",
    year: 2024,
    top10: true,
    description:
      "Babolat Pure Aero Rafa 2024 — специальная версия с улучшенным вращением и мощностью, вдохновленная Рафаэлем Надалем.",
    brand: {
      connect: {
        id: 4,
      },
    },
  },
];

export async function main() {
  for (const brand of brandsData) {
    await prisma.brand.create({ data: brand });
  }

  for (const product of productsData) {
    await prisma.product.create({ data: product });
  }

  for (const user of usersData) {
    await prisma.user.create({ data: user });
  }
}

main();
