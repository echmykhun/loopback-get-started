/**
 * Created by Yevhen on 09.08.2015.
 */

module.exports = function(app) {
    var router = app.loopback.Router();
    router.get('/ping', function(req, res) {
        res.send('pongaroo');
    });
    app.use(router);
}