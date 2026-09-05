/* @ds-bundle: {"format":4,"namespace":"FESAPDesignSystem_7c262a","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/icon/Icon.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Dialog","sourcePath":"components/layout/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"9eddfebfc8a8","components/feedback/Tag.jsx":"b768a673e2c1","components/feedback/Toast.jsx":"048ba725ee26","components/feedback/Tooltip.jsx":"bd0eefd62fe9","components/forms/Button.jsx":"b7a36896ba17","components/forms/Checkbox.jsx":"b87e44b5006a","components/forms/IconButton.jsx":"ed10eaf58295","components/forms/Input.jsx":"3943c9283347","components/forms/Radio.jsx":"8a8f1fcb85a1","components/forms/Select.jsx":"4ecac6184867","components/forms/Switch.jsx":"ea0d92439fa8","components/icon/Icon.jsx":"d6369a2c9ed8","components/layout/Card.jsx":"fa69f6ee11c5","components/layout/Dialog.jsx":"d815c8dacaa2","components/navigation/Tabs.jsx":"72120adde6f5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FESAPDesignSystem_7c262a = window.FESAPDesignSystem_7c262a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
// Small status pill — solid tint, used for community/site tags, activity categories.
function Badge({
  tone = 'primary',
  children,
  style
}) {
  const tones = {
    primary: {
      background: 'var(--color-primary)',
      color: '#fff'
    },
    secondary: {
      background: 'var(--color-secondary)',
      color: '#F3E9DE'
    },
    accent: {
      background: 'var(--fesap-copper-300)',
      color: 'var(--fesap-brown-900)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-primary)',
      border: '1.5px solid var(--color-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-badge)',
      font: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-heading)',
      ...(tones[tone] || tones.primary),
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
// Filter/category chip — rounded rectangle, selectable state.
function Tag({
  children,
  selected = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: onClick ? 'pointer' : 'default',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)',
      border: `1px solid ${selected ? 'var(--color-primary)' : 'var(--color-border)'}`,
      background: selected ? 'var(--color-surface-sunken)' : 'var(--color-surface)',
      color: selected ? 'var(--color-primary)' : 'var(--color-text-muted)',
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const icons = {
  success: '✓',
  error: '!',
  info: 'i'
};
const tones = {
  success: 'var(--color-primary)',
  error: 'var(--fesap-flame-700)',
  info: 'var(--color-secondary)'
};

// Transient bottom-corner notification — flat brand fill, short fade in/out.
function Toast({
  tone = 'info',
  message,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: tones[tone] || tones.info,
      color: '#fff',
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      fontFamily: 'var(--font-body)',
      font: 'var(--text-body-md)',
      maxWidth: 360,
      animation: 'fesap-toast-in var(--duration-standard) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 13
    }
  }, icons[tone] || icons.info), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      background: 'transparent',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 16,
      opacity: 0.8
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("style", null, `@keyframes fesap-toast-in { from { opacity:0; transform:translateY(8px);} to { opacity:1; transform:translateY(0);} }`));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
// Small dark tooltip, appears on hover above/below the trigger.
function Tooltip({
  label,
  children,
  position = 'top'
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      [position === 'top' ? 'bottom' : 'top']: 'calc(100% + 8px)',
      background: 'var(--fesap-brown-900)',
      color: '#fff',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10,
      opacity: 1,
      transition: 'opacity var(--duration-fast) var(--ease-standard)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizeStyles = {
  sm: {
    padding: '8px 16px',
    font: 'var(--text-body-sm)'
  },
  md: {
    padding: '11px 22px',
    font: 'var(--text-body-strong)'
  },
  lg: {
    padding: '14px 28px',
    font: '600 18px/1.4 var(--font-body)'
  }
};
function variantStyles(variant, disabled) {
  if (disabled) {
    return {
      background: '#EDEAE4',
      color: '#A6A19A',
      border: '1px solid #EDEAE4'
    };
  }
  switch (variant) {
    case 'secondary':
      return {
        background: 'var(--color-secondary)',
        color: 'var(--color-text-on-secondary)',
        border: '1px solid var(--color-secondary)'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--color-primary)',
        border: '2px solid var(--color-primary)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--color-primary)',
        border: '1px solid transparent'
      };
    case 'flame':
      return {
        background: 'var(--color-flame)',
        color: '#fff',
        border: '1px solid var(--color-flame)'
      };
    case 'primary':
    default:
      return {
        background: 'var(--color-primary)',
        color: 'var(--color-text-on-primary)',
        border: '1px solid var(--color-primary)'
      };
  }
}

// Primary interactive action. Flat solid fill in the flyer's institutional palette —
// hover darkens (never lightens), press adds a very slight scale-down.
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  children,
  style,
  ...rest
}) {
  const vs = variantStyles(variant, disabled);
  const ss = sizeStyles[size] || sizeStyles.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      font: ss.font,
      padding: ss.padding,
      transition: `background var(--duration-standard) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)`,
      ...vs,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.98)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
// Square checkbox — green fill + white check when checked, echoing the badge palette.
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--color-border)'}`,
      background: checked ? 'var(--color-primary)' : 'var(--color-surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      opacity: disabled ? 0.5 : 1
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff',
      fontSize: 13,
      lineHeight: 1
    }
  }, "✓")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--color-text)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function variantStyles(variant, disabled) {
  if (disabled) return {
    background: '#EDEAE4',
    color: '#A6A19A'
  };
  switch (variant) {
    case 'inverse':
      return {
        background: '#fff',
        color: 'var(--color-primary)'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--color-primary)',
        border: '2px solid var(--color-primary)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--color-primary)'
      };
    case 'solid':
    default:
      return {
        background: 'var(--color-primary)',
        color: '#fff'
      };
  }
}

// Round icon-only button — mirrors the flyer's round green badge-icon motif.
function IconButton({
  icon,
  size = 'md',
  variant = 'solid',
  disabled = false,
  'aria-label': ariaLabel,
  style,
  ...rest
}) {
  const d = sizes[size] || sizes.md;
  const vs = variantStyles(variant, disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      width: d,
      height: d,
      borderRadius: 'var(--radius-badge)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: vs.border || '1px solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--duration-standard) var(--ease-standard)',
      ...vs,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Simple labeled text input — flat surface, thin warm-gray border, copper focus ring.
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    disabled: disabled,
    style: {
      font: 'var(--text-body-md)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? '#C73E1D' : 'var(--color-border)'}`,
      background: disabled ? '#F3F1EC' : 'var(--color-surface)',
      color: 'var(--color-text)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--color-accent)';
      e.target.style.boxShadow = '0 0 0 3px rgba(184,128,74,0.25)';
    },
    onBlur: e => {
      e.target.style.borderColor = error ? '#C73E1D' : 'var(--color-border)';
      e.target.style.boxShadow = 'none';
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-sm)',
      color: '#C73E1D'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
// Round radio button — green ring + green dot when selected.
function Radio({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--color-border)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--color-text)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Minimal native select, styled to match Input.
function Select({
  label,
  options = [],
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    style: {
      font: 'var(--text-body-md)',
      padding: '11px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--color-border)',
      background: disabled ? '#F3F1EC' : 'var(--color-surface)',
      color: 'var(--color-text)',
      outline: 'none'
    }
  }, rest), options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value ?? opt,
    value: opt.value ?? opt
  }, opt.label ?? opt))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
// Pill toggle switch — green when on.
function Switch({
  checked,
  onChange,
  disabled = false,
  label,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-primary)' : '#D8D3CA',
      position: 'relative',
      transition: 'background var(--duration-standard) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-standard) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--color-text)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/icon/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Lightweight wrapper around the Lucide outline set (CDN JS bundle, flagged
// substitution — no icon font/sprite was supplied by the source brief).
// Renders via window.lucide.createElement (loaded from the `lucide` UMD bundle,
// see each page's <helmet>/<head>) rather than fetching individual per-icon SVG
// files, which proved unreliable in sandboxed preview contexts.
// A few common Lucide renames, so older/familiar names still resolve.
const ALIASES = {
  home: 'house',
  'message-circle': 'message-circle'
};
function toPascalCase(name) {
  const resolved = ALIASES[name] || name;
  return resolved.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = '';
    const iconDef = window.lucide[toPascalCase(name)];
    if (!iconDef) return;
    const svg = window.lucide.createElement(iconDef);
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('stroke', color);
    svg.style.display = 'block';
    el.appendChild(svg);
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icon/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
// Flat content card — thin warm-gray border, soft shadow, conservative radius.
// Matches the flyer's rectangular photo/content blocks, not a floating app card.
function Card({
  children,
  elevated = false,
  padding = 'var(--space-6)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      border: elevated ? 'none' : '1px solid var(--color-border)',
      boxShadow: elevated ? 'var(--shadow-md)' : 'none',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Dialog.jsx
try { (() => {
// Centered modal dialog — cream/white surface, brown-tinted scrim, no blur (flat brand style).
function Dialog({
  open,
  title,
  onClose,
  children,
  footer
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(43,26,13,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-surface)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width: 'min(480px, 90vw)',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--text-display-md)',
      color: 'var(--color-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--color-text-muted)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-md)',
      color: 'var(--color-text)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 12,
      justifyContent: 'flex-end'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
// Underline-style tab bar — active tab gets a green underline + green label.
function Tabs({
  items = [],
  active,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--color-border)',
      fontFamily: 'var(--font-heading)',
      ...style
    }
  }, items.map(item => {
    const isActive = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      onClick: () => onChange && onChange(item.value),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 2px 12px',
        marginBottom: -1,
        font: 'var(--text-label-md)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
        borderBottom: `2px solid ${isActive ? 'var(--color-primary)' : 'transparent'}`,
        transition: 'color var(--duration-standard) var(--ease-standard)'
      }
    }, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
