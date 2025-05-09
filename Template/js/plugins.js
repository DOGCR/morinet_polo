/*!
 * Bootstrap v5.0.2 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
    },
    e = (t) => {
      do {
        t += Math.floor(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    i = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = "#" + i.split("#")[1]),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    n = (t) => {
      const e = i(t);
      return e && document.querySelector(e) ? e : null;
    },
    s = (t) => {
      const e = i(t);
      return e ? document.querySelector(e) : null;
    },
    o = (t) => {
      t.dispatchEvent(new Event("transitionend"));
    },
    r = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    a = (e) =>
      r(e)
        ? e.jquery
          ? e[0]
          : e
        : "string" == typeof e && e.length > 0
        ? t.findOne(e)
        : null,
    l = (t, e, i) => {
      Object.keys(i).forEach((n) => {
        const s = i[n],
          o = e[n],
          a =
            o && r(o)
              ? "element"
              : null == (l = o)
              ? "" + l
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    c = (t) =>
      !(!r(t) || 0 === t.getClientRects().length) &&
      "visible" === getComputedStyle(t).getPropertyValue("visibility"),
    h = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    d = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? d(t.parentNode)
        : null;
    },
    u = () => {},
    f = (t) => t.offsetHeight,
    p = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
    },
    m = [],
    g = () => "rtl" === document.documentElement.dir,
    _ = (t) => {
      var e;
      (e = () => {
        const e = p();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (m.length ||
              document.addEventListener("DOMContentLoaded", () => {
                m.forEach((t) => t());
              }),
            m.push(e))
          : e();
    },
    b = (t) => {
      "function" == typeof t && t();
    },
    v = (t, e, i = !0) => {
      if (!i) return void b(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let s = !1;
      const r = ({ target: i }) => {
        i === e && ((s = !0), e.removeEventListener("transitionend", r), b(t));
      };
      e.addEventListener("transitionend", r),
        setTimeout(() => {
          s || o(e);
        }, n);
    },
    y = (t, e, i, n) => {
      let s = t.indexOf(e);
      if (-1 === s) return t[!i && n ? t.length - 1 : 0];
      const o = t.length;
      return (
        (s += i ? 1 : -1),
        n && (s = (s + o) % o),
        t[Math.max(0, Math.min(s, o - 1))]
      );
    },
    w = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    A = /::\d+$/,
    T = {};
  let O = 1;
  const C = { mouseenter: "mouseover", mouseleave: "mouseout" },
    k = /^(mouseenter|mouseleave)/i,
    L = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function x(t, e) {
    return (e && `${e}::${O++}`) || t.uidEvent || O++;
  }
  function D(t) {
    const e = x(t);
    return (t.uidEvent = e), (T[e] = T[e] || {}), T[e];
  }
  function S(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function I(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e;
    let o = M(t);
    return L.has(o) || (o = t), [n, s, o];
  }
  function N(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), k.test(e))) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = I(e, i, n),
      l = D(t),
      c = l[a] || (l[a] = {}),
      h = S(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = x(r, e.replace(w, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (
                (n.delegateTarget = t),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function j(t, e, i, n, s) {
    const o = S(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function M(t) {
    return (t = t.replace(E, "")), C[t] || t;
  }
  const P = {
      on(t, e, i, n) {
        N(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        N(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ("string" != typeof e || !t) return;
        const [s, o, r] = I(e, i, n),
          a = r !== e,
          l = D(t),
          c = e.startsWith(".");
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void j(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach((i) => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach((o) => {
                if (o.includes(n)) {
                  const n = s[o];
                  j(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach((i) => {
          const n = i.replace(A, "");
          if (!a || e.includes(n)) {
            const e = h[i];
            j(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ("string" != typeof e || !t) return null;
        const n = p(),
          s = M(e),
          o = e !== s,
          r = L.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent("HTMLEvents")), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach((t) => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    H = new Map();
  var R = {
    set(t, e, i) {
      H.has(t) || H.set(t, new Map());
      const n = H.get(t);
      n.has(e) || 0 === n.size
        ? n.set(e, i)
        : console.error(
            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
              Array.from(n.keys())[0]
            }.`
          );
    },
    get: (t, e) => (H.has(t) && H.get(t).get(e)) || null,
    remove(t, e) {
      if (!H.has(t)) return;
      const i = H.get(t);
      i.delete(e), 0 === i.size && H.delete(t);
    },
  };
  class B {
    constructor(t) {
      (t = a(t)) &&
        ((this._element = t),
        R.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      R.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach((t) => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      v(t, e, i);
    }
    static getInstance(t) {
      return R.get(t, this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.0.2";
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
  }
  class W extends B {
    static get NAME() {
      return "alert";
    }
    close(t) {
      const e = t ? this._getRootElement(t) : this._element,
        i = this._triggerCloseEvent(e);
      null === i || i.defaultPrevented || this._removeElement(e);
    }
    _getRootElement(t) {
      return s(t) || t.closest(".alert");
    }
    _triggerCloseEvent(t) {
      return P.trigger(t, "close.bs.alert");
    }
    _removeElement(t) {
      t.classList.remove("show");
      const e = t.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(t), t, e);
    }
    _destroyElement(t) {
      t.remove(), P.trigger(t, "closed.bs.alert");
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = W.getOrCreateInstance(this);
        "close" === t && e[t](this);
      });
    }
    static handleDismiss(t) {
      return function (e) {
        e && e.preventDefault(), t.close(this);
      };
    }
  }
  P.on(
    document,
    "click.bs.alert.data-api",
    '[data-bs-dismiss="alert"]',
    W.handleDismiss(new W())
  ),
    _(W);
  class q extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = q.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  function z(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        (t === Number(t).toString()
          ? Number(t)
          : "" === t || "null" === t
          ? null
          : t))
    );
  }
  function $(t) {
    return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
  }
  P.on(
    document,
    "click.bs.button.data-api",
    '[data-bs-toggle="button"]',
    (t) => {
      t.preventDefault();
      const e = t.target.closest('[data-bs-toggle="button"]');
      q.getOrCreateInstance(e).toggle();
    }
  ),
    _(q);
  const U = {
      setDataAttribute(t, e, i) {
        t.setAttribute("data-bs-" + $(e), i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute("data-bs-" + $(e));
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter((t) => t.startsWith("bs"))
            .forEach((i) => {
              let n = i.replace(/^bs/, "");
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)),
                (e[n] = z(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => z(t.getAttribute("data-bs-" + $(e))),
      offset(t) {
        const e = t.getBoundingClientRect();
        return {
          top: e.top + document.body.scrollTop,
          left: e.left + document.body.scrollLeft,
        };
      },
      position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: "hover",
      wrap: !0,
      touch: !0,
    },
    V = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      slide: "(boolean|string)",
      pause: "(string|boolean)",
      wrap: "boolean",
      touch: "boolean",
    },
    K = "next",
    X = "prev",
    Y = "left",
    Q = "right",
    G = { ArrowLeft: Q, ArrowRight: Y };
  class Z extends B {
    constructor(e, i) {
      super(e),
        (this._items = null),
        (this._interval = null),
        (this._activeElement = null),
        (this._isPaused = !1),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this.touchStartX = 0),
        (this.touchDeltaX = 0),
        (this._config = this._getConfig(i)),
        (this._indicatorsElement = t.findOne(
          ".carousel-indicators",
          this._element
        )),
        (this._touchSupported =
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0),
        (this._pointerEvent = Boolean(window.PointerEvent)),
        this._addEventListeners();
    }
    static get Default() {
      return F;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(K);
    }
    nextWhenVisible() {
      !document.hidden && c(this._element) && this.next();
    }
    prev() {
      this._slide(X);
    }
    pause(e) {
      e || (this._isPaused = !0),
        t.findOne(".carousel-item-next, .carousel-item-prev", this._element) &&
          (o(this._element), this.cycle(!0)),
        clearInterval(this._interval),
        (this._interval = null);
    }
    cycle(t) {
      t || (this._isPaused = !1),
        this._interval &&
          (clearInterval(this._interval), (this._interval = null)),
        this._config &&
          this._config.interval &&
          !this._isPaused &&
          (this._updateInterval(),
          (this._interval = setInterval(
            (document.visibilityState ? this.nextWhenVisible : this.next).bind(
              this
            ),
            this._config.interval
          )));
    }
    to(e) {
      this._activeElement = t.findOne(".active.carousel-item", this._element);
      const i = this._getItemIndex(this._activeElement);
      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding)
        return void P.one(this._element, "slid.bs.carousel", () => this.to(e));
      if (i === e) return this.pause(), void this.cycle();
      const n = e > i ? K : X;
      this._slide(n, this._items[e]);
    }
    _getConfig(t) {
      return (
        (t = {
          ...F,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        l("carousel", t, V),
        t
      );
    }
    _handleSwipe() {
      const t = Math.abs(this.touchDeltaX);
      if (t <= 40) return;
      const e = t / this.touchDeltaX;
      (this.touchDeltaX = 0), e && this._slide(e > 0 ? Q : Y);
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", (t) => this.pause(t)),
          P.on(this._element, "mouseleave.bs.carousel", (t) => this.cycle(t))),
        this._config.touch &&
          this._touchSupported &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const e = (t) => {
          !this._pointerEvent ||
          ("pen" !== t.pointerType && "touch" !== t.pointerType)
            ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
            : (this.touchStartX = t.clientX);
        },
        i = (t) => {
          this.touchDeltaX =
            t.touches && t.touches.length > 1
              ? 0
              : t.touches[0].clientX - this.touchStartX;
        },
        n = (t) => {
          !this._pointerEvent ||
            ("pen" !== t.pointerType && "touch" !== t.pointerType) ||
            (this.touchDeltaX = t.clientX - this.touchStartX),
            this._handleSwipe(),
            "hover" === this._config.pause &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                (t) => this.cycle(t),
                500 + this._config.interval
              )));
        };
      t.find(".carousel-item img", this._element).forEach((t) => {
        P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      }),
        this._pointerEvent
          ? (P.on(this._element, "pointerdown.bs.carousel", (t) => e(t)),
            P.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
            this._element.classList.add("pointer-event"))
          : (P.on(this._element, "touchstart.bs.carousel", (t) => e(t)),
            P.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
            P.on(this._element, "touchend.bs.carousel", (t) => n(t)));
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = G[t.key];
      e && (t.preventDefault(), this._slide(e));
    }
    _getItemIndex(e) {
      return (
        (this._items =
          e && e.parentNode ? t.find(".carousel-item", e.parentNode) : []),
        this._items.indexOf(e)
      );
    }
    _getItemByOrder(t, e) {
      const i = t === K;
      return y(this._items, e, i, this._config.wrap);
    }
    _triggerSlideEvent(e, i) {
      const n = this._getItemIndex(e),
        s = this._getItemIndex(
          t.findOne(".active.carousel-item", this._element)
        );
      return P.trigger(this._element, "slide.bs.carousel", {
        relatedTarget: e,
        direction: i,
        from: s,
        to: n,
      });
    }
    _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        const i = t.findOne(".active", this._indicatorsElement);
        i.classList.remove("active"), i.removeAttribute("aria-current");
        const n = t.find("[data-bs-target]", this._indicatorsElement);
        for (let t = 0; t < n.length; t++)
          if (
            Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) ===
            this._getItemIndex(e)
          ) {
            n[t].classList.add("active"),
              n[t].setAttribute("aria-current", "true");
            break;
          }
      }
    }
    _updateInterval() {
      const e =
        this._activeElement ||
        t.findOne(".active.carousel-item", this._element);
      if (!e) return;
      const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      i
        ? ((this._config.defaultInterval =
            this._config.defaultInterval || this._config.interval),
          (this._config.interval = i))
        : (this._config.interval =
            this._config.defaultInterval || this._config.interval);
    }
    _slide(e, i) {
      const n = this._directionToOrder(e),
        s = t.findOne(".active.carousel-item", this._element),
        o = this._getItemIndex(s),
        r = i || this._getItemByOrder(n, s),
        a = this._getItemIndex(r),
        l = Boolean(this._interval),
        c = n === K,
        h = c ? "carousel-item-start" : "carousel-item-end",
        d = c ? "carousel-item-next" : "carousel-item-prev",
        u = this._orderToDirection(n);
      if (r && r.classList.contains("active"))
        return void (this._isSliding = !1);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(r, u).defaultPrevented) return;
      if (!s || !r) return;
      (this._isSliding = !0),
        l && this.pause(),
        this._setActiveIndicatorElement(r),
        (this._activeElement = r);
      const p = () => {
        P.trigger(this._element, "slid.bs.carousel", {
          relatedTarget: r,
          direction: u,
          from: o,
          to: a,
        });
      };
      if (this._element.classList.contains("slide")) {
        r.classList.add(d), f(r), s.classList.add(h), r.classList.add(h);
        const t = () => {
          r.classList.remove(h, d),
            r.classList.add("active"),
            s.classList.remove("active", d, h),
            (this._isSliding = !1),
            setTimeout(p, 0);
        };
        this._queueCallback(t, s, !0);
      } else s.classList.remove("active"), r.classList.add("active"), (this._isSliding = !1), p();
      l && this.cycle();
    }
    _directionToOrder(t) {
      return [Q, Y].includes(t)
        ? g()
          ? t === Y
            ? X
            : K
          : t === Y
          ? K
          : X
        : t;
    }
    _orderToDirection(t) {
      return [K, X].includes(t)
        ? g()
          ? t === X
            ? Y
            : Q
          : t === X
          ? Q
          : Y
        : t;
    }
    static carouselInterface(t, e) {
      const i = Z.getOrCreateInstance(t, e);
      let { _config: n } = i;
      "object" == typeof e && (n = { ...n, ...e });
      const s = "string" == typeof e ? e : n.slide;
      if ("number" == typeof e) i.to(e);
      else if ("string" == typeof s) {
        if (void 0 === i[s]) throw new TypeError(`No method named "${s}"`);
        i[s]();
      } else n.interval && n.ride && (i.pause(), i.cycle());
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Z.carouselInterface(this, t);
      });
    }
    static dataApiClickHandler(t) {
      const e = s(this);
      if (!e || !e.classList.contains("carousel")) return;
      const i = { ...U.getDataAttributes(e), ...U.getDataAttributes(this) },
        n = this.getAttribute("data-bs-slide-to");
      n && (i.interval = !1),
        Z.carouselInterface(e, i),
        n && Z.getInstance(e).to(n),
        t.preventDefault();
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    Z.dataApiClickHandler
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      const e = t.find('[data-bs-ride="carousel"]');
      for (let t = 0, i = e.length; t < i; t++)
        Z.carouselInterface(e[t], Z.getInstance(e[t]));
    }),
    _(Z);
  const J = { toggle: !0, parent: "" },
    tt = { toggle: "boolean", parent: "(string|element)" };
  class et extends B {
    constructor(e, i) {
      super(e),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(i)),
        (this._triggerArray = t.find(
          `[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`
        ));
      const s = t.find('[data-bs-toggle="collapse"]');
      for (let e = 0, i = s.length; e < i; e++) {
        const i = s[e],
          o = n(i),
          r = t.find(o).filter((t) => t === this._element);
        null !== o &&
          r.length &&
          ((this._selector = o), this._triggerArray.push(i));
      }
      (this._parent = this._config.parent ? this._getParent() : null),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._element, this._triggerArray),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return J;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._element.classList.contains("show"))
        return;
      let e, i;
      this._parent &&
        ((e = t
          .find(".show, .collapsing", this._parent)
          .filter((t) =>
            "string" == typeof this._config.parent
              ? t.getAttribute("data-bs-parent") === this._config.parent
              : t.classList.contains("collapse")
          )),
        0 === e.length && (e = null));
      const n = t.findOne(this._selector);
      if (e) {
        const t = e.find((t) => n !== t);
        if (((i = t ? et.getInstance(t) : null), i && i._isTransitioning))
          return;
      }
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e &&
        e.forEach((t) => {
          n !== t && et.collapseInterface(t, "hide"),
            i || R.set(t, "bs.collapse", null);
        });
      const s = this._getDimension();
      this._element.classList.remove("collapse"),
        this._element.classList.add("collapsing"),
        (this._element.style[s] = 0),
        this._triggerArray.length &&
          this._triggerArray.forEach((t) => {
            t.classList.remove("collapsed"),
              t.setAttribute("aria-expanded", !0);
          }),
        this.setTransitioning(!0);
      const o = "scroll" + (s[0].toUpperCase() + s.slice(1));
      this._queueCallback(
        () => {
          this._element.classList.remove("collapsing"),
            this._element.classList.add("collapse", "show"),
            (this._element.style[s] = ""),
            this.setTransitioning(!1),
            P.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[s] = this._element[o] + "px");
    }
    hide() {
      if (this._isTransitioning || !this._element.classList.contains("show"))
        return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        this._element.getBoundingClientRect()[t] + "px"),
        f(this._element),
        this._element.classList.add("collapsing"),
        this._element.classList.remove("collapse", "show");
      const e = this._triggerArray.length;
      if (e > 0)
        for (let t = 0; t < e; t++) {
          const e = this._triggerArray[t],
            i = s(e);
          i &&
            !i.classList.contains("show") &&
            (e.classList.add("collapsed"), e.setAttribute("aria-expanded", !1));
        }
      this.setTransitioning(!0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            this.setTransitioning(!1),
              this._element.classList.remove("collapsing"),
              this._element.classList.add("collapse"),
              P.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    setTransitioning(t) {
      this._isTransitioning = t;
    }
    _getConfig(t) {
      return (
        ((t = { ...J, ...t }).toggle = Boolean(t.toggle)),
        l("collapse", t, tt),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains("width") ? "width" : "height";
    }
    _getParent() {
      let { parent: e } = this._config;
      e = a(e);
      const i = `[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;
      return (
        t.find(i, e).forEach((t) => {
          const e = s(t);
          this._addAriaAndCollapsedClass(e, [t]);
        }),
        e
      );
    }
    _addAriaAndCollapsedClass(t, e) {
      if (!t || !e.length) return;
      const i = t.classList.contains("show");
      e.forEach((t) => {
        i ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
          t.setAttribute("aria-expanded", i);
      });
    }
    static collapseInterface(t, e) {
      let i = et.getInstance(t);
      const n = {
        ...J,
        ...U.getDataAttributes(t),
        ...("object" == typeof e && e ? e : {}),
      };
      if (
        (!i &&
          n.toggle &&
          "string" == typeof e &&
          /show|hide/.test(e) &&
          (n.toggle = !1),
        i || (i = new et(t, n)),
        "string" == typeof e)
      ) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        et.collapseInterface(this, t);
      });
    }
  }
  P.on(
    document,
    "click.bs.collapse.data-api",
    '[data-bs-toggle="collapse"]',
    function (e) {
      ("A" === e.target.tagName ||
        (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
        e.preventDefault();
      const i = U.getDataAttributes(this),
        s = n(this);
      t.find(s).forEach((t) => {
        const e = et.getInstance(t);
        let n;
        e
          ? (null === e._parent &&
              "string" == typeof i.parent &&
              ((e._config.parent = i.parent), (e._parent = e._getParent())),
            (n = "toggle"))
          : (n = i),
          et.collapseInterface(t, n);
      });
    }
  ),
    _(et);
  var it = "top",
    nt = "bottom",
    st = "right",
    ot = "left",
    rt = [it, nt, st, ot],
    at = rt.reduce(function (t, e) {
      return t.concat([e + "-start", e + "-end"]);
    }, []),
    lt = [].concat(rt, ["auto"]).reduce(function (t, e) {
      return t.concat([e, e + "-start", e + "-end"]);
    }, []),
    ct = [
      "beforeRead",
      "read",
      "afterRead",
      "beforeMain",
      "main",
      "afterMain",
      "beforeWrite",
      "write",
      "afterWrite",
    ];
  function ht(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function dt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function ut(t) {
    return t instanceof dt(t).Element || t instanceof Element;
  }
  function ft(t) {
    return t instanceof dt(t).HTMLElement || t instanceof HTMLElement;
  }
  function pt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof dt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  var mt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        ft(s) &&
          ht(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            ft(n) &&
              ht(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function gt(t) {
    return t.split("-")[0];
  }
  function _t(t) {
    var e = t.getBoundingClientRect();
    return {
      width: e.width,
      height: e.height,
      top: e.top,
      right: e.right,
      bottom: e.bottom,
      left: e.left,
      x: e.left,
      y: e.top,
    };
  }
  function bt(t) {
    var e = _t(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function vt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && pt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function yt(t) {
    return dt(t).getComputedStyle(t);
  }
  function wt(t) {
    return ["table", "td", "th"].indexOf(ht(t)) >= 0;
  }
  function Et(t) {
    return (
      (ut(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function At(t) {
    return "html" === ht(t)
      ? t
      : t.assignedSlot || t.parentNode || (pt(t) ? t.host : null) || Et(t);
  }
  function Tt(t) {
    return ft(t) && "fixed" !== yt(t).position ? t.offsetParent : null;
  }
  function Ot(t) {
    for (var e = dt(t), i = Tt(t); i && wt(i) && "static" === yt(i).position; )
      i = Tt(i);
    return i &&
      ("html" === ht(i) || ("body" === ht(i) && "static" === yt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (
              -1 !== navigator.userAgent.indexOf("Trident") &&
              ft(t) &&
              "fixed" === yt(t).position
            )
              return null;
            for (
              var i = At(t);
              ft(i) && ["html", "body"].indexOf(ht(i)) < 0;

            ) {
              var n = yt(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Ct(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  var kt = Math.max,
    Lt = Math.min,
    xt = Math.round;
  function Dt(t, e, i) {
    return kt(t, Lt(e, i));
  }
  function St(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function It(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  var Nt = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e,
          i = t.state,
          n = t.name,
          s = t.options,
          o = i.elements.arrow,
          r = i.modifiersData.popperOffsets,
          a = gt(i.placement),
          l = Ct(a),
          c = [ot, st].indexOf(a) >= 0 ? "height" : "width";
        if (o && r) {
          var h = (function (t, e) {
              return St(
                "number" !=
                  typeof (t =
                    "function" == typeof t
                      ? t(
                          Object.assign({}, e.rects, { placement: e.placement })
                        )
                      : t)
                  ? t
                  : It(t, rt)
              );
            })(s.padding, i),
            d = bt(o),
            u = "y" === l ? it : ot,
            f = "y" === l ? nt : st,
            p =
              i.rects.reference[c] +
              i.rects.reference[l] -
              r[l] -
              i.rects.popper[c],
            m = r[l] - i.rects.reference[l],
            g = Ot(o),
            _ = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            b = p / 2 - m / 2,
            v = h[u],
            y = _ - d[c] - h[f],
            w = _ / 2 - d[c] / 2 + b,
            E = Dt(v, w, y),
            A = l;
          i.modifiersData[n] = (((e = {})[A] = E), (e.centerOffset = E - w), e);
        }
      },
      effect: function (t) {
        var e = t.state,
          i = t.options.element,
          n = void 0 === i ? "[data-popper-arrow]" : i;
        null != n &&
          ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
          vt(e.elements.popper, n) &&
          (e.elements.arrow = n);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    },
    jt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function Mt(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.offsets,
      r = t.position,
      a = t.gpuAcceleration,
      l = t.adaptive,
      c = t.roundOffsets,
      h =
        !0 === c
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: xt(xt(e * n) / n) || 0, y: xt(xt(i * n) / n) || 0 };
            })(o)
          : "function" == typeof c
          ? c(o)
          : o,
      d = h.x,
      u = void 0 === d ? 0 : d,
      f = h.y,
      p = void 0 === f ? 0 : f,
      m = o.hasOwnProperty("x"),
      g = o.hasOwnProperty("y"),
      _ = ot,
      b = it,
      v = window;
    if (l) {
      var y = Ot(i),
        w = "clientHeight",
        E = "clientWidth";
      y === dt(i) &&
        "static" !== yt((y = Et(i))).position &&
        ((w = "scrollHeight"), (E = "scrollWidth")),
        (y = y),
        s === it && ((b = nt), (p -= y[w] - n.height), (p *= a ? 1 : -1)),
        s === ot && ((_ = st), (u -= y[E] - n.width), (u *= a ? 1 : -1));
    }
    var A,
      T = Object.assign({ position: r }, l && jt);
    return a
      ? Object.assign(
          {},
          T,
          (((A = {})[b] = g ? "0" : ""),
          (A[_] = m ? "0" : ""),
          (A.transform =
            (v.devicePixelRatio || 1) < 2
              ? "translate(" + u + "px, " + p + "px)"
              : "translate3d(" + u + "px, " + p + "px, 0)"),
          A)
        )
      : Object.assign(
          {},
          T,
          (((e = {})[b] = g ? p + "px" : ""),
          (e[_] = m ? u + "px" : ""),
          (e.transform = ""),
          e)
        );
  }
  var Pt = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = i.gpuAcceleration,
          s = void 0 === n || n,
          o = i.adaptive,
          r = void 0 === o || o,
          a = i.roundOffsets,
          l = void 0 === a || a,
          c = {
            placement: gt(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: s,
          };
        null != e.modifiersData.popperOffsets &&
          (e.styles.popper = Object.assign(
            {},
            e.styles.popper,
            Mt(
              Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l,
              })
            )
          )),
          null != e.modifiersData.arrow &&
            (e.styles.arrow = Object.assign(
              {},
              e.styles.arrow,
              Mt(
                Object.assign({}, c, {
                  offsets: e.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: l,
                })
              )
            )),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement,
          }));
      },
      data: {},
    },
    Ht = { passive: !0 },
    Rt = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (t) {
        var e = t.state,
          i = t.instance,
          n = t.options,
          s = n.scroll,
          o = void 0 === s || s,
          r = n.resize,
          a = void 0 === r || r,
          l = dt(e.elements.popper),
          c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return (
          o &&
            c.forEach(function (t) {
              t.addEventListener("scroll", i.update, Ht);
            }),
          a && l.addEventListener("resize", i.update, Ht),
          function () {
            o &&
              c.forEach(function (t) {
                t.removeEventListener("scroll", i.update, Ht);
              }),
              a && l.removeEventListener("resize", i.update, Ht);
          }
        );
      },
      data: {},
    },
    Bt = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Wt(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return Bt[t];
    });
  }
  var qt = { start: "end", end: "start" };
  function zt(t) {
    return t.replace(/start|end/g, function (t) {
      return qt[t];
    });
  }
  function $t(t) {
    var e = dt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Ut(t) {
    return _t(Et(t)).left + $t(t).scrollLeft;
  }
  function Ft(t) {
    var e = yt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Vt(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = (function t(e) {
        return ["html", "body", "#document"].indexOf(ht(e)) >= 0
          ? e.ownerDocument.body
          : ft(e) && Ft(e)
          ? e
          : t(At(e));
      })(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = dt(n),
      r = s ? [o].concat(o.visualViewport || [], Ft(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Vt(At(r)));
  }
  function Kt(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function Xt(t, e) {
    return "viewport" === e
      ? Kt(
          (function (t) {
            var e = dt(t),
              i = Et(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return (
              n &&
                ((s = n.width),
                (o = n.height),
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                  ((r = n.offsetLeft), (a = n.offsetTop))),
              { width: s, height: o, x: r + Ut(t), y: a }
            );
          })(t)
        )
      : ft(e)
      ? (function (t) {
          var e = _t(t);
          return (
            (e.top = e.top + t.clientTop),
            (e.left = e.left + t.clientLeft),
            (e.bottom = e.top + t.clientHeight),
            (e.right = e.left + t.clientWidth),
            (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.x = e.left),
            (e.y = e.top),
            e
          );
        })(e)
      : Kt(
          (function (t) {
            var e,
              i = Et(t),
              n = $t(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = kt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = kt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + Ut(t),
              l = -n.scrollTop;
            return (
              "rtl" === yt(s || i).direction &&
                (a += kt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(Et(t))
        );
  }
  function Yt(t) {
    return t.split("-")[1];
  }
  function Qt(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? gt(s) : null,
      r = s ? Yt(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case it:
        e = { x: a, y: i.y - n.height };
        break;
      case nt:
        e = { x: a, y: i.y + i.height };
        break;
      case st:
        e = { x: i.x + i.width, y: l };
        break;
      case ot:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? Ct(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case "start":
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case "end":
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Gt(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? "clippingParents" : o,
      a = i.rootBoundary,
      l = void 0 === a ? "viewport" : a,
      c = i.elementContext,
      h = void 0 === c ? "popper" : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      m = St("number" != typeof p ? p : It(p, rt)),
      g = "popper" === h ? "reference" : "popper",
      _ = t.elements.reference,
      b = t.rects.popper,
      v = t.elements[u ? g : h],
      y = (function (t, e, i) {
        var n =
            "clippingParents" === e
              ? (function (t) {
                  var e = Vt(At(t)),
                    i =
                      ["absolute", "fixed"].indexOf(yt(t).position) >= 0 &&
                      ft(t)
                        ? Ot(t)
                        : t;
                  return ut(i)
                    ? e.filter(function (t) {
                        return ut(t) && vt(t, i) && "body" !== ht(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
            var n = Xt(t, i);
            return (
              (e.top = kt(n.top, e.top)),
              (e.right = Lt(n.right, e.right)),
              (e.bottom = Lt(n.bottom, e.bottom)),
              (e.left = kt(n.left, e.left)),
              e
            );
          }, Xt(t, o));
        return (
          (r.width = r.right - r.left),
          (r.height = r.bottom - r.top),
          (r.x = r.left),
          (r.y = r.top),
          r
        );
      })(ut(v) ? v : v.contextElement || Et(t.elements.popper), r, l),
      w = _t(_),
      E = Qt({ reference: w, element: b, strategy: "absolute", placement: s }),
      A = Kt(Object.assign({}, b, E)),
      T = "popper" === h ? A : w,
      O = {
        top: y.top - T.top + m.top,
        bottom: T.bottom - y.bottom + m.bottom,
        left: y.left - T.left + m.left,
        right: T.right - y.right + m.right,
      },
      C = t.modifiersData.offset;
    if ("popper" === h && C) {
      var k = C[s];
      Object.keys(O).forEach(function (t) {
        var e = [st, nt].indexOf(t) >= 0 ? 1 : -1,
          i = [it, nt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function Zt(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? lt : l,
      h = Yt(n),
      d = h
        ? a
          ? at
          : at.filter(function (t) {
              return Yt(t) === h;
            })
        : rt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = Gt(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[gt(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  var Jt = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            m = i.allowedAutoPlacements,
            g = e.options.placement,
            _ = gt(g),
            b =
              l ||
              (_ !== g && p
                ? (function (t) {
                    if ("auto" === gt(t)) return [];
                    var e = Wt(t);
                    return [zt(t), e, zt(e)];
                  })(g)
                : [Wt(g)]),
            v = [g].concat(b).reduce(function (t, i) {
              return t.concat(
                "auto" === gt(i)
                  ? Zt(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: m,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            E = new Map(),
            A = !0,
            T = v[0],
            O = 0;
          O < v.length;
          O++
        ) {
          var C = v[O],
            k = gt(C),
            L = "start" === Yt(C),
            x = [it, nt].indexOf(k) >= 0,
            D = x ? "width" : "height",
            S = Gt(e, {
              placement: C,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = x ? (L ? st : ot) : L ? nt : it;
          y[D] > w[D] && (I = Wt(I));
          var N = Wt(I),
            j = [];
          if (
            (o && j.push(S[k] <= 0),
            a && j.push(S[I] <= 0, S[N] <= 0),
            j.every(function (t) {
              return t;
            }))
          ) {
            (T = C), (A = !1);
            break;
          }
          E.set(C, j);
        }
        if (A)
          for (
            var M = function (t) {
                var e = v.find(function (e) {
                  var i = E.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              P = p ? 3 : 1;
            P > 0 && "break" !== M(P);
            P--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function te(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function ee(t) {
    return [it, st, nt, ot].some(function (e) {
      return t[e] >= 0;
    });
  }
  var ie = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Gt(e, { elementContext: "reference" }),
          a = Gt(e, { altBoundary: !0 }),
          l = te(r, n),
          c = te(a, s, o),
          h = ee(l),
          d = ee(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    ne = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = lt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = gt(t),
                  s = [ot, it].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [ot, st].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    se = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = Qt({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    oe = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = Gt(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = gt(e.placement),
          b = Yt(e.placement),
          v = !b,
          y = Ct(_),
          w = "x" === y ? "y" : "x",
          E = e.modifiersData.popperOffsets,
          A = e.rects.reference,
          T = e.rects.popper,
          O =
            "function" == typeof m
              ? m(Object.assign({}, e.rects, { placement: e.placement }))
              : m,
          C = { x: 0, y: 0 };
        if (E) {
          if (o || a) {
            var k = "y" === y ? it : ot,
              L = "y" === y ? nt : st,
              x = "y" === y ? "height" : "width",
              D = E[y],
              S = E[y] + g[k],
              I = E[y] - g[L],
              N = f ? -T[x] / 2 : 0,
              j = "start" === b ? A[x] : T[x],
              M = "start" === b ? -T[x] : -A[x],
              P = e.elements.arrow,
              H = f && P ? bt(P) : { width: 0, height: 0 },
              R = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              B = R[k],
              W = R[L],
              q = Dt(0, A[x], H[x]),
              z = v ? A[x] / 2 - N - q - B - O : j - q - B - O,
              $ = v ? -A[x] / 2 + N + q + W + O : M + q + W + O,
              U = e.elements.arrow && Ot(e.elements.arrow),
              F = U ? ("y" === y ? U.clientTop || 0 : U.clientLeft || 0) : 0,
              V = e.modifiersData.offset
                ? e.modifiersData.offset[e.placement][y]
                : 0,
              K = E[y] + z - V - F,
              X = E[y] + $ - V;
            if (o) {
              var Y = Dt(f ? Lt(S, K) : S, D, f ? kt(I, X) : I);
              (E[y] = Y), (C[y] = Y - D);
            }
            if (a) {
              var Q = "x" === y ? it : ot,
                G = "x" === y ? nt : st,
                Z = E[w],
                J = Z + g[Q],
                tt = Z - g[G],
                et = Dt(f ? Lt(J, K) : J, Z, f ? kt(tt, X) : tt);
              (E[w] = et), (C[w] = et - Z);
            }
          }
          e.modifiersData[n] = C;
        }
      },
      requiresIfExists: ["offset"],
    };
  function re(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = Et(e),
      r = _t(t),
      a = ft(e),
      l = { scrollLeft: 0, scrollTop: 0 },
      c = { x: 0, y: 0 };
    return (
      (a || (!a && !i)) &&
        (("body" !== ht(e) || Ft(o)) &&
          (l =
            (n = e) !== dt(n) && ft(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : $t(n)),
        ft(e)
          ? (((c = _t(e)).x += e.clientLeft), (c.y += e.clientTop))
          : o && (c.x = Ut(o))),
      {
        x: r.left + l.scrollLeft - c.x,
        y: r.top + l.scrollTop - c.y,
        width: r.width,
        height: r.height,
      }
    );
  }
  var ae = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function le() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function ce(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? ae : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, ae, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            d(),
              (a.options = Object.assign({}, o, a.options, i)),
              (a.scrollParents = {
                reference: ut(t)
                  ? Vt(t)
                  : t.contextElement
                  ? Vt(t.contextElement)
                  : [],
                popper: Vt(e),
              });
            var s,
              r,
              c = (function (t) {
                var e = (function (t) {
                  var e = new Map(),
                    i = new Set(),
                    n = [];
                  return (
                    t.forEach(function (t) {
                      e.set(t.name, t);
                    }),
                    t.forEach(function (t) {
                      i.has(t.name) ||
                        (function t(s) {
                          i.add(s.name),
                            []
                              .concat(
                                s.requires || [],
                                s.requiresIfExists || []
                              )
                              .forEach(function (n) {
                                if (!i.has(n)) {
                                  var s = e.get(n);
                                  s && t(s);
                                }
                              }),
                            n.push(s);
                        })(t);
                    }),
                    n
                  );
                })(t);
                return ct.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((s = [].concat(n, a.options.modifiers)),
                (r = s.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(r).map(function (t) {
                  return r[t];
                }))
              );
            return (
              (a.orderedModifiers = c.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (le(e, i)) {
                (a.rects = {
                  reference: re(e, Ot(i), "fixed" === a.options.strategy),
                  popper: bt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!le(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var he = ce(),
    de = ce({ defaultModifiers: [Rt, se, Pt, mt] }),
    ue = ce({ defaultModifiers: [Rt, se, Pt, mt, ne, Jt, oe, Nt, ie] }),
    fe = Object.freeze({
      __proto__: null,
      popperGenerator: ce,
      detectOverflow: Gt,
      createPopperBase: he,
      createPopper: ue,
      createPopperLite: de,
      top: it,
      bottom: nt,
      right: st,
      left: ot,
      auto: "auto",
      basePlacements: rt,
      start: "start",
      end: "end",
      clippingParents: "clippingParents",
      viewport: "viewport",
      popper: "popper",
      reference: "reference",
      variationPlacements: at,
      placements: lt,
      beforeRead: "beforeRead",
      read: "read",
      afterRead: "afterRead",
      beforeMain: "beforeMain",
      main: "main",
      afterMain: "afterMain",
      beforeWrite: "beforeWrite",
      write: "write",
      afterWrite: "afterWrite",
      modifierPhases: ct,
      applyStyles: mt,
      arrow: Nt,
      computeStyles: Pt,
      eventListeners: Rt,
      flip: Jt,
      hide: ie,
      offset: ne,
      popperOffsets: se,
      preventOverflow: oe,
    });
  const pe = new RegExp("ArrowUp|ArrowDown|Escape"),
    me = g() ? "top-end" : "top-start",
    ge = g() ? "top-start" : "top-end",
    _e = g() ? "bottom-end" : "bottom-start",
    be = g() ? "bottom-start" : "bottom-end",
    ve = g() ? "left-start" : "right-start",
    ye = g() ? "right-start" : "left-start",
    we = {
      offset: [0, 2],
      boundary: "clippingParents",
      reference: "toggle",
      display: "dynamic",
      popperConfig: null,
      autoClose: !0,
    },
    Ee = {
      offset: "(array|string|function)",
      boundary: "(string|element)",
      reference: "(string|element|object)",
      display: "string",
      popperConfig: "(null|object|function)",
      autoClose: "(boolean|string)",
    };
  class Ae extends B {
    constructor(t, e) {
      super(t),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this._menu = this._getMenuElement()),
        (this._inNavbar = this._detectNavbar()),
        this._addEventListeners();
    }
    static get Default() {
      return we;
    }
    static get DefaultType() {
      return Ee;
    }
    static get NAME() {
      return "dropdown";
    }
    toggle() {
      h(this._element) ||
        (this._element.classList.contains("show") ? this.hide() : this.show());
    }
    show() {
      if (h(this._element) || this._menu.classList.contains("show")) return;
      const t = Ae.getParentFromElement(this._element),
        e = { relatedTarget: this._element };
      if (!P.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
        if (this._inNavbar) U.setDataAttribute(this._menu, "popper", "none");
        else {
          if (void 0 === fe)
            throw new TypeError(
              "Bootstrap's dropdowns require Popper (https://popper.js.org)"
            );
          let e = this._element;
          "parent" === this._config.reference
            ? (e = t)
            : r(this._config.reference)
            ? (e = a(this._config.reference))
            : "object" == typeof this._config.reference &&
              (e = this._config.reference);
          const i = this._getPopperConfig(),
            n = i.modifiers.find(
              (t) => "applyStyles" === t.name && !1 === t.enabled
            );
          (this._popper = ue(e, this._menu, i)),
            n && U.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement &&
          !t.closest(".navbar-nav") &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.on(t, "mouseover", u)),
          this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.toggle("show"),
          this._element.classList.toggle("show"),
          P.trigger(this._element, "shown.bs.dropdown", e);
      }
    }
    hide() {
      if (h(this._element) || !this._menu.classList.contains("show")) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _addEventListeners() {
      P.on(this._element, "click.bs.dropdown", (t) => {
        t.preventDefault(), this.toggle();
      });
    }
    _completeHide(t) {
      P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
        ("ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", u)),
        this._popper && this._popper.destroy(),
        this._menu.classList.remove("show"),
        this._element.classList.remove("show"),
        this._element.setAttribute("aria-expanded", "false"),
        U.removeDataAttribute(this._menu, "popper"),
        P.trigger(this._element, "hidden.bs.dropdown", t));
    }
    _getConfig(t) {
      if (
        ((t = {
          ...this.constructor.Default,
          ...U.getDataAttributes(this._element),
          ...t,
        }),
        l("dropdown", t, this.constructor.DefaultType),
        "object" == typeof t.reference &&
          !r(t.reference) &&
          "function" != typeof t.reference.getBoundingClientRect)
      )
        throw new TypeError(
          "dropdown".toUpperCase() +
            ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.'
        );
      return t;
    }
    _getMenuElement() {
      return t.next(this._element, ".dropdown-menu")[0];
    }
    _getPlacement() {
      const t = this._element.parentNode;
      if (t.classList.contains("dropend")) return ve;
      if (t.classList.contains("dropstart")) return ye;
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ge : me) : e ? be : _e;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        "static" === this._config.display &&
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: e, target: i }) {
      const n = t
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter(c);
      n.length && y(n, i, "ArrowDown" === e, !n.includes(i)).focus();
    }
    static dropdownInterface(t, e) {
      const i = Ae.getOrCreateInstance(t, e);
      if ("string" == typeof e) {
        if (void 0 === i[e]) throw new TypeError(`No method named "${e}"`);
        i[e]();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        Ae.dropdownInterface(this, t);
      });
    }
    static clearMenus(e) {
      if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key)))
        return;
      const i = t.find('[data-bs-toggle="dropdown"]');
      for (let t = 0, n = i.length; t < n; t++) {
        const n = Ae.getInstance(i[t]);
        if (!n || !1 === n._config.autoClose) continue;
        if (!n._element.classList.contains("show")) continue;
        const s = { relatedTarget: n._element };
        if (e) {
          const t = e.composedPath(),
            i = t.includes(n._menu);
          if (
            t.includes(n._element) ||
            ("inside" === n._config.autoClose && !i) ||
            ("outside" === n._config.autoClose && i)
          )
            continue;
          if (
            n._menu.contains(e.target) &&
            (("keyup" === e.type && "Tab" === e.key) ||
              /input|select|option|textarea|form/i.test(e.target.tagName))
          )
            continue;
          "click" === e.type && (s.clickEvent = e);
        }
        n._completeHide(s);
      }
    }
    static getParentFromElement(t) {
      return s(t) || t.parentNode;
    }
    static dataApiKeydownHandler(e) {
      if (
        /input|textarea/i.test(e.target.tagName)
          ? "Space" === e.key ||
            ("Escape" !== e.key &&
              (("ArrowDown" !== e.key && "ArrowUp" !== e.key) ||
                e.target.closest(".dropdown-menu")))
          : !pe.test(e.key)
      )
        return;
      const i = this.classList.contains("show");
      if (!i && "Escape" === e.key) return;
      if ((e.preventDefault(), e.stopPropagation(), h(this))) return;
      const n = () =>
        this.matches('[data-bs-toggle="dropdown"]')
          ? this
          : t.prev(this, '[data-bs-toggle="dropdown"]')[0];
      return "Escape" === e.key
        ? (n().focus(), void Ae.clearMenus())
        : "ArrowUp" === e.key || "ArrowDown" === e.key
        ? (i || n().click(), void Ae.getInstance(n())._selectMenuItem(e))
        : void ((i && "Space" !== e.key) || Ae.clearMenus());
    }
  }
  P.on(
    document,
    "keydown.bs.dropdown.data-api",
    '[data-bs-toggle="dropdown"]',
    Ae.dataApiKeydownHandler
  ),
    P.on(
      document,
      "keydown.bs.dropdown.data-api",
      ".dropdown-menu",
      Ae.dataApiKeydownHandler
    ),
    P.on(document, "click.bs.dropdown.data-api", Ae.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", Ae.clearMenus),
    P.on(
      document,
      "click.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      function (t) {
        t.preventDefault(), Ae.dropdownInterface(this);
      }
    ),
    _(Ae);
  class Te {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, "paddingRight", (e) => e + t),
        this._setElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight",
          (e) => e + t
        ),
        this._setElementAttributes(".sticky-top", "marginRight", (e) => e - t);
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t)[e];
        t.style[e] = i(Number.parseFloat(s)) + "px";
      });
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, "paddingRight"),
        this._resetElementAttributes(
          ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
          "paddingRight"
        ),
        this._resetElementAttributes(".sticky-top", "marginRight");
    }
    _saveInitialAttribute(t, e) {
      const i = t.style[e];
      i && U.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = U.getDataAttribute(t, e);
        void 0 === i
          ? t.style.removeProperty(e)
          : (U.removeDataAttribute(t, e), (t.style[e] = i));
      });
    }
    _applyManipulationCallback(e, i) {
      r(e) ? i(e) : t.find(e, this._element).forEach(i);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const Oe = {
      isVisible: !0,
      isAnimated: !1,
      rootElement: "body",
      clickCallback: null,
    },
    Ce = {
      isVisible: "boolean",
      isAnimated: "boolean",
      rootElement: "(element|string)",
      clickCallback: "(function|null)",
    };
  class ke {
    constructor(t) {
      (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    show(t) {
      this._config.isVisible
        ? (this._append(),
          this._config.isAnimated && f(this._getElement()),
          this._getElement().classList.add("show"),
          this._emulateAnimation(() => {
            b(t);
          }))
        : b(t);
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove("show"),
          this._emulateAnimation(() => {
            this.dispose(), b(t);
          }))
        : b(t);
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = "modal-backdrop"),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _getConfig(t) {
      return (
        ((t = { ...Oe, ...("object" == typeof t ? t : {}) }).rootElement = a(
          t.rootElement
        )),
        l("backdrop", t, Ce),
        t
      );
    }
    _append() {
      this._isAppended ||
        (this._config.rootElement.appendChild(this._getElement()),
        P.on(this._getElement(), "mousedown.bs.backdrop", () => {
          b(this._config.clickCallback);
        }),
        (this._isAppended = !0));
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, "mousedown.bs.backdrop"),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _emulateAnimation(t) {
      v(t, this._getElement(), this._config.isAnimated);
    }
  }
  const Le = { backdrop: !0, keyboard: !0, focus: !0 },
    xe = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      focus: "boolean",
    };
  class De extends B {
    constructor(e, i) {
      super(e),
        (this._config = this._getConfig(i)),
        (this._dialog = t.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._isShown = !1),
        (this._ignoreBackdropClick = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Te());
    }
    static get Default() {
      return Le;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, "show.bs.modal", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._isAnimated() && (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add("modal-open"),
        this._adjustDialog(),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.on(
          this._element,
          "click.dismiss.bs.modal",
          '[data-bs-dismiss="modal"]',
          (t) => this.hide(t)
        ),
        P.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
          P.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
            t.target === this._element && (this._ignoreBackdropClick = !0);
          });
        }),
        this._showBackdrop(() => this._showElement(t)));
    }
    hide(t) {
      if (
        (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(),
        !this._isShown || this._isTransitioning)
      )
        return;
      if (P.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = !1;
      const e = this._isAnimated();
      e && (this._isTransitioning = !0),
        this._setEscapeEvent(),
        this._setResizeEvent(),
        P.off(document, "focusin.bs.modal"),
        this._element.classList.remove("show"),
        P.off(this._element, "click.dismiss.bs.modal"),
        P.off(this._dialog, "mousedown.dismiss.bs.modal"),
        this._queueCallback(() => this._hideModal(), this._element, e);
    }
    dispose() {
      [window, this._dialog].forEach((t) => P.off(t, ".bs.modal")),
        this._backdrop.dispose(),
        super.dispose(),
        P.off(document, "focusin.bs.modal");
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new ke({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _getConfig(t) {
      return (
        (t = {
          ...Le,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        l("modal", t, xe),
        t
      );
    }
    _showElement(e) {
      const i = this._isAnimated(),
        n = t.findOne(".modal-body", this._dialog);
      (this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
        document.body.appendChild(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0),
        n && (n.scrollTop = 0),
        i && f(this._element),
        this._element.classList.add("show"),
        this._config.focus && this._enforceFocus(),
        this._queueCallback(
          () => {
            this._config.focus && this._element.focus(),
              (this._isTransitioning = !1),
              P.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
          },
          this._dialog,
          i
        );
    }
    _enforceFocus() {
      P.off(document, "focusin.bs.modal"),
        P.on(document, "focusin.bs.modal", (t) => {
          document === t.target ||
            this._element === t.target ||
            this._element.contains(t.target) ||
            this._element.focus();
        });
    }
    _setEscapeEvent() {
      this._isShown
        ? P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
            this._config.keyboard && "Escape" === t.key
              ? (t.preventDefault(), this.hide())
              : this._config.keyboard ||
                "Escape" !== t.key ||
                this._triggerBackdropTransition();
          })
        : P.off(this._element, "keydown.dismiss.bs.modal");
    }
    _setResizeEvent() {
      this._isShown
        ? P.on(window, "resize.bs.modal", () => this._adjustDialog())
        : P.off(window, "resize.bs.modal");
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove("modal-open"),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, "hidden.bs.modal");
        });
    }
    _showBackdrop(t) {
      P.on(this._element, "click.dismiss.bs.modal", (t) => {
        this._ignoreBackdropClick
          ? (this._ignoreBackdropClick = !1)
          : t.target === t.currentTarget &&
            (!0 === this._config.backdrop
              ? this.hide()
              : "static" === this._config.backdrop &&
                this._triggerBackdropTransition());
      }),
        this._backdrop.show(t);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const { classList: t, scrollHeight: e, style: i } = this._element,
        n = e > document.documentElement.clientHeight;
      (!n && "hidden" === i.overflowY) ||
        t.contains("modal-static") ||
        (n || (i.overflowY = "hidden"),
        t.add("modal-static"),
        this._queueCallback(() => {
          t.remove("modal-static"),
            n ||
              this._queueCallback(() => {
                i.overflowY = "";
              }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      ((!i && t && !g()) || (i && !t && g())) &&
        (this._element.style.paddingLeft = e + "px"),
        ((i && !t && !g()) || (!i && t && g())) &&
          (this._element.style.paddingRight = e + "px");
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = De.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = s(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, "show.bs.modal", (t) => {
          t.defaultPrevented ||
            P.one(e, "hidden.bs.modal", () => {
              c(this) && this.focus();
            });
        }),
        De.getOrCreateInstance(e).toggle(this);
    }
  ),
    _(De);
  const Se = { backdrop: !0, keyboard: !0, scroll: !1 },
    Ie = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" };
  class Ne extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        this._addEventListeners();
    }
    static get NAME() {
      return "offcanvas";
    }
    static get Default() {
      return Se;
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        (this._element.style.visibility = "visible"),
        this._backdrop.show(),
        this._config.scroll ||
          (new Te().hide(), this._enforceFocusOnElement(this._element)),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add("show"),
        this._queueCallback(
          () => {
            P.trigger(this._element, "shown.bs.offcanvas", {
              relatedTarget: t,
            });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (P.off(document, "focusin.bs.offcanvas"),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.remove("show"),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._element.style.visibility = "hidden"),
                this._config.scroll || new Te().reset(),
                P.trigger(this._element, "hidden.bs.offcanvas");
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(),
        super.dispose(),
        P.off(document, "focusin.bs.offcanvas");
    }
    _getConfig(t) {
      return (
        (t = {
          ...Se,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t ? t : {}),
        }),
        l("offcanvas", t, Ie),
        t
      );
    }
    _initializeBackDrop() {
      return new ke({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: () => this.hide(),
      });
    }
    _enforceFocusOnElement(t) {
      P.off(document, "focusin.bs.offcanvas"),
        P.on(document, "focusin.bs.offcanvas", (e) => {
          document === e.target ||
            t === e.target ||
            t.contains(e.target) ||
            t.focus();
        }),
        t.focus();
    }
    _addEventListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.offcanvas",
        '[data-bs-dismiss="offcanvas"]',
        () => this.hide()
      ),
        P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
          this._config.keyboard && "Escape" === t.key && this.hide();
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ne.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (e) {
      const i = s(this);
      if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), h(this)))
        return;
      P.one(i, "hidden.bs.offcanvas", () => {
        c(this) && this.focus();
      });
      const n = t.findOne(".offcanvas.show");
      n && n !== i && Ne.getInstance(n).hide(),
        Ne.getOrCreateInstance(i).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () =>
      t.find(".offcanvas.show").forEach((t) => Ne.getOrCreateInstance(t).show())
    ),
    _(Ne);
  const je = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Me = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    Pe =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    He = (t, e) => {
      const i = t.nodeName.toLowerCase();
      if (e.includes(i))
        return (
          !je.has(i) || Boolean(Me.test(t.nodeValue) || Pe.test(t.nodeValue))
        );
      const n = e.filter((t) => t instanceof RegExp);
      for (let t = 0, e = n.length; t < e; t++) if (n[t].test(i)) return !0;
      return !1;
    };
  function Re(t, e, i) {
    if (!t.length) return t;
    if (i && "function" == typeof i) return i(t);
    const n = new window.DOMParser().parseFromString(t, "text/html"),
      s = Object.keys(e),
      o = [].concat(...n.body.querySelectorAll("*"));
    for (let t = 0, i = o.length; t < i; t++) {
      const i = o[t],
        n = i.nodeName.toLowerCase();
      if (!s.includes(n)) {
        i.remove();
        continue;
      }
      const r = [].concat(...i.attributes),
        a = [].concat(e["*"] || [], e[n] || []);
      r.forEach((t) => {
        He(t, a) || i.removeAttribute(t.nodeName);
      });
    }
    return n.body.innerHTML;
  }
  const Be = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    We = new Set(["sanitize", "allowList", "sanitizeFn"]),
    qe = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(array|string|function)",
      container: "(string|element|boolean)",
      fallbackPlacements: "array",
      boundary: "(string|element)",
      customClass: "(string|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      allowList: "object",
      popperConfig: "(null|object|function)",
    },
    ze = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: g() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: g() ? "right" : "left",
    },
    $e = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      selector: !1,
      placement: "top",
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      boundary: "clippingParents",
      customClass: "",
      sanitize: !0,
      sanitizeFn: null,
      allowList: {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      popperConfig: null,
    },
    Ue = {
      HIDE: "hide.bs.tooltip",
      HIDDEN: "hidden.bs.tooltip",
      SHOW: "show.bs.tooltip",
      SHOWN: "shown.bs.tooltip",
      INSERTED: "inserted.bs.tooltip",
      CLICK: "click.bs.tooltip",
      FOCUSIN: "focusin.bs.tooltip",
      FOCUSOUT: "focusout.bs.tooltip",
      MOUSEENTER: "mouseenter.bs.tooltip",
      MOUSELEAVE: "mouseleave.bs.tooltip",
    };
  class Fe extends B {
    constructor(t, e) {
      if (void 0 === fe)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._hoverState = ""),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._config = this._getConfig(e)),
        (this.tip = null),
        this._setListeners();
    }
    static get Default() {
      return $e;
    }
    static get NAME() {
      return "tooltip";
    }
    static get Event() {
      return Ue;
    }
    static get DefaultType() {
      return qe;
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled)
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          (e._activeTrigger.click = !e._activeTrigger.click),
            e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e);
        } else {
          if (this.getTipElement().classList.contains("show"))
            return void this._leave(null, this);
          this._enter(null, this);
        }
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this.tip && this.tip.remove(),
        this._popper && this._popper.destroy(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.Event.SHOW),
        i = d(this._element),
        n =
          null === i
            ? this._element.ownerDocument.documentElement.contains(
                this._element
              )
            : i.contains(this._element);
      if (t.defaultPrevented || !n) return;
      const s = this.getTipElement(),
        o = e(this.constructor.NAME);
      s.setAttribute("id", o),
        this._element.setAttribute("aria-describedby", o),
        this.setContent(),
        this._config.animation && s.classList.add("fade");
      const r =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, s, this._element)
            : this._config.placement,
        a = this._getAttachment(r);
      this._addAttachmentClass(a);
      const { container: l } = this._config;
      R.set(s, this.constructor.DATA_KEY, this),
        this._element.ownerDocument.documentElement.contains(this.tip) ||
          (l.appendChild(s),
          P.trigger(this._element, this.constructor.Event.INSERTED)),
        this._popper
          ? this._popper.update()
          : (this._popper = ue(this._element, s, this._getPopperConfig(a))),
        s.classList.add("show");
      const c =
        "function" == typeof this._config.customClass
          ? this._config.customClass()
          : this._config.customClass;
      c && s.classList.add(...c.split(" ")),
        "ontouchstart" in document.documentElement &&
          [].concat(...document.body.children).forEach((t) => {
            P.on(t, "mouseover", u);
          });
      const h = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          const t = this._hoverState;
          (this._hoverState = null),
            P.trigger(this._element, this.constructor.Event.SHOWN),
            "out" === t && this._leave(null, this);
        },
        this.tip,
        h
      );
    }
    hide() {
      if (!this._popper) return;
      const t = this.getTipElement();
      if (
        P.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented
      )
        return;
      t.classList.remove("show"),
        "ontouchstart" in document.documentElement &&
          []
            .concat(...document.body.children)
            .forEach((t) => P.off(t, "mouseover", u)),
        (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1);
      const e = this.tip.classList.contains("fade");
      this._queueCallback(
        () => {
          this._isWithActiveTrigger() ||
            ("show" !== this._hoverState && t.remove(),
            this._cleanTipClass(),
            this._element.removeAttribute("aria-describedby"),
            P.trigger(this._element, this.constructor.Event.HIDDEN),
            this._popper && (this._popper.destroy(), (this._popper = null)));
        },
        this.tip,
        e
      ),
        (this._hoverState = "");
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t = document.createElement("div");
      return (
        (t.innerHTML = this._config.template),
        (this.tip = t.children[0]),
        this.tip
      );
    }
    setContent() {
      const e = this.getTipElement();
      this.setElementContent(t.findOne(".tooltip-inner", e), this.getTitle()),
        e.classList.remove("fade", "show");
    }
    setElementContent(t, e) {
      if (null !== t)
        return r(e)
          ? ((e = a(e)),
            void (this._config.html
              ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
              : (t.textContent = e.textContent)))
          : void (this._config.html
              ? (this._config.sanitize &&
                  (e = Re(e, this._config.allowList, this._config.sanitizeFn)),
                (t.innerHTML = e))
              : (t.textContent = e));
    }
    getTitle() {
      let t = this._element.getAttribute("data-bs-original-title");
      return (
        t ||
          (t =
            "function" == typeof this._config.title
              ? this._config.title.call(this._element)
              : this._config.title),
        t
      );
    }
    updateAttachment(t) {
      return "right" === t ? "end" : "left" === t ? "start" : t;
    }
    _initializeOnDelegatedTarget(t, e) {
      const i = this.constructor.DATA_KEY;
      return (
        (e = e || R.get(t.delegateTarget, i)) ||
          ((e = new this.constructor(
            t.delegateTarget,
            this._getDelegateConfig()
          )),
          R.set(t.delegateTarget, i, e)),
        e
      );
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "onChange",
            enabled: !0,
            phase: "afterWrite",
            fn: (t) => this._handlePopperPlacementChange(t),
          },
        ],
        onFirstUpdate: (t) => {
          t.options.placement !== t.placement &&
            this._handlePopperPlacementChange(t);
        },
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-tooltip-" + this.updateAttachment(t)
      );
    }
    _getAttachment(t) {
      return ze[t.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach((t) => {
        if ("click" === t)
          P.on(
            this._element,
            this.constructor.Event.CLICK,
            this._config.selector,
            (t) => this.toggle(t)
          );
        else if ("manual" !== t) {
          const e =
              "hover" === t
                ? this.constructor.Event.MOUSEENTER
                : this.constructor.Event.FOCUSIN,
            i =
              "hover" === t
                ? this.constructor.Event.MOUSELEAVE
                : this.constructor.Event.FOCUSOUT;
          P.on(this._element, e, this._config.selector, (t) => this._enter(t)),
            P.on(this._element, i, this._config.selector, (t) =>
              this._leave(t)
            );
        }
      }),
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
        P.on(
          this._element.closest(".modal"),
          "hide.bs.modal",
          this._hideModalHandler
        ),
        this._config.selector
          ? (this._config = {
              ...this._config,
              trigger: "manual",
              selector: "",
            })
          : this._fixTitle();
    }
    _fixTitle() {
      const t = this._element.getAttribute("title"),
        e = typeof this._element.getAttribute("data-bs-original-title");
      (t || "string" !== e) &&
        (this._element.setAttribute("data-bs-original-title", t || ""),
        !t ||
          this._element.getAttribute("aria-label") ||
          this._element.textContent ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("title", ""));
    }
    _enter(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
        e.getTipElement().classList.contains("show") || "show" === e._hoverState
          ? (e._hoverState = "show")
          : (clearTimeout(e._timeout),
            (e._hoverState = "show"),
            e._config.delay && e._config.delay.show
              ? (e._timeout = setTimeout(() => {
                  "show" === e._hoverState && e.show();
                }, e._config.delay.show))
              : e.show());
    }
    _leave(t, e) {
      (e = this._initializeOnDelegatedTarget(t, e)),
        t &&
          (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] =
            e._element.contains(t.relatedTarget)),
        e._isWithActiveTrigger() ||
          (clearTimeout(e._timeout),
          (e._hoverState = "out"),
          e._config.delay && e._config.delay.hide
            ? (e._timeout = setTimeout(() => {
                "out" === e._hoverState && e.hide();
              }, e._config.delay.hide))
            : e.hide());
    }
    _isWithActiveTrigger() {
      for (const t in this._activeTrigger)
        if (this._activeTrigger[t]) return !0;
      return !1;
    }
    _getConfig(t) {
      const e = U.getDataAttributes(this._element);
      return (
        Object.keys(e).forEach((t) => {
          We.has(t) && delete e[t];
        }),
        ((t = {
          ...this.constructor.Default,
          ...e,
          ...("object" == typeof t && t ? t : {}),
        }).container = !1 === t.container ? document.body : a(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        l("tooltip", t, this.constructor.DefaultType),
        t.sanitize && (t.template = Re(t.template, t.allowList, t.sanitizeFn)),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      if (this._config)
        for (const e in this._config)
          this.constructor.Default[e] !== this._config[e] &&
            (t[e] = this._config[e]);
      return t;
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Be);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    _handlePopperPlacementChange(t) {
      const { state: e } = t;
      e &&
        ((this.tip = e.elements.popper),
        this._cleanTipClass(),
        this._addAttachmentClass(this._getAttachment(e.placement)));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Fe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  _(Fe);
  const Ve = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Ke = {
      ...Fe.Default,
      placement: "right",
      offset: [0, 8],
      trigger: "click",
      content: "",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    Xe = { ...Fe.DefaultType, content: "(string|element|function)" },
    Ye = {
      HIDE: "hide.bs.popover",
      HIDDEN: "hidden.bs.popover",
      SHOW: "show.bs.popover",
      SHOWN: "shown.bs.popover",
      INSERTED: "inserted.bs.popover",
      CLICK: "click.bs.popover",
      FOCUSIN: "focusin.bs.popover",
      FOCUSOUT: "focusout.bs.popover",
      MOUSEENTER: "mouseenter.bs.popover",
      MOUSELEAVE: "mouseleave.bs.popover",
    };
  class Qe extends Fe {
    static get Default() {
      return Ke;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return Ye;
    }
    static get DefaultType() {
      return Xe;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    getTipElement() {
      return (
        this.tip ||
          ((this.tip = super.getTipElement()),
          this.getTitle() || t.findOne(".popover-header", this.tip).remove(),
          this._getContent() || t.findOne(".popover-body", this.tip).remove()),
        this.tip
      );
    }
    setContent() {
      const e = this.getTipElement();
      this.setElementContent(t.findOne(".popover-header", e), this.getTitle());
      let i = this._getContent();
      "function" == typeof i && (i = i.call(this._element)),
        this.setElementContent(t.findOne(".popover-body", e), i),
        e.classList.remove("fade", "show");
    }
    _addAttachmentClass(t) {
      this.getTipElement().classList.add(
        "bs-popover-" + this.updateAttachment(t)
      );
    }
    _getContent() {
      return (
        this._element.getAttribute("data-bs-content") || this._config.content
      );
    }
    _cleanTipClass() {
      const t = this.getTipElement(),
        e = t.getAttribute("class").match(Ve);
      null !== e &&
        e.length > 0 &&
        e.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Qe.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  _(Qe);
  const Ge = { offset: 10, method: "auto", target: "" },
    Ze = { offset: "number", method: "string", target: "(string|element)" };
  class Je extends B {
    constructor(t, e) {
      super(t),
        (this._scrollElement =
          "BODY" === this._element.tagName ? window : this._element),
        (this._config = this._getConfig(e)),
        (this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`),
        (this._offsets = []),
        (this._targets = []),
        (this._activeTarget = null),
        (this._scrollHeight = 0),
        P.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
        this.refresh(),
        this._process();
    }
    static get Default() {
      return Ge;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      const e =
          this._scrollElement === this._scrollElement.window
            ? "offset"
            : "position",
        i = "auto" === this._config.method ? e : this._config.method,
        s = "position" === i ? this._getScrollTop() : 0;
      (this._offsets = []),
        (this._targets = []),
        (this._scrollHeight = this._getScrollHeight()),
        t
          .find(this._selector)
          .map((e) => {
            const o = n(e),
              r = o ? t.findOne(o) : null;
            if (r) {
              const t = r.getBoundingClientRect();
              if (t.width || t.height) return [U[i](r).top + s, o];
            }
            return null;
          })
          .filter((t) => t)
          .sort((t, e) => t[0] - e[0])
          .forEach((t) => {
            this._offsets.push(t[0]), this._targets.push(t[1]);
          });
    }
    dispose() {
      P.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t) {
      if (
        "string" !=
          typeof (t = {
            ...Ge,
            ...U.getDataAttributes(this._element),
            ...("object" == typeof t && t ? t : {}),
          }).target &&
        r(t.target)
      ) {
        let { id: i } = t.target;
        i || ((i = e("scrollspy")), (t.target.id = i)), (t.target = "#" + i);
      }
      return l("scrollspy", t, Ze), t;
    }
    _getScrollTop() {
      return this._scrollElement === window
        ? this._scrollElement.pageYOffset
        : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return (
        this._scrollElement.scrollHeight ||
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        )
      );
    }
    _getOffsetHeight() {
      return this._scrollElement === window
        ? window.innerHeight
        : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        i = this._config.offset + e - this._getOffsetHeight();
      if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
        const t = this._targets[this._targets.length - 1];
        this._activeTarget !== t && this._activate(t);
      } else {
        if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
          return (this._activeTarget = null), void this._clear();
        for (let e = this._offsets.length; e--; )
          this._activeTarget !== this._targets[e] &&
            t >= this._offsets[e] &&
            (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) &&
            this._activate(this._targets[e]);
      }
    }
    _activate(e) {
      (this._activeTarget = e), this._clear();
      const i = this._selector
          .split(",")
          .map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
        n = t.findOne(i.join(","));
      n.classList.contains("dropdown-item")
        ? (t
            .findOne(".dropdown-toggle", n.closest(".dropdown"))
            .classList.add("active"),
          n.classList.add("active"))
        : (n.classList.add("active"),
          t.parents(n, ".nav, .list-group").forEach((e) => {
            t
              .prev(e, ".nav-link, .list-group-item")
              .forEach((t) => t.classList.add("active")),
              t.prev(e, ".nav-item").forEach((e) => {
                t.children(e, ".nav-link").forEach((t) =>
                  t.classList.add("active")
                );
              });
          })),
        P.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: e,
        });
    }
    _clear() {
      t.find(this._selector)
        .filter((t) => t.classList.contains("active"))
        .forEach((t) => t.classList.remove("active"));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Je.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    t.find('[data-bs-spy="scroll"]').forEach((t) => new Je(t));
  }),
    _(Je);
  class ti extends B {
    static get NAME() {
      return "tab";
    }
    show() {
      if (
        this._element.parentNode &&
        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
        this._element.classList.contains("active")
      )
        return;
      let e;
      const i = s(this._element),
        n = this._element.closest(".nav, .list-group");
      if (n) {
        const i =
          "UL" === n.nodeName || "OL" === n.nodeName
            ? ":scope > li > .active"
            : ".active";
        (e = t.find(i, n)), (e = e[e.length - 1]);
      }
      const o = e
        ? P.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
        : null;
      if (
        P.trigger(this._element, "show.bs.tab", { relatedTarget: e })
          .defaultPrevented ||
        (null !== o && o.defaultPrevented)
      )
        return;
      this._activate(this._element, n);
      const r = () => {
        P.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
          P.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
      };
      i ? this._activate(i, i.parentNode, r) : r();
    }
    _activate(e, i, n) {
      const s = (
          !i || ("UL" !== i.nodeName && "OL" !== i.nodeName)
            ? t.children(i, ".active")
            : t.find(":scope > li > .active", i)
        )[0],
        o = n && s && s.classList.contains("fade"),
        r = () => this._transitionComplete(e, s, n);
      s && o
        ? (s.classList.remove("show"), this._queueCallback(r, e, !0))
        : r();
    }
    _transitionComplete(e, i, n) {
      if (i) {
        i.classList.remove("active");
        const e = t.findOne(":scope > .dropdown-menu .active", i.parentNode);
        e && e.classList.remove("active"),
          "tab" === i.getAttribute("role") &&
            i.setAttribute("aria-selected", !1);
      }
      e.classList.add("active"),
        "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
        f(e),
        e.classList.contains("fade") && e.classList.add("show");
      let s = e.parentNode;
      if (
        (s && "LI" === s.nodeName && (s = s.parentNode),
        s && s.classList.contains("dropdown-menu"))
      ) {
        const i = e.closest(".dropdown");
        i &&
          t
            .find(".dropdown-toggle", i)
            .forEach((t) => t.classList.add("active")),
          e.setAttribute("aria-expanded", !0);
      }
      n && n();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ti.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.tab.data-api",
    '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    function (t) {
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        h(this) || ti.getOrCreateInstance(this).show();
    }
  ),
    _(ti);
  const ei = { animation: "boolean", autohide: "boolean", delay: "number" },
    ii = { animation: !0, autohide: !0, delay: 5e3 };
  class ni extends B {
    constructor(t, e) {
      super(t),
        (this._config = this._getConfig(e)),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get DefaultType() {
      return ei;
    }
    static get Default() {
      return ii;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove("hide"),
        f(this._element),
        this._element.classList.add("showing"),
        this._queueCallback(
          () => {
            this._element.classList.remove("showing"),
              this._element.classList.add("show"),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this._element.classList.contains("show") &&
        (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.remove("show"),
          this._queueCallback(
            () => {
              this._element.classList.add("hide"),
                P.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this._element.classList.contains("show") &&
          this._element.classList.remove("show"),
        super.dispose();
    }
    _getConfig(t) {
      return (
        (t = {
          ...ii,
          ...U.getDataAttributes(this._element),
          ...("object" == typeof t && t ? t : {}),
        }),
        l("toast", t, this.constructor.DefaultType),
        t
      );
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(
        this._element,
        "click.dismiss.bs.toast",
        '[data-bs-dismiss="toast"]',
        () => this.hide()
      ),
        P.on(this._element, "mouseover.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ni.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    _(ni),
    {
      Alert: W,
      Button: q,
      Carousel: Z,
      Collapse: et,
      Dropdown: Ae,
      Modal: De,
      Offcanvas: Ne,
      Popover: Qe,
      ScrollSpy: Je,
      Tab: ti,
      Toast: ni,
      Tooltip: Fe,
    }
  );
});

/*jquery easing*/
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return n(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  function e(n) {
    var e = 7.5625,
      t = 2.75;
    return n < 1 / t
      ? e * n * n
      : n < 2 / t
      ? e * (n -= 1.5 / t) * n + 0.75
      : n < 2.5 / t
      ? e * (n -= 2.25 / t) * n + 0.9375
      : e * (n -= 2.625 / t) * n + 0.984375;
  }
  n.easing.jswing = n.easing.swing;
  var t = Math.pow,
    u = Math.sqrt,
    r = Math.sin,
    i = Math.cos,
    a = Math.PI,
    c = 1.70158,
    o = 1.525 * c,
    s = (2 * a) / 3,
    f = (2 * a) / 4.5;
  n.extend(n.easing, {
    def: "easeOutQuad",
    swing: function (e) {
      return n.easing[n.easing.def](e);
    },
    easeInQuad: function (n) {
      return n * n;
    },
    easeOutQuad: function (n) {
      return 1 - (1 - n) * (1 - n);
    },
    easeInOutQuad: function (n) {
      return n < 0.5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2;
    },
    easeInCubic: function (n) {
      return n * n * n;
    },
    easeOutCubic: function (n) {
      return 1 - t(1 - n, 3);
    },
    easeInOutCubic: function (n) {
      return n < 0.5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2;
    },
    easeInQuart: function (n) {
      return n * n * n * n;
    },
    easeOutQuart: function (n) {
      return 1 - t(1 - n, 4);
    },
    easeInOutQuart: function (n) {
      return n < 0.5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2;
    },
    easeInQuint: function (n) {
      return n * n * n * n * n;
    },
    easeOutQuint: function (n) {
      return 1 - t(1 - n, 5);
    },
    easeInOutQuint: function (n) {
      return n < 0.5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2;
    },
    easeInSine: function (n) {
      return 1 - i((n * a) / 2);
    },
    easeOutSine: function (n) {
      return r((n * a) / 2);
    },
    easeInOutSine: function (n) {
      return -(i(a * n) - 1) / 2;
    },
    easeInExpo: function (n) {
      return 0 === n ? 0 : t(2, 10 * n - 10);
    },
    easeOutExpo: function (n) {
      return 1 === n ? 1 : 1 - t(2, -10 * n);
    },
    easeInOutExpo: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : n < 0.5
        ? t(2, 20 * n - 10) / 2
        : (2 - t(2, -20 * n + 10)) / 2;
    },
    easeInCirc: function (n) {
      return 1 - u(1 - t(n, 2));
    },
    easeOutCirc: function (n) {
      return u(1 - t(n - 1, 2));
    },
    easeInOutCirc: function (n) {
      return n < 0.5
        ? (1 - u(1 - t(2 * n, 2))) / 2
        : (u(1 - t(-2 * n + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s);
    },
    easeOutElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : t(2, -10 * n) * r((10 * n - 0.75) * s) + 1;
    },
    easeInOutElastic: function (n) {
      return 0 === n
        ? 0
        : 1 === n
        ? 1
        : n < 0.5
        ? -(t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2
        : (t(2, -20 * n + 10) * r((20 * n - 11.125) * f)) / 2 + 1;
    },
    easeInBack: function (n) {
      return (c + 1) * n * n * n - c * n * n;
    },
    easeOutBack: function (n) {
      return 1 + (c + 1) * t(n - 1, 3) + c * t(n - 1, 2);
    },
    easeInOutBack: function (n) {
      return n < 0.5
        ? (t(2 * n, 2) * (7.189819 * n - o)) / 2
        : (t(2 * n - 2, 2) * ((o + 1) * (2 * n - 2) + o) + 2) / 2;
    },
    easeInBounce: function (n) {
      return 1 - e(1 - n);
    },
    easeOutBounce: e,
    easeInOutBounce: function (n) {
      return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2;
    },
  });
});
/*
 * @license jQuery Breakpoints | MIT | Jerry Low | https://www.github.com/jerrylow/breakpoints
 */
