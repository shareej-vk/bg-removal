"use strict";
(self.webpackChunkconversion = self.webpackChunkconversion || []).push([[234, 292], {
    234: (_,t,e)=>{
        e.a(_, (async(_,r)=>{
            try {
                e.r(t),
                e.d(t, {
                    ConversionOptions: ()=>s.XF,
                    ConversionResult: ()=>s.T1,
                    ResizeAlgorithm: ()=>s.mL,
                    Subsampling: ()=>s.KT,
                    __wbg_set_wasm: ()=>s.oT,
                    __wbindgen_throw: ()=>s.Or,
                    convert_to_avif: ()=>s.rG,
                    rgba_to_avif: ()=>s.P1
                });
                               
                var n = e(292)
                  , s = e(671)
                  , o = _([n]);
                n = (o.then ? (await o)() : o)[0],
                (0,
                s.oT)(n),
                r()
            } catch (_) {
                r(_)
            }
        }
        ))
    }
    ,
    671: (_,t,e)=>{
        let r;
        function n(_) {
            r = _
        }
        e.d(t, {
            KT: ()=>v,
            Or: ()=>z,
            P1: ()=>w,
            T1: ()=>f,
            XF: ()=>d,
            mL: ()=>h,
            oT: ()=>n,
            rG: ()=>b
        }),
        _ = e.hmd(_);
        let s = new ("undefined" == typeof TextDecoder ? (0,
        _.require)("util").TextDecoder : TextDecoder)("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        });
        s.decode();
        let o = null;
        function i() {
            return null !== o && 0 !== o.byteLength || (o = new Uint8Array(r.memory.buffer)),
            o
        }
        let g = 0;
        function a(_, t) {
            const e = t(1 * _.length, 1) >>> 0;
            return i().set(_, e / 1),
            g = _.length,
            e
        }
        function p(_, t) {
            if (!(_ instanceof t))
                throw new Error(`expected instance of ${t.name}`);
            return _.ptr
        }
        function b(_, t) {
            const e = a(_, r.__wbindgen_malloc)
              , n = g;
            p(t, d);
            const s = r.convert_to_avif(e, n, t.__wbg_ptr);
            return f.__wrap(s)
        }
        function w(_, t, e, n) {
            const s = a(_, r.__wbindgen_malloc)
              , o = g;
            p(t, d);
            const i = r.rgba_to_avif(s, o, t.__wbg_ptr, e, n);
            return f.__wrap(i)
        }
        let c = null;
        function l() {
            return null !== c && 0 !== c.byteLength || (c = new Int32Array(r.memory.buffer)),
            c
        }
        function u(_) {
            return null == _
        }
        const h = Object.freeze({
            Nearest: 0,
            0: "Nearest",
            Triangle: 1,
            1: "Triangle",
            CatmullRom: 2,
            2: "CatmullRom",
            Gaussian: 3,
            3: "Gaussian",
            Lanczos3: 4,
            4: "Lanczos3"
        })
          , v = Object.freeze({
            YUV420: 0,
            0: "YUV420",
            YUV444: 1,
            1: "YUV444",
            YUV400: 2,
            2: "YUV400"
        });
        class d {
            static __wrap(_) {
                _ >>>= 0;
                const t = Object.create(d.prototype);
                return t.__wbg_ptr = _,
                t
            }
            __destroy_into_raw() {
                const _ = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                _
            }
            free() {
                const _ = this.__destroy_into_raw();
                r.__wbg_conversionoptions_free(_)
            }
            get effort() {
                return r.__wbg_get_conversionoptions_effort(this.__wbg_ptr)
            }
            set effort(_) {
                r.__wbg_set_conversionoptions_effort(this.__wbg_ptr, _)
            }
            get quality() {
                return r.__wbg_get_conversionoptions_quality(this.__wbg_ptr)
            }
            set quality(_) {
             
                r.__wbg_set_conversionoptions_quality(this.__wbg_ptr, _)
            }
            get subsampling() {
                return r.__wbg_get_conversionoptions_subsampling(this.__wbg_ptr) >>> 0
            }
            set subsampling(_) {
                r.__wbg_set_conversionoptions_subsampling(this.__wbg_ptr, _)
            }
            get keep_transparency() {
                return 0 !== r.__wbg_get_conversionoptions_keep_transparency(this.__wbg_ptr)
            }
            set keep_transparency(_) {
                r.__wbg_set_conversionoptions_keep_transparency(this.__wbg_ptr, _)
            }
            get lossless() {
                return 0 !== r.__wbg_get_conversionoptions_lossless(this.__wbg_ptr)
            }
            set lossless(_) {
                r.__wbg_set_conversionoptions_lossless(this.__wbg_ptr, _)
            }
            get adaptive() {
                return 0 !== r.__wbg_get_conversionoptions_adaptive(this.__wbg_ptr)
            }
            set adaptive(_) {
                r.__wbg_set_conversionoptions_adaptive(this.__wbg_ptr, _)
            }
            get enable_palette_reduction() {
                return 0 !== r.__wbg_get_conversionoptions_enable_palette_reduction(this.__wbg_ptr)
            }
            set enable_palette_reduction(_) {
                r.__wbg_set_conversionoptions_enable_palette_reduction(this.__wbg_ptr, _)
            }
            get palette_size() {
                try {
                    const e = r.__wbindgen_add_to_stack_pointer(-16);
                    r.__wbg_get_conversionoptions_palette_size(e, this.__wbg_ptr);
                    var _ = l()[e / 4 + 0]
                      , t = l()[e / 4 + 1];
                    return 0 === _ ? void 0 : t >>> 0
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }
            set palette_size(_) {
                r.__wbg_set_conversionoptions_palette_size(this.__wbg_ptr, !u(_), u(_) ? 0 : _)
            }
            get enable_resize() {
                return 0 !== r.__wbg_get_conversionoptions_enable_resize(this.__wbg_ptr)
            }
            set enable_resize(_) {
                r.__wbg_set_conversionoptions_enable_resize(this.__wbg_ptr, _)
            }
            get resize_width() {
                try {
                    const e = r.__wbindgen_add_to_stack_pointer(-16);
                    r.__wbg_get_conversionoptions_resize_width(e, this.__wbg_ptr);
                    var _ = l()[e / 4 + 0]
                      , t = l()[e / 4 + 1];
                    return 0 === _ ? void 0 : t >>> 0
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }
            set resize_width(_) {
                r.__wbg_set_conversionoptions_resize_width(this.__wbg_ptr, !u(_), u(_) ? 0 : _)
            }
            get resize_height() {
                try {
                    const e = r.__wbindgen_add_to_stack_pointer(-16);
                    r.__wbg_get_conversionoptions_resize_height(e, this.__wbg_ptr);
                    var _ = l()[e / 4 + 0]
                      , t = l()[e / 4 + 1];
                    return 0 === _ ? void 0 : t >>> 0
                } finally {
                    r.__wbindgen_add_to_stack_pointer(16)
                }
            }
            set resize_height(_) {
                r.__wbg_set_conversionoptions_resize_height(this.__wbg_ptr, !u(_), u(_) ? 0 : _)
            }
            get resize_algorithm() {
                return r.__wbg_get_conversionoptions_resize_algorithm(this.__wbg_ptr)
            }
            set resize_algorithm(_) {
                r.__wbg_set_conversionoptions_resize_algorithm(this.__wbg_ptr, _)
            }
            get maintain_aspect_ratio() {
                return 0 !== r.__wbg_get_conversionoptions_maintain_aspect_ratio(this.__wbg_ptr)
            }
            set maintain_aspect_ratio(_) {
                r.__wbg_set_conversionoptions_maintain_aspect_ratio(this.__wbg_ptr, _)
            }
            constructor(_, t, e, n, s, o, i, g, a, p, b, w, c) {
                const l = r.conversionoptions_new(_, t, e, n, s, o, i, !u(g), u(g) ? 0 : g, a, !u(p), u(p) ? 0 : p, !u(b), u(b) ? 0 : b, w, c);
                return d.__wrap(l)
            }
        }
        class f {
            static __wrap(_) {
                _ >>>= 0;
                const t = Object.create(f.prototype);
                return t.__wbg_ptr = _,
                t
            }
            __destroy_into_raw() {
                const _ = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                _
            }
            free() {
                const _ = this.__destroy_into_raw();
                r.__wbg_conversionresult_free(_)
            }
            get data() {
                return r.__wbg_get_conversionresult_data(this.__wbg_ptr)
            }
            set data(_) {
                r.__wbg_set_conversionresult_data(this.__wbg_ptr, _)
            }
            get size() {
                return r.__wbg_get_conversionresult_size(this.__wbg_ptr) >>> 0
            }
            set size(_) {
                r.__wbg_set_conversionresult_size(this.__wbg_ptr, _)
            }
            get error() {
                return r.__wbg_get_conversionresult_error(this.__wbg_ptr)
            }
            set error(_) {
                r.__wbg_set_conversionresult_error(this.__wbg_ptr, _)
            }
            get error_size() {
                return r.__wbg_get_conversionresult_error_size(this.__wbg_ptr) >>> 0
            }
            set error_size(_) {
                r.__wbg_set_conversionresult_error_size(this.__wbg_ptr, _)
            }
        }
        function z(_, t) {
            throw new Error((e = _,
            r = t,
            e >>>= 0,
            s.decode(i().subarray(e, e + r))));
            var e, r
        }
    }
    ,
    292: (_,t,e)=>{
        var r = e(671);
        _.exports = e.v(t, _.id, "051e179d562f51107251", {
            "./conversion_bg.js": {
                __wbindgen_throw: r.Or
            }
        })
    }
}]);
