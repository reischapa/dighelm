const originalMap = new Map(
    [
        [1, {name: "Esc", info: "Esc", value: 41}],
        [2, {name: "1", value: 30}],
        [
            3,
            {
                name: "2",
                value: 31,
            },
        ],
        [4, {name: "3", value: 32}],
        [5, {name: "4", value: 33}],
        [6, {name: "5", value: 34}],
        [
            7,
            {
                name: "6",
                value: 35,
            },
        ],
        [8, {name: "7", value: 36}],
        [9, {name: "8", value: 37}],
        [
            10,
            {
                name: "9",
                value: 38,
            },
        ],
        [11, {name: "0", value: 39}],
        [12, {name: "-_", value: 45}],
        [
            13,
            {
                name: "=+",
                value: 46,
            },
        ],
        [14, {name: "Backspace", info: "Backspace", value: 42}],
        [
            15,
            {
                name: "Tab",
                info: "Tab",
                value: 43,
            },
        ],
        [16, {name: "Q", value: 20}],
        [17, {name: "W", value: 26}],
        [
            18,
            {
                name: "E",
                value: 8,
            },
        ],
        [19, {name: "R", value: 21}],
        [20, {name: "T", value: 23}],
        [
            21,
            {
                name: "Y",
                value: 28,
            },
        ],
        [22, {name: "U", value: 24}],
        [23, {name: "I", value: 12}],
        [
            24,
            {
                name: "O",
                value: 18,
            },
        ],
        [25, {name: "P", value: 19}],
        [26, {name: "[{", value: 47}],
        [
            27,
            {
                name: "]}",
                value: 48,
            },
        ],
        [28, {name: "Enter", info: "Enter", value: 40}],
        [
            29,
            {
                name: "Ctrl",
                info: "Left Ctrl",
                value: 224,
            },
        ],
        [30, {name: "A", value: 4}],
        [31, {name: "S", value: 22}],
        [
            32,
            {
                name: "D",
                value: 7,
            },
        ],
        [33, {name: "F", value: 9}],
        [34, {name: "G", value: 10}],
        [
            35,
            {
                name: "H",
                value: 11,
            },
        ],
        [36, {name: "J", value: 13}],
        [37, {name: "K", value: 14}],
        [
            38,
            {
                name: "L",
                value: 15,
            },
        ],
        [39, {name: ";:", value: 51}],
        [40, {name: '"', value: 52}],
        [
            41,
            {
                name: "`~",
                value: 53,
            },
        ],
        [42, {name: "Shift", info: "Left Shift", value: 225}],
        [43, {name: "\\|", value: 49}],
        [
            44,
            {
                name: "Z",
                value: 29,
            },
        ],
        [45, {name: "X", value: 27}],
        [46, {name: "C", value: 6}],
        [
            47,
            {
                name: "V",
                value: 25,
            },
        ],
        [48, {name: "B", value: 5}],
        [49, {name: "N", value: 17}],
        [
            50,
            {
                name: "M",
                value: 16,
            },
        ],
        [51, {name: ",<", value: 54}],
        [52, {name: ".>", value: 55}],
        [
            53,
            {
                name: "/?",
                value: 56,
            },
        ],
        [54, {name: "Shift", info: "Right Shift", value: 229}],
        [
            56,
            {
                name: "Alt",
                info: "Left Alt",
                value: 226,
            },
        ],
        [57, {name: "Space", info: "Space", value: 44}],
        [
            58,
            {
                name: "CapsLock",
                info: "CapsLock",
                value: 57,
            },
        ],
        [59, {name: "F1", value: 58}],
        [60, {name: "F2", value: 59}],
        [
            61,
            {
                name: "F3",
                value: 60,
            },
        ],
        [62, {name: "F4", value: 61}],
        [63, {name: "F5", value: 62}],
        [
            64,
            {
                name: "F6",
                value: 63,
            },
        ],
        [65, {name: "F7", value: 64}],
        [66, {name: "F8", value: 65}],
        [
            67,
            {
                name: "F9",
                value: 66,
            },
        ],
        [68, {name: "F10", value: 67}],
        [69, {name: "NumLock", value: 83}],
        [
            70,
            {
                name: "Scroll Lock",
                value: 71,
            },
        ],
        [71, {name: "7", value: 95}],
        [72, {name: "8", value: 96}],
        [
            73,
            {
                name: "9",
                value: 97,
            },
        ],
        [74, {name: "-", value: 86}],
        [75, {name: "4", value: 92}],
        [
            76,
            {
                name: "5",
                value: 93,
            },
        ],
        [77, {name: "6", value: 94}],
        [78, {name: "+", value: 87}],
        [
            79,
            {
                name: "1",
                value: 89,
            },
        ],
        [80, {name: "2", value: 90}],
        [81, {name: "3", value: 91}],
        [
            82,
            {
                name: "0",
                value: 98,
            },
        ],
        [83, {name: ".", value: 99}],
        [87, {name: "F11", value: 68}],
        [
            88,
            {
                name: "F12",
                value: 69,
            },
        ],
        [91, {name: "PrintScreen", value: 70, alias: "PS"}],
        [
            3612,
            {
                name: "Enter",
                value: 88,
            },
        ],
        [3613, {name: "Ctrl", info: "Right Ctrl", value: 228}],
        [
            3639,
            {
                name: "PrintScreen",
                value: 70,
                alias: "PS",
            },
        ],
        [3640, {name: "Alt", info: "Right Alt", value: 230}],
        [
            3653,
            {
                name: "Pause",
                value: 72,
            },
        ],
        [3655, {name: "Home", value: 74, alias: "HOME"}],
        [
            3657,
            {
                name: "PageUp",
                value: 75,
                alias: "PGUP",
            },
        ],
        [3663, {name: "End", value: 77, alias: "END"}],
        [
            3665,
            {
                name: "PageDown",
                value: 78,
                alias: "PGDN",
            },
        ],
        [3666, {name: "Insert", value: 73, alias: "INSERT"}],
        [
            3667,
            {
                name: "Delete",
                value: 76,
                alias: "DELETE",
            },
        ],
        [
            3675,
            {
                name: "icon.left_gui",
                alias: "Win/Cmd",
                icon: "win-mac",
                value: 227,
            },
        ],
        [
            3676,
            {name: "icon.right_gui", alias: "Win/Cmd", icon: "win-mac", value: 231},
        ],
        [
            3677,
            {
                name: "Menu",
                value: 101,
            },
        ],
        [57416, {name: "↑", value: 82}],
        [57419, {name: "←", value: 80}],
        [
            57421,
            {
                name: "→",
                value: 79,
            },
        ],
        [57424, {name: "↓", value: 81}],
        [61000, {name: "↑", value: 82}],
        [
            61001,
            {
                name: "PageUp",
                value: 75,
                alias: "PGUP",
            },
        ],
        [61003, {name: "←", value: 80}],
        [61005, {name: "→", value: 79}],
        [
            61007,
            {
                name: "End",
                value: 77,
                alias: "END",
            },
        ],
        [61008, {name: "↓", value: 81}],
        [
            61009,
            {
                name: "PageDown",
                value: 78,
                alias: "PGDN",
            },
        ],
        [61010, {name: "Insert", value: 73, alias: "INSERT"}],
        [
            61011,
            {
                name: "Delete",
                value: 76,
                alias: "DELETE",
            },
        ],
        [60999, {name: "Home", value: 74, alias: "HOME"}],
    ]);

const keycodes = {};

for (const entry of originalMap.entries()) {
    const key = entry[0];
    const value = entry[1];

    let newKey = value.alias || value.name;

    if (newKey.length === 2 && !/^F/i.test(newKey)) {
        newKey = newKey[0];
    }

    keycodes[newKey] = value;
}

module.exports = keycodes;

