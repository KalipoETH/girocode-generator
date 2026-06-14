# GiroCode Generator — Design System

Extrahiert aus den HTML-Referenzdateien `GiroCode Generator.html`, `Blog.html`, `Wissen.html` und den `.cursorrules`.

---

## 1. Farbpalette

### Primärfarben (Grün)
| Token | Hex | Verwendung |
|---|---|---|
| `--ds-green` | `#22c55e` | Buttons, Akzente, Links, Badge-Dots |
| `--ds-green-dark` | `#16a34a` | Hover-Zustand Buttons, aktive Links |
| `--ds-green-tint` | `#f0fdf4` | Hero-Hintergrund, Hover-Flächen, Callout-BG |
| `--ds-green-light` | `#dcfce7` | Badges, Chips, Karten-Icons-BG, Avatar-BG |

### Blau-Akzent (Sekundär)
| Token | Hex | Verwendung |
|---|---|---|
| `--ds-blue` | `#3b82f6` | Sekundäre Aktionen, SVG-Download-Button |
| `--ds-blue-dark` | `#2563eb` | Hover-Zustand blauer Buttons |
| `--ds-blue-tint` | `#eff6ff` | Hintergrund blauer Hover-Flächen |

### Text-Farben (Ink-Skala)
| Token | Hex | Verwendung |
|---|---|---|
| `--ds-ink` | `#0f172a` | Headlines, wichtiger Text, Labels aktiv |
| `--ds-ink-2` | `#334155` | Normaler Fließtext, sekundäre Headlines |
| `--ds-ink-3` | `#64748b` | Beschreibungen, Nav-Links default, Meta |
| `--ds-ink-4` | `#94a3b8` | Placeholder, Captions, Footer-Text |

### Strukturfarben
| Token | Hex | Verwendung |
|---|---|---|
| `--ds-border` | `#e2e8f0` | Alle Rahmen (Karten, Inputs, Footer) |
| `--ds-surface` | `#f8fafc` | Input-BG, Karten-BG, Nav-Link-Hover |
| `--ds-surface-hover` | `#eef1f6` | Input-Hover-Hintergrund |
| `--ds-white` | `#ffffff` | Hintergrund Seiten, QR-Box |

### Spezielle Hintergründe
| Token | Wert | Verwendung |
|---|---|---|
| `--ds-hero-bg` | `linear-gradient(180deg, #edfaf3 0%, #ffffff 58%)` | Hero-Sektion Startseite |
| `--ds-page-hero-bg` | `linear-gradient(180deg, #edfaf3 0%, #ffffff 70–80%)` | Unterseiten Hero |
| `--ds-nav-bg` | `rgba(255,255,255,0.88)` | Sticky Navigation |

---

## 2. Typografie

### Schriftfamilie
- **Primär**: `Manrope` (Google Fonts, weights 400 500 600 700 800)
- **Fallback**: `system-ui, sans-serif`
- **Rendering**: `-webkit-font-smoothing: antialiased`
- CSS-Variable: `--ds-font: 'Manrope', system-ui, sans-serif`

### Größen-Skala

#### Headlines
| Element | Größe | Weight | Letter-Spacing | Line-Height |
|---|---|---|---|---|
| H1 Hero | `clamp(36px, 4.2vw, 54px)` | 800 | `-0.042em` | `1.05` |
| H1 Seite | `clamp(32px, 3.6vw, 46px)` | 800 | `-0.04em` | `1.06` |
| H2 Artikel | `26px` | 800 | `-0.03em` | auto |
| H3 Abschnitt | `19–20px` | 700–800 | `-0.02em` | auto |
| H4 Card-Titel | `17px` | 800 | `-0.02em` | `1.25` |

#### Body
| Typ | Größe | Weight | Line-Height |
|---|---|---|---|
| Lead / Intro | `19px` | 500 | `1.6` |
| Body | `16px` | 500 | `1.7–1.75` |
| Body Small | `14–14.5px` | 500 | `1.6` |
| Body XS | `13–13.5px` | 500 | `1.6` |

