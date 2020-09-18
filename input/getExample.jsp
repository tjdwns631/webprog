<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input/getExample.jsp</title>
</head>
<body>
    <%
    String userName = request.getParameter("userName");
    String passwd = request.getParameter("password");
    %>
    <h3>사용자명: <%=userName%></h3>
    <h3>비밀번호: <%=passwd%></h3>
    
</body>
</html>