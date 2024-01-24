<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
</head>
<body>
<%@ page import="java.sql.*" %>
<%
String email = request.getParameter("email");
String password = request.getParameter("password");
try {
    // ตรวจสอบว่าชื่อผู้ใช้หรืออีเมลมีในฐานข้อมูลหรือไม่
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/mindbigques_project", "root", "");
    
    // ใช้ PreparedStatement เพื่อป้องกันการฉีด SQL
    PreparedStatement pstmt = conn.prepareStatement("SELECT * FROM tb_user WHERE GMAIL = ?");
    pstmt.setString(1, email);
    
    ResultSet rs = pstmt.executeQuery();

    if (rs.next()) {
        // พบผู้ใช้, ตรวจสอบรหัสผ่าน
        if (password.equals(rs.getString("PWD"))) {
            // รหัสผ่านถูกต้อง, ตั้งค่าตัวแปร session และ redirect ไปที่ index.jsp
            boolean isLoggedIn = true;
            session.setAttribute("login", isLoggedIn);
            response.sendRedirect("spering-html/CreateGame.html");
        } else {
            out.println("<script> alert('ລະຫັດບໍ່ຖືກຕ້ອງ'); </script>");
            out.println("<script> window.location.href='spering-html/index.html'; </script>");
        }
    } else {
        // ไม่พบผู้ใช้ที่ลงทะเบียน
        out.println("<script> alert('ບໍ່ພົບຜູ້ໃຊ້'); </script>");
        out.println("<script> window.location.href='index.html'; </script>");
        
    }
    // ปิดทรัพยากรที่ใช้
    rs.close();
    pstmt.close();
    conn.close();
} catch (Exception e) {
    out.println(e);
}
%>
</body>
</html>