#### Interface-Text
| Typ | Größe | Weight | Letter-Spacing |
|---|---|---|---|
| Nav-Links | `14px` | 600 | normal |
| Labels (Uppercase) | `10–10.5px` | 700 | `0.08em` |
| Logo-Name | `17px` | 800 | `-0.03em` |
| Logo-Tag | `9px` | 600 | `0.13em` |
| Button Primary | `13–14px` | 700 | normal |
| Badge | `11.5px` | 700 | `0.04em` |
| Meta / Caption | `12–12.5px` | 600 | normal |
| Footer-Links | `12px` | 600 | normal |
| Footer-Copy | `12px` | 500 | normal |

---

## 3. Spacing-Skala

### Sektionsabstände
| Bereich | Wert |
|---|---|
| Hero padding (Startseite) | `72px 28px 64px` |
| Hero padding (Unterseiten) | `52–56px 28px 36–40px` |
| Content-Wrapper padding | `44–48px 28px 72px` |
| Trust-Bar | `26px 28px` |
| Footer padding | `22px 28px` |
| Layout-Gap (2-Spalten) | `56px` |
| Grid-Gap Blog-Karten | `26px` |

### Innen-Abstände (Karten & Komponenten)
| Komponente | Padding |
|---|---|
| Generator-Card Head | `17px 22px` |
| Generator-Card Form | `22px` |
| Generator-Card QR | `22px 16px` |
| Blog Featured Body | `40px` |
| Blog Card Body | `22px` |
| Newsletter Section | `48px 44px` |
| Callout | `22px 24px` |
| CTA-Box | `34px 36px` |
| Data-Card Row | `12px 20px` |

### Element-Abstände
| Element | Gap / Margin |
|---|---|
| Logo Bild ↔ Wortmarke | `11px` |
| Nav-Links untereinander | `2px` |
| Hero H1 → Beschreibung | `18px` |
| Hero Beschreibung → Checks | `36px` |
| Checks untereinander | `9px` |
| Badge → H1 | `24px` |
| Form-Felder | `13px` |
| Formular-Label → Input | `5px` |

---

## 4. Border-Radius-Skala

| Token | Wert | Verwendung |
|---|---|---|
| `--ds-radius-card` | `22px` | Haupt-Karten, Blog-Featured |
| `--ds-radius-card-sm` | `18px` | Blog-Grid-Karten |
| `--ds-radius-callout` | `16px` | Callouts, Data-Cards, ToC, Side-Cards |
| `--ds-radius-input` | `11px` | Inputs, Standard-Buttons |
| `--ds-radius-btn` | `11–13px` | Buttons (Nav-CTA: 11px, Gen-Button: 13px) |
| `--ds-radius-nav-link` | `9px` | Navigations-Links, Lang-Button |
| `--ds-radius-badge` | `100px` | Badges, Pills, Filter-Chips |
| `--ds-radius-logo` | `44px` (rx) | Logo-SVG Hintergrund |
| `--ds-radius-tag` | `5px` | Data-Table Tags (blau) |

---

## 5. Schatten

| Token | Wert | Verwendung |
|---|---|---|
| `--ds-shadow-card` | `0 2px 4px rgba(0,0,0,.04), 0 20px 56px rgba(0,0,0,.09)` | Haupt-Karten |
| `--ds-shadow-card-hover` | `0 4px 8px rgba(0,0,0,.05), 0 28px 64px rgba(0,0,0,.1)` | Karten-Hover |
| `--ds-shadow-btn-green` | `0 4px 14px rgba(34,197,94,.3)` | Grüner Button Hover |
| `--ds-shadow-btn-blue` | `0 4px 14px rgba(59,130,246,.3)` | Blauer Button Hover |
| `--ds-shadow-float` | `0 8px 24px rgba(0,0,0,.12)` | Float-Cards im Blog-Hero |
| `--ds-shadow-dropdown` | `0 8px 32px rgba(0,0,0,.12)` | Dropdowns |

---

## 6. Komponenten-Stile

### 6.1 Buttons