!(function (e) {
  var t = function (t, n) {
    var r = this;
    (r.n = "breakpoints"),
      (r.settings = {}),
      (r.currentBp = null),
      (r.getBreakpoint = function () {
        var e,
          t = a(),
          n = r.settings.breakpoints;
        return (
          n.forEach(function (n) {
            t >= n.width && (e = n.name);
          }),
          e || (e = n[n.length - 1].name),
          e
        );
      }),
      (r.getBreakpointWidth = function (e) {
        var t;
        return (
          r.settings.breakpoints.forEach(function (n) {
            e == n.name && (t = n.width);
          }),
          t
        );
      }),
      (r.compareCheck = function (e, t, n) {
        var i = a(),
          o = r.settings.breakpoints,
          s = r.getBreakpointWidth(t),
          u = !1;
        switch (e) {
          case "lessThan":
            u = i < s;
            break;
          case "lessEqualTo":
            u = i <= s;
            break;
          case "greaterThan":
          case "greaterEqualTo":
            u = i > s;
            break;
          case "inside":
            var g = o.findIndex(function (e) {
              return e.name === t;
            });
            if (g === o.length - 1) u = i > s;
            else {
              var d = r.getBreakpointWidth(o[g + 1].name);
              u = i >= s && i < d;
            }
        }
        u && n();
      }),
      (r.destroy = function () {
        e(window).unbind(r.n);
      });
    var i = function () {
        var t = a(),
          n = r.settings.breakpoints,
          i = r.currentBp;
        n.forEach(function (n) {
          i === n.name
            ? n.inside ||
              (e(window).trigger("inside-" + n.name), (n.inside = !0))
            : (n.inside = !1),
            t < n.width &&
              (n.less ||
                (e(window).trigger("lessThan-" + n.name),
                (n.less = !0),
                (n.greater = !1),
                (n.greaterEqual = !1))),
            t >= n.width &&
              (n.greaterEqual ||
                (e(window).trigger("greaterEqualTo-" + n.name),
                (n.greaterEqual = !0),
                (n.less = !1)),
              t > n.width &&
                (n.greater ||
                  (e(window).trigger("greaterThan-" + n.name),
                  (n.greater = !0),
                  (n.less = !1))));
        });
      },
      a = function () {
        var t = e(window);
        return r.outerWidth ? t.outerWidth() : t.width();
      },
      o = e.extend({}, e.fn.breakpoints.defaults, n);
    (r.settings = {
      breakpoints: o.breakpoints,
      buffer: o.buffer,
      triggerOnInit: o.triggerOnInit,
      outerWidth: o.outerWidth,
    }),
      t.data(r.n, this),
      (r.currentBp = r.getBreakpoint());
    var s = null;
    e.isFunction(e(window).on) &&
      e(window).on("resize." + r.n, function (t) {
        s && clearTimeout(s),
          (s = setTimeout(function (t) {
            var n;
            (n = r.getBreakpoint()) !== r.currentBp &&
              (e(window).trigger({
                type: "breakpoint-change",
                from: r.currentBp,
                to: n,
              }),
              (r.currentBp = n)),
              i();
          }, r.settings.buffer));
      }),
      r.settings.triggerOnInit &&
        setTimeout(function () {
          e(window).trigger({
            type: "breakpoint-change",
            from: r.currentBp,
            to: r.currentBp,
            initialInit: !0,
          });
        }, r.settings.buffer),
      setTimeout(function () {
        i();
      }, 0);
  };
  (e.fn.breakpoints = function (e, n, r) {
    if (this.data("breakpoints")) {
      var i = this.data("breakpoints");
      return "getBreakpoint" === e
        ? i.getBreakpoint()
        : "getBreakpointWidth" === e
        ? i.getBreakpointWidth(n)
        : [
            "lessThan",
            "lessEqualTo",
            "greaterThan",
            "greaterEqualTo",
            "inside",
          ].indexOf(e) >= 0
        ? i.compareCheck(e, n, r)
        : void ("destroy" === e && i.destroy());
    }
    new t(this, e);
  }),
    (e.fn.breakpoints.defaults = {
      breakpoints: [
        { name: "xs", width: 0 },
        { name: "sm", width: 768 },
        { name: "md", width: 992 },
        { name: "lg", width: 1200 },
      ],
      buffer: 300,
      triggerOnInit: !1,
      outerWidth: !1,
    });
})(jQuery);

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });

