"use strict";
exports.__esModule = true;
//Shifts at which the user is working for the day
exports.usershifts = [
    {
        start: '0600',
        end: '1000'
    },
    {
        start: '1600',
        end: '2000'
    }
];
// Shifts available for the day
exports.globalShiftList = [
    {
        start: '0000',
        end: '2359'
    },
    {
        start: '0600',
        end: '1800'
    },
    {
        start: '0000',
        end: '1200'
    },
    {
        start: '0600',
        end: '1200'
    },
    {
        start: '1800',
        end: '2359'
    },
    {
        start: '0000',
        end: '0600'
    },
    {
        start: '1200',
        end: '2359'
    },
    {
        start: '1200',
        end: '1800'
    }
];
//Function to check more available shifts for the day
exports.checkfunction = function (usershift, globalShiftList) {
    var returnShift = [];
    var prevShift = [];
    exports.usershifts.forEach(function (usershift, index) {
        globalShiftList.forEach(function (shift) {
            var startBeforeUsershift = Number(shift.start) < Number(usershift.start) && Number(shift.end <= usershift.start);
            var startAfterUserShift = Number(shift.start) >= Number(usershift.end) && Number(shift.end) > Number(shift.start);
            if (startBeforeUsershift || startAfterUserShift) {
                if (index === 0) {
                    returnShift.push(shift);
                }
            }
            else {
                prevShift.forEach(function (availableshift) {
                    if (availableshift === shift) {
                        returnShift.splice(returnShift.indexOf(shift), 1);
                    }
                });
            }
            prevShift = returnShift;
        });
    });
    return (returnShift);
};
