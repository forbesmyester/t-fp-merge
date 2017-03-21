import test from 'ava';
import merge from '../src/utils';

test('can merge', (tt) => {

    let a: {[k: string]: boolean} = {a: false};
    let b: {[k: string]: number} = {b: 1};
    let c: {[k: string]: string} = {c: 'hi'};

    let q = merge(a);
    let r = merge(a, b);
    let s = merge(a, b, c);

    tt.deepEqual(q, a);
    tt.deepEqual(r, {a: false, b: 1});
    tt.deepEqual(s, {a: false, b: 1, c: 'hi'});

});
