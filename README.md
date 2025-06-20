# tm-narendra

This project is a Node.js + Express API server for managing Aadhaar user data, profile image uploads, and various Aadhaar-related reports.

---

## Features

- **User Registration** (Bulk)
- **Profile Image Upload** (using Multer)
- **List Aadhaar Users by State and City**
- **Aadhaar Count Above 60 Years by State**
- **MySQL Database Connection**

---

## Project Structure

```
tm-narendra/
  ├── server.js
  ├── src/
  │   ├── app.js
  │   ├── routes/
  │   │   └── auser.route.js
  │   ├── controllers/
  │   │   └── file-upload/
  │   │       └── uploadImage.js
  │   ├── models/
  │   │   └── aadharUsers/
  │   │       ├── aadhar-reg.js
  │   │       └── state_city_wise_adhar_users/
  │   │           └── aadhar_users.js
  │   ├── database/
  │   │   └── db.js
  │   └── Uploads/   ← All uploaded files are stored here
  ├── package.json
```

---

## Installation & Running

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Set up your `.env` file:**
   ```
   port=5000
   host=your-mysql-host
   user=your-mysql-user
   password=your-mysql-password
   database=your-database-name
   ```

3. **Ensure the Uploads folder exists:**
   ```
   mkdir src/Uploads
   ```

4. **Start the server:**
   ```
   node server.js
   ```

---

## Main API Endpoints

| Method | URL                                      | Description                                      |
|--------|------------------------------------------|--------------------------------------------------|
| GET    | `/api/city_aadhar_user`                  | List Aadhaar users by city                       |
| POST   | `/api/user_registration`                 | Register users in bulk (body: `{ count: 10 }`)   |
| GET    | `/api/state_wise_adhar_count_above_60`   | Aadhaar count above 60 years by state            |
| GET    | `/api/state_city_wise_adhar_users`       | List Aadhaar users by state and city             |
| POST   | `/api/upload-profile`                    | Upload profile image (form-data, field: `profile`)|

**Uploaded file path:**  
The response will include `"filePath": "/uploads/your-file-name"`.

---

## Technologies Used

- Node.js
- Express.js
- MySQL
- Multer (for file uploads)
- dotenv, cors

---

## Notes

- All uploaded files are stored in `src/Uploads`.
- All API endpoints are prefixed with `/api`.
- Make sure to provide correct MySQL connection details in your `.env` file.

---

If you need further help, please refer to this README or contact the maintainer. 