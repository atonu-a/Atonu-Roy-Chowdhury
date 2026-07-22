# 🚀 Personal Portfolio Website

A dynamic, modern, and responsive personal portfolio website built with **Django** and **Tailwind CSS**. Designed to showcase my skills, featured projects, and contact information effectively.

---

## 🌐 Live Demos & Links

* 🚀 **Link:** [atonu-roy-chowdhury.pro.bd](https://atonu-roy-chowdhury.pro.bd)

---

## ✨ Features

* **Dynamic Content:** Projects and skills are dynamically served using Django models and admin panel.
* **Responsive Design:** Seamless experience across desktop, tablet, and mobile devices.
* **Project Showcase:** Highlights major web development projects with GitHub links, tech stack tags, and live demos.
* **Clean UI/UX:** Fast loading times with an elegant layout.
* **Production Ready:** Configured for deployment with database dumps and build scripts.

---

## 🛠️ Tech Stack

* **Backend:** Python, Django
* **Frontend:** HTML5, CSS3, Tailwind CSS, JavaScript
* **Database:** SQLite (Development) / PostgreSQL (Production)
* **Deployment Support:** Render / Gunicorn / WhiteNoise

---

## 📁 Project Structure

```text
.
├── atonu/               # Main Django project settings & URLs
├── home/                # Core portfolio app (models, views, templates)
├── media/               # User-uploaded images & media files
├── images/              # Static tech stack icons
├── build.sh             # Deployment build script
├── datadump.json        # Database backup / initial data
├── db.sqlite3           # Local development database
└── manage.py            # Django management script

```

---

## 🚀 Getting Started Locally

Follow these steps to run the project locally on your machine.

### 1. Prerequisites

Make sure you have **Python 3.x** and **git** installed.

### 2. Clone the Repository

```bash
git clone [https://github.com/atonu-a/Atonu-Roy-Chowdhury.git](https://github.com/atonu-a/Atonu-Roy-Chowdhury.git)
cd Atonu-Roy_Chowdhury

```

### 3. Create & Activate Virtual Environment

```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate

```

### 4. Install Dependencies

```bash
pip install django pillow

```

*(Note: Add any other packages if you're using `gunicorn` or `whitenoise`)*

### 5. Run Migrations & Load Data

```bash
python manage.py migrate
python manage.py loaddata datadump.json  # Loads sample projects and skills

```

### 6. Create Superuser (Optional)

To access the Django admin panel:

```bash
python manage.py createsuperuser

```

### 7. Run the Server

```bash
python manage.py runserver

```

Open your browser and visit: `http://127.0.0.1:8000/`

---
