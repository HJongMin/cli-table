
/**
 * Module requirements.
 */

var Table = require('../lib');

/**
 * Example.
 */

/* col widths */
var table = new Table({
    head: ['Rel', 'Change', 'By', 'When']
  , colWidths: [6, 21, 25, 17]
});

table.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']
  , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
);

console.log(table.toString());


/* compact */
var table = new Table({
    head: ['Rel', 'Change', 'By', 'When']
  , colWidths: [6, 21, 25, 17]
  , style : {compact : true, 'padding-left' : 1}
});

table.push(
    ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']
  , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
  , []
  , ['v0.1', 'Testing something cool', 'rauchg@gmail.com', '8 minutes ago']
);

console.log(table.toString());

/* headless */
var headless_table = new Table();
headless_table.push(['v0.1', 'Testing something cool', 'rauchg@gmail.com', '7 minutes ago']);
console.log(headless_table.toString());

/* vertical */
var vertical_table = new Table();
vertical_table.push({ "Some Key": "Some Value"},
                    { "Another much longer key": "And its corresponding longer value"}
);

console.log(vertical_table.toString());

/* cross */
var cross_table = new Table({ head: ["", "Header #1", "Header #2"] });
cross_table.push({ "Header #3": ["Value 1", "Value 2"] },
                 { "Header #4": ["Value 3", "Value 4"] });
console.log(cross_table.toString());




const table = new Table({
  chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' },
  style: { 'padding-left': 0, 'padding-right': 0 }
});

table.push(
    ['LG G5 / ANDROID 7.0', '237', 'http://testex.embian.com/#/main/testLab/tResult/summary/0?tid=88281']
  , ['SAMSUNG GALAXY_NOTE4 / ANDROID 6.0', '315', 'http://testex.embian.com/#/main/testLab/tResult/summary/0?tid=88280']
);

console.log(table.toString());
