const app = require("./app");

let this_is_answer = [ { start: '0000', end: '0600' } ];

test('should should print user shifts', () => {
    expect(app.checkfunction(app.usershifts,app.globalShiftList)).toStrictEqual(this_is_answer);
})