#### Primary (Grün)
```css
background: #22c55e;
color: white;
border: none;
border-radius: 11px;
padding: 9px 18px;
font: 700 13px 'Manrope';
cursor: pointer;
transition: background .2s, transform .2s, box-shadow .2s;

/* Hover */
background: #16a34a;
transform: translateY(-1px);
box-shadow: 0 4px 14px rgba(34,197,94,.3);

/* Active */
transform: none;
box-shadow: none;
```

#### Generator-Button (groß)
```css
/* Gleich wie Primary, aber größer */
padding: 12px 16px;
border-radius: 13px;
font-size: 14px;
width: 100%;
display: flex; align-items: center; justify-content: center; gap: 8px;
```

#### Secondary / Outline
```css
background: white;
color: #334155;
border: 1.5px solid #e2e8f0;
border-radius: 11px;
padding: 8px 10px;
font: 700 11.5px 'Manrope';
transition: all .2s;

/* Hover (grün) */
border-color: #22c55e;
color: #16a34a;
background: #f0fdf4;
transform: translateY(-1px);

/* Hover (blau) */
border-color: #3b82f6;
color: #2563eb;
background: #eff6ff;
```

### 6.2 Inputs / Formular-Felder

```css
/* Label */
font-size: 10.5px;
font-weight: 700;
letter-spacing: .08em;
text-transform: uppercase;
color: #64748b;

/* Input */
background: #f8fafc;
border: 1.5px solid transparent;
border-radius: 11px;
padding: 10px 13px;
font: 500 14px 'Manrope';
color: #0f172a;
outline: none;
transition: background .18s, border-color .18s, box-shadow .18s;

/* Hover */
background: #eef1f6;

/* Focus */
background: white;
border-color: #22c55e;
box-shadow: 0 0 0 3px rgba(34,197,94,.14);

/* Error */
border-color: #f43f5e;
box-shadow: 0 0 0 3px rgba(244,63,94,.12);
background: white;
```

### 6.3 Karten / Cards

```css
background: white;
border: 1px solid #e2e8f0;
border-radius: 22px;
box-shadow: 0 2px 4px rgba(0,0,0,.04), 0 20px 56px rgba(0,0,0,.09);

/* Hover (Blog-Karte) */
transform: translateY(-3px);   /* Featured */
transform: translateY(-4px);   /* Grid-Card */
border-color: #cbd5e1;
box-shadow: 0 12px 32px rgba(0,0,0,.08);
```

### 6.4 Badges / Pills

```css
display: inline-flex;
align-items: center;
gap: 7px;
background: #dcfce7;
color: #16a34a;
font: 700 11.5px 'Manrope';
letter-spacing: .04em;
padding: 5px 13px 5px 8px;  /* Mit Dot-Icon links */
padding: 5px 13px;           /* Ohne Icon */
border-radius: 100px;
margin-bottom: 18–24px;
```

#### Badge-Dot (animiert)
```css
width: 7px; height: 7px;
background: #22c55e;
border-radius: 50%;
animation: pulse 2s infinite;
```

#### Kategorie-Chips (Blog)
```css
font-size: 11px; font-weight: 700;
letter-spacing: .06em; text-transform: uppercase;
color: #16a34a; background: #dcfce7;
padding: 4px 11px; border-radius: 100px;
```

#### Filter-Chips (Blog)
```css
font-size: 12.5px; font-weight: 700;
color: #64748b; background: white;
border: 1.5px solid #e2e8f0;
padding: 6px 14px; border-radius: 100px;
/* Active */
background: #0f172a; border-color: #0f172a; color: white;
```

### 6.5 Navigation / Header

