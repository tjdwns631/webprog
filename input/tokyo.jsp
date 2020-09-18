<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <%
    request.setCharacterEncoding("UTF-8");
    String id = request.getParameter("id");
    String pass = request.getParameter("password");
    String date = request.getParameter("date");
    String sex = request.getParameter("sex");
    String email = request.getParameter("email");
    String agr = request.getParameter("agr");
    String tel = request.getParameter("tel");
    String tel1 = request.getParameter("tel1");
    String[] hobi = request.getParameterValues("hobi");
    String area = request.getParameter("area");
    %>
    <span style="font-size: 50px;">&#129409;</span>
    <h3>아이디:<%=id%></h3>
    <h3>비밀번호:<%=pass%></h3>
    <h3>생년월일:<%=date%></h3>
    <h3>성별:<%=sex%></h3>
    <h3>이메일:<%=email%></h3>
    <h3>수신설정:<%=agr%></h3>
    <h3>번호:<%=tel%>-<%=tel1%></h3>
    <%
    for( String hob : hobi){
       %>
       <p>취미:<%=hob%></p>
       <% 
    }
    %>

    <h3>자기소개:<%=area%></h3>
</body>

</html>