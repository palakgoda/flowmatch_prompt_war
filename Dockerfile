FROM nginx:alpine

# Copy the static files
COPY public /usr/share/nginx/html

# Configure Nginx to listen on port 8080 (Cloud Run default)
RUN sed -i 's/listen\(.*\)80;/listen 8080;/g' /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