```css
/* Wrapper */
position: sticky; top: 0; z-index: 100;
background: rgba(255,255,255,.88);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border-bottom: 1px solid #e2e8f0;

/* Inner */
max-width: 1200px; margin: 0 auto;
padding: 0 28px; height: 64px;
display: flex; align-items: center; gap: 6px;

/* Logo Wortmarke */
font-size: 17px; font-weight: 800; letter-spacing: -.03em; color: #0f172a;
/* "Giro" span: */ font-weight: 500;
/* Tagline "Generator": */ font-size: 9px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; color: #94a3b8;

/* Nav-Links */
font-size: 14px; font-weight: 600; color: #64748b;
padding: 7px 12px; border-radius: 9px;
transition: background .15s, color .15s;
/* Hover / Active: */ background: #f8fafc; color: #0f172a;

/* Lang-Button */
font-size: 12px; font-weight: 700; color: #64748b;
background: none; border: none;
padding: 6px 8px; border-radius: 8px;
/* Hover: */ background: #f8fafc; color: #0f172a;

/* CTA-Button */
font-size: 13px; font-weight: 700;
padding: 9px 18px; border-radius: 11px;
background: #22c55e; color: white;
/* Hover: */ background: #16a34a; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(34,197,94,.3);
```

### 6.6 Footer

```css
border-top: 1px solid #e2e8f0;
padding: 22px 28px;

/* Inner: */
max-width: 1200px; margin: 0 auto;
display: flex; align-items: center; justify-content: space-between;
gap: 16px; flex-wrap: wrap;

/* Logo-Brand */
font-size: 13px; font-weight: 700; color: #334155;
/* "Giro" span: */ font-weight: 500;

/* Copyright */
font-size: 12px; color: #94a3b8; font-weight: 500;

/* Links */
font-size: 12px; font-weight: 600; color: #94a3b8;
text-decoration: none;
/* Hover: */ color: #334155;
```

### 6.7 Hero-Sektion (Startseite)

```css
/* Section */
background: linear-gradient(180deg, #edfaf3 0%, #ffffff 58%);
padding: 72px 28px 64px;

/* Inner: 2-Spalten-Grid */
max-width: 1200px; margin: 0 auto;
display: grid; grid-template-columns: 5fr 7fr;
gap: 72px; align-items: center;

/* Trust-Checks */
display: flex; flex-direction: column; gap: 9px;
font-size: 14px; font-weight: 600; color: #334155;
/* Icon: */ width/height: 20px; background: #dcfce7; border-radius: 50%;
```

### 6.8 Statistik-Karten / Data-Cards (Wissen-Seite)

```css
border: 1px solid #e2e8f0;
border-radius: 16px;
overflow: hidden;
margin: 28px 0;

/* Header */
background: #f8fafc;
padding: 13px 20px;
font-size: 13px; font-weight: 700; color: #334155;
border-bottom: 1px solid #e2e8f0;

/* Row */
display: grid; grid-template-columns: 130px 1fr;
gap: 16px; padding: 12px 20px;
border-bottom: 1px solid #f8fafc;

/* Tag (blau) */
font-size: 10px; font-weight: 700;
color: #2563eb; background: #eff6ff;
padding: 2px 7px; border-radius: 5px;
```

### 6.9 Steps (Wissen-Seite)

```css
/* Step-Nummer */
width: 30px; height: 30px; border-radius: 50%;
background: #0f172a; color: white;
font-size: 13px; font-weight: 800;
```

### 6.10 Callout-Box (Wissen-Seite)

```css
background: #f0fdf4;
border: 1px solid #dcfce7;
border-radius: 16px;
padding: 22px 24px;
display: flex; gap: 15px;
margin: 28px 0;

/* Icon */
width: 38px; height: 38px; border-radius: 11px;
background: #dcfce7;

/* Überschrift */
font-size: 14.5px; font-weight: 800; color: #16a34a;
```

### 6.11 Sidebar / TOC (Wissen-Seite)

```css
/* Sidebar sticky */
position: sticky; top: 84px;
display: flex; flex-direction: column; gap: 24px;

/* TOC-Box */
border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px 22px;

/* TOC-Links */
font-size: 13.5px; font-weight: 600; color: #64748b;
padding: 7px 0 7px 14px;
border-left: 2px solid #e2e8f0;
/* Hover / Active: */ color: #16a34a; border-color: #22c55e;

/* Side-Card */
border: 1px solid #e2e8f0; border-radius: 16px; padding: 22px;
background: linear-gradient(160deg, #f0fdf4, #ffffff);
```

