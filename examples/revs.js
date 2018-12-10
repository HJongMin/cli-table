
/**
 * Module requirements.
 */

var Table = require('../lib');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('/tmp/result.json', 'utf8'));


// var obj = {
//   "testsuites": {
//     "testsuite": [
//       {
//         "testcase": [
//           {
//             "system-out": {
//               "contents": [
//                 "http://testex.embian.com/#/main/testLab/tResult/summary/0?tid=88280"
//               ]
//             },
//             "name": "SAMSUNG GALAXY_NOTE4 / ANDROID 6.0",
//             "time": "315"
//           },
//           {
//             "error": {
//               "message": [
//                 "http://testex.embian.com/#/main/testLab/tResult/summary/0?tid=88280"
//               ]
//             },
//             "name": "SAMSUNG GALAXYS7_EDGE / ANDROID 6.0",
//             "time": "365"
//           },
//           {
//             "failure": {
//               "message": [
//                 "http://testex.embian.com/#/main/testLab/tResult/summary/0?tid=88280"
//               ]
//             },
//             "name": "SAMSUNG GALAXY_S7 / ANDROID 6.0",
//             "time": "215"
//           },
//           {
//             "system-out": {
//               "contents": [
//                 "http://testex.embian.com/#/main/testLab/tResult/summary/0?tid=88281"
//               ]
//             },
//             "name": "LG G5 / ANDROID 7.0",
//             "time": "237"
//           }
//         ],
//         "name": "\uc1fc\ud551\uc571 \ud14c\uc2a4\ud2b8.TestBot"
//       }
//     ],
//     "name": "TestBot Test"
//   }
// };


var table = new Table({
  chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' },
  style: { 'padding-left': 0, 'padding-right': 6 }
});

var testcase = obj['testsuites']['testsuite'][0]['testcase'];

for ( var i = 0; i < testcase.length; i++ ) {

  var test_status = '';
  var message = '';

  if (testcase[i].hasOwnProperty('system-out') ) {
  	test_status = 'Passed';
  	message = testcase[i]['system-out']['contents'][0];
  } else if ( testcase[i].hasOwnProperty('error') ) {
  	test_status = 'Error';
  	message = testcase[i]['error']['message'][0];
  } else if ( testcase[i].hasOwnProperty('failure') ) {
  	test_status = 'Fail';
  	message = testcase[i]['failure']['message'][0];
  }

  table.push([i, test_status, testcase[i]['name'], testcase[i]['time'], message ])
}

console.log('****************** apptest.ai Test Result ******************')
console.log(table.toString());
console.log('************************************************************')
