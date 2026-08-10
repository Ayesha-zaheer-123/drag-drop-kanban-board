# 📋 Simple Kanban Board

A clean, responsive **drag-and-drop Kanban board** built using pure **HTML, CSS, and JavaScript** no frameworks, no libraries. This project demonstrates core DOM manipulation and the native HTML5 Drag & Drop API.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- **Drag & Drop Cards** — Move tasks freely between "To Do", "In Progress", and "Done" columns
- **Visual Drop Feedback** — Columns highlight when a card is dragged over them
- **Responsive Design** — Adapts to tablet and mobile screens using media queries
- **Zero Dependencies** — Built entirely with vanilla JS and the native Drag & Drop API

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure & semantic markup |
| CSS3 | Styling, layout (Flexbox), and responsiveness |
| JavaScript (ES6) | Drag-and-drop logic & DOM manipulation |

## 📂 Project Structure
kanban-board/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive layout
├── index.js        # Drag-and-drop functionality
└── README.md

## ⚙️ How It Works

1. Each task card has `draggable="true"` and a `dragstart` event that stores its ID
2. Each list column listens for `dragover`, `dragenter`, `dragleave`, and `drop` events
3. On drop, the card is appended to the new list using the stored ID
4. A CSS class (`.over`) is toggled to give visual feedback while dragging over a column

## 🔧 Installation & Usage

```bash
# Clone the repository
git clone https://github.com/Ayesha-zaheer-123/kanban-board.git

# Navigate to project folder
cd kanban-board

# Open index.html in your browser
```

No build tools or dependencies required  just open `index.html` directly.


## 👩‍💻 Author

**Ayesha Zaheer**