/*!
 * Flickity PACKAGED v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("jquery"));
  } else {
    e.jQueryBridget = i(e, e.jQuery);
  }
})(window, function t(e, r) {
  "use strict";
  var o = Array.prototype.slice;
  var i = e.console;
  var u =
    typeof i == "undefined"
      ? function () {}
      : function (t) {
          i.error(t);
        };
  function n(h, s, c) {
    c = c || r || e.jQuery;
    if (!c) {
      return;
    }
    if (!s.prototype.option) {
      s.prototype.option = function (t) {
        if (!c.isPlainObject(t)) {
          return;
        }
        this.options = c.extend(true, this.options, t);
      };
    }
    c.fn[h] = function (t) {
      if (typeof t == "string") {
        var e = o.call(arguments, 1);
        return i(this, t, e);
      }
      n(this, t);
      return this;
    };
    function i(t, r, o) {
      var a;
      var l = "$()." + h + '("' + r + '")';
      t.each(function (t, e) {
        var i = c.data(e, h);
        if (!i) {
          u(h + " not initialized. Cannot call methods, i.e. " + l);
          return;
        }
        var n = i[r];
        if (!n || r.charAt(0) == "_") {
          u(l + " is not a valid method");
          return;
        }
        var s = n.apply(i, o);
        a = a === undefined ? s : a;
      });
      return a !== undefined ? a : t;
    }
    function n(t, n) {
      t.each(function (t, e) {
        var i = c.data(e, h);
        if (i) {
          i.option(n);
          i._init();
        } else {
          i = new s(e, n);
          c.data(e, h, i);
        }
      });
    }
    a(c);
  }
  function a(t) {
    if (!t || (t && t.bridget)) {
      return;
    }
    t.bridget = n;
  }
  a(r || e.jQuery);
  return n;
});
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("ev-emitter/ev-emitter", e);
  } else if (typeof module == "object" && module.exports) {
    module.exports = e();
  } else {
    t.EvEmitter = e();
  }
})(typeof window != "undefined" ? window : this, function () {
  function t() {}
  var e = t.prototype;
  e.on = function (t, e) {
    if (!t || !e) {
      return;
    }
    var i = (this._events = this._events || {});
    var n = (i[t] = i[t] || []);
    if (n.indexOf(e) == -1) {
      n.push(e);
    }
    return this;
  };
  e.once = function (t, e) {
    if (!t || !e) {
      return;
    }
    this.on(t, e);
    var i = (this._onceEvents = this._onceEvents || {});
    var n = (i[t] = i[t] || {});
    n[e] = true;
    return this;
  };
  e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) {
      return;
    }
    var n = i.indexOf(e);
    if (n != -1) {
      i.splice(n, 1);
    }
    return this;
  };
  e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (!i || !i.length) {
      return;
    }
    i = i.slice(0);
    e = e || [];
    var n = this._onceEvents && this._onceEvents[t];
    for (var s = 0; s < i.length; s++) {
      var r = i[s];
      var o = n && n[r];
      if (o) {
        this.off(t, r);
        delete n[r];
      }
      r.apply(this, e);
    }
    return this;
  };
  e.allOff = function () {
    delete this._events;
    delete this._onceEvents;
  };
  return t;
});
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("get-size/get-size", e);
  } else if (typeof module == "object" && module.exports) {
    module.exports = e();
  } else {
    t.getSize = e();
  }
})(window, function t() {
  "use strict";
  function m(t) {
    var e = parseFloat(t);
    var i = t.indexOf("%") == -1 && !isNaN(e);
    return i && e;
  }
  function e() {}
  var i =
    typeof console == "undefined"
      ? e
      : function (t) {
          console.error(t);
        };
  var y = [
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
    "borderLeftWidth",
    "borderRightWidth",
    "borderTopWidth",
    "borderBottomWidth",
  ];
  var b = y.length;
  function E() {
    var t = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
    };
    for (var e = 0; e < b; e++) {
      var i = y[e];
      t[i] = 0;
    }
    return t;
  }
  function S(t) {
    var e = getComputedStyle(t);
    if (!e) {
      i(
        "Style returned " +
          e +
          ". Are you running this code in a hidden iframe on Firefox? " +
          "See https://bit.ly/getsizebug1"
      );
    }
    return e;
  }
  var n = false;
  var C;
  function x() {
    if (n) {
      return;
    }
    n = true;
    var t = document.createElement("div");
    t.style.width = "200px";
    t.style.padding = "1px 2px 3px 4px";
    t.style.borderStyle = "solid";
    t.style.borderWidth = "1px 2px 3px 4px";
    t.style.boxSizing = "border-box";
    var e = document.body || document.documentElement;
    e.appendChild(t);
    var i = S(t);
    C = Math.round(m(i.width)) == 200;
    s.isBoxSizeOuter = C;
    e.removeChild(t);
  }
  function s(t) {
    x();
    if (typeof t == "string") {
      t = document.querySelector(t);
    }
    if (!t || typeof t != "object" || !t.nodeType) {
      return;
    }
    var e = S(t);
    if (e.display == "none") {
      return E();
    }
    var i = {};
    i.width = t.offsetWidth;
    i.height = t.offsetHeight;
    var n = (i.isBorderBox = e.boxSizing == "border-box");
    for (var s = 0; s < b; s++) {
      var r = y[s];
      var o = e[r];
      var a = parseFloat(o);
      i[r] = !isNaN(a) ? a : 0;
    }
    var l = i.paddingLeft + i.paddingRight;
    var h = i.paddingTop + i.paddingBottom;
    var c = i.marginLeft + i.marginRight;
    var u = i.marginTop + i.marginBottom;
    var d = i.borderLeftWidth + i.borderRightWidth;
    var f = i.borderTopWidth + i.borderBottomWidth;
    var p = n && C;
    var v = m(e.width);
    if (v !== false) {
      i.width = v + (p ? 0 : l + d);
    }
    var g = m(e.height);
    if (g !== false) {
      i.height = g + (p ? 0 : h + f);
    }
    i.innerWidth = i.width - (l + d);
    i.innerHeight = i.height - (h + f);
    i.outerWidth = i.width + c;
    i.outerHeight = i.height + u;
    return i;
  }
  return s;
});
(function (t, e) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("desandro-matches-selector/matches-selector", e);
  } else if (typeof module == "object" && module.exports) {
    module.exports = e();
  } else {
    t.matchesSelector = e();
  }
})(window, function t() {
  "use strict";
  var n = (function () {
    var t = window.Element.prototype;
    if (t.matches) {
      return "matches";
    }
    if (t.matchesSelector) {
      return "matchesSelector";
    }
    var e = ["webkit", "moz", "ms", "o"];
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      var s = n + "MatchesSelector";
      if (t[s]) {
        return s;
      }
    }
  })();
  return function t(e, i) {
    return e[n](i);
  };
});
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("fizzy-ui-utils/utils", [
      "desandro-matches-selector/matches-selector",
    ], function (t) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("desandro-matches-selector"));
  } else {
    e.fizzyUIUtils = i(e, e.matchesSelector);
  }
})(window, function t(h, r) {
  var c = {};
  c.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
    return t;
  };
  c.modulo = function (t, e) {
    return ((t % e) + e) % e;
  };
  var i = Array.prototype.slice;
  c.makeArray = function (t) {
    if (Array.isArray(t)) {
      return t;
    }
    if (t === null || t === undefined) {
      return [];
    }
    var e = typeof t == "object" && typeof t.length == "number";
    if (e) {
      return i.call(t);
    }
    return [t];
  };
  c.removeFrom = function (t, e) {
    var i = t.indexOf(e);
    if (i != -1) {
      t.splice(i, 1);
    }
  };
  c.getParent = function (t, e) {
    while (t.parentNode && t != document.body) {
      t = t.parentNode;
      if (r(t, e)) {
        return t;
      }
    }
  };
  c.getQueryElement = function (t) {
    if (typeof t == "string") {
      return document.querySelector(t);
    }
    return t;
  };
  c.handleEvent = function (t) {
    var e = "on" + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  c.filterFindElements = function (t, n) {
    t = c.makeArray(t);
    var s = [];
    t.forEach(function (t) {
      if (!(t instanceof HTMLElement)) {
        return;
      }
      if (!n) {
        s.push(t);
        return;
      }
      if (r(t, n)) {
        s.push(t);
      }
      var e = t.querySelectorAll(n);
      for (var i = 0; i < e.length; i++) {
        s.push(e[i]);
      }
    });
    return s;
  };
  c.debounceMethod = function (t, e, n) {
    n = n || 100;
    var s = t.prototype[e];
    var r = e + "Timeout";
    t.prototype[e] = function () {
      var t = this[r];
      clearTimeout(t);
      var e = arguments;
      var i = this;
      this[r] = setTimeout(function () {
        s.apply(i, e);
        delete i[r];
      }, n);
    };
  };
  c.docReady = function (t) {
    var e = document.readyState;
    if (e == "complete" || e == "interactive") {
      setTimeout(t);
    } else {
      document.addEventListener("DOMContentLoaded", t);
    }
  };
  c.toDashed = function (t) {
    return t
      .replace(/(.)([A-Z])/g, function (t, e, i) {
        return e + "-" + i;
      })
      .toLowerCase();
  };
  var u = h.console;
  c.htmlInit = function (a, l) {
    c.docReady(function () {
      var t = c.toDashed(l);
      var s = "data-" + t;
      var e = document.querySelectorAll("[" + s + "]");
      var i = document.querySelectorAll(".js-" + t);
      var n = c.makeArray(e).concat(c.makeArray(i));
      var r = s + "-options";
      var o = h.jQuery;
      n.forEach(function (e) {
        var t = e.getAttribute(s) || e.getAttribute(r);
        var i;
        try {
          i = t && JSON.parse(t);
        } catch (t) {
          if (u) {
            u.error("Error parsing " + s + " on " + e.className + ": " + t);
          }
          return;
        }
        var n = new a(e, i);
        if (o) {
          o.data(e, l, n);
        }
      });
    });
  };
  return c;
});
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/cell", ["get-size/get-size"], function (t) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("get-size"));
  } else {
    e.Flickity = e.Flickity || {};
    e.Flickity.Cell = i(e, e.getSize);
  }
})(window, function t(e, i) {
  function n(t, e) {
    this.element = t;
    this.parent = e;
    this.create();
  }
  var s = n.prototype;
  s.create = function () {
    this.element.style.position = "absolute";
    this.element.setAttribute("aria-hidden", "true");
    this.x = 0;
    this.shift = 0;
  };
  s.destroy = function () {
    this.unselect();
    this.element.style.position = "";
    var t = this.parent.originSide;
    this.element.style[t] = "";
    this.element.removeAttribute("aria-hidden");
  };
  s.getSize = function () {
    this.size = i(this.element);
  };
  s.setPosition = function (t) {
    this.x = t;
    this.updateTarget();
    this.renderPosition(t);
  };
  s.updateTarget = s.setDefaultTarget = function () {
    var t = this.parent.originSide == "left" ? "marginLeft" : "marginRight";
    this.target =
      this.x + this.size[t] + this.size.width * this.parent.cellAlign;
  };
  s.renderPosition = function (t) {
    var e = this.parent.originSide;
    this.element.style[e] = this.parent.getPositionValue(t);
  };
  s.select = function () {
    this.element.classList.add("is-selected");
    this.element.removeAttribute("aria-hidden");
  };
  s.unselect = function () {
    this.element.classList.remove("is-selected");
    this.element.setAttribute("aria-hidden", "true");
  };
  s.wrapShift = function (t) {
    this.shift = t;
    this.renderPosition(this.x + this.parent.slideableWidth * t);
  };
  s.remove = function () {
    this.element.parentNode.removeChild(this.element);
  };
  return n;
});
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/slide", e);
  } else if (typeof module == "object" && module.exports) {
    module.exports = e();
  } else {
    t.Flickity = t.Flickity || {};
    t.Flickity.Slide = e();
  }
})(window, function t() {
  "use strict";
  function e(t) {
    this.parent = t;
    this.isOriginLeft = t.originSide == "left";
    this.cells = [];
    this.outerWidth = 0;
    this.height = 0;
  }
  var i = e.prototype;
  i.addCell = function (t) {
    this.cells.push(t);
    this.outerWidth += t.size.outerWidth;
    this.height = Math.max(t.size.outerHeight, this.height);
    if (this.cells.length == 1) {
      this.x = t.x;
      var e = this.isOriginLeft ? "marginLeft" : "marginRight";
      this.firstMargin = t.size[e];
    }
  };
  i.updateTarget = function () {
    var t = this.isOriginLeft ? "marginRight" : "marginLeft";
    var e = this.getLastCell();
    var i = e ? e.size[t] : 0;
    var n = this.outerWidth - (this.firstMargin + i);
    this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
  };
  i.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };
  i.select = function () {
    this.cells.forEach(function (t) {
      t.select();
    });
  };
  i.unselect = function () {
    this.cells.forEach(function (t) {
      t.unselect();
    });
  };
  i.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  };
  return e;
});
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("fizzy-ui-utils"));
  } else {
    e.Flickity = e.Flickity || {};
    e.Flickity.animatePrototype = i(e, e.fizzyUIUtils);
  }
})(window, function t(e, i) {
  var n = {};
  n.startAnimation = function () {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;
    this.restingFrames = 0;
    this.animate();
  };
  n.animate = function () {
    this.applyDragForce();
    this.applySelectedAttraction();
    var t = this.x;
    this.integratePhysics();
    this.positionSlider();
    this.settle(t);
    if (this.isAnimating) {
      var e = this;
      requestAnimationFrame(function t() {
        e.animate();
      });
    }
  };
  n.positionSlider = function () {
    var t = this.x;
    if (this.options.wrapAround && this.cells.length > 1) {
      t = i.modulo(t, this.slideableWidth);
      t -= this.slideableWidth;
      this.shiftWrapCells(t);
    }
    this.setTranslateX(t, this.isAnimating);
    this.dispatchScrollEvent();
  };
  n.setTranslateX = function (t, e) {
    t += this.cursorPosition;
    t = this.options.rightToLeft ? -t : t;
    var i = this.getPositionValue(t);
    this.slider.style.transform = e
      ? "translate3d(" + i + ",0,0)"
      : "translateX(" + i + ")";
  };
  n.dispatchScrollEvent = function () {
    var t = this.slides[0];
    if (!t) {
      return;
    }
    var e = -this.x - t.target;
    var i = e / this.slidesWidth;
    this.dispatchEvent("scroll", null, [i, e]);
  };
  n.positionSliderAtSelected = function () {
    if (!this.cells.length) {
      return;
    }
    this.x = -this.selectedSlide.target;
    this.velocity = 0;
    this.positionSlider();
  };
  n.getPositionValue = function (t) {
    if (this.options.percentPosition) {
      return Math.round((t / this.size.innerWidth) * 1e4) * 0.01 + "%";
    } else {
      return Math.round(t) + "px";
    }
  };
  n.settle = function (t) {
    var e =
      !this.isPointerDown && Math.round(this.x * 100) == Math.round(t * 100);
    if (e) {
      this.restingFrames++;
    }
    if (this.restingFrames > 2) {
      this.isAnimating = false;
      delete this.isFreeScrolling;
      this.positionSlider();
      this.dispatchEvent("settle", null, [this.selectedIndex]);
    }
  };
  n.shiftWrapCells = function (t) {
    var e = this.cursorPosition + t;
    this._shiftCells(this.beforeShiftCells, e, -1);
    var i =
      this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
    this._shiftCells(this.afterShiftCells, i, 1);
  };
  n._shiftCells = function (t, e, i) {
    for (var n = 0; n < t.length; n++) {
      var s = t[n];
      var r = e > 0 ? i : 0;
      s.wrapShift(r);
      e -= s.size.outerWidth;
    }
  };
  n._unshiftCells = function (t) {
    if (!t || !t.length) {
      return;
    }
    for (var e = 0; e < t.length; e++) {
      t[e].wrapShift(0);
    }
  };
  n.integratePhysics = function () {
    this.x += this.velocity;
    this.velocity *= this.getFrictionFactor();
  };
  n.applyForce = function (t) {
    this.velocity += t;
  };
  n.getFrictionFactor = function () {
    return (
      1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    );
  };
  n.getRestingPosition = function () {
    return this.x + this.velocity / (1 - this.getFrictionFactor());
  };
  n.applyDragForce = function () {
    if (!this.isDraggable || !this.isPointerDown) {
      return;
    }
    var t = this.dragX - this.x;
    var e = t - this.velocity;
    this.applyForce(e);
  };
  n.applySelectedAttraction = function () {
    var t = this.isDraggable && this.isPointerDown;
    if (t || this.isFreeScrolling || !this.slides.length) {
      return;
    }
    var e = this.selectedSlide.target * -1 - this.x;
    var i = e * this.options.selectedAttraction;
    this.applyForce(i);
  };
  return n;
});
(function (o, a) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/flickity", [
      "ev-emitter/ev-emitter",
      "get-size/get-size",
      "fizzy-ui-utils/utils",
      "./cell",
      "./slide",
      "./animate",
    ], function (t, e, i, n, s, r) {
      return a(o, t, e, i, n, s, r);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = a(
      o,
      require("ev-emitter"),
      require("get-size"),
      require("fizzy-ui-utils"),
      require("./cell"),
      require("./slide"),
      require("./animate")
    );
  } else {
    var t = o.Flickity;
    o.Flickity = a(
      o,
      o.EvEmitter,
      o.getSize,
      o.fizzyUIUtils,
      t.Cell,
      t.Slide,
      t.animatePrototype
    );
  }
})(window, function t(n, e, i, a, s, o, r) {
  var l = n.jQuery;
  var h = n.getComputedStyle;
  var c = n.console;
  function u(t, e) {
    t = a.makeArray(t);
    while (t.length) {
      e.appendChild(t.shift());
    }
  }
  var d = 0;
  var f = {};
  function p(t, e) {
    var i = a.getQueryElement(t);
    if (!i) {
      if (c) {
        c.error("Bad element for Flickity: " + (i || t));
      }
      return;
    }
    this.element = i;
    if (this.element.flickityGUID) {
      var n = f[this.element.flickityGUID];
      if (n) n.option(e);
      return n;
    }
    if (l) {
      this.$element = l(this.element);
    }
    this.options = a.extend({}, this.constructor.defaults);
    this.option(e);
    this._create();
  }
  p.defaults = {
    accessibility: true,
    cellAlign: "center",
    freeScrollFriction: 0.075,
    friction: 0.28,
    namespaceJQueryEvents: true,
    percentPosition: true,
    resize: true,
    selectedAttraction: 0.025,
    setGallerySize: true,
  };
  p.createMethods = [];
  var v = p.prototype;
  a.extend(v, e.prototype);
  v._create = function () {
    var t = (this.guid = ++d);
    this.element.flickityGUID = t;
    f[t] = this;
    this.selectedIndex = 0;
    this.restingFrames = 0;
    this.x = 0;
    this.velocity = 0;
    this.originSide = this.options.rightToLeft ? "right" : "left";
    this.viewport = document.createElement("div");
    this.viewport.className = "flickity-viewport";
    this._createSlider();
    if (this.options.resize || this.options.watchCSS) {
      n.addEventListener("resize", this);
    }
    for (var e in this.options.on) {
      var i = this.options.on[e];
      this.on(e, i);
    }
    p.createMethods.forEach(function (t) {
      this[t]();
    }, this);
    if (this.options.watchCSS) {
      this.watchCSS();
    } else {
      this.activate();
    }
  };
  v.option = function (t) {
    a.extend(this.options, t);
  };
  v.activate = function () {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.element.classList.add("flickity-enabled");
    if (this.options.rightToLeft) {
      this.element.classList.add("flickity-rtl");
    }
    this.getSize();
    var t = this._filterFindCellElements(this.element.children);
    u(t, this.slider);
    this.viewport.appendChild(this.slider);
    this.element.appendChild(this.viewport);
    this.reloadCells();
    if (this.options.accessibility) {
      this.element.tabIndex = 0;
      this.element.addEventListener("keydown", this);
    }
    this.emitEvent("activate");
    this.selectInitialIndex();
    this.isInitActivated = true;
    this.dispatchEvent("ready");
  };
  v._createSlider = function () {
    var t = document.createElement("div");
    t.className = "flickity-slider";
    t.style[this.originSide] = 0;
    this.slider = t;
  };
  v._filterFindCellElements = function (t) {
    return a.filterFindElements(t, this.options.cellSelector);
  };
  v.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children);
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
  };
  v._makeCells = function (t) {
    var e = this._filterFindCellElements(t);
    var i = e.map(function (t) {
      return new s(t, this);
    }, this);
    return i;
  };
  v.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  };
  v.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  };
  v.positionCells = function () {
    this._sizeCells(this.cells);
    this._positionCells(0);
  };
  v._positionCells = function (t) {
    t = t || 0;
    this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
    var e = 0;
    if (t > 0) {
      var i = this.cells[t - 1];
      e = i.x + i.size.outerWidth;
    }
    var n = this.cells.length;
    for (var s = t; s < n; s++) {
      var r = this.cells[s];
      r.setPosition(e);
      e += r.size.outerWidth;
      this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }
    this.slideableWidth = e;
    this.updateSlides();
    this._containSlides();
    this.slidesWidth = n
      ? this.getLastSlide().target - this.slides[0].target
      : 0;
  };
  v._sizeCells = function (t) {
    t.forEach(function (t) {
      t.getSize();
    });
  };
  v.updateSlides = function () {
    this.slides = [];
    if (!this.cells.length) {
      return;
    }
    var n = new o(this);
    this.slides.push(n);
    var t = this.originSide == "left";
    var s = t ? "marginRight" : "marginLeft";
    var r = this._getCanCellFit();
    this.cells.forEach(function (t, e) {
      if (!n.cells.length) {
        n.addCell(t);
        return;
      }
      var i = n.outerWidth - n.firstMargin + (t.size.outerWidth - t.size[s]);
      if (r.call(this, e, i)) {
        n.addCell(t);
      } else {
        n.updateTarget();
        n = new o(this);
        this.slides.push(n);
        n.addCell(t);
      }
    }, this);
    n.updateTarget();
    this.updateSelectedSlide();
  };
  v._getCanCellFit = function () {
    var t = this.options.groupCells;
    if (!t) {
      return function () {
        return false;
      };
    } else if (typeof t == "number") {
      var e = parseInt(t, 10);
      return function (t) {
        return t % e !== 0;
      };
    }
    var i = typeof t == "string" && t.match(/^(\d+)%$/);
    var n = i ? parseInt(i[1], 10) / 100 : 1;
    return function (t, e) {
      return e <= (this.size.innerWidth + 1) * n;
    };
  };
  v._init = v.reposition = function () {
    this.positionCells();
    this.positionSliderAtSelected();
  };
  v.getSize = function () {
    this.size = i(this.element);
    this.setCellAlign();
    this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };
  var g = {
    center: { left: 0.5, right: 0.5 },
    left: { left: 0, right: 1 },
    right: { right: 0, left: 1 },
  };
  v.setCellAlign = function () {
    var t = g[this.options.cellAlign];
    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
  };
  v.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var t =
        this.options.adaptiveHeight && this.selectedSlide
          ? this.selectedSlide.height
          : this.maxCellHeight;
      this.viewport.style.height = t + "px";
    }
  };
  v._getWrapShiftCells = function () {
    if (!this.options.wrapAround) {
      return;
    }
    this._unshiftCells(this.beforeShiftCells);
    this._unshiftCells(this.afterShiftCells);
    var t = this.cursorPosition;
    var e = this.cells.length - 1;
    this.beforeShiftCells = this._getGapCells(t, e, -1);
    t = this.size.innerWidth - this.cursorPosition;
    this.afterShiftCells = this._getGapCells(t, 0, 1);
  };
  v._getGapCells = function (t, e, i) {
    var n = [];
    while (t > 0) {
      var s = this.cells[e];
      if (!s) {
        break;
      }
      n.push(s);
      e += i;
      t -= s.size.outerWidth;
    }
    return n;
  };
  v._containSlides = function () {
    if (
      !this.options.contain ||
      this.options.wrapAround ||
      !this.cells.length
    ) {
      return;
    }
    var t = this.options.rightToLeft;
    var e = t ? "marginRight" : "marginLeft";
    var i = t ? "marginLeft" : "marginRight";
    var n = this.slideableWidth - this.getLastCell().size[i];
    var s = n < this.size.innerWidth;
    var r = this.cursorPosition + this.cells[0].size[e];
    var o = n - this.size.innerWidth * (1 - this.cellAlign);
    this.slides.forEach(function (t) {
      if (s) {
        t.target = n * this.cellAlign;
      } else {
        t.target = Math.max(t.target, r);
        t.target = Math.min(t.target, o);
      }
    }, this);
  };
  v.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;
    this.emitEvent(t, n);
    if (l && this.$element) {
      t += this.options.namespaceJQueryEvents ? ".flickity" : "";
      var s = t;
      if (e) {
        var r = new l.Event(e);
        r.type = t;
        s = r;
      }
      this.$element.trigger(s, i);
    }
  };
  v.select = function (t, e, i) {
    if (!this.isActive) {
      return;
    }
    t = parseInt(t, 10);
    this._wrapSelect(t);
    if (this.options.wrapAround || e) {
      t = a.modulo(t, this.slides.length);
    }
    if (!this.slides[t]) {
      return;
    }
    var n = this.selectedIndex;
    this.selectedIndex = t;
    this.updateSelectedSlide();
    if (i) {
      this.positionSliderAtSelected();
    } else {
      this.startAnimation();
    }
    if (this.options.adaptiveHeight) {
      this.setGallerySize();
    }
    this.dispatchEvent("select", null, [t]);
    if (t != n) {
      this.dispatchEvent("change", null, [t]);
    }
    this.dispatchEvent("cellSelect");
  };
  v._wrapSelect = function (t) {
    var e = this.slides.length;
    var i = this.options.wrapAround && e > 1;
    if (!i) {
      return t;
    }
    var n = a.modulo(t, e);
    var s = Math.abs(n - this.selectedIndex);
    var r = Math.abs(n + e - this.selectedIndex);
    var o = Math.abs(n - e - this.selectedIndex);
    if (!this.isDragSelect && r < s) {
      t += e;
    } else if (!this.isDragSelect && o < s) {
      t -= e;
    }
    if (t < 0) {
      this.x -= this.slideableWidth;
    } else if (t >= e) {
      this.x += this.slideableWidth;
    }
  };
  v.previous = function (t, e) {
    this.select(this.selectedIndex - 1, t, e);
  };
  v.next = function (t, e) {
    this.select(this.selectedIndex + 1, t, e);
  };
  v.updateSelectedSlide = function () {
    var t = this.slides[this.selectedIndex];
    if (!t) {
      return;
    }
    this.unselectSelectedSlide();
    this.selectedSlide = t;
    t.select();
    this.selectedCells = t.cells;
    this.selectedElements = t.getCellElements();
    this.selectedCell = t.cells[0];
    this.selectedElement = this.selectedElements[0];
  };
  v.unselectSelectedSlide = function () {
    if (this.selectedSlide) {
      this.selectedSlide.unselect();
    }
  };
  v.selectInitialIndex = function () {
    var t = this.options.initialIndex;
    if (this.isInitActivated) {
      this.select(this.selectedIndex, false, true);
      return;
    }
    if (t && typeof t == "string") {
      var e = this.queryCell(t);
      if (e) {
        this.selectCell(t, false, true);
        return;
      }
    }
    var i = 0;
    if (t && this.slides[t]) {
      i = t;
    }
    this.select(i, false, true);
  };
  v.selectCell = function (t, e, i) {
    var n = this.queryCell(t);
    if (!n) {
      return;
    }
    var s = this.getCellSlideIndex(n);
    this.select(s, e, i);
  };
  v.getCellSlideIndex = function (t) {
    for (var e = 0; e < this.slides.length; e++) {
      var i = this.slides[e];
      var n = i.cells.indexOf(t);
      if (n != -1) {
        return e;
      }
    }
  };
  v.getCell = function (t) {
    for (var e = 0; e < this.cells.length; e++) {
      var i = this.cells[e];
      if (i.element == t) {
        return i;
      }
    }
  };
  v.getCells = function (t) {
    t = a.makeArray(t);
    var i = [];
    t.forEach(function (t) {
      var e = this.getCell(t);
      if (e) {
        i.push(e);
      }
    }, this);
    return i;
  };
  v.getCellElements = function () {
    return this.cells.map(function (t) {
      return t.element;
    });
  };
  v.getParentCell = function (t) {
    var e = this.getCell(t);
    if (e) {
      return e;
    }
    t = a.getParent(t, ".flickity-slider > *");
    return this.getCell(t);
  };
  v.getAdjacentCellElements = function (t, e) {
    if (!t) {
      return this.selectedSlide.getCellElements();
    }
    e = e === undefined ? this.selectedIndex : e;
    var i = this.slides.length;
    if (1 + t * 2 >= i) {
      return this.getCellElements();
    }
    var n = [];
    for (var s = e - t; s <= e + t; s++) {
      var r = this.options.wrapAround ? a.modulo(s, i) : s;
      var o = this.slides[r];
      if (o) {
        n = n.concat(o.getCellElements());
      }
    }
    return n;
  };
  v.queryCell = function (t) {
    if (typeof t == "number") {
      return this.cells[t];
    }
    if (typeof t == "string") {
      if (t.match(/^[#.]?[\d/]/)) {
        return;
      }
      t = this.element.querySelector(t);
    }
    return this.getCell(t);
  };
  v.uiChange = function () {
    this.emitEvent("uiChange");
  };
  v.childUIPointerDown = function (t) {
    if (t.type != "touchstart") {
      t.preventDefault();
    }
    this.focus();
  };
  v.onresize = function () {
    this.watchCSS();
    this.resize();
  };
  a.debounceMethod(p, "onresize", 150);
  v.resize = function () {
    if (!this.isActive) {
      return;
    }
    this.getSize();
    if (this.options.wrapAround) {
      this.x = a.modulo(this.x, this.slideableWidth);
    }
    this.positionCells();
    this._getWrapShiftCells();
    this.setGallerySize();
    this.emitEvent("resize");
    var t = this.selectedElements && this.selectedElements[0];
    this.selectCell(t, false, true);
  };
  v.watchCSS = function () {
    var t = this.options.watchCSS;
    if (!t) {
      return;
    }
    var e = h(this.element, ":after").content;
    if (e.indexOf("flickity") != -1) {
      this.activate();
    } else {
      this.deactivate();
    }
  };
  v.onkeydown = function (t) {
    var e = document.activeElement && document.activeElement != this.element;
    if (!this.options.accessibility || e) {
      return;
    }
    var i = p.keyboardHandlers[t.keyCode];
    if (i) {
      i.call(this);
    }
  };
  p.keyboardHandlers = {
    37: function () {
      var t = this.options.rightToLeft ? "next" : "previous";
      this.uiChange();
      this[t]();
    },
    39: function () {
      var t = this.options.rightToLeft ? "previous" : "next";
      this.uiChange();
      this[t]();
    },
  };
  v.focus = function () {
    var t = n.pageYOffset;
    this.element.focus({ preventScroll: true });
    if (n.pageYOffset != t) {
      n.scrollTo(n.pageXOffset, t);
    }
  };
  v.deactivate = function () {
    if (!this.isActive) {
      return;
    }
    this.element.classList.remove("flickity-enabled");
    this.element.classList.remove("flickity-rtl");
    this.unselectSelectedSlide();
    this.cells.forEach(function (t) {
      t.destroy();
    });
    this.element.removeChild(this.viewport);
    u(this.slider.children, this.element);
    if (this.options.accessibility) {
      this.element.removeAttribute("tabIndex");
      this.element.removeEventListener("keydown", this);
    }
    this.isActive = false;
    this.emitEvent("deactivate");
  };
  v.destroy = function () {
    this.deactivate();
    n.removeEventListener("resize", this);
    this.allOff();
    this.emitEvent("destroy");
    if (l && this.$element) {
      l.removeData(this.element, "flickity");
    }
    delete this.element.flickityGUID;
    delete f[this.guid];
  };
  a.extend(v, r);
  p.data = function (t) {
    t = a.getQueryElement(t);
    var e = t && t.flickityGUID;
    return e && f[e];
  };
  a.htmlInit(p, "flickity");
  if (l && l.bridget) {
    l.bridget("flickity", p);
  }
  p.setJQuery = function (t) {
    l = t;
  };
  p.Cell = s;
  p.Slide = o;
  return p;
});
/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (t) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("ev-emitter"));
  } else {
    e.Unipointer = i(e, e.EvEmitter);
  }
})(window, function t(s, e) {
  function i() {}
  function n() {}
  var r = (n.prototype = Object.create(e.prototype));
  r.bindStartEvent = function (t) {
    this._bindStartEvent(t, true);
  };
  r.unbindStartEvent = function (t) {
    this._bindStartEvent(t, false);
  };
  r._bindStartEvent = function (t, e) {
    e = e === undefined ? true : e;
    var i = e ? "addEventListener" : "removeEventListener";
    var n = "mousedown";
    if (s.PointerEvent) {
      n = "pointerdown";
    } else if ("ontouchstart" in s) {
      n = "touchstart";
    }
    t[i](n, this);
  };
  r.handleEvent = function (t) {
    var e = "on" + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  r.getTouch = function (t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      if (i.identifier == this.pointerIdentifier) {
        return i;
      }
    }
  };
  r.onmousedown = function (t) {
    var e = t.button;
    if (e && e !== 0 && e !== 1) {
      return;
    }
    this._pointerDown(t, t);
  };
  r.ontouchstart = function (t) {
    this._pointerDown(t, t.changedTouches[0]);
  };
  r.onpointerdown = function (t) {
    this._pointerDown(t, t);
  };
  r._pointerDown = function (t, e) {
    if (t.button || this.isPointerDown) {
      return;
    }
    this.isPointerDown = true;
    this.pointerIdentifier =
      e.pointerId !== undefined ? e.pointerId : e.identifier;
    this.pointerDown(t, e);
  };
  r.pointerDown = function (t, e) {
    this._bindPostStartEvents(t);
    this.emitEvent("pointerDown", [t, e]);
  };
  var o = {
    mousedown: ["mousemove", "mouseup"],
    touchstart: ["touchmove", "touchend", "touchcancel"],
    pointerdown: ["pointermove", "pointerup", "pointercancel"],
  };
  r._bindPostStartEvents = function (t) {
    if (!t) {
      return;
    }
    var e = o[t.type];
    e.forEach(function (t) {
      s.addEventListener(t, this);
    }, this);
    this._boundPointerEvents = e;
  };
  r._unbindPostStartEvents = function () {
    if (!this._boundPointerEvents) {
      return;
    }
    this._boundPointerEvents.forEach(function (t) {
      s.removeEventListener(t, this);
    }, this);
    delete this._boundPointerEvents;
  };
  r.onmousemove = function (t) {
    this._pointerMove(t, t);
  };
  r.onpointermove = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerMove(t, t);
    }
  };
  r.ontouchmove = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerMove(t, e);
    }
  };
  r._pointerMove = function (t, e) {
    this.pointerMove(t, e);
  };
  r.pointerMove = function (t, e) {
    this.emitEvent("pointerMove", [t, e]);
  };
  r.onmouseup = function (t) {
    this._pointerUp(t, t);
  };
  r.onpointerup = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerUp(t, t);
    }
  };
  r.ontouchend = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerUp(t, e);
    }
  };
  r._pointerUp = function (t, e) {
    this._pointerDone();
    this.pointerUp(t, e);
  };
  r.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
  };
  r._pointerDone = function () {
    this._pointerReset();
    this._unbindPostStartEvents();
    this.pointerDone();
  };
  r._pointerReset = function () {
    this.isPointerDown = false;
    delete this.pointerIdentifier;
  };
  r.pointerDone = i;
  r.onpointercancel = function (t) {
    if (t.pointerId == this.pointerIdentifier) {
      this._pointerCancel(t, t);
    }
  };
  r.ontouchcancel = function (t) {
    var e = this.getTouch(t.changedTouches);
    if (e) {
      this._pointerCancel(t, e);
    }
  };
  r._pointerCancel = function (t, e) {
    this._pointerDone();
    this.pointerCancel(t, e);
  };
  r.pointerCancel = function (t, e) {
    this.emitEvent("pointerCancel", [t, e]);
  };
  n.getPointerPoint = function (t) {
    return { x: t.pageX, y: t.pageY };
  };
  return n;
});
/*!
 * Unidragger v2.3.1
 * Draggable base class
 * MIT license
 */
