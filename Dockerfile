FROM nginx:alpine

# 1. Accept the gcloud substitution variable
ARG _GOOGLE_API_KEY

# 2. Copy the files
COPY public /usr/share/nginx/html

# 3. The Injection logic
RUN sed -i "s/GOOGLE_API_KEY_PLACEHOLDER/${_GOOGLE_API_KEY}/g" /usr/share/nginx/html/index.html && \
    sed -i "s/GOOGLE_API_KEY_PLACEHOLDER/${_GOOGLE_API_KEY}/g" /usr/share/nginx/html/js/app.js

# 4. Standard Nginx Port for Cloud Run
RUN sed -i 's/listen\(.*\)80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]