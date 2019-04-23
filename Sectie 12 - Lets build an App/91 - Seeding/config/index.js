const configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@nodecourse-9hxka.mongodb.net/todos?retryWrites=true';
    }

}