(function (e, i) {
  if (typeof define == "function" && define.amd) {
    define("unidragger/unidragger", ["unipointer/unipointer"], function (t) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("unipointer"));
  } else {
    e.Unidragger = i(e, e.Unipointer);
  }
})(window, function t(r, e) {
  function i() {}
  var n = (i.prototype = Object.create(e.prototype));
  n.bindHandles = function () {
    this._bindHandles(true);
  };
  n.unbindHandles = function () {
    this._bindHandles(false);
  };
  n._bindHandles = function (t) {
    t = t === undefined ? true : t;
    var e = t ? "addEventListener" : "removeEventListener";
    var i = t ? this._touchActionValue : "";
    for (var n = 0; n < this.handles.length; n++) {
      var s = this.handles[n];
      this._bindStartEvent(s, t);
      s[e]("click", this);
      if (r.PointerEvent) {
        s.style.touchAction = i;
      }
    }
  };
  n._touchActionValue = "none";
  n.pointerDown = function (t, e) {
    var i = this.okayPointerDown(t);
    if (!i) {
      return;
    }
    this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY };
    t.preventDefault();
    this.pointerDownBlur();
    this._bindPostStartEvents(t);
    this.emitEvent("pointerDown", [t, e]);
  };
  var s = { TEXTAREA: true, INPUT: true, SELECT: true, OPTION: true };
  var o = {
    radio: true,
    checkbox: true,
    button: true,
    submit: true,
    image: true,
    file: true,
  };
  n.okayPointerDown = function (t) {
    var e = s[t.target.nodeName];
    var i = o[t.target.type];
    var n = !e || i;
    if (!n) {
      this._pointerReset();
    }
    return n;
  };
  n.pointerDownBlur = function () {
    var t = document.activeElement;
    var e = t && t.blur && t != document.body;
    if (e) {
      t.blur();
    }
  };
  n.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.emitEvent("pointerMove", [t, e, i]);
    this._dragMove(t, e, i);
  };
  n._dragPointerMove = function (t, e) {
    var i = {
      x: e.pageX - this.pointerDownPointer.pageX,
      y: e.pageY - this.pointerDownPointer.pageY,
    };
    if (!this.isDragging && this.hasDragStarted(i)) {
      this._dragStart(t, e);
    }
    return i;
  };
  n.hasDragStarted = function (t) {
    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
  };
  n.pointerUp = function (t, e) {
    this.emitEvent("pointerUp", [t, e]);
    this._dragPointerUp(t, e);
  };
  n._dragPointerUp = function (t, e) {
    if (this.isDragging) {
      this._dragEnd(t, e);
    } else {
      this._staticClick(t, e);
    }
  };
  n._dragStart = function (t, e) {
    this.isDragging = true;
    this.isPreventingClicks = true;
    this.dragStart(t, e);
  };
  n.dragStart = function (t, e) {
    this.emitEvent("dragStart", [t, e]);
  };
  n._dragMove = function (t, e, i) {
    if (!this.isDragging) {
      return;
    }
    this.dragMove(t, e, i);
  };
  n.dragMove = function (t, e, i) {
    t.preventDefault();
    this.emitEvent("dragMove", [t, e, i]);
  };
  n._dragEnd = function (t, e) {
    this.isDragging = false;
    setTimeout(
      function () {
        delete this.isPreventingClicks;
      }.bind(this)
    );
    this.dragEnd(t, e);
  };
  n.dragEnd = function (t, e) {
    this.emitEvent("dragEnd", [t, e]);
  };
  n.onclick = function (t) {
    if (this.isPreventingClicks) {
      t.preventDefault();
    }
  };
  n._staticClick = function (t, e) {
    if (this.isIgnoringMouseUp && t.type == "mouseup") {
      return;
    }
    this.staticClick(t, e);
    if (t.type != "mouseup") {
      this.isIgnoringMouseUp = true;
      setTimeout(
        function () {
          delete this.isIgnoringMouseUp;
        }.bind(this),
        400
      );
    }
  };
  n.staticClick = function (t, e) {
    this.emitEvent("staticClick", [t, e]);
  };
  i.getPointerPoint = e.getPointerPoint;
  return i;
});
(function (n, s) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/drag", [
      "./flickity",
      "unidragger/unidragger",
      "fizzy-ui-utils/utils",
    ], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = s(
      n,
      require("./flickity"),
      require("unidragger"),
      require("fizzy-ui-utils")
    );
  } else {
    n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils);
  }
})(window, function t(n, e, i, a) {
  a.extend(e.defaults, { draggable: ">1", dragThreshold: 3 });
  e.createMethods.push("_createDrag");
  var s = e.prototype;
  a.extend(s, i.prototype);
  s._touchActionValue = "pan-y";
  var r = "createTouch" in document;
  var o = false;
  s._createDrag = function () {
    this.on("activate", this.onActivateDrag);
    this.on("uiChange", this._uiChangeDrag);
    this.on("deactivate", this.onDeactivateDrag);
    this.on("cellChange", this.updateDraggable);
    if (r && !o) {
      n.addEventListener("touchmove", function () {});
      o = true;
    }
  };
  s.onActivateDrag = function () {
    this.handles = [this.viewport];
    this.bindHandles();
    this.updateDraggable();
  };
  s.onDeactivateDrag = function () {
    this.unbindHandles();
    this.element.classList.remove("is-draggable");
  };
  s.updateDraggable = function () {
    if (this.options.draggable == ">1") {
      this.isDraggable = this.slides.length > 1;
    } else {
      this.isDraggable = this.options.draggable;
    }
    if (this.isDraggable) {
      this.element.classList.add("is-draggable");
    } else {
      this.element.classList.remove("is-draggable");
    }
  };
  s.bindDrag = function () {
    this.options.draggable = true;
    this.updateDraggable();
  };
  s.unbindDrag = function () {
    this.options.draggable = false;
    this.updateDraggable();
  };
  s._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  };
  s.pointerDown = function (t, e) {
    if (!this.isDraggable) {
      this._pointerDownDefault(t, e);
      return;
    }
    var i = this.okayPointerDown(t);
    if (!i) {
      return;
    }
    this._pointerDownPreventDefault(t);
    this.pointerDownFocus(t);
    if (document.activeElement != this.element) {
      this.pointerDownBlur();
    }
    this.dragX = this.x;
    this.viewport.classList.add("is-pointer-down");
    this.pointerDownScroll = h();
    n.addEventListener("scroll", this);
    this._pointerDownDefault(t, e);
  };
  s._pointerDownDefault = function (t, e) {
    this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY };
    this._bindPostStartEvents(t);
    this.dispatchEvent("pointerDown", t, [e]);
  };
  var l = { INPUT: true, TEXTAREA: true, SELECT: true };
  s.pointerDownFocus = function (t) {
    var e = l[t.target.nodeName];
    if (!e) {
      this.focus();
    }
  };
  s._pointerDownPreventDefault = function (t) {
    var e = t.type == "touchstart";
    var i = t.pointerType == "touch";
    var n = l[t.target.nodeName];
    if (!e && !i && !n) {
      t.preventDefault();
    }
  };
  s.hasDragStarted = function (t) {
    return Math.abs(t.x) > this.options.dragThreshold;
  };
  s.pointerUp = function (t, e) {
    delete this.isTouchScrolling;
    this.viewport.classList.remove("is-pointer-down");
    this.dispatchEvent("pointerUp", t, [e]);
    this._dragPointerUp(t, e);
  };
  s.pointerDone = function () {
    n.removeEventListener("scroll", this);
    delete this.pointerDownScroll;
  };
  s.dragStart = function (t, e) {
    if (!this.isDraggable) {
      return;
    }
    this.dragStartPosition = this.x;
    this.startAnimation();
    n.removeEventListener("scroll", this);
    this.dispatchEvent("dragStart", t, [e]);
  };
  s.pointerMove = function (t, e) {
    var i = this._dragPointerMove(t, e);
    this.dispatchEvent("pointerMove", t, [e, i]);
    this._dragMove(t, e, i);
  };
  s.dragMove = function (t, e, i) {
    if (!this.isDraggable) {
      return;
    }
    t.preventDefault();
    this.previousDragX = this.dragX;
    var n = this.options.rightToLeft ? -1 : 1;
    if (this.options.wrapAround) {
      i.x %= this.slideableWidth;
    }
    var s = this.dragStartPosition + i.x * n;
    if (!this.options.wrapAround && this.slides.length) {
      var r = Math.max(-this.slides[0].target, this.dragStartPosition);
      s = s > r ? (s + r) * 0.5 : s;
      var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
      s = s < o ? (s + o) * 0.5 : s;
    }
    this.dragX = s;
    this.dragMoveTime = new Date();
    this.dispatchEvent("dragMove", t, [e, i]);
  };
  s.dragEnd = function (t, e) {
    if (!this.isDraggable) {
      return;
    }
    if (this.options.freeScroll) {
      this.isFreeScrolling = true;
    }
    var i = this.dragEndRestingSelect();
    if (this.options.freeScroll && !this.options.wrapAround) {
      var n = this.getRestingPosition();
      this.isFreeScrolling =
        -n > this.slides[0].target && -n < this.getLastSlide().target;
    } else if (!this.options.freeScroll && i == this.selectedIndex) {
      i += this.dragEndBoostSelect();
    }
    delete this.previousDragX;
    this.isDragSelect = this.options.wrapAround;
    this.select(i);
    delete this.isDragSelect;
    this.dispatchEvent("dragEnd", t, [e]);
  };
  s.dragEndRestingSelect = function () {
    var t = this.getRestingPosition();
    var e = Math.abs(this.getSlideDistance(-t, this.selectedIndex));
    var i = this._getClosestResting(t, e, 1);
    var n = this._getClosestResting(t, e, -1);
    var s = i.distance < n.distance ? i.index : n.index;
    return s;
  };
  s._getClosestResting = function (t, e, i) {
    var n = this.selectedIndex;
    var s = Infinity;
    var r =
      this.options.contain && !this.options.wrapAround
        ? function (t, e) {
            return t <= e;
          }
        : function (t, e) {
            return t < e;
          };
    while (r(e, s)) {
      n += i;
      s = e;
      e = this.getSlideDistance(-t, n);
      if (e === null) {
        break;
      }
      e = Math.abs(e);
    }
    return { distance: s, index: n - i };
  };
  s.getSlideDistance = function (t, e) {
    var i = this.slides.length;
    var n = this.options.wrapAround && i > 1;
    var s = n ? a.modulo(e, i) : e;
    var r = this.slides[s];
    if (!r) {
      return null;
    }
    var o = n ? this.slideableWidth * Math.floor(e / i) : 0;
    return t - (r.target + o);
  };
  s.dragEndBoostSelect = function () {
    if (
      this.previousDragX === undefined ||
      !this.dragMoveTime ||
      new Date() - this.dragMoveTime > 100
    ) {
      return 0;
    }
    var t = this.getSlideDistance(-this.dragX, this.selectedIndex);
    var e = this.previousDragX - this.dragX;
    if (t > 0 && e > 0) {
      return 1;
    } else if (t < 0 && e < 0) {
      return -1;
    }
    return 0;
  };
  s.staticClick = function (t, e) {
    var i = this.getParentCell(t.target);
    var n = i && i.element;
    var s = i && this.cells.indexOf(i);
    this.dispatchEvent("staticClick", t, [e, n, s]);
  };
  s.onscroll = function () {
    var t = h();
    var e = this.pointerDownScroll.x - t.x;
    var i = this.pointerDownScroll.y - t.y;
    if (Math.abs(e) > 3 || Math.abs(i) > 3) {
      this._pointerDone();
    }
  };
  function h() {
    return { x: n.pageXOffset, y: n.pageYOffset };
  }
  return e;
});
(function (n, s) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/prev-next-button", [
      "./flickity",
      "unipointer/unipointer",
      "fizzy-ui-utils/utils",
    ], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = s(
      n,
      require("./flickity"),
      require("unipointer"),
      require("fizzy-ui-utils")
    );
  } else {
    s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  }
})(window, function t(e, i, n, s) {
  "use strict";
  var r = "http://www.w3.org/2000/svg";
  function o(t, e) {
    this.direction = t;
    this.parent = e;
    this._create();
  }
  o.prototype = Object.create(n.prototype);
  o.prototype._create = function () {
    this.isEnabled = true;
    this.isPrevious = this.direction == -1;
    var t = this.parent.options.rightToLeft ? 1 : -1;
    this.isLeft = this.direction == t;
    var e = (this.element = document.createElement("button"));
    e.className = "flickity-button flickity-prev-next-button";
    e.className += this.isPrevious ? " previous" : " next";
    e.setAttribute("type", "button");
    this.disable();
    e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
    var i = this.createSVG();
    e.appendChild(i);
    this.parent.on("select", this.update.bind(this));
    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  };
  o.prototype.activate = function () {
    this.bindStartEvent(this.element);
    this.element.addEventListener("click", this);
    this.parent.element.appendChild(this.element);
  };
  o.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element);
    this.unbindStartEvent(this.element);
    this.element.removeEventListener("click", this);
  };
  o.prototype.createSVG = function () {
    var t = document.createElementNS(r, "svg");
    t.setAttribute("class", "flickity-button-icon");
    t.setAttribute("viewBox", "0 0 100 100");
    var e = document.createElementNS(r, "path");
    var i = a(this.parent.options.arrowShape);
    e.setAttribute("d", i);
    e.setAttribute("class", "arrow");
    if (!this.isLeft) {
      e.setAttribute("transform", "translate(100, 100) rotate(180) ");
    }
    t.appendChild(e);
    return t;
  };
  function a(t) {
    if (typeof t == "string") {
      return t;
    }
    return (
      "M " +
      t.x0 +
      ",50" +
      " L " +
      t.x1 +
      "," +
      (t.y1 + 50) +
      " L " +
      t.x2 +
      "," +
      (t.y2 + 50) +
      " L " +
      t.x3 +
      ",50 " +
      " L " +
      t.x2 +
      "," +
      (50 - t.y2) +
      " L " +
      t.x1 +
      "," +
      (50 - t.y1) +
      " Z"
    );
  }
  o.prototype.handleEvent = s.handleEvent;
  o.prototype.onclick = function () {
    if (!this.isEnabled) {
      return;
    }
    this.parent.uiChange();
    var t = this.isPrevious ? "previous" : "next";
    this.parent[t]();
  };
  o.prototype.enable = function () {
    if (this.isEnabled) {
      return;
    }
    this.element.disabled = false;
    this.isEnabled = true;
  };
  o.prototype.disable = function () {
    if (!this.isEnabled) {
      return;
    }
    this.element.disabled = true;
    this.isEnabled = false;
  };
  o.prototype.update = function () {
    var t = this.parent.slides;
    if (this.parent.options.wrapAround && t.length > 1) {
      this.enable();
      return;
    }
    var e = t.length ? t.length - 1 : 0;
    var i = this.isPrevious ? 0 : e;
    var n = this.parent.selectedIndex == i ? "disable" : "enable";
    this[n]();
  };
  o.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };
  s.extend(i.defaults, {
    prevNextButtons: true,
    arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
  });
  i.createMethods.push("_createPrevNextButtons");
  var l = i.prototype;
  l._createPrevNextButtons = function () {
    if (!this.options.prevNextButtons) {
      return;
    }
    this.prevButton = new o(-1, this);
    this.nextButton = new o(1, this);
    this.on("activate", this.activatePrevNextButtons);
  };
  l.activatePrevNextButtons = function () {
    this.prevButton.activate();
    this.nextButton.activate();
    this.on("deactivate", this.deactivatePrevNextButtons);
  };
  l.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate();
    this.nextButton.deactivate();
    this.off("deactivate", this.deactivatePrevNextButtons);
  };
  i.PrevNextButton = o;
  return i;
});
(function (n, s) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/page-dots", [
      "./flickity",
      "unipointer/unipointer",
      "fizzy-ui-utils/utils",
    ], function (t, e, i) {
      return s(n, t, e, i);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = s(
      n,
      require("./flickity"),
      require("unipointer"),
      require("fizzy-ui-utils")
    );
  } else {
    s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  }
})(window, function t(e, i, n, s) {
  function r(t) {
    this.parent = t;
    this._create();
  }
  r.prototype = Object.create(n.prototype);
  r.prototype._create = function () {
    this.holder = document.createElement("ol");
    this.holder.className = "flickity-page-dots";
    this.dots = [];
    this.handleClick = this.onClick.bind(this);
    this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  };
  r.prototype.activate = function () {
    this.setDots();
    this.holder.addEventListener("click", this.handleClick);
    this.bindStartEvent(this.holder);
    this.parent.element.appendChild(this.holder);
  };
  r.prototype.deactivate = function () {
    this.holder.removeEventListener("click", this.handleClick);
    this.unbindStartEvent(this.holder);
    this.parent.element.removeChild(this.holder);
  };
  r.prototype.setDots = function () {
    var t = this.parent.slides.length - this.dots.length;
    if (t > 0) {
      this.addDots(t);
    } else if (t < 0) {
      this.removeDots(-t);
    }
  };
  r.prototype.addDots = function (t) {
    var e = document.createDocumentFragment();
    var i = [];
    var n = this.dots.length;
    var s = n + t;
    for (var r = n; r < s; r++) {
      var o = document.createElement("li");
      o.className = "dot";
      o.setAttribute("aria-label", "Page dot " + (r + 1));
      e.appendChild(o);
      i.push(o);
    }
    this.holder.appendChild(e);
    this.dots = this.dots.concat(i);
  };
  r.prototype.removeDots = function (t) {
    var e = this.dots.splice(this.dots.length - t, t);
    e.forEach(function (t) {
      this.holder.removeChild(t);
    }, this);
  };
  r.prototype.updateSelected = function () {
    if (this.selectedDot) {
      this.selectedDot.className = "dot";
      this.selectedDot.removeAttribute("aria-current");
    }
    if (!this.dots.length) {
      return;
    }
    this.selectedDot = this.dots[this.parent.selectedIndex];
    this.selectedDot.className = "dot is-selected";
    this.selectedDot.setAttribute("aria-current", "step");
  };
  r.prototype.onTap = r.prototype.onClick = function (t) {
    var e = t.target;
    if (e.nodeName != "LI") {
      return;
    }
    this.parent.uiChange();
    var i = this.dots.indexOf(e);
    this.parent.select(i);
  };
  r.prototype.destroy = function () {
    this.deactivate();
    this.allOff();
  };
  i.PageDots = r;
  s.extend(i.defaults, { pageDots: true });
  i.createMethods.push("_createPageDots");
  var o = i.prototype;
  o._createPageDots = function () {
    if (!this.options.pageDots) {
      return;
    }
    this.pageDots = new r(this);
    this.on("activate", this.activatePageDots);
    this.on("select", this.updateSelectedPageDots);
    this.on("cellChange", this.updatePageDots);
    this.on("resize", this.updatePageDots);
    this.on("deactivate", this.deactivatePageDots);
  };
  o.activatePageDots = function () {
    this.pageDots.activate();
  };
  o.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  };
  o.updatePageDots = function () {
    this.pageDots.setDots();
  };
  o.deactivatePageDots = function () {
    this.pageDots.deactivate();
  };
  i.PageDots = r;
  return i;
});
(function (t, n) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/player", [
      "ev-emitter/ev-emitter",
      "fizzy-ui-utils/utils",
      "./flickity",
    ], function (t, e, i) {
      return n(t, e, i);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = n(
      require("ev-emitter"),
      require("fizzy-ui-utils"),
      require("./flickity")
    );
  } else {
    n(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  }
})(window, function t(e, i, n) {
  function s(t) {
    this.parent = t;
    this.state = "stopped";
    this.onVisibilityChange = this.visibilityChange.bind(this);
    this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }
  s.prototype = Object.create(e.prototype);
  s.prototype.play = function () {
    if (this.state == "playing") {
      return;
    }
    var t = document.hidden;
    if (t) {
      document.addEventListener("visibilitychange", this.onVisibilityPlay);
      return;
    }
    this.state = "playing";
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    this.tick();
  };
  s.prototype.tick = function () {
    if (this.state != "playing") {
      return;
    }
    var t = this.parent.options.autoPlay;
    t = typeof t == "number" ? t : 3e3;
    var e = this;
    this.clear();
    this.timeout = setTimeout(function () {
      e.parent.next(true);
      e.tick();
    }, t);
  };
  s.prototype.stop = function () {
    this.state = "stopped";
    this.clear();
    document.removeEventListener("visibilitychange", this.onVisibilityChange);
  };
  s.prototype.clear = function () {
    clearTimeout(this.timeout);
  };
  s.prototype.pause = function () {
    if (this.state == "playing") {
      this.state = "paused";
      this.clear();
    }
  };
  s.prototype.unpause = function () {
    if (this.state == "paused") {
      this.play();
    }
  };
  s.prototype.visibilityChange = function () {
    var t = document.hidden;
    this[t ? "pause" : "unpause"]();
  };
  s.prototype.visibilityPlay = function () {
    this.play();
    document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  };
  i.extend(n.defaults, { pauseAutoPlayOnHover: true });
  n.createMethods.push("_createPlayer");
  var r = n.prototype;
  r._createPlayer = function () {
    this.player = new s(this);
    this.on("activate", this.activatePlayer);
    this.on("uiChange", this.stopPlayer);
    this.on("pointerDown", this.stopPlayer);
    this.on("deactivate", this.deactivatePlayer);
  };
  r.activatePlayer = function () {
    if (!this.options.autoPlay) {
      return;
    }
    this.player.play();
    this.element.addEventListener("mouseenter", this);
  };
  r.playPlayer = function () {
    this.player.play();
  };
  r.stopPlayer = function () {
    this.player.stop();
  };
  r.pausePlayer = function () {
    this.player.pause();
  };
  r.unpausePlayer = function () {
    this.player.unpause();
  };
  r.deactivatePlayer = function () {
    this.player.stop();
    this.element.removeEventListener("mouseenter", this);
  };
  r.onmouseenter = function () {
    if (!this.options.pauseAutoPlayOnHover) {
      return;
    }
    this.player.pause();
    this.element.addEventListener("mouseleave", this);
  };
  r.onmouseleave = function () {
    this.player.unpause();
    this.element.removeEventListener("mouseleave", this);
  };
  n.Player = s;
  return n;
});
(function (i, n) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/add-remove-cell", [
      "./flickity",
      "fizzy-ui-utils/utils",
    ], function (t, e) {
      return n(i, t, e);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
  } else {
    n(i, i.Flickity, i.fizzyUIUtils);
  }
})(window, function t(e, i, n) {
  function l(t) {
    var e = document.createDocumentFragment();
    t.forEach(function (t) {
      e.appendChild(t.element);
    });
    return e;
  }
  var s = i.prototype;
  s.insert = function (t, e) {
    var i = this._makeCells(t);
    if (!i || !i.length) {
      return;
    }
    var n = this.cells.length;
    e = e === undefined ? n : e;
    var s = l(i);
    var r = e == n;
    if (r) {
      this.slider.appendChild(s);
    } else {
      var o = this.cells[e].element;
      this.slider.insertBefore(s, o);
    }
    if (e === 0) {
      this.cells = i.concat(this.cells);
    } else if (r) {
      this.cells = this.cells.concat(i);
    } else {
      var a = this.cells.splice(e, n - e);
      this.cells = this.cells.concat(i).concat(a);
    }
    this._sizeCells(i);
    this.cellChange(e, true);
  };
  s.append = function (t) {
    this.insert(t, this.cells.length);
  };
  s.prepend = function (t) {
    this.insert(t, 0);
  };
  s.remove = function (t) {
    var e = this.getCells(t);
    if (!e || !e.length) {
      return;
    }
    var i = this.cells.length - 1;
    e.forEach(function (t) {
      t.remove();
      var e = this.cells.indexOf(t);
      i = Math.min(e, i);
      n.removeFrom(this.cells, t);
    }, this);
    this.cellChange(i, true);
  };
  s.cellSizeChange = function (t) {
    var e = this.getCell(t);
    if (!e) {
      return;
    }
    e.getSize();
    var i = this.cells.indexOf(e);
    this.cellChange(i);
  };
  s.cellChange = function (t, e) {
    var i = this.selectedElement;
    this._positionCells(t);
    this._getWrapShiftCells();
    this.setGallerySize();
    var n = this.getCell(i);
    if (n) {
      this.selectedIndex = this.getCellSlideIndex(n);
    }
    this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
    this.emitEvent("cellChange", [t]);
    this.select(this.selectedIndex);
    if (e) {
      this.positionSliderAtSelected();
    }
  };
  return i;
});
(function (i, n) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/lazyload", [
      "./flickity",
      "fizzy-ui-utils/utils",
    ], function (t, e) {
      return n(i, t, e);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = n(i, require("./flickity"), require("fizzy-ui-utils"));
  } else {
    n(i, i.Flickity, i.fizzyUIUtils);
  }
})(window, function t(e, i, o) {
  "use strict";
  i.createMethods.push("_createLazyload");
  var n = i.prototype;
  n._createLazyload = function () {
    this.on("select", this.lazyLoad);
  };
  n.lazyLoad = function () {
    var t = this.options.lazyLoad;
    if (!t) {
      return;
    }
    var e = typeof t == "number" ? t : 0;
    var i = this.getAdjacentCellElements(e);
    var n = [];
    i.forEach(function (t) {
      var e = s(t);
      n = n.concat(e);
    });
    n.forEach(function (t) {
      new r(t, this);
    }, this);
  };
  function s(t) {
    if (t.nodeName == "IMG") {
      var e = t.getAttribute("data-flickity-lazyload");
      var i = t.getAttribute("data-flickity-lazyload-src");
      var n = t.getAttribute("data-flickity-lazyload-srcset");
      if (e || i || n) {
        return [t];
      }
    }
    var s =
      "img[data-flickity-lazyload], " +
      "img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
    var r = t.querySelectorAll(s);
    return o.makeArray(r);
  }
  function r(t, e) {
    this.img = t;
    this.flickity = e;
    this.load();
  }
  r.prototype.handleEvent = o.handleEvent;
  r.prototype.load = function () {
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    var t =
      this.img.getAttribute("data-flickity-lazyload") ||
      this.img.getAttribute("data-flickity-lazyload-src");
    var e = this.img.getAttribute("data-flickity-lazyload-srcset");
    this.img.src = t;
    if (e) {
      this.img.setAttribute("srcset", e);
    }
    this.img.removeAttribute("data-flickity-lazyload");
    this.img.removeAttribute("data-flickity-lazyload-src");
    this.img.removeAttribute("data-flickity-lazyload-srcset");
  };
  r.prototype.onload = function (t) {
    this.complete(t, "flickity-lazyloaded");
  };
  r.prototype.onerror = function (t) {
    this.complete(t, "flickity-lazyerror");
  };
  r.prototype.complete = function (t, e) {
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
    var i = this.flickity.getParentCell(this.img);
    var n = i && i.element;
    this.flickity.cellSizeChange(n);
    this.img.classList.add(e);
    this.flickity.dispatchEvent("lazyLoad", t, n);
  };
  i.LazyLoader = r;
  return i;
});
/*!
 * Flickity v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("flickity/js/index", [
      "./flickity",
      "./drag",
      "./prev-next-button",
      "./page-dots",
      "./player",
      "./add-remove-cell",
      "./lazyload",
    ], e);
  } else if (typeof module == "object" && module.exports) {
    module.exports = e(
      require("./flickity"),
      require("./drag"),
      require("./prev-next-button"),
      require("./page-dots"),
      require("./player"),
      require("./add-remove-cell"),
      require("./lazyload")
    );
  }
})(window, function t(e) {
  return e;
});
/*!
 * Flickity asNavFor v2.0.2
 * enable asNavFor for Flickity
 */
