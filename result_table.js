
/**
 * Module requirements.
 */

var Table = require('./lib');
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
  // chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
  //        , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
  //        , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
  //        , 'right': '' , 'right-mid': '' , 'middle': ' ' },
  style: { 'padding-left': 1, 'padding-right': 5 }
});
table.push(['No.', 'Status', 'Device', 'Duration', 'Link']);
var testcase = obj['testsuites']['testsuite'][0]['testcase'];

for ( var i = 0; i < testcase.length; i++ ) {

  var number = i;
  var result_status = '';
  var name = testcase[i]['name'];
  var min = testcase[i]['time']/60;
  var sec = testcase[i]['time']%60;
  var test_time = parseInt(min) + 'm ' + sec + 's';
  var link = '';

  if (testcase[i].hasOwnProperty('system-out') ) {
  	result_status = 'Passed';
  	link = testcase[i]['system-out']['contents'][0];
  } else if ( testcase[i].hasOwnProperty('error') ) {
  	result_status = 'Error';
  	link = testcase[i]['error']['message'][0];
  } else if ( testcase[i].hasOwnProperty('failure') ) {
  	result_status = 'Fail';
  	link = testcase[i]['failure']['message'][0];
  }

  table.push([number, result_status, name, test_time, link])
}

console.log('\n');
console.log('[ apptest.ai Test Result ]')
console.log(table.toString());
console.log('\n');

// console.log('************************************************************')
