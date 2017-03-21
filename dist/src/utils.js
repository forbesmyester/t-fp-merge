"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const t_fp_assoc_1 = require("t-fp-assoc");
function mergeTwo(a, b) {
    let r = __rest(Object.assign({}, a), []);
    Object.keys(b).map(k => {
        r = t_fp_assoc_1.default(k, b[k], r);
    });
    return r;
}
let merge = function (...others) {
    return others.reduce(mergeTwo, {});
};
exports.default = merge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBK0I7QUFFL0Isa0JBQXdCLENBQW1CLEVBQUUsQ0FBbUI7SUFDNUQsSUFBSyxvQ0FBa0MsQ0FBQztJQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsR0FBRyxvQkFBSyxDQUFDLENBQUMsRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQWdCRCxJQUFJLEtBQUssR0FBVSxVQUFTLEdBQUcsTUFBTTtJQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsS0FBSyxDQUFDIn0=