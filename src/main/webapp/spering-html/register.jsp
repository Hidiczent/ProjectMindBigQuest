<%@ page import="java.sql.*" %>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Registration Result</title>
</head>
<body>
    <h2>Registration Result:</h2>

    <%
        // Retrieve parameters from the request
        String email = request.getParameter("email");
        String userName = request.getParameter("Username");
        String password = request.getParameter("password");

        // Check if parameters are null or empty
        if (email == null || email.trim().isEmpty() ||
            userName == null || userName.trim().isEmpty() ||
            password == null || password.trim().isEmpty()) {
            out.println("<script>alert('ກາລູນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ');</script>");
        } else if (password.length() < 8) {
            out.println("<script>alert('ຕ້ອງປ້ອນລະຫັດຜ່ານໃຫ້ກາຍ8ໂຕອັກສອນ');</script>");
        } else {
            Connection conn = null;
            try {
                // Establish the database connection
                String jdbcUrl = "jdbc:mysql://localhost:3306/mindbigques_project";
                String dbUser = "root";
                String dbPassword = "";

                Class.forName("com.mysql.cj.jdbc.Driver");
                conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword);

                // Prepare the SQL statement
                String sql = "INSERT INTO tb_user (GMAIL, USERNAME, PWD) VALUES (?, ?, ?)";
                try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
                    // Bind parameters
                    pstmt.setString(1, email);
                    pstmt.setString(2, userName);
                    pstmt.setString(3, password);

                    // Execute the SQL statement
                    int rowsAffected = pstmt.executeUpdate();
	
                    // Check if the insert was successful
                    if (rowsAffected > 0) {
                    	out.println("<script>alert('ສ້າງລະຫັດຜ່ານສຳເລັດແລ້ວ');</script>");
                    	 out.println("<script> window.location.href='indexplaygame.html'; </script>");
                     //   out.println("Insert successfully");
                    } else {
                        out.println("Error: Insert failed");
                    }
                }
            } catch (ClassNotFoundException | SQLException e) {
                e.printStackTrace();
                out.println("Error: " + e.getMessage());
            } finally {
                // Close the database connection
                if (conn != null) {
                    try {
                        conn.close();
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    %>
</body>
</html>
