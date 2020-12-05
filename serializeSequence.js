const o = require('lodash');

const r = {
    numberTo2bytes: function (e) {
        const t = Buffer.alloc(2);
        return t.writeUInt16LE(e, 0), Array.from(t);
    }
}

const n = {
    MacroProgamType: {
        "1": "KEY_UP",
        "2": "KEY_DOWN",
        "3": "TIME_DELAY",
        "4": "MOUSE_UP",
        "5": "MOUSE_DOWN",
        "KEY_UP": 1,
        "KEY_DOWN": 2,
        "TIME_DELAY": 3,
        "MOUSE_UP": 4,
        "MOUSE_DOWN": 5
    }
}

function serializeSequence(e) {
    const t = o.sortBy(e, e => e.downTime),
        a = o.sortBy(e, e => e.upTime);
    let i = [];
    for (; 0 < t.length || 0 < a.length;) {
        const e = t[0],
            o = a[0];
        if (e && o && e.downTime < o.upTime) {
            const e = t.shift();
            e &&
            i.push({
                keyCode: e.keyCode,
                time: e.downTime,
                type: n.MacroProgamType.KEY_DOWN
            });
        } else {
            const e = a.shift();
            e &&
            i.push({
                keyCode: e.keyCode,
                time: e.upTime,
                type: n.MacroProgamType.KEY_UP
            });
        }
    }
    if (0 === i.length) return [];
    const l = [];
    let d = i[0].time;
    for (let t of i) {
        const e = t.time - d;
        (d = t.time),
        0 < e &&
        l.push(n.MacroProgamType.TIME_DELAY, ...r.numberTo2bytes(e)),
            l.push(t.type, ...r.numberTo2bytes(t.keyCode));
    }
    return l;
}

module.exports = serializeSequence;


