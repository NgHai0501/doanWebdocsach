#!/bin/sh

# Kiểm tra xem biến môi trường VITE_URL_BACKEND có tồn tại không
if [ -z "$VITE_URL_BACKEND" ]; then
    echo "VITE_URL_BACKEND not set, using default"
    export VITE_URL_BACKEND="http://default-backend-url"
fi

# Thay thế placeholder trong nginx.conf bằng giá trị của VITE_URL_BACKEND
sed -i "s|\$VITE_URL_BACKEND|$VITE_URL_BACKEND|g" /etc/nginx/conf.d/nginx.conf

# Kiểm tra xem việc thay thế đã thành công chưa
cat /etc/nginx/conf.d/nginx.conf

# Khởi động Nginx
nginx -g "daemon off;"
