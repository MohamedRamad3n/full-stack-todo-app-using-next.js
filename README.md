# Full Stack Todo App with Next.js

A modern, full-stack todo application built with Next.js, featuring authentication, real-time updates, and a beautiful UI.

## Features

- 🔐 User Authentication with Clerk
- 🌓 Dark/Light Mode Support
- 📱 Responsive Design
- ⚡ Real-time Updates
- 🎨 Modern UI with Tailwind CSS
- 📝 CRUD Operations for Todos
- 🔄 Server Actions
- 🎯 Form Validation with Zod

## Tech Stack

- **Framework:** Next.js 14
- **Database:** MongoDB
- **ORM:** Prisma
- **Authentication:** Clerk
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Notifications:** Sonner

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB Database
- Clerk Account

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your_mongodb_connection_string"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/full-stack-todo-app.git
```

2. Install dependencies
```bash
npm install
```

3. Run Prisma migrations
```bash
npx prisma generate
npx prisma db push
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── server/          # Server actions
│   └── types/           # TypeScript types
├── prisma/              # Prisma schema and migrations
└── public/              # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
