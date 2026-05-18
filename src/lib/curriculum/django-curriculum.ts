import type { Track, Chapter } from "./types";

const djangoChapters: Chapter[] = [
  {
    id: "django-1",
    number: 1,
    partLabel: "Part 1: Django Foundations",
    title: "What Is Django and Why Use It?",
    subtitle: "Introduction to Django",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: [],
    learningObjectives: ["Understand what Django is", "Know Django's history", "Understand MTV architecture"],
    sections: [
      {
        id: "django-1-1",
        title: "What Is Django?",
        whyItMatters: "Django is the most popular Python web framework, used by Instagram, Pinterest, and many other major applications.",
        content: `Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Created in 2003 at Lawrence Journal-World newspaper, Django was open-sourced in 2005 and has since become the go-to framework for Python web development.

**Why Django Matters:**

- **Batteries-Included**: Comes with everything needed - authentication, ORM, admin, forms
- **Security**: Built-in protection against common attacks (SQL injection, XSS, CSRF)
- **Scalability**: Used by Instagram, Pinterest, Disqus - handles millions of users
- **Community**: Massive ecosystem, excellent documentation
- **MTV Pattern**: Clean separation of concerns (Model-Template-View)

**Companies Using Django:**
- Instagram
- Pinterest  
- Disqus
- Spotify
- NASA
- Mozilla

**Django vs Other Frameworks:**

| Feature | Django | Flask | FastAPI |
|---------|--------|-------|---------|
| Type | Full-stack | Micro | API-focused |
| ORM | Built-in | SQLAlchemy | Optional |
| Admin | Built-in | Extensions | None |
| Learning Curve | Moderate | Easy | Easy |
| Best For | Full websites | Small apps | APIs |

Django follows the "batteries-included" philosophy - you get authentication, database management, admin interface, and much more out of the box.`,
        codeExamples: [
          {
            id: "django-1-ex1",
            title: "Hello Django",
            description: "Simple Django view example",
            code: { django: "# views.py\nfrom django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse(\"Hello, Django!\")\n\n# urls.py\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('', home, name='home'),\n]" },
            explanation: "A basic Django view returns an HTTP response."
          },
          {
            id: "django-1-ex2",
            title: "MTV Pattern",
            description: "How Django handles requests",
            code: { django: "# Model (models.py)\nclass Article(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n\n# Template (article.html)\n# <h1>{{ article.title }}</h1>\n# <p>{{ article.content }}</p>\n\n# View (views.py)\ndef article_detail(request, article_id):\n    article = Article.objects.get(id=article_id)\n    return render(request, 'article.html', {'article': article})" },
            explanation: "Django separates data (Model), presentation (Template), and logic (View)."
          }
        ],
        callouts: [
          {
            type: "info",
            title: "Python Prerequisite",
            content: "This track assumes you know Python. If you need to learn Python, visit the Python track on CodeMastery."
          },
          {
            type: "tip",
            title: "Django is Production-Ready",
            content: "Django is used by major companies handling millions of users. It's battle-tested and secure."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What type of framework is Django?", options: ["Micro framework", "Full-stack framework", "API framework", "Frontend framework"], correctAnswer: 1, explanation: "Django is a full-stack web framework with built-in tools for everything." },
        { id: "q2", type: "mcq", question: "What does MTV stand for in Django?", options: ["Model-Template-View", "Make-Translate-Validate", "Main-Text-Value", "Model-Type-View"], correctAnswer: 0, explanation: "MTV stands for Model-Template-View, Django's architecture pattern." },
        { id: "q3", type: "true-false", question: "Django was created at a newspaper.", correctAnswer: true, explanation: "Django was created at the Lawrence Journal-World newspaper in 2003." },
        { id: "q4", type: "fill-blank", question: "Django follows the _____ philosophy.", correctAnswer: "batteries-included", explanation: "Django includes everything needed out of the box." },
        { id: "q5", type: "mcq", question: "Which company does NOT use Django?", options: ["Instagram", "Google", "Pinterest", "NASA"], correctAnswer: 1, explanation: "While NASA uses Django, Google uses various frameworks." },
        { id: "q6", type: "mcq", question: "What is Django's built-in admin interface?", options: ["Optional", "Not included", "Built-in", "Requires extension"], correctAnswer: 2, explanation: "Django includes a powerful admin interface out of the box." },
        { id: "q7", type: "true-false", question: "Django protects against SQL injection.", correctAnswer: true, explanation: "Django's ORM automatically prevents SQL injection attacks." },
        { id: "q8", type: "fill-blank", question: "Django was open-sourced in _____.", correctAnswer: "2005", explanation: "Django was released as open source in 2005." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "Django", value: "Full-stack Python web framework" },
      { label: "MTV", value: "Model-Template-View architecture" },
      { label: "Batteries-included", value: "Comes with everything needed" },
      { label: "Secure", value: "Built-in protection" }
    ]
  },
  {
    id: "django-2",
    number: 2,
    partLabel: "Part 1: Django Foundations",
    title: "Installing Django and Creating First Project",
    subtitle: "Setup and Project Structure",
    difficulty: "Absolute Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["django-1"],
    learningObjectives: ["Install Django", "Create Django project", "Understand project structure"],
    sections: [
      {
        id: "django-2-1",
        title: "Setting Up Django",
        whyItMatters: "Proper setup is essential for Django development.",
        content: `**Installation:**

\`\`\`bash
# Create virtual environment
python -m venv myenv
source myenv/bin/activate  # Linux/Mac
myenv\\Scripts\\activate     # Windows

# Install Django
pip install django

# Check installation
django-admin --version
\`\`\`

**Creating a Project:**

\`\`\`bash
django-admin startproject myproject
cd myproject
python manage.py runserver
\`\`\`

**Project Structure:**

\`\`\`
myproject/
├── manage.py
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
\`\`\`

**manage.py** - Command-line utility for Django
**settings.py** - All configuration
**urls.py** - URL routing
**wsgi.py** - WSGI deployment config`,
        codeExamples: [
          {
            id: "django-2-ex1",
            title: "Initial Setup",
            description: "Commands to create Django project",
            code: { django: "# Step 1: Create virtual environment\npython -m venv env\n\n# Step 2: Activate\n# Windows: env\\Scripts\\activate\n# Mac/Linux: source env/bin/activate\n\n# Step 3: Install Django\npip install django\n\n# Step 4: Create project\ndjango-admin startproject mysite\n\n# Step 5: Run server\npython manage.py runserver" },
            explanation: "These steps create a new Django project."
          },
          {
            id: "django-2-ex2",
            title: "settings.py Basics",
            description: "Key settings in Django settings",
            code: { django: "# settings.py key configurations\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n]\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.sqlite3',\n        'NAME': BASE_DIR / 'db.sqlite3',\n    }\n}\n\nSECRET_KEY = 'your-secret-key'\nDEBUG = True\nALLOWED_HOSTS = []\n\nSTATIC_URL = '/static/'" },
            explanation: "Django's default database is SQLite for easy setup."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What command creates a Django project?", options: ["django-admin create project", "django-admin startproject", "django start project", "django create"], correctAnswer: 1, explanation: "django-admin startproject creates a new Django project." },
        { id: "q2", type: "fill-blank", question: "The command-line utility for Django is _____.", correctAnswer: "manage.py", explanation: "manage.py is Django's main CLI tool." },
        { id: "q3", type: "mcq", question: "What is Django's default database?", options: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"], correctAnswer: 2, explanation: "Django uses SQLite by default for easy setup." },
        { id: "q4", type: "true-false", question: "DEBUG=True is for production.", correctAnswer: false, explanation: "DEBUG should be False in production for security." },
        { id: "q5", type: "mcq", question: "What does settings.py contain?", options: ["URL routes only", "All configuration", "Only database", "Only apps"], correctAnswer: 1, explanation: "settings.py contains all Django configuration." },
        { id: "q6", type: "fill-blank", question: "Use _____ to start the development server.", correctAnswer: "python manage.py runserver", explanation: "runserver starts the Django dev server." },
        { id: "q7", type: "mcq", question: "What is the recommended way to set up Django?", options: ["Global install", "Virtual environment", "Docker only", "Cloud only"], correctAnswer: 1, explanation: "Virtual environments are recommended to isolate dependencies." },
        { id: "q8", type: "true-false", question: "ALLOWED_HOSTS must be configured for production.", correctAnswer: true, explanation: "ALLOWED_HOSTS specifies valid hostnames for security." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "startproject", value: "Create Django project" },
      { label: "runserver", value: "Start dev server" },
      { label: "settings.py", value: "Configuration file" },
      { label: "manage.py", value: "CLI utility" }
    ]
  },
  {
    id: "django-3",
    number: 3,
    partLabel: "Part 1: Django Foundations",
    title: "Django Apps and Project Architecture",
    subtitle: "Understanding Django Apps",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["django-2"],
    learningObjectives: ["Understand Django apps", "Create Django apps", "Configure INSTALLED_APPS"],
    sections: [
      {
        id: "django-3-1",
        title: "Django Apps",
        whyItMatters: "Apps are the building blocks of Django projects.",
        content: `**Apps vs Projects:**

A Django project is the entire configuration. An app is a specific functionality within the project.

\`\`\`bash
# Create an app
python manage.py startapp blog
\`\`\`

**App Structure:**

\`\`\`
blog/
├── __init__.py
├── admin.py
├── apps.py
├── migrations/
│   └── __init__.py
├── models.py
├── tests.py
└── views.py
\`\`\`

**Adding App to Project:**

\`\`\`python
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    # ... built-in apps
    'blog',  # Your app
]
\`\`\`

**Best Practices:**
- One app per major feature
- Reusable apps for packages
- Name apps meaningfully`,
        codeExamples: [
          {
            id: "django-3-ex1",
            title: "Creating an App",
            description: "Steps to create Django app",
            code: { django: "# Create the app\npython manage.py startapp blog\n\n# Register in settings.py\nINSTALLED_APPS = [\n    ...\n    'blog',\n]\n\n# views.py - create a view\nfrom django.http import HttpResponse\n\ndef index(request):\n    return HttpResponse(\"Welcome to the blog!\")\n\n# urls.py - add URL\nfrom blog import views\nurlpatterns = [\n    path('', views.index, name='home'),\n]" },
            explanation: "Apps must be registered in INSTALLED_APPS."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What command creates a Django app?", options: ["startapp", "createapp", "newapp", "addapp"], correctAnswer: 0, explanation: "python manage.py startapp creates an app." },
        { id: "q2", type: "fill_blank", question: "Apps are registered in _____ in settings.py.", correctAnswer: "INSTALLED_APPS", explanation: "INSTALLED_APPS contains all Django apps." },
        { id: "q3", type: "mcq", question: "What file contains database models in an app?", options: ["views.py", "models.py", "apps.py", "admin.py"], correctAnswer: 1, explanation: "models.py defines database models." },
        { id: "q4", type: "true-false", question: "A project can have multiple apps.", correctAnswer: true, explanation: "Django projects can contain many apps." },
        { id: "q5", type: "mcq", question: "What does apps.py do?", options: ["URL routing", "App configuration", "Database", "Templates"], correctAnswer: 1, explanation: "apps.py provides app configuration." },
        { id: "q6", type: "fill_blank", question: "The _____ directory contains database migrations.", correctAnswer: "migrations", explanation: "Migrations folder stores database changes." },
        { id: "q7", type: "mcq", question: "What is the difference between project and app?", options: ["No difference", "Project contains apps", "App contains projects", "They're the same"], correctAnswer: 1, explanation: "A project is the configuration, apps are features." },
        { id: "q8", type: "true-false", question: "Apps should be reusable.", correctAnswer: true, explanation: "Well-designed apps can be reused across projects." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "startapp", value: "Create Django app" },
      { label: "INSTALLED_APPS", value: "Registered apps list" },
      { label: "models.py", value: "Database models" },
      { label: "views.py", value: "Business logic" }
    ]
  },
  {
    id: "django-4",
    number: 4,
    partLabel: "Part 1: Django Foundations",
    title: "URLs and Routing",
    subtitle: "Django URL Configuration",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["django-3"],
    learningObjectives: ["Configure URLs", "Use path and re_path", "Create dynamic URLs", "Use named URLs"],
    sections: [
      {
        id: "django-4-1",
        title: "URL Patterns",
        whyItMatters: "URL routing connects user requests to views.",
        content: `**Basic URL Configuration:**

\`\`\`python
# myproject/urls.py
from django.urls import path
from blog import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]
\`\`\`

**Dynamic URLs:**

\`\`\`python
# With parameters
path('article/<int:article_id>/', views.article_detail, name='article_detail')

# slug parameter
path('blog/<slug:slug>/', views.blog_post, name='blog_post')

# Multiple parameters
path('category/<str:category>/<int:page>/', views.category_list)
\`\`\`

**URL Namespaces:**

\`\`\`python
# blog/urls.py
app_name = 'blog'
urlpatterns = [
    path('', views.index, name='index'),
]

# myproject/urls.py
from django.urls import include, path
urlpatterns = [
    path('blog/', include('blog.urls', namespace='blog')),
]
\`\`\`

**Reverse URL Lookup:**

\`\`\`python
# In templates
<a href=\"{% url 'blog:index' %}\">Home</a>

# In views
from django.urls import reverse
url = reverse('blog:index')"`,
        codeExamples: [
          {
            id: "django-4-ex1",
            title: "URL Configuration",
            description: "Setting up Django URLs",
            code: { django: "# urls.py\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    # Home page\n    path('', views.home, name='home'),\n    \n    # Dynamic URL\n    path('post/<int:pk>/', views.post_detail, name='post_detail'),\n    \n    # slug URL\n    path('blog/<slug:slug>/', views.blog_post, name='blog_post'),\n]\n\n# views.py\ndef post_detail(request, pk):\n    return HttpResponse(f\"Post #{pk}\")\n\ndef blog_post(request, slug):\n    return HttpResponse(f\"Blog post: {slug}\")" },
            explanation: "URL parameters are passed to view functions."
          },
          {
            id: "django-4-ex2",
            title: "Named URLs",
            description: "Using reverse URL lookup",
            code: { django: "# In views.py\nfrom django.shortcuts import redirect\nfrom django.urls import reverse\n\ndef some_view(request):\n    # Redirect using named URL\n    return redirect(reverse('blog:post_detail', args=[42]))\n\n# In templates\n<a href=\"{% url 'blog:post_detail' post.id %}\">\n    {{ post.title }}\n</a>" },
            explanation: "Named URLs allow flexible link generation."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What function creates URL patterns?", options: ["url()", "path()", "route()", "match()"], correctAnswer: 1, explanation: "path() creates URL patterns in Django." },
        { id: "q2", type: "fill_blank", question: "URL parameter <int:pk> captures an _____.", correctAnswer: "integer", explanation: "int:pk captures an integer value." },
        { id: "q3", type: "mcq", question: "How do you include app URLs?", options: ["import", "include()", "merge()", "combine()"], correctAnswer: 1, explanation: "include() adds app URLs to the project." },
        { id: "q4", type: "true-false", question: "Named URLs allow reverse lookups.", correctAnswer: true, explanation: "Named URLs can be reversed in code and templates." },
        { id: "q5", type: "mcq", question: "What does app_name = 'blog' do?", options: ["Names the app", "Creates namespace", "Both a and b", "Nothing"], correctAnswer: 2, explanation: "app_name creates a namespace for URL names." },
        { id: "q6", type: "fill_blank", question: "Use _____ in templates for reverse URL lookup.", correctAnswer: "{% url %}", explanation: "{% url %} template tag generates URLs." },
        { id: "q7", type: "mcq", question: "What is the difference between path and re_path?", options: ["No difference", "path is for strings", "re_path uses regex", "path is deprecated"], correctAnswer: 2, explanation: "re_path uses regular expressions." },
        { id: "q8", type: "true-false", question: "URL parameters are passed to view functions.", correctAnswer: true, explanation: "URL parameters become function arguments." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "path()", value: "URL pattern function" },
      { label: "include()", value: "Include app URLs" },
      { label: "name=", value: "Name for reverse lookup" },
      { label: "{% url %}", value: "Template URL tag" }
    ]
  },
  {
    id: "django-5",
    number: 5,
    partLabel: "Part 1: Django Foundations",
    title: "Views in Django",
    subtitle: "Handling Requests",
    difficulty: "Beginner" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["django-4"],
    learningObjectives: ["Create views", "Handle requests", "Return responses"],
    sections: [
      {
        id: "django-5-1",
        title: "Function-Based Views",
        whyItMatters: "Views process user requests and return responses.",
        content: `**Basic View:**

\`\`\`python
from django.http import HttpResponse\n\ndef home(request):\n    return HttpResponse(\"Hello, World!\")
\`\`\`

**Request Object:**

\`\`\`python
def example(request):\n    # Request methods\n    request.method      # GET, POST, etc.\n    request.GET        # Query parameters\n    request.POST       # Form data\n    request.path       # URL path\n    request.user       # Current user\n\`\`\`

**Response Types:**

\`\`\`python
from django.http import HttpResponse, JsonResponse, FileResponse\nfrom django.shortcuts import render, redirect\n\ndef text_response(request):\n    return HttpResponse(\"Text response\")\n\ndef json_response(request):\n    return JsonResponse({'key': 'value'})\n\ndef render_template(request):\n    return render(request, 'template.html', {'data': 'value'})\n\ndef redirect_view(request):\n    return redirect('/other-url/')\n\`\`\`

**Request Methods:**

\`\`\`python
def method_view(request):\n    if request.method == 'GET':\n        # Handle GET\n        return HttpResponse(\"GET request\")\n    elif request.method == 'POST':\n        # Handle POST\n        return HttpResponse(\"POST request\")\n    else:\n        return HttpResponse(\"Other method\")`,
        codeExamples: [
          {
            id: "django-5-ex1",
            title: "Basic View",
            description: "A simple Django view",
            code: { django: "from django.http import HttpResponse\nfrom django.shortcuts import render\n\ndef home(request):\n    return HttpResponse(\"Welcome to my site!\")\n\ndef greet(request, name):\n    return HttpResponse(f\"Hello, {name}!\")\n\ndef about(request):\n    context = {'title': 'About Us', 'content': 'We are Django developers'}\n    return render(request, 'about.html', context)" },
            explanation: "Views can return different response types."
          },
          {
            id: "django-5-ex2",
            title: "JSON API View",
            description: "Returning JSON responses",
            code: { django: "from django.http import JsonResponse\nimport json\n\ndef api_data(request):\n    data = {\n        'users': [\n            {'id': 1, 'name': 'Alice'},\n            {'id': 2, 'name': 'Bob'},\n        ],\n        'status': 'success'\n    }\n    return JsonResponse(data)\n\ndef api_post(request):\n    if request.method == 'POST':\n        data = json.loads(request.body)\n        return JsonResponse({'received': data}, status=201)\n    return JsonResponse({'error': 'Method not allowed'}, status=405)" },
            explanation: "JsonResponse returns JSON to APIs."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does a Django view return?", options: ["HTML only", "HTTP Response", "JSON only", "Files only"], correctAnswer: 1, explanation: "Views return HttpResponse objects." },
        { id: "q2", type: "fill_blank", question: "Use _____ to render a template.", correctAnswer: "render()", explanation: "render() combines template with context." },
        { id: "q3", type: "mcq", question: "What returns JSON data?", options: ["HttpResponse", "JsonResponse", "FileResponse", "Redirect"], correctAnswer: 1, explanation: "JsonResponse automatically serializes to JSON." },
        { id: "q4", type: "true-false", question: "request.GET contains URL query parameters.", correctAnswer: true, explanation: "?key=value parameters are in request.GET." },
        { id: "q5", type: "mcq", question: "How do you handle POST data?", options: ["request.post", "request.POST", "request.data", "request.body"], correctAnswer: 1, explanation: "request.POST contains form data." },
        { id: "q6", type: "fill_blank", question: "Use _____ to redirect to another URL.", correctAnswer: "redirect()", explanation: "redirect() sends user to another page." },
        { id: "q7", type: "mcq", question: "What access user information?", options: ["request.user", "request.username", "request.auth", "request.account"], correctAnswer: 0, explanation: "request.user contains the current user." },
        { id: "q8", type: "true-false", question: "Views should check request.method.", correctAnswer: true, explanation: "Always verify the request method for security." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "HttpResponse", value: "Basic response" },
      { label: "JsonResponse", value: "JSON response" },
      { label: "render()", value: "Template response" },
      { label: "redirect()", value: "URL redirect" }
    ]
  },
  {
    id: "django-6",
    number: 6,
    partLabel: "Part 1: Django Foundations",
    title: "Django Templates",
    subtitle: "Template Language",
    difficulty: "Beginner" as const,
    estimatedMinutes: 40,
    xpReward: 80,
    prerequisites: ["django-5"],
    learningObjectives: ["Use template variables", "Use template tags", "Implement inheritance"],
    sections: [
      {
        id: "django-6-1",
        title: "Template Basics",
        whyItMatters: "Templates create the HTML that users see.",
        content: `**Template Variables:**

\`\`\`django
{{ variable }}\n{{ user.name }}\n{{ items.0 }}\n{{ dict.key }}\n\`\`\`

**Template Tags:**

\`\`\`django
{% if user.is_authenticated %}\n    <p>Welcome, {{ user.username }}</p>\n{% else %}\n    <p>Please login</p>\n{% endif %}\n\n{% for item in items %}\n    <li>{{ item }}</li>\n{% endfor %}\n\n{% url 'blog:post_detail' post.id %}\n{% static 'style.css' %}\n{% load static %}\n\`\`\`

**Filters:**

\`\`\`django
{{ name|upper }}\n{{ text|truncatewords:30 }}\n{{ date|date:\"F j, Y\" }}\n{{ value|default:\"N/A\" }}\n\`\`\`

**Template Inheritance:**

\`\`\`django
{# base.html #}\n<!DOCTYPE html>\n<html>\n<head>\n    <title>{% block title %}My Site{% endblock %}</title>\n</head>\n<body>\n    {% block content %}{% endblock %}\n</body>\n</html>\n\n{# child.html #}\n{% extends 'base.html' %}\n{% block title %}Home Page{% endblock %}\n{% block content %}\n    <p>Welcome!</p>\n{% endblock %}\n\`\`\``,
        codeExamples: [
          {
            id: "django-6-ex1",
            title: "Template Example",
            description: "Using template features",
            code: { django: "<!-- template.html -->\n<h1>{{ article.title|upper }}</h1>\n<p>By {{ article.author }}</p>\n<p>{{ article.published|date:\"F j, Y\" }}</p>\n\n{% if article.content %}\n    <div class=\"content\">\n        {{ article.content|linebreaks }}\n    </div>\n{% else %}\n    <p>No content available.</p>\n{% endif %}\n\n{% for tag in article.tags.all %}\n    <span class=\"tag\">{{ tag }}</span>\n{% endfor %}" },
            explanation: "Templates combine HTML with dynamic content."
          },
          {
            id: "django-6-ex2",
            title: "Template Inheritance",
            description: "Base and child templates",
            code: { django: "<!-- base.html -->\n<!DOCTYPE html>\n<html>\n<head>\n    <title>{% block title %}Django Site{% endblock %}</title>\n    {% block extra_css %}{% endblock %}\n</head>\n<body>\n    <nav>{% block nav %}{% endblock %}</nav>\n    <main>{% block content %}{% endblock %}</main>\n    <footer>{% block footer %}{% endblock %}</footer>\n</body>\n</html>\n\n<!-- home.html -->\n{% extends 'base.html' %}\n{% block title %}Home - Django Site{% endblock %}\n{% block content %}\n    <h1>Welcome</h1>\n{% endblock %}" },
            explanation: "Inheritance reduces code duplication."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "How do you output a variable in templates?", options: ["{% variable %}", "{{ variable }}", "${variable}", "#variable"], correctAnswer: 1, explanation: "{{ variable }} outputs variables." },
        { id: "q2", type: "fill_blank", question: "Use _____ for logic (if, for).", correctAnswer: "{% tag %}", explanation: "{% %} contains template tags." },
        { id: "q3", type: "mcq", question: "What does {{ name|upper }} do?", options: ["Shows upper variable", "Uppercases the name", "Validates upper", "Nothing"], correctAnswer: 1, explanation: "|upper is a filter that uppercase the value." },
        { id: "q4", type: "true-false", question: "{% extends %} must be first in template.", correctAnswer: true, explanation: "extends must come before any other tags." },
        { id: "q5", type: "mcq", question: "How do you include a partial template?", options: ["{% include %}", "{% import %}", "{% extends %}", "{% partial %}"], correctAnswer: 0, explanation: "{% include %} embeds another template." },
        { id: "q6", type: "fill_blank", question: "The _____ tag creates URL from named pattern.", correctAnswer: "{% url %}", explanation: "{% url %} generates URLs from names." },
        { id: "q7", type: "mcq", question: "What does {% block %} do?", options: ["Creates section", "Defines placeholder", "Both a and b", "Loops"], correctAnswer: 2, explanation: "Blocks define replaceable sections." },
        { id: "q8", type: "true-false", question: "Templates are just Python.", correctAnswer: false, explanation: "Templates use their own limited syntax." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "{{ }}", value: "Variable output" },
      { label: "{% %}", value: "Template tags" },
      { label: "{% extends %}", value: "Template inheritance" },
      { label: "{% block %}", value: "Define section" },
      { label: "{% include %}", value: "Include template" }
    ]
  },
  {
    id: "django-7",
    number: 7,
    partLabel: "Part 1: Django Foundations",
    title: "Models and Databases",
    subtitle: "Django ORM",
    difficulty: "Beginner" as const,
    estimatedMinutes: 45,
    xpReward: 90,
    prerequisites: ["django-6"],
    learningObjectives: ["Create models", "Run migrations", "Perform CRUD operations"],
    sections: [
      {
        id: "django-7-1",
        title: "Model Basics",
        whyItMatters: "Models define your database structure.",
        content: `**Defining Models:**

\`\`\`python
from django.db import models\n\nclass Article(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    author = models.ForeignKey('Author', on_delete=models.CASCADE)\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n    published = models.BooleanField(default=False)\n    \n    class Meta:\n        ordering = ['-created_at']\n    \n    def __str__(self):\n        return self.title\n\`\`\`

**Common Field Types:**

| Field | Description |
|-------|-------------|
| CharField | Short text |
| TextField | Long text |
| IntegerField | Integer |
| DateField/DateTimeField | Dates |
| BooleanField | True/False |
| ForeignKey | Related model |
| ManyToManyField | Multiple relations |
| ImageField | Image upload |
| FileField | File upload |

**Running Migrations:**

\`\`\`bash
python manage.py makemigrations  # Create migration\npython manage.py migrate         # Apply to database
\`\`\``,
        codeExamples: [
          {
            id: "django-7-ex1",
            title: "Creating Models",
            description: "Django model definitions",
            code: { django: "from django.db import models\nfrom django.contrib.auth.models import User\n\nclass Category(models.Model):\n    name = models.CharField(max_length=100)\n    description = models.TextField(blank=True)\n    \n    class Meta:\n        verbose_name_plural = 'categories'\n    \n    def __str__(self):\n        return self.name\n\nclass Post(models.Model):\n    title = models.CharField(max_length=200)\n    slug = models.SlugField(unique=True)\n    content = models.TextField()\n    author = models.ForeignKey(User, on_delete=models.CASCADE)\n    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n    published = models.BooleanField(default=False)\n    \n    class Meta:\n        ordering = ['-created_at']" },
            explanation: "Models map to database tables."
          },
          {
            id: "django-7-ex2",
            title: "CRUD Operations",
            description: "Using Django ORM",
            code: { django: "# CREATE\npost = Post(title=\"First Post\", content=\"Hello!\")\npost.save()\n\n# Or using create\nPost.objects.create(title=\"Second\", content=\"World\")\n\n# READ\nall_posts = Post.objects.all()\npublished = Post.objects.filter(published=True)\nsingle = Post.objects.get(id=1)\none = Post.objects.first()\n\n# UPDATE\npost = Post.objects.get(id=1)\npost.title = \"Updated Title\"\npost.save()\n\n# Or update\nPost.objects.filter(id=1).update(title=\"New Title\")\n\n# DELETE\npost = Post.objects.get(id=1)\npost.delete()\n\n# Or bulk delete\nPost.objects.filter(published=False).delete()" },
            explanation: "ORM provides Pythonic database access."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What does models.Model do?", options: ["Nothing", "Base class for models", "Creates table", "Validates"], correctAnswer: 1, explanation: "All Django models inherit from models.Model." },
        { id: "q2", type: "fill_blank", question: "Use _____ to create database migration files.", correctAnswer: "makemigrations", explanation: "makemigrations creates migration files." },
        { id: "q3", type: "mcq", question: "What does on_delete=models.CASCADE do?", options: ["Keeps data", "Deletes related", "Sets null", "Does nothing"], correctAnswer: 1, explanation: "CASCADE deletes related objects." },
        { id: "q4", type: "true-false", question: "auto_now_add automatically sets timestamp on create.", correctAnswer: true, explanation: "auto_now_add sets time when created." },
        { id: "q5", type: "mcq", question: "How do you get all objects?", options: ["Post.objects.all()", "Post.objects.get()", "Post.all()", "Post.get_all()"], correctAnswer: 0, explanation: "objects.all() returns all records." },
        { id: "q6", type: "fill_blank", question: "Use _____ to filter query results.", correctAnswer: "filter()", explanation: "filter() returns matching objects." },
        { id: "q7", type: "mcq", question: "What does get() return?", options: ["One object", "Multiple", "QuerySet", "None"], correctAnswer: 0, explanation: "get() returns a single object or raises exception." },
        { id: "q8", type: "true-false", question: "ForeignKey creates a many-to-one relationship.", correctAnswer: true, explanation: "ForeignKey is many-to-one by default." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "models.Model", value: "Base model class" },
      { label: "makemigrations", value: "Create migrations" },
      { label: "migrate", value: "Apply migrations" },
      { label: "objects.all()", value: "Get all records" },
      { label: "objects.filter()", value: "Filter records" }
    ]
  },
  {
    id: "django-8",
    number: 8,
    partLabel: "Part 1: Django Foundations",
    title: "Django Admin Panel",
    subtitle: "Built-in Admin Interface",
    difficulty: "Beginner" as const,
    estimatedMinutes: 30,
    xpReward: 60,
    prerequisites: ["django-7"],
    learningObjectives: ["Register models", "Customize admin", "Use admin features"],
    sections: [
      {
        id: "django-8-1",
        title: "Admin Setup",
        whyItMatters: "Django's admin is a powerful built-in interface.",
        content: `**Setting Up Admin:**

\`\`\`python
# blog/admin.py\nfrom django.contrib import admin\nfrom .models import Post, Category\n\nadmin.site.register(Post)\nadmin.site.register(Category)\n\`\`\`

**Creating Admin User:**

\`\`\`bash
python manage.py createsuperuser
\`\`\`

**Access Admin:**
Go to /admin/ and login with superuser credentials.

**Customizing Admin:**

\`\`\`python
@admin.register(Post)\nclass PostAdmin(admin.ModelAdmin):\n    list_display = ['title', 'author', 'created_at', 'published']\n    list_filter = ['published', 'created_at', 'author']\n    search_fields = ['title', 'content']\n    prepopulated_fields = {'slug': ('title',)}\n    date_hierarchy = 'created_at'\n    ordering = ['-created_at']\n\`\`\`

**Admin Features:**
- Automatic CRUD interface
- Filtering
- Searching
- Date hierarchies
- Ordering
- Inline editing`,
        codeExamples: [
          {
            id: "django-8-ex1",
            title: "Admin Registration",
            description: "Registering models in admin",
            code: { django: "from django.contrib import admin\nfrom .models import Post, Category, Tag\n\n@admin.register(Post)\nclass PostAdmin(admin.ModelAdmin):\n    list_display = ('title', 'author', 'status', 'created')\n    list_filter = ('status', 'created', 'author')\n    search_fields = ('title', 'content')\n    prepopulated_fields = {'slug': ('title',)}\n\n@admin.register(Category)\nclass CategoryAdmin(admin.ModelAdmin):\n    list_display = ('name', 'slug')\n    prepopulated_fields = {'slug': ('name',)}\n\nadmin.site.register(Tag)" },
            explanation: "Admin provides instant CRUD interface."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What command creates admin superuser?", options: ["createsuperuser", "createsuper", "admincreate", "makeadmin"], correctAnswer: 0, explanation: "python manage.py createsuperuser creates admin." },
        { id: "q2", type: "fill_blank", question: "Use _____ to prepopulate slug from title.", correctAnswer: "prepopulated_fields", explanation: "prepopulated_fields auto-generates slugs." },
        { id: "q3", type: "mcq", question: "What shows in list view?", options: ["list_display", "list_filter", "search_fields", "ordering"], correctAnswer: 0, explanation: "list_display defines columns." },
        { id: "q4", type: "true-false", question: "Admin requires no coding for basic CRUD.", correctAnswer: true, explanation: "Django admin provides CRUD automatically." },
        { id: "q5", type: "mcq", question: "What provides filtering sidebar?", options: ["list_display", "list_filter", "search_fields", "date_hierarchy"], correctAnswer: 1, explanation: "list_filter adds filtering options." },
        { id: "q6", type: "fill_blank", question: "Enable search with _____ in admin.", correctAnswer: "search_fields", explanation: "search_fields enables search box." },
        { id: "q7", type: "mcq", question: "What admin URL to access?", options: ["/admin/", "/django/", "/superuser/", "/manage/"], correctAnswer: 0, explanation: "Access admin at /admin/." },
        { id: "q8", type: "true-false", question: "Admin is only for superusers by default.", correctAnswer: true, explanation: "Only superusers can access admin initially." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "createsuperuser", value: "Create admin user" },
      { label: "list_display", value: "List columns" },
      { label: "list_filter", value: "Filter options" },
      { label: "search_fields", value: "Search box" }
    ]
  },
  {
    id: "django-9",
    number: 9,
    partLabel: "Part 1: Django Foundations",
    title: "Forms and User Input",
    subtitle: "Django Forms",
    difficulty: "Beginner" as const,
    estimatedMinutes: 35,
    xpReward: 70,
    prerequisites: ["django-8"],
    learningObjectives: ["Create forms", "Validate input", "Handle form submission"],
    sections: [
      {
        id: "django-9-1",
        title: "Django Forms",
        whyItMatters: "Forms handle user input securely.",
        content: `**Creating Forms:**

\`\`\`python
from django import forms\n\nclass ContactForm(forms.Form):\n    name = forms.CharField(max_length=100)\n    email = forms.EmailField()\n    message = forms.CharField(widget=forms.Textarea)\n\`\`\`

**Model Forms:**

\`\`\`python\nfrom django.forms import ModelForm\nfrom .models import Post\n\nclass PostForm(ModelForm):\n    class Meta:\n        model = Post\n        fields = ['title', 'content', 'category', 'published']\n\`\`\`

**Handling Forms in Views:**

\`\`\`python\ndef contact(request):\n    if request.method == 'POST':\n        form = ContactForm(request.POST)\n        if form.is_valid():\n            # Process form data\n            name = form.cleaned_data['name']\n            email = form.cleaned_data['email']\n            # ...\n            return redirect('success')\n    else:\n        form = ContactForm()\n    return render(request, 'contact.html', {'form': form})\n\`\`\`

**Form Validation:**

\`\`\`python\nclass MyForm(forms.Form):\n    email = forms.EmailField(required=True)\n    \n    def clean_email(self):\n        email = self.cleaned_data['email']\n        if not email.endswith('@company.com'):\n            raise forms.ValidationError(\"Use company email\")\n        return email`,
        codeExamples: [
          {
            id: "django-9-ex1",
            title: "Form Handling",
            description: "Processing forms in Django",
            code: { django: "# forms.py\nfrom django import forms\n\nclass CommentForm(forms.Form):\n    name = forms.CharField(max_length=50, required=True)\n    email = forms.EmailField(required=True)\n    comment = forms.CharField(widget=forms.Textarea(attrs={'rows': 4}))\n\n# views.py\ndef add_comment(request):\n    if request.method == 'POST':\n        form = CommentForm(request.POST)\n        if form.is_valid():\n            # Save comment\n            comment = Comment(\n                name=form.cleaned_data['name'],\n                email=form.cleaned_data['email'],\n                text=form.cleaned_data['comment']\n            )\n            comment.save()\n            return redirect('thanks')\n    else:\n        form = CommentForm()\n    return render(request, 'comment.html', {'form': form})" },
            explanation: "Form handling requires proper validation."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What checks if form data is valid?", options: ["form.validate()", "form.is_valid()", "form.check()", "form.valid()"], correctAnswer: 1, explanation: "is_valid() validates form data." },
        { id: "q2", type: "fill_blank", question: "Cleaned form data is in _____.", correctAnswer: "cleaned_data", explanation: "cleaned_data contains validated data." },
        { id: "q3", type: "mcq", question: "What provides automatic validation?", options: ["CharField", "EmailField", "Both a and b", "None"], correctAnswer: 2, explanation: "Field types provide built-in validation." },
        { id: "q4", type: "true-false", question: "Django includes CSRF protection automatically.", correctAnswer: true, explanation: "Django templates include CSRF tokens." },
        { id: "q5", type: "mcq", question: "ModelForm automatically creates form from?", options: ["Model", "View", "Template", "URL"], correctAnswer: 0, explanation: "ModelForm generates form from model." },
        { id: "q6", type: "fill_blank", question: "Custom validation goes in _____ method.", correctAnswer: "clean_fieldname", explanation: "clean_fieldname validates specific fields." },
        { id: "q7", type: "mcq", question: "What widget for multi-line text?", options: ["TextInput", "Textarea", "CharField", "MultiField"], correctAnswer: 1, explanation: "Textarea is for multi-line input." },
        { id: "q8", type: "true-false", question: "Form should check request.method.", correctAnswer: true, explanation: "Always verify GET vs POST method." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "is_valid()", value: "Validate form" },
      { label: "cleaned_data", value: "Validated data dict" },
      { label: "ModelForm", value: "Form from model" },
      { label: "{% csrf_token %}", value: "CSRF protection" }
    ]
  },
  {
    id: "django-10",
    number: 10,
    partLabel: "Part 1: Django Foundations",
    title: "Static Files and Media Uploads",
    subtitle: "Handling Files",
    difficulty: "Beginner" as const,
    estimatedMinutes: 25,
    xpReward: 50,
    prerequisites: ["django-9"],
    learningObjectives: ["Serve static files", "Handle media uploads", "Configure file storage"],
    sections: [
      {
        id: "django-10-1",
        title: "Static Files",
        whyItMatters: "Static files (CSS, JS, images) are essential for styling.",
        content: `**Setting Up Static Files:**

\`\`\`python\n# settings.py\nSTATIC_URL = '/static/'\nSTATICFILES_DIRS = [\n    BASE_DIR / 'static',\n]\n\nSTATIC_ROOT = BASE_DIR / 'staticfiles'  # For deployment\n\`\`\`

**Using Static Files:**

\`\`\`django\n{% load static %}\n<link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">\n<script src=\"{% static 'js/script.js' %}\"></script>\n<img src=\"{% static 'images/logo.png' %}\">\n\`\`\`

**Media Files (Uploads):**

\`\`\`python\n# settings.py\nMEDIA_URL = '/media/'\nMEDIA_ROOT = BASE_DIR / 'media'\n\n# models.py\nclass Post(models.Model):\n    image = models.ImageField(upload_to='posts/')\n    file = models.FileField(upload_to='files/')\n\`\`\`

**Serving Media in Development:**

\`\`\`python\n# urls.py\nfrom django.conf import settings\nfrom django.conf.urls.static import static\n\nurlpatterns = [\n    # ...\n] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)`,
        codeExamples: [
          {
            id: "django-10-ex1",
            title: "Static Files",
            description: "Using CSS and JS in templates",
            code: { django: "# Project structure:\n# project/\n#   static/\n#     css/\n#       style.css\n#     js/\n#       main.js\n#     images/\n#         logo.png\n\n# In template:\n{% load static %}\n<!DOCTYPE html>\n<html>\n<head>\n    <link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">\n</head>\n<body>\n    <img src=\"{% static 'images/logo.png' %}\" alt=\"Logo\">\n    <script src=\"{% static 'js/main.js' %}\"></script>\n</body>\n</html>" },
            explanation: "Static files are served in development and production."
          }
        ]
      }
    ],
    quiz: {
      questions: [
        { id: "q1", type: "mcq", question: "What serves static files in development?", options: ["Automatic", "Must configure", "Not possible", "Requires nginx"], correctAnswer: 0, explanation: "Django serves static files automatically in dev." },
        { id: "q2", type: "fill_blank", question: "Template tag to load static is _____ .", correctAnswer: "{% load static %}", explanation: "{% load static %} enables static files." },
        { id: "q3", type: "mcq", question: "What field for image uploads?", options: ["FileField", "ImageField", "MediaField", "UploadField"], correctAnswer: 1, explanation: "ImageField validates image files." },
        { id: "q4", type: "true-false", question: "upload_to customizes file path.", correctAnswer: true, explanation: "upload_to determines upload location." },
        { id: "q5", type: "mcq", question: "MEDIA_ROOT defines where?", options: ["Static files", "Upload files", "Database", "Templates"], correctAnswer: 1, explanation: "MEDIA_ROOT is the upload directory." },
        { id: "q6", type: "fill_blank", question: "Use _____ for URL to static files.", correctAnswer: "{% static %}", explanation: "{% static 'path' %} generates URL." },
        { id: "q7", type: "mcq", question: "What serves media in dev?", options: ["static()", "media()", "serve()", "file()"], correctAnswer: 0, explanation: "static() adds media to URL patterns." },
        { id: "q8", type: "true-false", question: "collectstatic gathers for production.", correctAnswer: true, explanation: "collectstatic collects files for deployment." }
      ],
      passingScore: 70
    },
    cheatSheet: [
      { label: "{% load static %}", value: "Enable static files" },
      { label: "{% static %}", value: "Static file URL" },
      { label: "ImageField", value: "Image upload field" },
      { label: "MEDIA_ROOT", value: "Upload directory" }
    ]
  }
];

export const djangoTrack: Track = {
  id: "django",
  title: "Django",
  titleBn: "জ্যাঙ্গো",
  tagline: "Build powerful web applications with Python",
  taglineBn: "পাইথন দিয়ে শক্তিশালী ওয়েব অ্যাপ্লিকেশন তৈরি করুন",
  icon: "https://img.icons8.com/?size=160&id=4R3j0NpX1c2G&format=png",
  colorVar: "django",
  totalChapters: djangoChapters.length,
  estimatedHours: Math.round(djangoChapters.reduce((sum, c) => sum + c.estimatedMinutes, 0) / 60),
  chapters: djangoChapters,
  brandColor: "#092E20",
  glowColor: "rgba(9, 46, 32, 0.4)",
};