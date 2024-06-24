# Travlr Getaways

## Overview
Travlr Getaways is a full-stack travel booking web application designed to provide customers with the ability to view and book travel packages and allow administrators to maintain customer data, trip packages, and pricing. The application leverages the MEAN stack (MongoDB, Express, Angular, Node.js) along with additional technologies like Popper and Bootstrap.

## Technologies Used
- **Frontend**: 
  - Angular
  - Bootstrap
  - Popper.js
- **Backend**: 
  - Node.js
  - Express
  - MongoDB
- **Version Control**: 
  - Git

## Installation
To run this project locally, follow these steps:

1. **Clone the repository**
2. **Install backend dependencies**
3. **Install frontend dependencies**
4. **Setup MongoDB**
    Ensure you have MongoDB installed and running on your machine. 
5. **Run the application**
6. **Access the application**
    Open your browser and navigate to `http://localhost:4200`.
5. Open a pull request.


## Reflection
### Architecture
  - **Express HTML, JavaScript, and single-page application (SPA)**
    - Express HTML is used for server-side rendering, where HTML pages are generated on the server and sent to the client. Express HTML is pretty straightforward, but it can be less dynamic and slower for more complex applications.
    - JavaScript is used to enhance interactivity and client-side logic. JavaScript can be used to manipulate the DOM and handle various events, which provides a more responsive user experience.
    - The benefit of creating SPAs is that they load a single HTML page and dynamically update the content of the page as the user interacts with the app. This dynamic updating means that only the components that need to change will be reloaded, not the entire application. This creates much faster load times after the initial page load, which improves the user experience.
  - **Why MongoDB for the Backend?**
    - Scalability: Efficiently handles large amounts of data and traffic.
    - Performance: Optimized for fast reads and writes.
    - Easy to Use: Suitable for complex data structures like travel bookings.
### Functionality
  - **JSON vs. JavaScript**
    - JSON: A data format for exchanging data between server and client. Easy to read and write.
    - JavaScript: A programming language for creating interactive web pages.
  - **Connecting Frontend and Backend**
    - JSON is used to send data between the frontend (Angular) and backend (Express). For example, booking details sent from the frontend are processed by the backend and returned as JSON.
  - **Refactoring Instances**
    - Created reusable UI components to replace HTML elements for consistency and efficiency.
    - Optimized API calls to reduce redundancy.
    - Condensed code into smaller components to follow the principle of Separation of Concerns.
  - **Benefits of Reusable UI components**
    - Consistency: Uniform look across the app.
    - Efficiency: Faster development by reusing components.
    - Maintainability: Easier updates and fixes.
    - Scalability: Simplifies building complex UIs from simple components.
### Testing
  - **API Testing and Security**
    - API testing was done using a combination of unit testing, integration testing, and end-to-end testing. Individual components were tested thoroughly throughout the development process to ensure each iteration functioned optimally. Postman was also used throughout development to test API endpoints. Additionally, a local server was run throughout the process to simulate real API requests on the web application.
    - Security in a full stack application requires:
      - Authentication: Verifying user identity with JSON web tokens.
      - Authorization: Ensuring users have permission for actions.
      - Data Protection: Encrypting sensitive data through hashing or other methods.
      - Input Validation: Preventing malicious inputs to ensure asset security.
### Reflection
  - **Professional Growth from this Course**
    - Proficiency in full stack software development
      - Working experience in MongoDB, Express, Angula, and Node.js.
    - Design and implement APIs
      - Skills in creating secure, RESTful APIs.
    - Create responsive designs
      - Building UIs that work on any device.
    - Use version control
      - Improved Git skills that are essential for collaboration.
    - Enhance problem-solving abilities
      - Improved ability to troubleshoot issues.

## License
This project is licensed under the MIT License. 
