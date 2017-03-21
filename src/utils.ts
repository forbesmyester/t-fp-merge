import assoc from 't-fp-assoc';

function mergeTwo<A, B>(a: {[k: string]: A}, b: {[k: string]: B}) {
    let {...r}: {[k: string]: B|A} = {...a};
    Object.keys(b).map(k => {
        r = assoc(k, <B>b[k], r);
    });
    return r;
}


export interface Merge {
    <A>(a: {[k: string]: A}): {[k: string]: A};
    <A, B>(a: {[k: string]: A}, b: {[k: string]: B}): {[k: string]: B|A};
    <A, B, C>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}): {[k: string]: B|A|C};
    <A, B, C, D>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}): {[k: string]: B|A|C|D};
    <A, B, C, D, E>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}, e: {[k: string]: E}): {[k: string]: B|A|C|D|E};
    <A, B, C, D, E, F>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}, e: {[k: string]: E}, f: {[k: string]: F}): {[k: string]: B|A|C|D|E|F};
    <A, B, C, D, E, F, G>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}, e: {[k: string]: E}, f: {[k: string]: F}, g: {[k: string]: G}): {[k: string]: B|A|C|D|E|F|G};
    <A, B, C, D, E, F, G, H>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}, e: {[k: string]: E}, f: {[k: string]: F}, g: {[k: string]: G}, h: {[k: string]: H}): {[k: string]: B|A|C|D|E|F|G|H};
    <A, B, C, D, E, F, G, H, I>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}, e: {[k: string]: E}, f: {[k: string]: F}, g: {[k: string]: G}, h: {[k: string]: H}, i: {[k: string]: I}): {[k: string]: B|A|C|D|E|F|G|H|I};
    <A, B, C, D, E, F, G, H, I, J>(a: {[k: string]: A}, b: {[k: string]: B}, c: {[k: string]: C}, d: {[k: string]: D}, e: {[k: string]: E}, f: {[k: string]: F}, g: {[k: string]: G}, h: {[k: string]: H}, i: {[k: string]: I}, j: {[k: string]: J}): {[k: string]: B|A|C|D|E|F|G|H|I|J};
}

let merge: Merge = function(...others) {
    return others.reduce(mergeTwo, {});
};

export default merge;
