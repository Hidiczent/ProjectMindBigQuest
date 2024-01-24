<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
  <%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	  <%
    String url = "jdbc:mysql://localhost:3306/mindbigques_project";
    String user = "root";
    String pwd = "";
    Connection conn = null;
    
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection cn = DriverManager.getConnection(url, user, pwd);
        response.getWriter().println("Connection Successful");
        cn.close(); 
    } catch(SQLException | ClassNotFoundException e) {
        response.getWriter().println("Failed Connection: " + e.getMessage());
    } 
    %>
</body>
</html>