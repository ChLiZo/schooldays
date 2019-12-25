# schooldays
專題題題題題題


<!DOCTYPE html>
<html>
  <head>
    <title>course</title>
  </head>
  <script></script>
  <body> 
        <table border="1" width=300>
          <tr>
            <td></td>
            <td align="center">一</td>
            <td align="center">二</td>
            <td align="center">三</td>
            <td align="center">四</td>
            <td align="center">五</td>
            <td align="center">六</td>
            <td align="center">七</td>
          </tr>
          <% var time =['0810-0900','0910-1000','1010-1100','1110-1200','1330-1420','1430-1520','1530-1620','1630-1720'] %>
          <% for(var i=0;i<8;i++){%>
            <tr>
              <td align="center">第<%= i+1 %>節<br><%= time[i]%></td>
              <% for(var j=1;j<=7;j++){ %>
                <td align="center"></td>
              <% } %>
            </tr>
          <% } %>
        </table>
  </body>
</html>
