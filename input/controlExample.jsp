<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>controlExample.jsp</title>
</head>
<body>
    <%
    String SF = request.getParameter("firstName");
    String RB = request.getParameter("lastName");
    String dt = request.getParameter("hireDate");
    String se= request.getParameter("computer");
    %>
    <input type="text" name="firstName" value=<%=SF%>><br>
        <input type="text" name="lastName" value=<%=RB%>><br>
        <input type="date" name="hireDate" value=<%=dt%>><br>
        <select name="computer">
            <option value=""><%=se%></option>
        </select><br>
</body>
</html>