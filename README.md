## MovieDB Trending App

This project is a React application that integrates with the TMDB API to display today's trending films and TV shows. It also provides a search feature for finding any film or TV show. The app is written in TypeScript for type safety and enhanced development experience.

### Features

- **Home Page**: Displays trending films and TV shows in two separate rails.
- **Detailed Information**: Users can view detailed information about any film or TV show, including cast, description, rating, release date, number of seasons (for TV shows), etc.
- **Keyboard Navigation**: Navigational using arrow keys and Enter key for enhanced accessibility.
- **Responsive Design**: Ensures optimal viewing experience across various devices.
- **Performance**: Minimal time between user interaction and response, with a TTMU of less than 3 seconds.
- **Secure Integration**: No exposed authentication tokens for API integration.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/moviedb-trending-app.git
   ```

2. Install dependencies:
   ```
   cd moviedb-trending-app
   npm install
   ```

3. Run the application:
   ```
   npm start
   ```

### Deployment

The app is deployed on Vercel, providing easy access from anywhere.

### Technologies Used

- React
- TypeScript
- TMDB API
- Vercel (for hosting)

### Testing

Unit tests have been implemented to ensure the reliability and correctness of the application.

### Code Quality

Linters and bundlers have been used to maintain code quality and bundle size optimization.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

### License

This project is licensed under the [MIT License](LICENSE).
