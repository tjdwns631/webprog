<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>testradio.jsp</title>
</head>
<body>
    <%
    String sex = request.getParameter("sex");
    String year = request.getParameter("year");
    
    %>
    <h3>성별:<%=sex%></h3>
    <h3>학년:<%=year%></h3>
</body>
</html>