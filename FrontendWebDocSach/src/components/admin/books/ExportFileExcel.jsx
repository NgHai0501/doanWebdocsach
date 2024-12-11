import React from 'react';
import { Button } from 'react-bootstrap';
import { exportExcelFile } from '../../../service/BookService';

function ExportFileExcel() {

    function handleExport() {
        exportExcelFile()
            .then((response) => {
                const url = window.URL.createObjectURL(response.data);  // Dùng response.data vì axios trả về blob trực tiếp
                const a = document.createElement('a');
                a.href = url;
                a.download = 'books.xlsx';  // Tên file sẽ tải xuống
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error("Error exporting file:", error);
                alert("Xuất file thất bại!");
            });
    }

    return (
        <Button
            className="mb-3"
            variant="primary"
            onClick={handleExport}
        >
            Export Excel
        </Button>
    );
}

export default ExportFileExcel