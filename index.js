// run 
ode index.js in the terminal

var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://gitlab.colonial.elec/api/v4/groups',
  headers: { 
    'PRIVATE-TOKEN': 'glpat-9Ziadv7FFn4iQjwsvgXG', 
    'Content-Type': 'application/json'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