(function (t, e) {
  if (typeof define == "function" && define.amd) {
    define("flickity-as-nav-for/as-nav-for", [
      "flickity/js/index",
      "fizzy-ui-utils/utils",
    ], e);
  } else if (typeof module == "object" && module.exports) {
    module.exports = e(require("flickity"), require("fizzy-ui-utils"));
  } else {
    t.Flickity = e(t.Flickity, t.fizzyUIUtils);
  }
})(window, function t(n, s) {
  n.createMethods.push("_createAsNavFor");
  var e = n.prototype;
  e._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor);
    this.on("deactivate", this.deactivateAsNavFor);
    this.on("destroy", this.destroyAsNavFor);
    var e = this.options.asNavFor;
    if (!e) {
      return;
    }
    var i = this;
    setTimeout(function t() {
      i.setNavCompanion(e);
    });
  };
  e.setNavCompanion = function (t) {
    t = s.getQueryElement(t);
    var e = n.data(t);
    if (!e || e == this) {
      return;
    }
    this.navCompanion = e;
    var i = this;
    this.onNavCompanionSelect = function () {
      i.navCompanionSelect();
    };
    e.on("select", this.onNavCompanionSelect);
    this.on("staticClick", this.onNavStaticClick);
    this.navCompanionSelect(true);
  };
  e.navCompanionSelect = function (t) {
    var e = this.navCompanion && this.navCompanion.selectedCells;
    if (!e) {
      return;
    }
    var i = e[0];
    var n = this.navCompanion.cells.indexOf(i);
    var s = n + e.length - 1;
    var r = Math.floor(a(n, s, this.navCompanion.cellAlign));
    this.selectCell(r, false, t);
    this.removeNavSelectedElements();
    if (r >= this.cells.length) {
      return;
    }
    var o = this.cells.slice(n, s + 1);
    this.navSelectedElements = o.map(function (t) {
      return t.element;
    });
    this.changeNavSelectedClass("add");
  };
  function a(t, e, i) {
    return (e - t) * i + t;
  }
  e.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected");
    });
  };
  e.activateAsNavFor = function () {
    this.navCompanionSelect(true);
  };
  e.removeNavSelectedElements = function () {
    if (!this.navSelectedElements) {
      return;
    }
    this.changeNavSelectedClass("remove");
    delete this.navSelectedElements;
  };
  e.onNavStaticClick = function (t, e, i, n) {
    if (typeof n == "number") {
      this.navCompanion.selectCell(n);
    }
  };
  e.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  };
  e.destroyAsNavFor = function () {
    if (!this.navCompanion) {
      return;
    }
    this.navCompanion.off("select", this.onNavCompanionSelect);
    this.off("staticClick", this.onNavStaticClick);
    delete this.navCompanion;
  };
  return n;
});
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function (e, i) {
  "use strict";
  if (typeof define == "function" && define.amd) {
    define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (
      t
    ) {
      return i(e, t);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = i(e, require("ev-emitter"));
  } else {
    e.imagesLoaded = i(e, e.EvEmitter);
  }
})(typeof window !== "undefined" ? window : this, function t(e, i) {
  var s = e.jQuery;
  var r = e.console;
  function o(t, e) {
    for (var i in e) {
      t[i] = e[i];
    }
    return t;
  }
  var n = Array.prototype.slice;
  function a(t) {
    if (Array.isArray(t)) {
      return t;
    }
    var e = typeof t == "object" && typeof t.length == "number";
    if (e) {
      return n.call(t);
    }
    return [t];
  }
  function l(t, e, i) {
    if (!(this instanceof l)) {
      return new l(t, e, i);
    }
    var n = t;
    if (typeof t == "string") {
      n = document.querySelectorAll(t);
    }
    if (!n) {
      r.error("Bad element for imagesLoaded " + (n || t));
      return;
    }
    this.elements = a(n);
    this.options = o({}, this.options);
    if (typeof e == "function") {
      i = e;
    } else {
      o(this.options, e);
    }
    if (i) {
      this.on("always", i);
    }
    this.getImages();
    if (s) {
      this.jqDeferred = new s.Deferred();
    }
    setTimeout(this.check.bind(this));
  }
  l.prototype = Object.create(i.prototype);
  l.prototype.options = {};
  l.prototype.getImages = function () {
    this.images = [];
    this.elements.forEach(this.addElementImages, this);
  };
  l.prototype.addElementImages = function (t) {
    if (t.nodeName == "IMG") {
      this.addImage(t);
    }
    if (this.options.background === true) {
      this.addElementBackgroundImages(t);
    }
    var e = t.nodeType;
    if (!e || !h[e]) {
      return;
    }
    var i = t.querySelectorAll("img");
    for (var n = 0; n < i.length; n++) {
      var s = i[n];
      this.addImage(s);
    }
    if (typeof this.options.background == "string") {
      var r = t.querySelectorAll(this.options.background);
      for (n = 0; n < r.length; n++) {
        var o = r[n];
        this.addElementBackgroundImages(o);
      }
    }
  };
  var h = { 1: true, 9: true, 11: true };
  l.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (!e) {
      return;
    }
    var i = /url\((['"])?(.*?)\1\)/gi;
    var n = i.exec(e.backgroundImage);
    while (n !== null) {
      var s = n && n[2];
      if (s) {
        this.addBackground(s, t);
      }
      n = i.exec(e.backgroundImage);
    }
  };
  l.prototype.addImage = function (t) {
    var e = new c(t);
    this.images.push(e);
  };
  l.prototype.addBackground = function (t, e) {
    var i = new u(t, e);
    this.images.push(i);
  };
  l.prototype.check = function () {
    var n = this;
    this.progressedCount = 0;
    this.hasAnyBroken = false;
    if (!this.images.length) {
      this.complete();
      return;
    }
    function e(t, e, i) {
      setTimeout(function () {
        n.progress(t, e, i);
      });
    }
    this.images.forEach(function (t) {
      t.once("progress", e);
      t.check();
    });
  };
  l.prototype.progress = function (t, e, i) {
    this.progressedCount++;
    this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
    this.emitEvent("progress", [this, t, e]);
    if (this.jqDeferred && this.jqDeferred.notify) {
      this.jqDeferred.notify(this, t);
    }
    if (this.progressedCount == this.images.length) {
      this.complete();
    }
    if (this.options.debug && r) {
      r.log("progress: " + i, t, e);
    }
  };
  l.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = true;
    this.emitEvent(t, [this]);
    this.emitEvent("always", [this]);
    if (this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this);
    }
  };
  function c(t) {
    this.img = t;
  }
  c.prototype = Object.create(i.prototype);
  c.prototype.check = function () {
    var t = this.getIsImageComplete();
    if (t) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      return;
    }
    this.proxyImage = new Image();
    this.proxyImage.addEventListener("load", this);
    this.proxyImage.addEventListener("error", this);
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    this.proxyImage.src = this.img.src;
  };
  c.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  };
  c.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    this.emitEvent("progress", [this, this.img, e]);
  };
  c.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    if (this[e]) {
      this[e](t);
    }
  };
  c.prototype.onload = function () {
    this.confirm(true, "onload");
    this.unbindEvents();
  };
  c.prototype.onerror = function () {
    this.confirm(false, "onerror");
    this.unbindEvents();
  };
  c.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this);
    this.proxyImage.removeEventListener("error", this);
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
  };
  function u(t, e) {
    this.url = t;
    this.element = e;
    this.img = new Image();
  }
  u.prototype = Object.create(c.prototype);
  u.prototype.check = function () {
    this.img.addEventListener("load", this);
    this.img.addEventListener("error", this);
    this.img.src = this.url;
    var t = this.getIsImageComplete();
    if (t) {
      this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
      this.unbindEvents();
    }
  };
  u.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this);
    this.img.removeEventListener("error", this);
  };
  u.prototype.confirm = function (t, e) {
    this.isLoaded = t;
    this.emitEvent("progress", [this, this.element, e]);
  };
  l.makeJQueryPlugin = function (t) {
    t = t || e.jQuery;
    if (!t) {
      return;
    }
    s = t;
    s.fn.imagesLoaded = function (t, e) {
      var i = new l(this, t, e);
      return i.jqDeferred.promise(s(this));
    };
  };
  l.makeJQueryPlugin();
  return l;
});
/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */
(function (i, n) {
  if (typeof define == "function" && define.amd) {
    define(["flickity/js/index", "imagesloaded/imagesloaded"], function (t, e) {
      return n(i, t, e);
    });
  } else if (typeof module == "object" && module.exports) {
    module.exports = n(i, require("flickity"), require("imagesloaded"));
  } else {
    i.Flickity = n(i, i.Flickity, i.imagesLoaded);
  }
})(window, function t(e, i, s) {
  "use strict";
  i.createMethods.push("_createImagesLoaded");
  var n = i.prototype;
  n._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  };
  n.imagesLoaded = function () {
    if (!this.options.imagesLoaded) {
      return;
    }
    var n = this;
    function t(t, e) {
      var i = n.getParentCell(e.img);
      n.cellSizeChange(i && i.element);
      if (!n.options.freeScroll) {
        n.positionSliderAtSelected();
      }
    }
    s(this.slider).on("progress", t);
  };
  return i;
});