### 6.12 Blog-Karten Stil

```css
/* Grid: 3 Spalten */
display: grid; grid-template-columns: repeat(3,1fr); gap: 26px;

/* Karte */
border: 1px solid #e2e8f0; border-radius: 18px;
overflow: hidden; background: white;
transition: transform .25s, box-shadow .25s, border-color .25s;
/* Hover: */ transform: translateY(-4px); border-color: #cbd5e1; box-shadow: 0 12px 32px rgba(0,0,0,.08);

/* Bild-Bereich */
height: 170px;
/* Gradient-Stile: */
.ci-1: linear-gradient(135deg,#dbeafe,#bfdbfe)   /* Blau */
.ci-2: linear-gradient(135deg,#dcfce7,#bbf7d0)   /* Grün */
.ci-3: linear-gradient(135deg,#fef3c7,#fde68a)   /* Gelb */
.ci-4: linear-gradient(135deg,#ede9fe,#ddd6fe)   /* Lila */
.ci-5: linear-gradient(135deg,#fce7f3,#fbcfe8)   /* Pink */
.ci-6: linear-gradient(135deg,#cffafe,#a5f3fc)   /* Cyan */

/* Card-Body */
padding: 22px;
h4: 17px / 800 / tracking -.02em / line-height 1.25
p: 13.5px / 500 / color #64748b / line-height 1.6

/* Card-Footer */
padding-top: 15px; border-top: 1px solid #f8fafc;

/* Avatar */
width: 28px; height: 28px; border-radius: 50%;
background: #dcfce7; color: #16a34a;
font-size: 11px; font-weight: 800;
```

### 6.13 Featured Blog-Karte

```css
/* 2-Spalten: 1.15fr 1fr */
border: 1px solid #e2e8f0; border-radius: 22px; overflow: hidden;
box-shadow: 0 2px 4px rgba(0,0,0,.04), 0 20px 56px rgba(0,0,0,.07);
/* Hover: */ transform: translateY(-3px); box-shadow: 0 4px 8px rgba(0,0,0,.05), 0 28px 64px rgba(0,0,0,.1);

/* Bild-Seite */
background: linear-gradient(135deg,#dcfce7 0%,#bbf7d0 100%);
min-height: 300px;

/* Body-Seite */
padding: 40px;
h2: 28px / 800 / tracking -.03em / line-height 1.15
p: 15px / 500 / color #64748b / line-height 1.65
```

---

## 7. Animationen

```css
/* Nur Micro-Interactions, keine Entrance-Animationen */
transition: .15s–.2s ease  /* Standard */

/* Badge-Dot Pulse */
@keyframes pulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50%      { opacity: .55; transform: scale(.82); }
}

/* Input Error Shake */
@keyframes shake {
  0%,100% { transform: translateX(0); }
  25%      { transform: translateX(-4px); }
  75%      { transform: translateX(4px); }
}

/* IMMER: @media (prefers-reduced-motion: reduce) Guard */
```

---

## 8. Icons

- Stil: Feather-Icons-kompatibel, Inline SVG
- `stroke-width: 2–2.5`
- `stroke-linecap: round; stroke-linejoin: round`
- Kein externes Icon-Framework

---

## 9. Layout-Maximalbreiten

| Bereich | max-width |
|---|---|
| Navigation | `1200px` |
| Hero / Grid-Layouts | `1200px` |
| Seiteninhalte (Text) | `760px` |
| Article-Sidebar-Layout | `1200px` (mit 280px Sidebar) |
| Blog-Wrap | `1200px` |

---

## 10. Responsive Breakpoints

| Breakpoint | Änderungen |
|---|---|
| `≤ 920px` | Grid → 1 Spalte; Blog 2-Spalten; Sidebar horizontal |
| `≤ 880px` | Hero-Grid → 1 Spalte; Nav-Links versteckt |
| `≤ 640px` | Blog → 1 Spalte; Featured stacked |
| `≤ 520px` | Hero padding reduziert; Nav padding 18px |
