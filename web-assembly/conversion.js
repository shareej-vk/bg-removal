var conversion;
(()=>{
    "use strict";
    var e, r, t, o, n = {}, a = {};
    function s(e) {
        var r = a[e];
        if (void 0 !== r)
            return r.exports;
        var t = a[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e](t, t.exports, s),
        t.loaded = !0,
        t.exports
    }
    s.m = n,
    e = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__",
    r = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__",
    t = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__",
    o = e=>{
        e && e.d < 1 && (e.d = 1,
        e.forEach((e=>e.r--)),
        e.forEach((e=>e.r-- ? e.r++ : e())))
    }
    ,
    s.a = (n,a,s)=>{
        var i;
        s && ((i = []).d = -1);
        var p, c, u, b = new Set, d = n.exports, f = new Promise(((e,r)=>{
            u = r,
            c = e
        }
        ));
        f[r] = d,
        f[e] = e=>(i && e(i),
        b.forEach(e),
        f.catch((e=>{}
        ))),
        n.exports = f,
        a((n=>{
            var a;
            p = (n=>n.map((n=>{
                if (null !== n && "object" == typeof n) {
                    if (n[e])
                        return n;
                    if (n.then) {
                        var a = [];
                        a.d = 0,
                        n.then((e=>{
                            s[r] = e,
                            o(a)
                        }
                        ), (e=>{
                            s[t] = e,
                            o(a)
                        }
                        ));
                        var s = {};
                        return s[e] = e=>e(a),
                        s
                    }
                }
                var i = {};
                return i[e] = e=>{}
                ,
                i[r] = n,
                i
            }
            )))(n);
            var s = ()=>p.map((e=>{
                if (e[t])
                    throw e[t];
                return e[r]
            }
            ))
              , c = new Promise((r=>{
                (a = ()=>r(s)).r = 0;
                var t = e=>e !== i && !b.has(e) && (b.add(e),
                e && !e.d && (a.r++,
                e.push(a)));
                p.map((r=>r[e](t)))
            }
            ));
            return a.r ? c : s()
        }
        ), (e=>(e ? u(f[t] = e) : c(d),
        o(i)))),
        i && i.d < 0 && (i.d = 0)
    }
    ,
    s.d = (e,r)=>{
        for (var t in r)
            s.o(r, t) && !s.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }
    ,
    s.f = {},
    s.e = e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e, r),
    r)), [])),
    s.u = e=>e + ".conversion.js",
    s.hmd = e=>((e = Object.create(e)).children || (e.children = []),
    Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: ()=>{
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }),
    e),
    s.o = (e,r)=>Object.prototype.hasOwnProperty.call(e, r),
    s.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.v = (e,r,t,o)=>{
        var n = fetch(s.p + "" + t + ".module.wasm");
        return "function" == typeof WebAssembly.instantiateStreaming ? WebAssembly.instantiateStreaming(n, o).then((r=>Object.assign(e, r.instance.exports))) : n.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e, o))).then((r=>Object.assign(e, r.instance.exports)))
    }
    ,
    s.p = "/dist/",
    (()=>{
        var e = {
            179: 1
        };
        s.f.i = (r,t)=>{
            e[r] || importScripts(s.p + s.u(r))
        }
        ;
        var r = self.webpackChunkconversion = self.webpackChunkconversion || []
          , t = r.push.bind(r);
        r.push = r=>{
            var [o,n,a] = r;
            for (var i in n)
                s.o(n, i) && (s.m[i] = n[i]);
            for (a && a(s); o.length; )
                e[o.pop()] = 1;
            t(r)
        }
    }
    )();
    var i = {};
    async function p() {
        const {memory: e, ...r} = await s.e(234).then(s.bind(s, 234))
          , t = await s.e(292).then(s.bind(s, 292));
        return r.memory = t.memory,
        r
    }
    s.r(i),
    s.d(i, {
        lib: ()=>p
    }),
    conversion = i
}
)();