/*
 *  Project: Scrolly : parallax is easy as a matter of fact !
 *  Description: Based on jQuery boilerplate
 *  Author: Victor C. / Octave & Octave web agency
 *  Licence: MIT
 */
!(function (t, i) {
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : i(t.jQuery);
})(this, function (t) {
  "use strict";
  function i(i, o) {
    (this.element = i),
      (this.$element = t(this.element)),
      (this.options = t.extend({}, e, o)),
      (this._defaults = e),
      (this._name = s),
      this.init();
  }
  var s = "scrolly",
    e = { bgParallax: !1 };
  (i.prototype.init = function () {
    var i = this;
    (this.startPosition = this.$element.position().top),
      (this.offsetTop = this.$element.offset().top),
      (this.height = this.$element.outerHeight(!0)),
      (this.velocity = this.$element.attr("data-velocity")),
      (this.bgStart = parseInt(this.$element.attr("data-fit"), 10)),
      t(document).scroll(function () {
        i.didScroll = !0;
      }),
      setInterval(function () {
        i.didScroll && ((i.didScroll = !1), i.scrolly());
      }, 10);
  }),
    (i.prototype.scrolly = function () {
      var i = t(window).scrollTop(),
        s = t(window).height(),
        e = this.startPosition;
      this.offsetTop >= i + s
        ? this.$element.addClass("scrolly-invisible")
        : (e = this.$element.hasClass("scrolly-invisible")
            ? this.startPosition + (i + (s - this.offsetTop)) * this.velocity
            : this.startPosition + i * this.velocity),
        this.bgStart && (e += this.bgStart),
        this.options.bgParallax === !0
          ? this.$element.css({ backgroundPositionY: e + "px" })
          : this.$element.css({ top: e });
    }),
    (t.fn[s] = function (e) {
      return this.each(function () {
        t.data(this, "plugin_" + s) ||
          t.data(this, "plugin_" + s, new i(this, e));
      });
    });
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});
/*! js-cookie v2.2.1 | MIT */
!(function (a) {
  var b;
  if (
    ("function" == typeof define && define.amd && (define(a), (b = !0)),
    "object" == typeof exports && ((module.exports = a()), (b = !0)),
    !b)
  ) {
    var c = window.Cookies,
      d = (window.Cookies = a());
    d.noConflict = function () {
      return (window.Cookies = c), d;
    };
  }
})(function () {
  function a() {
    for (var a = 0, b = {}; a < arguments.length; a++) {
      var c = arguments[a];
      for (var d in c) b[d] = c[d];
    }
    return b;
  }
  function b(a) {
    return a.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  }
  function c(d) {
    function e() {}
    function f(b, c, f) {
      if ("undefined" != typeof document) {
        (f = a({ path: "/" }, e.defaults, f)),
          "number" == typeof f.expires &&
            (f.expires = new Date(1 * new Date() + 864e5 * f.expires)),
          (f.expires = f.expires ? f.expires.toUTCString() : "");
        try {
          var g = JSON.stringify(c);
          /^[\{\[]/.test(g) && (c = g);
        } catch (j) {}
        (c = d.write
          ? d.write(c, b)
          : encodeURIComponent(c + "").replace(
              /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
              decodeURIComponent
            )),
          (b = encodeURIComponent(b + "")
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[\(\)]/g, escape));
        var h = "";
        for (var i in f)
          f[i] &&
            ((h += "; " + i), !0 !== f[i] && (h += "=" + f[i].split(";")[0]));
        return (document.cookie = b + "=" + c + h);
      }
    }
    function g(a, c) {
      if ("undefined" != typeof document) {
        for (
          var e = {},
            f = document.cookie ? document.cookie.split("; ") : [],
            g = 0;
          g < f.length;
          g++
        ) {
          var h = f[g].split("="),
            i = h.slice(1).join("=");
          c || '"' !== i.charAt(0) || (i = i.slice(1, -1));
          try {
            var j = b(h[0]);
            if (((i = (d.read || d)(i, j) || b(i)), c))
              try {
                i = JSON.parse(i);
              } catch (k) {}
            if (((e[j] = i), a === j)) break;
          } catch (k) {}
        }
        return a ? e[a] : e;
      }
    }
    return (
      (e.set = f),
      (e.get = function (a) {
        return g(a, !1);
      }),
      (e.getJSON = function (a) {
        return g(a, !0);
      }),
      (e.remove = function (b, c) {
        f(b, "", a(c, { expires: -1 }));
      }),
      (e.defaults = {}),
      (e.withConverter = c),
      e
    );
  }
  return c(function () {});
});
/**
 * Tweetie: A simple Twitter feed plugin
 * Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
 */
!(function (e) {
  "use strict";
  e.fn.twittie = function () {
    var t = arguments[0] instanceof Object ? arguments[0] : {},
      a = "function" == typeof arguments[0] ? arguments[0] : arguments[1],
      r = e.extend(
        {
          username: null,
          list: null,
          hashtag: null,
          count: 10,
          hideReplies: !1,
          dateFormat: "%b/%d/%Y",
          template: "{{date}} - {{tweet}}",
          apiPath: "api/tweet.php",
          loadingText: "Loading...",
        },
        t
      );
    r.list &&
      !r.username &&
      e.error(
        "If you want to fetch tweets from a list, you must define the username of the list owner."
      );
    var n = function (e) {
        return e
          .replace(
            /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/gi,
            '<a href="$1" target="_blank" title="Visit this link">$1</a>'
          )
          .replace(
            /#([a-zA-Z0-9_]+)/g,
            '<a href="https://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>'
          )
          .replace(
            /@([a-zA-Z0-9_]+)/g,
            '<a href="https://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>'
          );
      },
      s = function (e) {
        for (
          var t = e.split(" "),
            a = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            n = {
              "%d": (e = new Date(
                Date.parse(
                  t[1] + " " + t[2] + ", " + t[5] + " " + t[3] + " UTC"
                )
              )).getDate(),
              "%m": e.getMonth() + 1,
              "%b": a[e.getMonth()].substr(0, 3),
              "%B": a[e.getMonth()],
              "%y": String(e.getFullYear()).slice(-2),
              "%Y": e.getFullYear(),
            },
            s = r.dateFormat,
            i = r.dateFormat.match(/%[dmbByY]/g),
            u = 0,
            l = i.length;
          u < l;
          u++
        )
          s = s.replace(i[u], n[i[u]]);
        return s;
      },
      i = function (e) {
        for (
          var t = r.template,
            a = [
              "date",
              "tweet",
              "avatar",
              "url",
              "retweeted",
              "screen_name",
              "user_name",
            ],
            n = 0,
            s = a.length;
          n < s;
          n++
        )
          t = t.replace(new RegExp("{{" + a[n] + "}}", "gi"), e[a[n]]);
        return t;
      };
    this.html("<span>" + r.loadingText + "</span>");
    var u = this;
    e.getJSON(
      r.apiPath,
      {
        username: r.username,
        list: r.list,
        hashtag: r.hashtag,
        count: r.count,
        exclude_replies: r.hideReplies,
      },
      function (e) {
        u.find("span").fadeOut("fast", function () {
          u.html("<ul></ul>");
          for (var t = 0; t < r.count; t++) {
            var l = !1;
            if (e[t]) l = e[t];
            else {
              if (void 0 === e.statuses || !e.statuses[t]) break;
              l = e.statuses[t];
            }
            var o = l.user.profile_image_url;
            o.match("^http://") && (o = o.replace("http://", "https://"));
            var c = {
              user_name: l.user.name,
              date: s(l.created_at),
              tweet: l.retweeted
                ? n(
                    "RT @" + l.user.screen_name + ": " + l.retweeted_status.text
                  )
                : n(l.text),
              avatar: '<img src="' + o + '" />',
              url:
                "https://twitter.com/" +
                l.user.screen_name +
                "/status/" +
                l.id_str,
              retweeted: l.retweeted,
              screen_name: n("@" + l.user.screen_name),
            };
            u.find("ul").append("<li>" + i(c) + "</li>");
          }
          "function" == typeof a && a();
        });
      }
    );
  };
})(jQuery);
/*
 * Copyright (C) 2009 Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 */
(function ($) {
  $.fn.jflickrfeed = function (settings, callback) {
    settings = $.extend(
      true,
      {
        flickrbase: "http://api.flickr.com/services/feeds/",
        feedapi: "photos_public.gne",
        limit: 20,
        qstrings: { lang: "en-us", format: "json", jsoncallback: "?" },
        cleanDescription: true,
        useTemplate: true,
        itemTemplate: "",
        itemCallback: function () {},
      },
      settings
    );
    var url = settings.flickrbase + settings.feedapi + "?";
    var first = true;
    for (var key in settings.qstrings) {
      if (!first) url += "&";
      url += key + "=" + settings.qstrings[key];
      first = false;
    }
    return $(this).each(function () {
      var $container = $(this);
      var container = this;
      $.getJSON(url, function (data) {
        $.each(data.items, function (i, item) {
          if (i < settings.limit) {
            if (settings.cleanDescription) {
              var regex = /<p>(.*?)<\/p>/g;
              var input = item.description;
              if (regex.test(input)) {
                item.description = input.match(regex)[2];
                if (item.description != undefined)
                  item.description = item.description
                    .replace("<p>", "")
                    .replace("</p>", "");
              }
            }
            item["image_s"] = item.media.m.replace("_m", "_s");
            item["image_t"] = item.media.m.replace("_m", "_t");
            item["image_m"] = item.media.m.replace("_m", "_m");
            item["image"] = item.media.m.replace("_m", "");
            item["image_b"] = item.media.m.replace("_m", "_b");
            delete item.media;
            if (settings.useTemplate) {
              var template = settings.itemTemplate;
              for (var key in item) {
                var rgx = new RegExp("{{" + key + "}}", "g");
                template = template.replace(rgx, item[key]);
              }
              $container.append(template);
            }
            settings.itemCallback.call(container, item);
          }
        });
        if ($.isFunction(callback)) {
          callback.call(container, data);
        }
      });
    });
  };
})(jQuery);
/* spectragram.js / by Adrian Quevedo */
if (typeof Object.create !== "function") {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
(function ($, window, document, undefined) {
  var Instagram = {
    API_URL: "https://graph.instagram.com/me/media?fields=",
    API_FIELDS: "caption,media_url,media_type,permalink,timestamp,username",
    initialize: function (options, elem) {
      this.elem = elem;
      this.$elem = $(elem);
      (this.accessToken = $.fn.spectragram.accessData.accessToken),
        (this.options = $.extend({}, $.fn.spectragram.options, options));
      this.messages = {
        defaultImageAltText: "Instagram Photo",
        notFound: "This user account is private or doesn't have any photos.",
      };
      this.getPhotos();
    },
    getPhotos: function () {
      var self = this;
      self.fetch().done(function (results) {
        if (results.data && results.data.length) {
          self.displayPhotos(results);
        } else if (results.error.message) {
          $.error("Spectragram.js - Error: " + results.error.message);
        } else {
          $.error("Spectragram.js - Error: user does not have photos.");
        }
      });
    },
    fetch: function () {
      var getUrl =
        this.API_URL + this.API_FIELDS + "&access_token=" + this.accessToken;
      return $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: getUrl,
      });
    },
    displayPhotos: function (results) {
      var $element,
        $image,
        hasCaption,
        isWrapperEmpty,
        isImage,
        imageGroup = [],
        imageCaption,
        max,
        size;
      var sizeChart = { small: 160, medium: 320, large: 640 };
      isWrapperEmpty = $(this.options.wrapEachWith).length === 0;
      max =
        this.options.max >= results.data.length
          ? results.data.length
          : this.options.max;
      size = sizeChart[this.options.size];
      if (results.data === undefined || results.data.length === 0) {
        if (isWrapperEmpty) {
          this.$elem.append(this.messages.notFound);
        } else {
          this.$elem.append(
            $(this.options.wrapEachWith).append(this.messages.notFound)
          );
        }
        return;
      }
      for (var i = 0; i < max; i++) {
        isImage = results.data[i].media_type === "IMAGE";
        if (isImage) {
          hasCaption =
            results.data[i].caption !== null ||
            results.data[i].caption !== undefined;
          imageCaption = hasCaption
            ? $("<span>").text(results.data[i].caption).html()
            : this.messages.defaultImageAltText;
          $image = $("<img>", {
            alt: imageCaption,
            attr: { height: size, width: size },
            src: results.data[i].media_url,
          });
          $element = $("<a>", {
            href: results.data[i].permalink,
            target: "_blank",
            title: imageCaption,
          }).append($image);
          if (isWrapperEmpty) {
            imageGroup.push($element);
          } else {
            imageGroup.push($(this.options.wrapEachWith).append($element));
          }
        }
      }
      this.$elem.append(imageGroup);
      if (typeof this.options.complete === "function") {
        this.options.complete.call(this);
      }
    },
  };
  jQuery.fn.spectragram = function (options) {
    if (jQuery.fn.spectragram.accessData.accessToken) {
      this.each(function () {
        var instagram = Object.create(Instagram);
        instagram.initialize(options, this);
      });
    } else {
      $.error("You must define an accessToken on jQuery.spectragram");
    }
  };
  jQuery.fn.spectragram.options = {
    complete: null,
    max: 25,
    size: "large",
    wrapEachWith: "<li></li>",
  };
  jQuery.fn.spectragram.accessData = { accessToken: null };
})(jQuery, window, document);

