<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>testExample.jsp</title>
</head>

<body>
    <%
    request.setCharacterEncoding("UTF-8");
    String firstName = request.getParameter("firstName");
    String lastName = request.getParameter("lastName");
    String email = request.getParameter("email");
    String txtar = request.getParameter("txtar");
    %>
    <table border="1">
        <tr>
            <td>이름</td>
            <td width="70%" align="center"><%=firstName%></td>
        </tr>
        <tr>
            <td>성</td>
            <td align="center"><%=lastName%></td>
        </tr>
        <tr>
            <td>이메일</td>
            <td align="center"><%=email%></td>
        </tr>
        <h3>내용: <%=txtar%></h3>
</body>

</html>