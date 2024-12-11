import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />; // Chuyển hướng về trang đăng nhập nếu chưa đăng nhập
    }

    return children; // Nếu đã xác thực, hiển thị các children (route bảo mật)
};

export default RequireAuth;
