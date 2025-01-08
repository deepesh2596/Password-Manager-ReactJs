# Password Manager

## Description
This Password Manager App allows users to securely store and manage their passwords. Built with React.js for the frontend and Express.js for the backend, it includes features such as password storage, editing, and deletion. The application uses MongoDB to persist data and ensures a user-friendly experience with Toastify notifications and modern UI design.

---

## Features
- Save, view, edit, and delete passwords
- Copy site URLs, usernames, or passwords to the clipboard
- Toggle password visibility
- Responsive design with Tailwind CSS
- Notifications using React-Toastify
- Local and backend storage for data

---

## Technologies Used
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Utilities:** UUID, React-Toastify

---

## How to Run the Project

### Prerequisites
- Node.js and npm
- MongoDB installed and running locally

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:
   ```bash
   cd password-manager
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Install backend dependencies:
   ```bash
   cd ../backend
   npm install
   ```

5. Configure environment variables:
   - Create a `.env` file in the `backend` folder and add:
     ```env
     MONGO_URI=mongodb://localhost:27017/passop
     ```

6. Start the backend server:
   ```bash
   npm start
   ```

7. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```

8. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## API Endpoints

### Backend (Express.js)
- **GET /** - Fetch all saved passwords
- **POST /** - Save a new password
- **DELETE /** - Delete a password by ID

---

## Contributing
Contributions are welcome! Follow these steps:
1. Fork this repository
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request

---

## Acknowledgements
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://www.mongodb.com/docs)
- [React-Toastify Documentation](https://fkhadra.github.io/react-toastify/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Contact
For any inquiries or feedback, contact me at **deepesh2596@gmail.com**.



   
