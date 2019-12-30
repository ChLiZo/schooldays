# schooldays
專題題題題題題


router.post('/', function (req, res) {
    var temp = [];

    function selected(a) {
        console.log('into select');
        pool.query('insert into choose(id,c_id) values(?,?)', [req.session.username, temp[a]], function (err) {
            console.log('temp[i]:',temp[a]);
            if (err) throw err;
            console.log('select done');
        })
    }
    for (i in req.body.name) {
        temp[i] = req.body.name[i];
    }

    pool.query('select c_time from course where c_id in (?)', [temp], function (err, course) {
        console.log('course:',course);
        if (err) throw err;
        for (a in course) {
            console.log('i:',a);
            var c = 2;
            pool.query('select c_time from course inner join choose on course.c_id = choose.c_id where choose.id=?', [req.session.username], function (err, choose) {
                console.log('i & choose:',a,choose);
                if (err) throw err;
                if(!choose.length){
                    console.log('no choose i:',a)
                    selected(a);
                }else{
                    for (j in choose) {
                        if (course[a].c_time.charAt(0) == choose[j].c_time.charAt(0)) {
                            console.log('same week');
                            if (course[a].c_time.slice(1) == choose[j].c_time.slice(1)) {
                                c = 1;
                                console.log('same time');
                                break;
                            }else {
                                selected(a);
                                console.log('not same time');
                            }
                        }else {
                            selected(a);
                            console.log('not same week');
                        }
                        
                    }console.log('Js for end');
                }
                
            })
        }
    })


    res.redirect('/test1');
});
