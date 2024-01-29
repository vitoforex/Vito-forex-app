"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 4.2.4.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-27_!hoop8bmv8@2d#+ra-6*2z!ac^gr)&9c+u%#=jd9piy@2ww"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# sending emails
EMAIL_HOST = "smtp.gmail.com"
EMAIL_HOST_USER = "vitoforexoperations@gmail.com"

EMAIL_PORT = 547
EMAIL_USE_TLS = True
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"



ALLOWED_HOSTS = ["localhost", "vitoforex.com", "http://174.138.7.226", "*" ]


# Application definition

INSTALLED_APPS = [
    "ckeditor",
    "UserAuthApp",
    "corsheaders",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django_nextjs",
    "PagesApp",
    "CoursesApp",
    "BlogApp",
    "ForexContentApp",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# session settings
SESSION_COOKIE_SECURE = True
SESSION_COOKIE_HTTPONLY = True
SESSION_COOKIE_NAME = "session_cookie"
SESSION_EXPIRE_AT_BROWSER_CLOSE = True
SESSION_COOKIE_AGE = 3600  # Set to 1 hour (3600 seconds)
SESSION_ENGINE = 'django.contrib.sessions.backends.cache'  # Use cache-based sessions
SESSION_SAVE_EVERY_REQUEST = True



ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            os.path.join(BASE_DIR, "frontend/build/"),
            os.path.join(BASE_DIR, "templates"),
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
"""

DATABASES = {
    "default": {
         'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'vitoforexdb',
        'USER': 'vitoforex',
        'PASSWORD': '@Ssekamatte1',
        'HOST': 'localhost',
        'PORT': '',
    }
}
"""



# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "/static/"

STATICFILES_DIRS = [os.path.join(BASE_DIR, "frontend/build/static")]


STATIC_ROOT = os.path.join(BASE_DIR, "static_root")

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# media
MEDIA_URL = "/media/"  # media url

MEDIA_ROOT = os.path.join(BASE_DIR, "media")  # were media files are located

REDIRECT_URL = "localhost:3000"

# stripe payments

"""
STRIPE_SECRET_KEY_TEST = "sk_test_51NnLJiCOWoAHqo4JynKkzgl7VtwPjzbkKPnBREjlXZ2W0PFynxa5oz3eRWxE7bxggafuwMva3XuusoNE4JiiqZn00072uwh35o"

STRIPE_WEB_HOOK_TEST = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
"""


# custom user model
AUTH_USER_MODEL = "UserAuthApp.CustomUser"
# cors
CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:3000",  # Add the origin(s) of your frontend here
    "https://joshuab.pythonanywhere.com",
    "http://127.0.0.1:8000",
    "http://localhost:3000",
    
]

CORS_ALLOW_METHODS = (
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
)

CORS_ALLOW_HEADERS = (
    "accept",
    "authorization",
    "content-type",
    "user-agent",
    "x-csrftoken",
    "x-requested-with",
)

CSRF_TRUSTED_ORIGINS = [
    "http://127.0.0.1:3000",  # Add the origin(s) of your frontend here
    "https://joshuab.pythonanywhere.com",
    
]
# React routes
REACT_ROUTES = [
    "/",
    "courses",
    "about",
]
