import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Code2, RefreshCw, Terminal, Server } from "lucide-react";

const DEFAULT_CODE = `# Django Playground
# Build powerful web applications with Python

# Models Example
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey('User', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

# Views Example
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Django!")

def post_detail(request, post_id):
    return HttpResponse(f"Post #{post_id}")

def render_template(request):
    context = {'title': 'Home', 'posts': []}
    return render(request, 'index.html', context)

# URLs Configuration
from django.urls import path

urlpatterns = [
    path('', home, name='home'),
    path('posts/<int:post_id>/', post_detail, name='post_detail'),
]

# Admin Registration
from django.contrib import admin

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created_at', 'published']
    list_filter = ['published', 'created_at']
    search_fields = ['title', 'content']

# Forms Example
from django import forms

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'published']

print("Django Playground Ready!")
print("Key Concepts: Models, Views, URLs, Admin, Forms")`;

interface DjangoCompilerProps {
  initialCode?: string;
}

export default function DjangoCompiler({ initialCode }: DjangoCompilerProps) {
  const [code, setCode] = useState(initialCode || DEFAULT_CODE);
  const [output, setOutput] = useState<Array<{type: string; content: string}>>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);

    setTimeout(() => {
      const results: Array<{type: string; content: string}> = [];
      
      // Simulate Django concepts
      const outputs = [
        "Django Playground Ready!",
        "",
        "📚 Django Key Concepts:",
        "",
        "🏗️  Models (models.py):",
        "   - Define database structure",
        "   - ORM for database operations",
        "   - Relationships (ForeignKey, ManyToMany)",
        "",
        "📄 Views (views.py):",
        "   - Handle HTTP requests",
        "   - Return HTTP responses",
        "   - Business logic",
        "",
        "🔗 URLs (urls.py):",
        "   - Route URLs to views",
        "   - Dynamic URL parameters",
        "   - Named URLs for reverse lookup",
        "",
        "⚙️ Admin (admin.py):",
        "   - Automatic CRUD interface",
        "   - Search, filter, ordering",
        "   - Custom admin panels",
        "",
        "📝 Forms (forms.py):",
        "   - Form validation",
        "   - CSRF protection",
        "   - Model forms from models",
        "",
        "🗄️ Migrations:",
        "   - makemigrations: Create migrations",
        "   - migrate: Apply to database",
        "",
        "✅ Run 'python manage.py runserver' in real Django project!",
      ];
      
      outputs.forEach(o => results.push({type: 'output', content: o}));
      
      setOutput(results);
      setIsRunning(false);
    }, 500);
  };

  const handleReset = () => {
    setCode(DEFAULT_CODE);
    setOutput([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <a href="/compiler" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </a>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎸</span>
            <h1 className="text-xl font-bold text-white">Django Playground</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            onClick={runCode}
            disabled={isRunning}
            className="bg-[#092E20] text-white hover:bg-[#092E20]/80"
          >
            <Play className="w-4 h-4 mr-2" />
            {isRunning ? "Running..." : "Execute (Shift+Enter)"}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div className="w-1/2 flex flex-col border-r border-gray-700">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Code2 className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Python Editor</span>
            <span className="ml-2 text-xs text-gray-500">(Django code)</span>
          </div>
          
          <div className="flex-1 overflow-auto">
            <CodeMirror
              value={code}
              height="100%"
              theme={oneDark}
              extensions={[python()]}
              onChange={(value) => setCode(value)}
              className="h-full text-base"
            />
          </div>

          {/* Output Console */}
          <div className="h-48 bg-gray-800 border-t border-gray-700">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-700">
              <Terminal className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Output</span>
            </div>
            <div className="p-3 font-mono text-sm overflow-auto h-32 text-green-400">
              {output.length > 0 ? (
                output.map((item, index) => (
                  <div key={index} className="mb-1 whitespace-pre">
                    {item.content}
                  </div>
                ))
              ) : (
                <span className="text-gray-500">Run code to see output...</span>
              )}
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-700">
            <Server className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">Django Quick Reference</span>
          </div>
          <div className="flex-1 p-4 overflow-auto text-gray-300">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#092E20] mb-2">Django Project Setup</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`pip install django
django-admin startproject mysite
cd mysite
python manage.py runserver

# Create app
python manage.py startapp blog`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#092E20] mb-2">Models</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    
    def __str__(self):
        return self.title

# Run migrations
python manage.py makemigrations
python manage.py migrate`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#092E20] mb-2">Views</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello!")

def detail(request, id):
    return render(request, 'detail.html')`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#092E20] mb-2">URLs</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('post/<int:id>/', views.detail),
]`}
                </pre>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#092E20] mb-2">Admin</h3>
                <pre className="bg-gray-800 p-3 rounded text-sm font-mono">
{`# Create superuser
python manage.py createsuperuser

# Register in admin.py
admin.site.register(Post)

# Custom admin
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}