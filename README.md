# Class Booking System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for managing class bookings and schedules.

## Features

- Class scheduling and management
- Student booking system
- Calendar integration (Google Calendar & iCal)
- Admin dashboard for instructors
- Real-time seat availability tracking
- WhatsApp contact integration

## Tech Stack

- **Frontend:** React.js with Tailwind CSS
- **Backend:** Node.js with Express.js
- **Database:** MongoDB
- **Additional Tools:**
  - React DatePicker
  - Axios for API requests
  - Calendar integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/class-booking-system.git
cd class-booking-system
```

2. Install dependencies:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

## Running the Application

1. Start the server:
```bash
cd server
npm start
```

2. In a new terminal, start the client:
```bash
cd client
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   └── api/          # API configuration
│   └── public/           # Static files
└── server/               # Node.js backend
    ├── models/           # MongoDB models
    └── server.js        # Express server setup
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