/* https://github.com/mhuggins/jquery-countTo */
(function (e) {
  function t(e, t) {
    return e.toFixed(t.decimals);
  }
  e.fn.countTo = function (t) {
    t = t || {};
    return e(this).each(function () {
      function l() {
        a += i;
        u++;
        c(a);
        if (typeof n.onUpdate == "function") {
          n.onUpdate.call(s, a);
        }
        if (u >= r) {
          o.removeData("countTo");
          clearInterval(f.interval);
          a = n.to;
          if (typeof n.onComplete == "function") {
            n.onComplete.call(s, a);
          }
        }
      }
      function c(e) {
        var t = n.formatter.call(s, e, n);
        o.text(t);
      }
      var n = e.extend(
        {},
        e.fn.countTo.defaults,
        {
          from: e(this).data("from"),
          to: e(this).data("to"),
          speed: e(this).data("speed"),
          refreshInterval: e(this).data("refresh-interval"),
          decimals: e(this).data("decimals"),
        },
        t
      );
      var r = Math.ceil(n.speed / n.refreshInterval),
        i = (n.to - n.from) / r;
      var s = this,
        o = e(this),
        u = 0,
        a = n.from,
        f = o.data("countTo") || {};
      o.data("countTo", f);
      if (f.interval) {
        clearInterval(f.interval);
      }
      f.interval = setInterval(l, n.refreshInterval);
      c(a);
    });
  };
  e.fn.countTo.defaults = {
    from: 0,
    to: 0,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    formatter: t,
    onUpdate: null,
    onComplete: null,
  };
})(jQuery);

/*! Morphext - v2.4.7 - 2016-11-04 */
!(function (a) {
  "use strict";
  function b(b, c) {
    (this.element = a(b)),
      (this.settings = a.extend({}, d, c)),
      (this._defaults = d),
      this._init();
  }
  var c = "Morphext",
    d = { animation: "bounceIn", separator: ",", speed: 2e3, complete: a.noop };
  (b.prototype = {
    _init: function () {
      var b = this;
      (this.phrases = []),
        this.element.addClass("morphext"),
        a.each(
          this.element.text().split(this.settings.separator),
          function (c, d) {
            b.phrases.push(a.trim(d));
          }
        ),
        (this.index = -1),
        this.animate(),
        this.start();
    },
    animate: function () {
      (this.index = ++this.index % this.phrases.length),
        (this.element[0].innerHTML =
          '<span class="animate__animated ' +
          this.settings.animation +
          '">' +
          this.phrases[this.index] +
          "</span>"),
        a.isFunction(this.settings.complete) &&
          this.settings.complete.call(this);
    },
    start: function () {
      var a = this;
      this._interval = setInterval(function () {
        a.animate();
      }, this.settings.speed);
    },
    stop: function () {
      this._interval = clearInterval(this._interval);
    },
  }),
    (a.fn[c] = function (d) {
      return this.each(function () {
        a.data(this, "plugin_" + c) ||
          a.data(this, "plugin_" + c, new b(this, d));
      });
    });
})(jQuery);
/*
 * easy-pie-chart - Lightweight plugin to render simple, animated and retina optimized pie charts - http://robert-fleischmann.de
 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof exports
    ? (module.exports = b(require("jquery")))
    : b(jQuery);
})(this, function (a) {
  var b = function (a, b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d),
        "object" == typeof G_vmlCanvasManager &&
          G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 &&
        ((f = window.devicePixelRatio),
        (d.style.width = d.style.height = [b.size, "px"].join("")),
        (d.width = d.height = b.size * f),
        e.scale(f, f)),
        e.translate(b.size / 2, b.size / 2),
        e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2),
        (Date.now =
          Date.now ||
          function () {
            return +new Date();
          });
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(),
            e.arc(0, 0, g, 0, 2 * Math.PI * c, d),
            (e.strokeStyle = a),
            (e.lineWidth = b),
            e.stroke();
        },
        i = function () {
          var a, c;
          (e.lineWidth = 1), (e.fillStyle = b.scaleColor), e.save();
          for (var d = 24; d > 0; --d)
            d % 6 === 0
              ? ((c = b.scaleLength), (a = 0))
              : ((c = 0.6 * b.scaleLength), (a = b.scaleLength - c)),
              e.fillRect(-b.size / 2 + a, 0, c, 1),
              e.rotate(Math.PI / 12);
          e.restore();
        },
        j = (function () {
          return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (a) {
              window.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        k = function () {
          b.scaleColor && i(),
            b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1);
        };
      (this.getCanvas = function () {
        return d;
      }),
        (this.getCtx = function () {
          return e;
        }),
        (this.clear = function () {
          e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
        }),
        (this.draw = function (a) {
          b.scaleColor || b.trackColor
            ? e.getImageData && e.putImageData
              ? c
                ? e.putImageData(c, 0, 0)
                : (k(), (c = e.getImageData(0, 0, b.size * f, b.size * f)))
              : (this.clear(), k())
            : this.clear(),
            (e.lineCap = b.lineCap);
          var d;
          (d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor),
            h(d, b.lineWidth, a / 100);
        }.bind(this)),
        (this.animate = function (a, c) {
          var d = Date.now();
          b.onStart(a, c);
          var e = function () {
            var f = Math.min(Date.now() - d, b.animate.duration),
              g = b.easing(this, f, a, c - a, b.animate.duration);
            this.draw(g),
              b.onStep(a, c, g),
              f >= b.animate.duration ? b.onStop(a, c) : j(e);
          }.bind(this);
          j(e);
        }.bind(this));
    },
    c = function (a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        trackWidth: void 0,
        size: 110,
        rotate: 0,
        animate: { duration: 1e3, enabled: !0 },
        easing: function (a, b, c, d, e) {
          return (
            (b /= e / 2),
            1 > b ? (d / 2) * b * b + c : (-d / 2) * (--b * (b - 2) - 1) + c
          );
        },
        onStart: function (a, b) {},
        onStep: function (a, b, c) {},
        onStop: function (a, b) {},
      };
      if ("undefined" != typeof b) d.renderer = b;
      else {
        if ("undefined" == typeof SVGRenderer)
          throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          (this.el = a), (this.options = e);
          for (var b in d)
            d.hasOwnProperty(b) &&
              ((e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b]),
              "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          "string" == typeof e.easing &&
          "undefined" != typeof jQuery &&
          jQuery.isFunction(jQuery.easing[e.easing])
            ? (e.easing = jQuery.easing[e.easing])
            : (e.easing = d.easing),
            "number" == typeof e.animate &&
              (e.animate = { duration: e.animate, enabled: !0 }),
            "boolean" != typeof e.animate ||
              e.animate ||
              (e.animate = { duration: 1e3, enabled: e.animate }),
            (this.renderer = new e.renderer(a, e)),
            this.renderer.draw(f),
            a.dataset && a.dataset.percent
              ? this.update(parseFloat(a.dataset.percent))
              : a.getAttribute &&
                a.getAttribute("data-percent") &&
                this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      (this.update = function (a) {
        return (
          (a = parseFloat(a)),
          e.animate.enabled
            ? this.renderer.animate(f, a)
            : this.renderer.draw(a),
          (f = a),
          this
        );
      }.bind(this)),
        (this.disableAnimation = function () {
          return (e.animate.enabled = !1), this;
        }),
        (this.enableAnimation = function () {
          return (e.animate.enabled = !0), this;
        }),
        g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") ||
        ((d = a.extend({}, b, a(this).data())),
        a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery);
})(function (a) {
  "use strict";
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + "` to a date object.");
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || "",
            l = h[3] || "",
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ("!" === k && (m = e(l, m)),
              "" === k && m < 10 && (m = "0" + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, "%"));
    };
  }
  function e(a, b) {
    var c = "s",
      d = "";
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, "").split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join("|")));
  var i = {
      Y: "years",
      m: "months",
      n: "daysToMonth",
      d: "daysToWeek",
      w: "weeks",
      W: "weeksToMonth",
      H: "hours",
      M: "minutes",
      S: "seconds",
      D: "totalDays",
      I: "totalHours",
      N: "totalMinutes",
      T: "totalSeconds",
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.firstTick = !0),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d &&
          ("function" == typeof d
            ? (this.$el.on("update.countdown", d),
              this.$el.on("stoped.countdown", d),
              this.$el.on("finish.countdown", d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent("stoped");
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var a,
        b = new Date();
      return (
        (a = this.finalDate.getTime() - b.getTime()),
        (a = Math.ceil(a / 1e3)),
        (a = !this.options.elapse && a < 0 ? 0 : Math.abs(a)),
        this.totalSecsLeft === a || this.firstTick
          ? void (this.firstTick = !1)
          : ((this.totalSecsLeft = a),
            (this.elapsed = b >= this.finalDate),
            (this.offset = {
              seconds: this.totalSecsLeft % 60,
              minutes: Math.floor(this.totalSecsLeft / 60) % 60,
              hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
              days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
              daysToMonth: Math.floor(
                (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
              ),
              weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
              weeksToMonth:
                Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
              months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
              years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
              totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
              totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
              totalMinutes: Math.floor(this.totalSecsLeft / 60),
              totalSeconds: this.totalSecsLeft,
            }),
            void (this.options.elapse || 0 !== this.totalSecsLeft
              ? this.dispatchEvent("update")
              : (this.stop(), this.dispatchEvent("finish"))))
      );
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + ".countdown");
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data("countdown-instance");
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
            ? (d.setFinalDate.call(d, e), d.start())
            : a.error(
                "Method %s does not exist on jQuery.countdown".replace(
                  /\%s/gi,
                  e
                )
              );
        } else new j(this, b[0], b[1]);
      });
    });
});

/*sticky sidebar*/
!(function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function e(t, e) {
      var a = o(t, e);
      a ||
        (console.log(
          "TSS: Body width smaller than options.minWidth. Init is delayed."
        ),
        i(document).on(
          "scroll." + t.namespace,
          (function (t, e) {
            return function (a) {
              var n = o(t, e);
              n && i(this).unbind(a);
            };
          })(t, e)
        ),
        i(window).on(
          "resize." + t.namespace,
          (function (t, e) {
            return function (a) {
              var n = o(t, e);
              n && i(this).unbind(a);
            };
          })(t, e)
        ));
    }
    function o(t, e) {
      return (
        t.initialized === !0 ||
        (!(i("body").width() < t.minWidth) && (a(t, e), !0))
      );
    }
    function a(t, e) {
      t.initialized = !0;
      var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
      0 === o.length &&
        i("head").append(
          i(
            '<style id="theia-sticky-sidebar-stylesheet-' +
              t.namespace +
              '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
          )
        ),
        e.each(function () {
          function e() {
            (a.fixedScrollTop = 0),
              a.sidebar.css({ "min-height": "1px" }),
              a.stickySidebar.css({
                position: "static",
                width: "",
                transform: "none",
              });
          }
          function o(t) {
            var e = t.height();
            return (
              t.children().each(function () {
                e = Math.max(e, i(this).height());
              }),
              e
            );
          }
          var a = {};
          if (
            ((a.sidebar = i(this)),
            (a.options = t || {}),
            (a.container = i(a.options.containerSelector)),
            0 == a.container.length && (a.container = a.sidebar.parent()),
            a.sidebar.parents().css("-webkit-transform", "none"),
            a.sidebar.css({
              position: a.options.defaultPosition,
              overflow: "visible",
              "-webkit-box-sizing": "border-box",
              "-moz-box-sizing": "border-box",
              "box-sizing": "border-box",
            }),
            (a.stickySidebar = a.sidebar.find(".theiaStickySidebar")),
            0 == a.stickySidebar.length)
          ) {
            var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
            a.sidebar
              .find("script")
              .filter(function (i, t) {
                return 0 === t.type.length || t.type.match(s);
              })
              .remove(),
              (a.stickySidebar = i("<div>")
                .addClass("theiaStickySidebar")
                .append(a.sidebar.children())),
              a.sidebar.append(a.stickySidebar);
          }
          (a.marginBottom = parseInt(a.sidebar.css("margin-bottom"))),
            (a.paddingTop = parseInt(a.sidebar.css("padding-top"))),
            (a.paddingBottom = parseInt(a.sidebar.css("padding-bottom")));
          var r = a.stickySidebar.offset().top,
            d = a.stickySidebar.outerHeight();
          a.stickySidebar.css("padding-top", 1),
            a.stickySidebar.css("padding-bottom", 1),
            (r -= a.stickySidebar.offset().top),
            (d = a.stickySidebar.outerHeight() - d - r),
            0 == r
              ? (a.stickySidebar.css("padding-top", 0),
                (a.stickySidebarPaddingTop = 0))
              : (a.stickySidebarPaddingTop = 1),
            0 == d
              ? (a.stickySidebar.css("padding-bottom", 0),
                (a.stickySidebarPaddingBottom = 0))
              : (a.stickySidebarPaddingBottom = 1),
            (a.previousScrollTop = null),
            (a.fixedScrollTop = 0),
            e(),
            (a.onScroll = function (a) {
              if (a.stickySidebar.is(":visible")) {
                if (i("body").width() < a.options.minWidth) return void e();
                if (a.options.disableOnResponsiveLayouts) {
                  var s = a.sidebar.outerWidth(
                    "none" == a.sidebar.css("float")
                  );
                  if (s + 50 > a.container.width()) return void e();
                }
                var r = i(document).scrollTop(),
                  d = "static";
                if (
                  r >=
                  a.sidebar.offset().top +
                    (a.paddingTop - a.options.additionalMarginTop)
                ) {
                  var c,
                    p = a.paddingTop + t.additionalMarginTop,
                    b =
                      a.paddingBottom +
                      a.marginBottom +
                      t.additionalMarginBottom,
                    l = a.sidebar.offset().top,
                    f = a.sidebar.offset().top + o(a.container),
                    h = 0 + t.additionalMarginTop,
                    g =
                      a.stickySidebar.outerHeight() + p + b <
                      i(window).height();
                  c = g
                    ? h + a.stickySidebar.outerHeight()
                    : i(window).height() -
                      a.marginBottom -
                      a.paddingBottom -
                      t.additionalMarginBottom;
                  var u = l - r + a.paddingTop,
                    S = f - r - a.paddingBottom - a.marginBottom,
                    y = a.stickySidebar.offset().top - r,
                    m = a.previousScrollTop - r;
                  "fixed" == a.stickySidebar.css("position") &&
                    "modern" == a.options.sidebarBehavior &&
                    (y += m),
                    "stick-to-top" == a.options.sidebarBehavior &&
                      (y = t.additionalMarginTop),
                    "stick-to-bottom" == a.options.sidebarBehavior &&
                      (y = c - a.stickySidebar.outerHeight()),
                    (y =
                      m > 0
                        ? Math.min(y, h)
                        : Math.max(y, c - a.stickySidebar.outerHeight())),
                    (y = Math.max(y, u)),
                    (y = Math.min(y, S - a.stickySidebar.outerHeight()));
                  var k = a.container.height() == a.stickySidebar.outerHeight();
                  d =
                    (k || y != h) &&
                    (k || y != c - a.stickySidebar.outerHeight())
                      ? r + y - a.sidebar.offset().top - a.paddingTop <=
                        t.additionalMarginTop
                        ? "static"
                        : "absolute"
                      : "fixed";
                }
                if ("fixed" == d) {
                  var v = i(document).scrollLeft();
                  a.stickySidebar.css({
                    position: "fixed",
                    width: n(a.stickySidebar) + "px",
                    transform: "translateY(" + y + "px)",
                    left:
                      a.sidebar.offset().left +
                      parseInt(a.sidebar.css("padding-left")) -
                      v +
                      "px",
                    top: "0px",
                  });
                } else if ("absolute" == d) {
                  var x = {};
                  "absolute" != a.stickySidebar.css("position") &&
                    ((x.position = "absolute"),
                    (x.transform =
                      "translateY(" +
                      (r +
                        y -
                        a.sidebar.offset().top -
                        a.stickySidebarPaddingTop -
                        a.stickySidebarPaddingBottom) +
                      "px)"),
                    (x.top = "0px")),
                    (x.width = n(a.stickySidebar) + "px"),
                    (x.left = ""),
                    a.stickySidebar.css(x);
                } else "static" == d && e();
                "static" != d &&
                  1 == a.options.updateSidebarHeight &&
                  a.sidebar.css({
                    "min-height":
                      a.stickySidebar.outerHeight() +
                      a.stickySidebar.offset().top -
                      a.sidebar.offset().top +
                      a.paddingBottom,
                  }),
                  (a.previousScrollTop = r);
              }
            }),
            a.onScroll(a),
            i(document).on(
              "scroll." + a.options.namespace,
              (function (i) {
                return function () {
                  i.onScroll(i);
                };
              })(a)
            ),
            i(window).on(
              "resize." + a.options.namespace,
              (function (i) {
                return function () {
                  i.stickySidebar.css({ position: "static" }), i.onScroll(i);
                };
              })(a)
            ),
            "undefined" != typeof ResizeSensor &&
              new ResizeSensor(
                a.stickySidebar[0],
                (function (i) {
                  return function () {
                    i.onScroll(i);
                  };
                })(a)
              );
        });
    }
    function n(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}
      return "undefined" == typeof t && (t = i.width()), t;
    }
    var s = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS",
    };
    return (
      (t = i.extend(s, t)),
      (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
      (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
      e(t, this),
      this
    );
  };
})(jQuery);
/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */
!(function (t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t("object" == typeof exports ? require("jquery") : jQuery);
})(function (t) {
  function s(s) {
    var i = !1;
    return (
      t('[data-notify="container"]').each(function (e, n) {
        var a = t(n),
          o = a.find('[data-notify="title"]').html().trim(),
          r = a.find('[data-notify="message"]').html().trim(),
          l =
            o ===
            t("<div>" + s.settings.content.title + "</div>")
              .html()
              .trim(),
          d =
            r ===
            t("<div>" + s.settings.content.message + "</div>")
              .html()
              .trim(),
          c = a.hasClass("alert-" + s.settings.type);
        return l && d && c && (i = !0), !i;
      }),
      i
    );
  }
  function i(i, n, a) {
    var o = {
      content: {
        message: "object" == typeof n ? n.message : n,
        title: n.title ? n.title : "",
        icon: n.icon ? n.icon : "",
        url: n.url ? n.url : "#",
        target: n.target ? n.target : "-",
      },
    };
    (a = t.extend(!0, {}, o, a)),
      (this.settings = t.extend(!0, {}, e, a)),
      (this._defaults = e),
      "-" === this.settings.content.target &&
        (this.settings.content.target = this.settings.url_target),
      (this.animations = {
        start:
          "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
        end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend",
      }),
      "number" == typeof this.settings.offset &&
        (this.settings.offset = {
          x: this.settings.offset,
          y: this.settings.offset,
        }),
      (this.settings.allow_duplicates ||
        (!this.settings.allow_duplicates && !s(this))) &&
        this.init();
  }
  var e = {
    element: "body",
    position: null,
    type: "info",
    allow_dismiss: !0,
    allow_duplicates: !0,
    newest_on_top: !1,
    showProgressbar: !1,
    placement: { from: "top", align: "right" },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 5e3,
    timer: 1e3,
    url_target: "_blank",
    mouse_over: null,
    animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    onClick: null,
    icon_type: "class",
    template:
      '<div data-notify="container" class="col-11 col-md-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="p-progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
  };
  (String.format = function () {
    var t = arguments,
      s = arguments[0];
    return s.replace(/(\{\{\d\}\}|\{\d\})/g, function (s) {
      if ("{{" === s.substring(0, 2)) return s;
      var i = parseInt(s.match(/\d/)[0]);
      return t[i + 1];
    });
  }),
    t.extend(i.prototype, {
      init: function () {
        var t = this;
        this.buildNotify(),
          this.settings.content.icon && this.setIcon(),
          "#" != this.settings.content.url && this.styleURL(),
          this.styleDismiss(),
          this.placement(),
          this.bind(),
          (this.notify = {
            $ele: this.$ele,
            update: function (s, i) {
              var e = {};
              "string" == typeof s ? (e[s] = i) : (e = s);
              for (var n in e)
                switch (n) {
                  case "type":
                    this.$ele.removeClass("alert-" + t.settings.type),
                      this.$ele
                        .find('[data-notify="progressbar"] > .progress-bar')
                        .removeClass("p-progress-bar-" + t.settings.type),
                      (t.settings.type = e[n]),
                      this.$ele
                        .addClass("alert-" + e[n])
                        .find('[data-notify="progressbar"] > .progress-bar')
                        .addClass("p-progress-bar-" + e[n]);
                    break;
                  case "icon":
                    var a = this.$ele.find('[data-notify="icon"]');
                    "class" === t.settings.icon_type.toLowerCase()
                      ? a.removeClass(t.settings.content.icon).addClass(e[n])
                      : (a.is("img") || a.find("img"), a.attr("src", e[n])),
                      (t.settings.content.icon = e[s]);
                    break;
                  case "progress":
                    var o = t.settings.delay - t.settings.delay * (e[n] / 100);
                    this.$ele.data("notify-delay", o),
                      this.$ele
                        .find('[data-notify="progressbar"] > div')
                        .attr("aria-valuenow", e[n])
                        .css("width", e[n] + "%");
                    break;
                  case "url":
                    this.$ele.find('[data-notify="url"]').attr("href", e[n]);
                    break;
                  case "target":
                    this.$ele.find('[data-notify="url"]').attr("target", e[n]);
                    break;
                  default:
                    this.$ele.find('[data-notify="' + n + '"]').html(e[n]);
                }
              var r =
                this.$ele.outerHeight() +
                parseInt(t.settings.spacing) +
                parseInt(t.settings.offset.y);
              t.reposition(r);
            },
            close: function () {
              t.close();
            },
          });
      },
      buildNotify: function () {
        var s = this.settings.content;
        (this.$ele = t(
          String.format(
            this.settings.template,
            this.settings.type,
            s.title,
            s.message,
            s.url,
            s.target
          )
        )),
          this.$ele.attr(
            "data-notify-position",
            this.settings.placement.from + "-" + this.settings.placement.align
          ),
          this.settings.allow_dismiss ||
            this.$ele.find('[data-notify="dismiss"]').css("display", "none"),
          ((this.settings.delay <= 0 && !this.settings.showProgressbar) ||
            !this.settings.showProgressbar) &&
            this.$ele.find('[data-notify="progressbar"]').remove();
      },
      setIcon: function () {
        "class" === this.settings.icon_type.toLowerCase()
          ? this.$ele
              .find('[data-notify="icon"]')
              .addClass(this.settings.content.icon)
          : this.$ele.find('[data-notify="icon"]').is("img")
          ? this.$ele
              .find('[data-notify="icon"]')
              .attr("src", this.settings.content.icon)
          : this.$ele
              .find('[data-notify="icon"]')
              .append(
                '<img src="' +
                  this.settings.content.icon +
                  '" alt="Notify Icon" />'
              );
      },
      styleDismiss: function () {
        this.$ele
          .find('[data-notify="dismiss"]')
          .css({
            position: "absolute",
            right: "10px",
            top: "5px",
            zIndex: this.settings.z_index + 2,
          });
      },
      styleURL: function () {
        this.$ele
          .find('[data-notify="url"]')
          .css({
            backgroundImage:
              "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
            zIndex: this.settings.z_index + 1,
          });
      },
      placement: function () {
        var s = this,
          i = this.settings.offset.y,
          e = {
            display: "inline-block",
            margin: "0px auto",
            position: this.settings.position
              ? this.settings.position
              : "body" === this.settings.element
              ? "fixed"
              : "absolute",
            transition: "all .5s ease-in-out",
            zIndex: this.settings.z_index,
          },
          n = !1,
          a = this.settings;
        switch (
          (t(
            '[data-notify-position="' +
              this.settings.placement.from +
              "-" +
              this.settings.placement.align +
              '"]:not([data-closing="true"])'
          ).each(function () {
            i = Math.max(
              i,
              parseInt(t(this).css(a.placement.from)) +
                parseInt(t(this).outerHeight()) +
                parseInt(a.spacing)
            );
          }),
          this.settings.newest_on_top === !0 && (i = this.settings.offset.y),
          (e[this.settings.placement.from] = i + "px"),
          this.settings.placement.align)
        ) {
          case "left":
          case "right":
            e[this.settings.placement.align] = this.settings.offset.x + "px";
            break;
          case "center":
            (e.left = 0), (e.right = 0);
        }
        this.$ele.css(e).addClass(this.settings.animate.enter),
          t.each(Array("webkit-", "moz-", "o-", "ms-", ""), function (t, i) {
            s.$ele[0].style[i + "AnimationIterationCount"] = 1;
          }),
          t(this.settings.element).append(this.$ele),
          this.settings.newest_on_top === !0 &&
            ((i =
              parseInt(i) +
              parseInt(this.settings.spacing) +
              this.$ele.outerHeight()),
            this.reposition(i)),
          t.isFunction(s.settings.onShow) && s.settings.onShow.call(this.$ele),
          this.$ele
            .one(this.animations.start, function () {
              n = !0;
            })
            .one(this.animations.end, function () {
              s.$ele.removeClass(s.settings.animate.enter),
                t.isFunction(s.settings.onShown) &&
                  s.settings.onShown.call(this);
            }),
          setTimeout(function () {
            n ||
              (t.isFunction(s.settings.onShown) &&
                s.settings.onShown.call(this));
          }, 600);
      },
      bind: function () {
        var s = this;
        if (
          (this.$ele.find('[data-notify="dismiss"]').on("click", function () {
            s.close();
          }),
          t.isFunction(s.settings.onClick) &&
            this.$ele.on("click", function (t) {
              t.target != s.$ele.find('[data-notify="dismiss"]')[0] &&
                s.settings.onClick.call(this, t);
            }),
          this.$ele
            .mouseover(function () {
              t(this).data("data-hover", "true");
            })
            .mouseout(function () {
              t(this).data("data-hover", "false");
            }),
          this.$ele.data("data-hover", "false"),
          this.settings.delay > 0)
        ) {
          s.$ele.data("notify-delay", s.settings.delay);
          var i = setInterval(function () {
            var t = parseInt(s.$ele.data("notify-delay")) - s.settings.timer;
            if (
              ("false" === s.$ele.data("data-hover") &&
                "pause" === s.settings.mouse_over) ||
              "pause" != s.settings.mouse_over
            ) {
              var e = ((s.settings.delay - t) / s.settings.delay) * 100;
              s.$ele.data("notify-delay", t),
                s.$ele
                  .find('[data-notify="progressbar"] > div')
                  .attr("aria-valuenow", e)
                  .css("width", e + "%");
            }
            t <= -s.settings.timer && (clearInterval(i), s.close());
          }, s.settings.timer);
        }
      },
      close: function () {
        var s = this,
          i = parseInt(this.$ele.css(this.settings.placement.from)),
          e = !1;
        this.$ele
          .attr("data-closing", "true")
          .addClass(this.settings.animate.exit),
          s.reposition(i),
          t.isFunction(s.settings.onClose) &&
            s.settings.onClose.call(this.$ele),
          this.$ele
            .one(this.animations.start, function () {
              e = !0;
            })
            .one(this.animations.end, function () {
              t(this).remove(),
                t.isFunction(s.settings.onClosed) &&
                  s.settings.onClosed.call(this);
            }),
          setTimeout(function () {
            e ||
              (s.$ele.remove(),
              s.settings.onClosed && s.settings.onClosed(s.$ele));
          }, 600);
      },
      reposition: function (s) {
        var i = this,
          e =
            '[data-notify-position="' +
            this.settings.placement.from +
            "-" +
            this.settings.placement.align +
            '"]:not([data-closing="true"])',
          n = this.$ele.nextAll(e);
        this.settings.newest_on_top === !0 && (n = this.$ele.prevAll(e)),
          n.each(function () {
            t(this).css(i.settings.placement.from, s),
              (s =
                parseInt(s) +
                parseInt(i.settings.spacing) +
                t(this).outerHeight());
          });
      },
    }),
    (t.notify = function (t, s) {
      var e = new i(this, t, s);
      return e.notify;
    }),
    (t.notifyDefaults = function (s) {
      return (e = t.extend(!0, {}, e, s));
    }),
    (t.notifyClose = function (s) {
      "undefined" == typeof s || "all" === s
        ? t("[data-notify]").find('[data-notify="dismiss"]').trigger("click")
        : "success" === s || "info" === s || "warning" === s || "danger" === s
        ? t(".alert-" + s + "[data-notify]")
            .find('[data-notify="dismiss"]')
            .trigger("click")
        : s
        ? t(s + "[data-notify]")
            .find('[data-notify="dismiss"]')
            .trigger("click")
        : t('[data-notify-position="' + s + '"]')
            .find('[data-notify="dismiss"]')
            .trigger("click");
    }),
    (t.notifyCloseExcept = function (s) {
      "success" === s || "info" === s || "warning" === s || "danger" === s
        ? t("[data-notify]")
            .not(".alert-" + s)
            .find('[data-notify="dismiss"]')
            .trigger("click")
        : t("[data-notify]")
            .not(s)
            .find('[data-notify="dismiss"]')
            .trigger("click");
    });
});

