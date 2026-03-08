# 🍔 Online Food Ordering Application

## Project Overview

This is a **web-based Online Food Ordering Application** that allows users to browse restaurant menus, add items to their cart, and place orders. An **admin panel** allows restaurant managers to add, remove, or manage menu items. The project uses **HTML, CSS, JavaScript, Bootstrap**, and **LocalStorage** for data persistence.

---

## 🛠 Technologies Used

- **HTML5** – Structure and content
- **CSS3 & Bootstrap 5** – Styling and responsive layout
- **JavaScript** – Dynamic functionality, DOM manipulation
- **LocalStorage** – Stores admin-added menu items and user cart
- **JSON** – Default menu data (`menu.json`)

---

## ⚡ Features

### User Side
- Browse food menu
- Search for food items
- Add items to cart
- Update quantity in cart
- Place order (simulated)
- Cart updates automatically

### Admin Side
- Login authentication (email/password)
- Add new food items
- Remove food items
- Changes reflect immediately on user menu
- Menu items saved in **LocalStorage** to persist data

---

## 🖥 Folder Structure

food-ordering-app/
│
├── index.html ← User menu page
├── cart.html ← Cart page
├── admin.html ← Admin dashboard
├── order-success.html ← Order confirmation
├── css/
│ └── style.css
├── js/
│ ├── menu.js
│ ├── cart.js
│ ├── search.js
│ └── admin.js
└── data/
└── menu.json ← Default menu

---

## 🔑 Admin Login Credentials

Email: admin@gmail.com
Password: 1234


---

## ⚙ How to Run the Project

1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/food-ordering-app.git
```

2. **Open project with Live Server (recommended):**

- Install VS Code Live Server : https://github.com/ritwickdey/vscode-live-server
- Right-click index.html → Open with Live Server
- Open browser at http://127.0.0.1:5500

⚠️ Do not open index.html directly in browser (file://) — fetch() and LocalStorage may not work properly.

3. **Admin Dashboard:**

- Open admin.html via Live Server
- Login with credentials
- Add/remove menu items
- Items appear automatically in user menu
