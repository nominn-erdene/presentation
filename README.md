# Зээлийн эрсдэлийн шинжилгээ

Энэхүү төсөл нь UCI Machine Learning Repository-аас татаж авсан German Credit dataset дээрх өгөгдөлд тулгуурлан зээлийн эрсдэлийг статистик арга зүй болон машин сургалтын загваруудаар шинжилсэн веб аппликейшн юм.

## Төслийн танилцуулга

- **Өгөгдөл**: German Credit Dataset (1000 зээлдэгч, 20 хувьсагч)
- **Загварууд**: Ложистик регресс, Гэнэн Байесын алгоритм, Шийдвэрийн мод
- **Технологи**: React + TypeScript + Vite + Tailwind CSS

## Шаардлага

- **Node.js**: 18.x эсвэл дээш (https://nodejs.org/)
- **npm**: Node.js-тэй хамт суудаг

## Суулгалт ба ажиллуулалт

### 1. Зависинси суулгах

```bash
npm install
```

Эсвэл

```bash
npm i
```

### 2. Хөгжлийн сервер ажиллуулах

```bash
npm run dev
```

Энэ команд нь:
- Хөгжлийн серверийг эхлүүлнэ
- Браузерыг автоматаар нээнэ (http://localhost:3000)
- Hot Module Replacement (HMR) идэвхжүүлнэ - файл өөрчлөгдөхөд автоматаар шинэчлэгдэнэ

### 3. Production build үүсгэх

```bash
npm run build
```

Энэ команд нь `build/` хавтасанд production-ready файлуудыг үүсгэнэ.

## Төслийн бүтэц

```
Зээлийн эрсдэлийн шинжилгээ/
├── src/
│   ├── components/          # React компонентууд
│   │   ├── DataSection.tsx      # Өгөгдлийн хэсэг
│   │   ├── MethodologySection.tsx # Арга зүйн хэсэг
│   │   ├── ResultsSection.tsx     # Үр дүнгийн хэсэг
│   │   ├── VisualizationSection.tsx # График, харьцуулалт
│   │   └── ConclusionSection.tsx   # Дүгнэлт
│   ├── App.tsx              # Үндсэн компонент
│   └── main.tsx             # Entry point
├── package.json             # Зависинси, скриптүүд
├── vite.config.ts           # Vite тохиргоо
└── README.md                # Энэ файл
```

## Ашигласан технологи

- **React 18**: UI фреймворк
- **TypeScript**: Type safety
- **Vite**: Build tool, хурдан dev server
- **Tailwind CSS**: Utility-first CSS
- **Radix UI**: Accessible компонентууд
- **Recharts**: График, диаграм
- **Lucide React**: Icon library

## Хөгжлийн мэдээлэл

- **Port**: 3000 (vite.config.ts-д тохируулсан)
- **Hot Reload**: Автоматаар идэвхжсэн
- **TypeScript**: Строгийн шалгалт идэвхжсэн

## Асуудал шийдэх

### Port аль хэдийн ашиглагдаж байна

Хэрэв 3000 порт аль хэдийн ашиглагдаж байвал:

```bash
# Өөр порт ашиглах
npm run dev -- --port 3001
```

### node_modules алдаа гарч байна

```bash
# node_modules устгах
rm -rf node_modules

# package-lock.json устгах (хэрэв байвал)
rm package-lock.json

# Дахин суулгах
npm install
```

### Windows PowerShell дээр ажиллуулах

```powershell
# PowerShell-д командууд
npm install
npm run dev
```

## Нэмэлт мэдээлэл

- **Figma дизайн**: https://www.figma.com/design/D3aql1MvXRhT91T9KZxfnB/Зээлийн-эрсдэлийн-шинжилгээ
- **UCI Dataset**: https://archive.ics.uci.edu/ml/datasets/statlog+(german+credit+data)
