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
            
##########################################################################################################

var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');


router.post('/', function (req, res) {
    var ll = [];
    //console.log(req.body.name);

    if (typeof (req.body.name) == 'string') {
        ll[0] = req.body.name;
        n = 1;
    } else {
        n = req.body.name.length;
        for (var i = 0; i < req.body.name.length; i++) {
            ll[i] = req.body.name[i];
        }
    }

    pool.query("select c_time from course where c_name in (?)", [ll], function (err, baby) {  //根據帳號讀取資料
        if (err) throw err;
        let set = 0;
        console.log(baby[0].c_time.charAt(0));

        for (let i = 0; i < baby.length; i++) {
            for (let j = i + 1; j < baby.length; j++) {
                if (j == baby.length) {
                    break;
                }
                if (baby[i].c_time.charAt(0) == baby[j].c_time.charAt(0)) {
                    console.log('**');
                    let ii = i
                    let jj = j;

                    if (baby[ii].c_time.charAt(1) == baby[jj].c_time.charAt(1) || baby[ii].c_time.charAt(1) == baby[jj].c_time.charAt(2) || baby[ii].c_time.charAt(1) == baby[jj].c_time.charAt(3)
                        || baby[ii].c_time.charAt(2) == baby[jj].c_time.charAt(1) || baby[ii].c_time.charAt(2) == baby[jj].c_time.charAt(2) || baby[ii].c_time.charAt(2) == baby[jj].c_time.charAt(3)
                        || baby[ii].c_time.charAt(3) == baby[jj].c_time.charAt(1) || baby[ii].c_time.charAt(3) == baby[jj].c_time.charAt(2) || baby[ii].c_time.charAt(3) == baby[jj].c_time.charAt(3)) {
                        console.log('***');
                        set = 1;
                    }
                    console.log('####');

                }
                console.log('###');
            }
            if (i == baby.length - 1) {
                if (set == 0) {
                    for (var k = 0; k < n; k++) {
                        pool.query("select c_id from course where c_name=?", [ll[k]], function (err, result) {  //根據帳號讀取資料
                            if (err) throw err;
                            pool.query('select * from choose where id = ? AND c_id = ?', [req.session.username, result[0].c_id], function (err, search) {
                                if (err) throw err;
                                console.log("gel");
                                if (!search.length) {
                                    pool.query('insert into choose(id,c_id) values(?,?)', [req.session.username, result[0].c_id], function (err, asd) {  //根據帳號讀取資料
                                        if (err) throw err;

                                        return;
                                    });

                                } else {
                                    return;
                                }
                            })

                        })
                    }
                  // res.redirect('/test1');
                }
            }
            else if (set == 1) {
                console.log('win');
            }
            if (set == 1) {
                console.log('win2')
            }
        }
        if (set == 1) {
            console.log('win3');

        }
    })
    res.redirect('/test1')

})


//ll紀錄req長度\








//SELECT SUBSTRING('www.yuanrengu.com', 1, 1)




module.exports = router;

function newFunction(res) {
    res.render('test1');
}

            
            
            