/*! lazyload https://github.com/verlok/lazyload */
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t = t || self).LazyLoad = n());
})(this, function () {
  "use strict";
  function t() {
    return (t =
      Object.assign ||
      function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = arguments[n];
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
        }
        return t;
      }).apply(this, arguments);
  }
  var n = "undefined" != typeof window,
    e =
      (n && !("onscroll" in window)) ||
      ("undefined" != typeof navigator &&
        /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
    a = n && "IntersectionObserver" in window,
    o = n && "classList" in document.createElement("p"),
    i = n && window.devicePixelRatio > 1,
    r = {
      elements_selector: "img",
      container: e || n ? document : null,
      threshold: 300,
      thresholds: null,
      data_src: "src",
      data_srcset: "srcset",
      data_sizes: "sizes",
      data_bg: "bg",
      data_bg_hidpi: "bg-hidpi",
      data_bg_multi: "bg-multi",
      data_bg_multi_hidpi: "bg-multi-hidpi",
      data_poster: "poster",
      class_applied: "applied",
      class_loading: "loading",
      class_loaded: "loaded",
      class_error: "error",
      load_delay: 0,
      auto_unobserve: !0,
      callback_enter: null,
      callback_exit: null,
      callback_applied: null,
      callback_loading: null,
      callback_loaded: null,
      callback_error: null,
      callback_finish: null,
      use_native: !1,
    },
    l = function (n) {
      return t({}, r, n);
    },
    c = function (t, n) {
      var e,
        a = new t(n);
      try {
        e = new CustomEvent("LazyLoad::Initialized", {
          detail: { instance: a },
        });
      } catch (t) {
        (e = document.createEvent("CustomEvent")).initCustomEvent(
          "LazyLoad::Initialized",
          !1,
          !1,
          { instance: a }
        );
      }
      window.dispatchEvent(e);
    },
    s = function (t, n) {
      return t.getAttribute("data-" + n);
    },
    u = function (t, n, e) {
      var a = "data-" + n;
      null !== e ? t.setAttribute(a, e) : t.removeAttribute(a);
    },
    d = function (t, n) {
      return u(t, "ll-status", n);
    },
    f = function (t, n) {
      return u(t, "ll-timeout", n);
    },
    _ = function (t) {
      return s(t, "ll-timeout");
    },
    g = function (t, n, e, a) {
      t && (void 0 === a ? (void 0 === e ? t(n) : t(n, e)) : t(n, e, a));
    },
    v = function (t, n) {
      o ? t.classList.add(n) : (t.className += (t.className ? " " : "") + n);
    },
    p = function (t, n) {
      o
        ? t.classList.remove(n)
        : (t.className = t.className
            .replace(new RegExp("(^|\\s+)" + n + "(\\s+|$)"), " ")
            .replace(/^\s+/, "")
            .replace(/\s+$/, ""));
    },
    b = function (t) {
      return t.llTempImage;
    },
    h = function (t) {
      t && (t.loadingCount += 1);
    },
    m = function (t) {
      for (var n, e = [], a = 0; (n = t.children[a]); a += 1)
        "SOURCE" === n.tagName && e.push(n);
      return e;
    },
    y = function (t, n, e) {
      e && t.setAttribute(n, e);
    },
    E = function (t, n) {
      y(t, "sizes", s(t, n.data_sizes)),
        y(t, "srcset", s(t, n.data_srcset)),
        y(t, "src", s(t, n.data_src));
    },
    w = {
      IMG: function (t, n) {
        var e = t.parentNode;
        e &&
          "PICTURE" === e.tagName &&
          m(e).forEach(function (t) {
            E(t, n);
          });
        E(t, n);
      },
      IFRAME: function (t, n) {
        y(t, "src", s(t, n.data_src));
      },
      VIDEO: function (t, n) {
        m(t).forEach(function (t) {
          y(t, "src", s(t, n.data_src));
        }),
          y(t, "poster", s(t, n.data_poster)),
          y(t, "src", s(t, n.data_src)),
          t.load();
      },
    },
    I = function (t, n, e) {
      var a = w[t.tagName];
      a &&
        (a(t, n),
        h(e),
        v(t, n.class_loading),
        d(t, "loading"),
        g(n.callback_loading, t, e),
        g(n.callback_reveal, t, e));
    },
    k = ["IMG", "IFRAME", "VIDEO"],
    L = function (t, n) {
      !n || n.toLoadCount || n.loadingCount || g(t.callback_finish, n);
    },
    C = function (t, n, e) {
      t.addEventListener(n, e);
    },
    A = function (t, n, e) {
      t.removeEventListener(n, e);
    },
    z = function (t, n, e) {
      A(t, "load", n), A(t, "loadeddata", n), A(t, "error", e);
    },
    O = function (t, n, e) {
      !(function (t) {
        delete t.llTempImage;
      })(t),
        (function (t, n) {
          n && (n.loadingCount -= 1);
        })(0, e),
        p(t, n.class_loading);
    },
    N = function (t, n, e) {
      var a = b(t) || t,
        o = function o(r) {
          !(function (t, n, e, a) {
            O(n, e, a),
              v(n, e.class_loaded),
              d(n, "loaded"),
              g(e.callback_loaded, n, a),
              L(e, a);
          })(0, t, n, e),
            z(a, o, i);
        },
        i = function i(r) {
          !(function (t, n, e, a) {
            O(n, e, a),
              v(n, e.class_error),
              d(n, "error"),
              g(e.callback_error, n, a),
              L(e, a);
          })(0, t, n, e),
            z(a, o, i);
        };
      !(function (t, n, e) {
        C(t, "load", n), C(t, "loadeddata", n), C(t, "error", e);
      })(a, o, i);
    },
    x = function (t, n) {
      n && (n.toLoadCount -= 1);
    },
    M = function (t, n, e) {
      !(function (t) {
        t.llTempImage = document.createElement("img");
      })(t),
        N(t, n, e),
        (function (t, n, e) {
          var a = s(t, n.data_bg),
            o = s(t, n.data_bg_hidpi),
            r = i && o ? o : a;
          r &&
            ((t.style.backgroundImage = 'url("'.concat(r, '")')),
            b(t).setAttribute("src", r),
            h(e),
            v(t, n.class_loading),
            d(t, "loading"),
            g(n.callback_loading, t, e),
            g(n.callback_reveal, t, e));
        })(t, n, e),
        (function (t, n, e) {
          var a = s(t, n.data_bg_multi),
            o = s(t, n.data_bg_multi_hidpi),
            r = i && o ? o : a;
          r &&
            ((t.style.backgroundImage = r),
            v(t, n.class_applied),
            d(t, "applied"),
            g(n.callback_applied, t, e));
        })(t, n, e);
    },
    R = function (t, n, e) {
      !(function (t) {
        return k.indexOf(t.tagName) > -1;
      })(t)
        ? M(t, n, e)
        : (function (t, n, e) {
            N(t, n, e), I(t, n, e);
          })(t, n, e),
        x(0, e),
        (function (t, n) {
          if (n) {
            var e = n._observer;
            e && n._settings.auto_unobserve && e.unobserve(t);
          }
        })(t, e),
        L(n, e);
    },
    T = function (t) {
      var n = _(t);
      n && (clearTimeout(n), f(t, null));
    },
    j = function (t, n, e) {
      var a = e._settings;
      g(a.callback_enter, t, n, e),
        a.load_delay
          ? (function (t, n, e) {
              var a = n.load_delay,
                o = _(t);
              o ||
                ((o = setTimeout(function () {
                  R(t, n, e), T(t);
                }, a)),
                f(t, o));
            })(t, a, e)
          : R(t, a, e);
    },
    F = ["IMG", "IFRAME"],
    G = function (t) {
      return t.use_native && "loading" in HTMLImageElement.prototype;
    },
    P = function (t, n, e) {
      t.forEach(function (t) {
        -1 !== F.indexOf(t.tagName) &&
          (t.setAttribute("loading", "lazy"),
          (function (t, n, e) {
            N(t, n, e), I(t, n, e), x(0, e), d(t, "native"), L(n, e);
          })(t, n, e));
      }),
        (e.toLoadCount = 0);
    },
    D = function (t, n) {
      !(function (t) {
        t.disconnect();
      })(t),
        (function (t, n) {
          n.forEach(function (n) {
            t.observe(n), d(n, "observed");
          });
        })(t, n);
    },
    S = function (t) {
      var n;
      a &&
        !G(t._settings) &&
        (t._observer = new IntersectionObserver(
          function (n) {
            n.forEach(function (n) {
              return (function (t) {
                return t.isIntersecting || t.intersectionRatio > 0;
              })(n)
                ? j(n.target, n, t)
                : (function (t, n, e) {
                    var a = e._settings;
                    g(a.callback_exit, t, n, e), a.load_delay && T(t);
                  })(n.target, n, t);
            });
          },
          {
            root: (n = t._settings).container === document ? null : n.container,
            rootMargin: n.thresholds || n.threshold + "px",
          }
        ));
    },
    U = function (t) {
      return Array.prototype.slice.call(t);
    },
    V = function (t) {
      return t.container.querySelectorAll(t.elements_selector);
    },
    $ = function (t) {
      return (
        !(function (t) {
          return null !== s(t, "ll-status");
        })(t) ||
        (function (t) {
          return "observed" === s(t, "ll-status");
        })(t)
      );
    },
    q = function (t) {
      return (function (t) {
        return "error" === s(t, "ll-status");
      })(t);
    },
    H = function (t, n) {
      return (function (t) {
        return U(t).filter($);
      })(t || V(n));
    },
    B = function (t) {
      var n,
        e = t._settings;
      ((n = V(e)), U(n).filter(q)).forEach(function (t) {
        p(t, e.class_error),
          (function (t) {
            u(t, "ll-status", null);
          })(t);
      }),
        t.update();
    },
    J = function (t, e) {
      var a;
      (this._settings = l(t)),
        (this.loadingCount = 0),
        S(this),
        (a = this),
        n &&
          window.addEventListener("online", function (t) {
            B(a);
          }),
        this.update(e);
    };
  return (
    (J.prototype = {
      update: function (t) {
        var n = this._settings,
          o = H(t, n);
        (this.toLoadCount = o.length),
          !e && a
            ? G(n)
              ? P(o, n, this)
              : D(this._observer, o)
            : this.loadAll(o);
      },
      destroy: function () {
        this._observer && this._observer.disconnect(),
          delete this._observer,
          delete this._settings,
          delete this.loadingCount,
          delete this.toLoadCount;
      },
      loadAll: function (t) {
        var n = this,
          e = this._settings;
        H(t, e).forEach(function (t) {
          R(t, e, n);
        });
      },
      load: function (t) {
        R(t, this._settings, this);
      },
    }),
    (J.load = function (t, n) {
      var e = l(n);
      R(t, e);
    }),
    n &&
      (function (t, n) {
        if (n)
          if (n.length) for (var e, a = 0; (e = n[a]); a += 1) c(t, e);
          else c(t, n);
      })(J, window.lazyLoadOptions),
    J
  );
});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] &&
        (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.Context.refreshAll();
      for (var e in i) i[e].enabled = !0;
      return this;
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll,
            r = n ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var a = this.waypoints[i][s];
            if (null !== a.triggerPoint) {
              var l = o.oldScroll < a.triggerPoint,
                h = o.newScroll >= a.triggerPoint,
                p = l && h,
                u = !l && !h;
              (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var r in t) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c,
              d = this.waypoints[r][a],
              f = d.options.offset,
              w = d.triggerPoint,
              y = 0,
              g = null == w;
            d.element !== d.element.window &&
              (y = d.adapter.offset()[s.offsetProp]),
              "function" == typeof f
                ? (f = f.apply(d))
                : "string" == typeof f &&
                  ((f = parseFloat(f)),
                  d.options.offset.indexOf("%") > -1 &&
                    (f = Math.ceil((s.contextDimension * f) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (d.triggerPoint = Math.floor(y + l - f)),
              (h = w < s.oldScroll),
              (p = d.triggerPoint >= s.oldScroll),
              (u = h && p),
              (c = !h && !p),
              !g && u
                ? (d.queueTrigger(s.backward), (o[d.group.id] = d.group))
                : !g && c
                ? (d.queueTrigger(s.forward), (o[d.group.id] = d.group))
                : g &&
                  s.oldScroll >= d.triggerPoint &&
                  (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        var i =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t;
        i.call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints),
          o = i === this.waypoints.length - 1;
        return o ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
