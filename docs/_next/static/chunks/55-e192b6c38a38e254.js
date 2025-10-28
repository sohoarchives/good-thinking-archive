"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[55],
	{
		9223: function (e, t, i) {
			i.d(t, {
				E: function () {
					return s;
				},
			});
			var n = i(5893),
				r = i(5675),
				o = i.n(r),
				a = i(8488),
				s = function (e) {
					var t,
						i,
						r = e.borderRadius,
						s = e.fill,
						l = void 0 !== s && s,
						d = e.localMedia,
						c = e.objectFit,
						u = void 0 === c ? "contain" : c,
						h = e.priority,
						p = e.responsive,
						x = void 0 !== p && p,
						m = e.sizes,
						f = e.strapiMedia;
					if (!f && !d)
						throw new Error(
							"At least one of strapiMedia or localMedia must be defined",
						);
					if (
						f &&
						!(null === (t = f.data) || void 0 === t ? void 0 : t.attributes)
					)
						return (
							console.error(
								"No data provided with image media: ".concat(JSON.stringify(f)),
							),
							null
						);
					var g =
							null !==
								(i = null === f || void 0 === f ? void 0 : f.data.attributes) &&
							void 0 !== i
								? i
								: d,
						b = g.url,
						y = g.alternativeText,
						v = g.width,
						j = g.height;
					return (0, n.jsx)(o(), {
						layout: l ? "fill" : x ? "responsive" : "intrinsic",
						width: l ? void 0 : null !== v && void 0 !== v ? v : "100%",
						height: l ? void 0 : null !== j && void 0 !== j ? j : "100%",
						objectFit: u,
						priority: h,
						sizes: m,
						src: f ? (0, a.b)(b) : b,
						alt: y || "",
						style: { borderRadius: null !== r && void 0 !== r ? r : 0 },
						loading: "eager",
					});
				};
		},
		40: function (e, t, i) {
			i.d(t, {
				rU: function () {
					return p;
				},
			});
			var n = i(1799),
				r = i(9396),
				o = i(9534),
				a = i(9815),
				s = i(5893),
				l = i(3795),
				d = i(1664),
				c = i.n(d),
				u = i(7294),
				h = (0, u.forwardRef)(function (e, t) {
					var i = e.as,
						r = e.to,
						a = e.replace,
						l = e.scroll,
						d = e.shallow,
						u = e.prefetch,
						h = e.locale,
						p = (0, o.Z)(e, [
							"as",
							"to",
							"replace",
							"scroll",
							"shallow",
							"prefetch",
							"locale",
						]);
					return (0, s.jsx)(c(), {
						href: r,
						prefetch: u,
						as: i,
						replace: a,
						scroll: l,
						shallow: d,
						passHref: !0,
						locale: h,
						children: (0, s.jsx)("a", (0, n.Z)({ ref: t }, p)),
					});
				}),
				p = (0, u.forwardRef)(function (e, t) {
					var i = e.as,
						d = (e.className, e.href),
						c = e.sx,
						u = e.newTab,
						p = void 0 !== u && u,
						x = (0, o.Z)(e, ["as", "className", "href", "sx", "newTab"]);
					return d
						? (function (e) {
								if ("string" !== typeof e) return !1;
								var t = e.startsWith("/"),
									i = e.startsWith("#"),
									n =
										e.startsWith("https://www.good-thinking.uk") ||
										e.startsWith("good-thinking.uk");
								return !(t || i || n);
							})(d) || p
							? ((x.rel = "noopener"),
								(x.target = "_blank"),
								(0, s.jsx)(
									l.Z,
									(0, r.Z)((0, n.Z)({ href: d, ref: t }, x), { sx: c }),
								))
							: (0, s.jsx)(
									l.Z,
									(0, n.Z)(
										{
											component: h,
											as: i,
											ref: t,
											to: d
												.replace(/^good-thinking\.uk/, "")
												.replace(/^https:\/\/www\.good-thinking.uk/, ""),
											sx: [
												{ cursor: "pointer", textDecoration: "none" },
											].concat((0, a.Z)(Array.isArray(c) ? c : [c])),
										},
										x,
									),
								)
						: null;
				});
		},
		3982: function (e, t, i) {
			i.d(t, {
				I: function () {
					return s;
				},
			});
			var n = i(5893),
				r = i(40),
				o = i(9223),
				a = i(9226),
				s = function (e) {
					var t = e.socials,
						i = e.white,
						s = void 0 !== i && i;
					return (0, n.jsx)(a.Z, {
						sx: { display: "flex" },
						children: t.map(function (e) {
							return (0, n.jsx)(
								r.rU,
								{
									href: e.url,
									mr: 3,
									children: (0, n.jsx)(o.E, {
										localMedia: {
											alternativeText: e.site,
											url: "/images/"
												.concat("twitter" === e.site ? "x" : e.site)
												.concat(
													s
														? "-white.png"
														: "facebook" === e.site || "twitter" === e.site
															? "-black.png"
															: "-black.svg",
												),
											height: 24,
											width: 24,
										},
										sx: {
											"&:hover": { opacity: 0.8, transition: "opacity 0.1s" },
										},
									}),
								},
								e.url,
							);
						}),
					});
				};
		},
		9167: function (e, t, i) {
			i.d(t, {
				L: function () {
					return o;
				},
			});
			var n = i(5893),
				r = i(9226),
				o = function (e) {
					var t = e.doNotPrint,
						i = 3;
					switch (e.size) {
						case "medium":
							i = 2;
							break;
						case "small":
							i = 1;
					}
					return (0, n.jsx)(r.Z, {
						className: t ? "do-not-print" : "",
						sx: {
							height: { xs: 25 * i, lg: 40 * i },
							width: "100%",
							background: "transparent",
						},
					});
				};
		},
		1055: function (e, t, i) {
			i.d(t, {
				L: function () {
					return de;
				},
			});
			var n = i(1799),
				r = i(5893),
				o = i(536),
				a = i.n(o),
				s = i(1927),
				l = i(9226),
				d = i(3156),
				c = i(5861),
				u = i(9223),
				h = i(40),
				p = i(3982),
				x = i(2559),
				m = function (e) {
					var t,
						i = e.bottomLinks,
						n = e.description,
						o = e.logo,
						a = e.linkColumns,
						s = e.socials;
					return (0, r.jsx)(l.Z, {
						className: "do-not-print",
						component: "footer",
						sx: function (e) {
							return {
								background: "#657C52",
								pt: 10,
								"& a:hover > p": {
									color: e.palette.secondary.main,
									filter: "brightness(120%)",
									transition: "color 0.1s",
								},
							};
						},
						children: (0, r.jsxs)(d.Z, {
							children: [
								(0, r.jsxs)(l.Z, {
									sx: {
										display: "flex",
										justifyContent: "space-between",
										pb: { xs: 1, md: 4 },
										flexWrap: { xs: "wrap", md: "no-wrap " },
									},
									children: [
										(0, r.jsxs)(l.Z, {
											sx: {
												width: { xs: "100%", md: 260 },
												mb: { xs: 4, md: 0 },
											},
											children: [
												(0, r.jsx)(l.Z, {
													sx: { width: 150, position: "relative" },
													children: (0, r.jsx)(u.E, { strapiMedia: o }),
												}),
												(0, r.jsx)(c.Z, {
													sx: { color: "white", mt: 1.5 },
													children: n,
												}),
											],
										}),
										(0, r.jsx)(l.Z, {
											sx: {
												display: { xs: "block", md: "flex" },
												justifyContent: "space-between",
												flexWrap: "wrap",
											},
											children: a.map(function (e) {
												return (0, r.jsxs)(
													l.Z,
													{
														sx: {
															ml: { xs: 0, md: 8 },
															maxWidth: { xs: "100%", md: 220 },
														},
														children: [
															(0, r.jsx)(c.Z, {
																sx: { color: "white", mb: 3 },
																variant: "h5",
																component: "div",
																children:
																	null === e || void 0 === e
																		? void 0
																		: e.header,
															}),
															(null !==
																(t =
																	null === e || void 0 === e
																		? void 0
																		: e.links) && void 0 !== t
																? t
																: []
															).map(function (e) {
																return (0, r.jsx)(
																	h.rU,
																	{
																		href: e.url,
																		newTab:
																			null === e || void 0 === e
																				? void 0
																				: e.newTab,
																		sx: {
																			color: "white",
																			mb: 3,
																			display: "block",
																			transition: "color 0.1s",
																			"&:hover": {
																				color: x.dY,
																				transition: "color 0.1s",
																			},
																		},
																		children:
																			null === e || void 0 === e
																				? void 0
																				: e.text,
																	},
																	null === e || void 0 === e ? void 0 : e.url,
																);
															}),
														],
													},
													null === e || void 0 === e ? void 0 : e.header,
												);
											}),
										}),
									],
								}),
								(0, r.jsxs)(l.Z, {
									sx: {
										borderTop: "1px solid #AEC59D",
										py: 4,
										display: { xs: "block", md: "flex" },
										justifyContent: "space-between",
									},
									children: [
										(0, r.jsx)(p.I, { socials: s, white: !0 }),
										(0, r.jsx)(l.Z, {
											sx: { display: { xs: "block", md: "flex" } },
											children: i.map(function (e) {
												return (0, r.jsx)(
													l.Z,
													{
														sx: { ml: { xs: 0, md: 6 }, my: { xs: 2, md: 0 } },
														children: (0, r.jsx)(h.rU, {
															href: e.url,
															newTab: e.newTab,
															sx: {
																color: "white",
																transition: "color 0.1s",
																"&:hover": {
																	color: x.dY,
																	transition: "color 0.1s",
																},
															},
															children: e.text,
														}),
													},
													e.url,
												);
											}),
										}),
									],
								}),
							],
						}),
					});
				},
				f = i(9396),
				g = i(3321),
				b = i(5675),
				y = i.n(b),
				v = i(3946),
				j = i(2806),
				w = i(7294),
				k = i(1163),
				Z = i(9815),
				C = i(4054),
				S = i(7058),
				T = i(7109),
				F = function (e) {
					var t = e.error,
						i = void 0 !== t && t,
						n = e.id,
						o = e.icon,
						a = e.iconAlt,
						s = e.label,
						l = e.onChange,
						d = e.onIconClick,
						c = e.placeholder,
						u = e.required,
						h = void 0 !== u && u,
						p = e.sx,
						x = e.type,
						m = void 0 === x ? "text" : x,
						f = e.value,
						g = e.variant;
					return (0, r.jsxs)(C.Z, {
						variant: "outlined",
						sx: { flexDirection: "row", alignItems: "center" },
						children: [
							(0, r.jsx)(S.Z, {
								error: i,
								id: n,
								type: m,
								value: f,
								onChange: function (e) {
									return l(e.target.value);
								},
								placeholder: c,
								required: h,
								startAdornment: o
									? (0, r.jsx)(T.Z, {
											position: "start",
											children: (0, r.jsx)(v.Z, {
												"aria-label": a,
												onClick: d,
												children: o,
											}),
										})
									: void 0,
								sx: (0, Z.Z)(Array.isArray(p) ? p : [p]).concat([
									{
										background:
											"navbar" === g ? " transparent" : "rgba(255,255,255,0.6)",
										borderRadius: "navbar" === g ? "45px" : "16px",
									},
								]),
							}),
							s &&
								(0, r.jsx)("label", {
									htmlFor: n,
									style: { marginLeft: 12 },
									children: s,
								}),
						],
					});
				},
				z = i(3219),
				B = function (e) {
					return (0, r.jsx)(
						z.Z,
						(0, f.Z)((0, n.Z)({}, e), {
							sx: { width: 14, height: 14 },
							viewBox: "0 0 14 14",
							children: (0, r.jsx)("path", {
								d: "M13.2716 12.1684L10.3313 9.22813C11.0391 8.28573 11.4213 7.13865 11.42 5.96C11.42 2.94938 8.97063 0.5 5.96 0.5C2.94938 0.5 0.5 2.94938 0.5 5.96C0.5 8.97063 2.94938 11.42 5.96 11.42C7.13865 11.4213 8.28573 11.0391 9.22813 10.3313L12.1684 13.2716C12.3173 13.4046 12.5114 13.4756 12.711 13.47C12.9105 13.4645 13.1004 13.3827 13.2415 13.2415C13.3827 13.1004 13.4645 12.9105 13.47 12.711C13.4756 12.5114 13.4046 12.3173 13.2716 12.1684V12.1684ZM2.06 5.96C2.06 5.18865 2.28873 4.43463 2.71727 3.79328C3.14581 3.15192 3.7549 2.65205 4.46754 2.35687C5.18017 2.06169 5.96433 1.98446 6.72085 2.13494C7.47738 2.28542 8.17229 2.65686 8.71772 3.20228C9.26314 3.74771 9.63458 4.44262 9.78506 5.19915C9.93555 5.95567 9.85831 6.73983 9.56313 7.45247C9.26795 8.1651 8.76808 8.77419 8.12673 9.20273C7.48537 9.63127 6.73135 9.86 5.96 9.86C4.92604 9.85876 3.93478 9.44747 3.20365 8.71635C2.47253 7.98522 2.06124 6.99396 2.06 5.96V5.96Z",
								fill: "#2E1108",
							}),
						}),
					);
				},
				R = function (e) {
					return (0, r.jsxs)(
						z.Z,
						(0, f.Z)((0, n.Z)({}, e), {
							style: (0, n.Z)(
								{
									margin: "auto",
									background: "none",
									display: "block",
									shapeRendering: "auto",
								},
								e.style,
							),
							width: "36px",
							height: "36px",
							viewBox: "0 0 100 100",
							preserveAspectRatio: "xMidYMid",
							children: [
								(0, r.jsx)("g", {
									transform: "rotate(0 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.9075907590759075s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(30 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.825082508250825s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(60 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.7425742574257426s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(90 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.6600660066006601s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(120 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.5775577557755776s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(150 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.495049504950495s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(180 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.4125412541254125s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(210 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.33003300330033003s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(240 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.2475247524752475s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(270 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.16501650165016502s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(300 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "-0.08250825082508251s",
											repeatCount: "indefinite",
										}),
									}),
								}),
								(0, r.jsx)("g", {
									transform: "rotate(330 50 50)",
									children: (0, r.jsx)("rect", {
										x: "46",
										y: "4",
										rx: "4",
										ry: "8.8",
										width: "8",
										height: "22",
										fill: "#6c8a54",
										children: (0, r.jsx)("animate", {
											attributeName: "opacity",
											values: "1;0",
											keyTimes: "0;1",
											dur: "0.9900990099009901s",
											begin: "0s",
											repeatCount: "indefinite",
										}),
									}),
								}),
							],
						}),
					);
				},
				E = function (e) {
					var t = e.defaultValue,
						i = e.onComplete,
						n = (0, w.useState)(!1),
						o = n[0],
						a = n[1],
						s = (0, w.useState)(null !== t && void 0 !== t ? t : ""),
						d = s[0],
						c = s[1],
						u = (0, k.useRouter)(),
						h = u.query.query;
					(0, w.useEffect)(
						function () {
							"string" === typeof h && c(h);
						},
						[h],
					);
					var p = function (e) {
						e.preventDefault(),
							o ||
								(a(!0),
								u.push("/search?query=".concat(d)).then(function () {
									a(!1), null === i || void 0 === i || i();
								}));
					};
					return (0, r.jsx)(l.Z, {
						component: "form",
						onSubmit: p,
						children: (0, r.jsx)(F, {
							id: "search-input",
							icon: (0, r.jsx)(l.Z, {
								sx: {
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									width: 20,
									height: 20,
									background: "none",
									padding: 0,
									border: "none",
									minWidth: "auto",
								},
								children: o
									? (0, r.jsx)(R, { style: { height: 20, width: 20 } })
									: (0, r.jsx)(B, {}),
							}),
							onChange: c,
							onIconClick: p,
							iconAlt: "Click to search",
							placeholder: "Search...",
							value: d,
							variant: "navbar",
						}),
					});
				},
				A =
					"undefined" !== typeof navigator &&
					/iPad|iPhone|iPod/.test(navigator.userAgent),
				W = function (e) {
					var t = e.menu,
						i = t.bottomLinks,
						n = t.linkColumns,
						o = e.onClose,
						a = e.socials;
					return (0, r.jsxs)(l.Z, {
						sx: function (e) {
							return {
								padding: 4,
								paddingBottom: 12,
								position: "relative",
								background: e.palette.background.default,
							};
						},
						children: [
							(0, r.jsx)(l.Z, {
								sx: { display: { xs: "none" }, mt: 6 },
								children: (0, r.jsx)(E, { onComplete: o }),
							}),
							(0, r.jsx)(v.Z, {
								onClick: o,
								sx: { position: "absolute", top: 24, right: 24 },
								children: (0, r.jsx)("img", {
									alt: "Close menu",
									src: "/images/close.svg",
								}),
							}),
							n.map(function (e) {
								return (0, r.jsxs)(
									l.Z,
									{
										component: "nav",
										sx: {
											display: { xs: "block", md: "flex" },
											paddingTop: 4,
											mb: 2,
										},
										children: [
											(0, r.jsx)(l.Z, {
												sx: {
													width: { xs: "100%", md: 140 },
													opacity: 0.5,
													mb: { xs: 2, md: 0 },
												},
												children: (0, r.jsx)(c.Z, {
													variant: "h4",
													children: e.header,
												}),
											}),
											(0, r.jsx)(l.Z, {
												sx: { ml: { xs: 0, md: 4 }, mr: { xs: 0, md: 12 } },
												children: e.links.map(function (e) {
													return (0, r.jsx)(
														l.Z,
														{
															mb: 2,
															children: (0, r.jsx)(
																h.rU,
																{
																	href: e.url,
																	newTab: e.newTab,
																	onClick: function () {
																		return o();
																	},
																	sx: function (e) {
																		var t = e.palette;
																		return {
																			opacity: 0.8,
																			color: t.text.secondary,
																			"&:hover": { color: t.primary.main },
																			transition: "color 0.1s",
																		};
																	},
																	children: e.text,
																},
																e.url,
															),
														},
														e.url,
													);
												}),
											}),
										],
									},
									e.header,
								);
							}),
							(0, r.jsxs)(l.Z, {
								component: "nav",
								sx: {
									display: { xs: "block", md: "flex" },
									borderTop: "1px solid rgba(46, 17, 8, 0.1)",
									paddingTop: 4,
									marginTop: 4,
								},
								children: [
									(0, r.jsx)(l.Z, {
										sx: {
											width: { xs: "100%", md: 140 },
											opacity: 0.5,
											mb: { xs: 2, md: 0 },
										},
										children: (0, r.jsx)(c.Z, {
											variant: "h4",
											children: i.header,
										}),
									}),
									i.links.map(function (e) {
										return (0, r.jsx)(
											l.Z,
											{
												sx: { mb: { xs: 2, md: 0 }, ml: { xs: 0, md: 4 } },
												children: (0, r.jsx)(h.rU, {
													href: e.url,
													newTab: e.newTab,
													onClick: function () {
														return o();
													},
													sx: function (e) {
														var t = e.palette;
														return {
															opacity: 0.8,
															color: t.text.secondary,
															"&:hover": { color: t.primary.main },
															transition: "color 0.1s",
														};
													},
													children: e.text,
												}),
											},
											e.url,
										);
									}),
									(0, r.jsx)(l.Z, {
										sx: { mt: { xs: 6, md: 0 }, ml: { xs: 0, md: 10 } },
										children: (0, r.jsx)(p.I, { socials: a }),
									}),
								],
							}),
						],
					});
				},
				D = function (e) {
					var t = e.menu,
						i = e.socials,
						n = (0, w.useState)(!1),
						o = n[0],
						a = n[1],
						s = function () {
							return a(!1);
						};
					return (0, r.jsxs)(r.Fragment, {
						children: [
							(0, r.jsx)(v.Z, {
								onClick: function () {
									return a(!o);
								},
								disableTouchRipple: !0,
								sx: { "&:hover": { background: "none", opacity: 0.6 } },
								children: (0, r.jsx)("img", {
									alt: "Open menu",
									src: "/images/burger.svg",
								}),
							}),
							(0, r.jsx)(j.Z, {
								anchor: "right",
								disableBackdropTransition: !A,
								disableDiscovery: A,
								open: o,
								onClose: s,
								onOpen: function () {
									return a(!0);
								},
								children: (0, r.jsx)(W, { onClose: s, menu: t, socials: i }),
							}),
						],
					});
				},
				H = function (e) {
					var t,
						i,
						o,
						a = e.footer.socials,
						s = e.menu,
						c = e.navbar,
						u = c.button,
						p = c.links,
						x = c.logo;
					(0, k.useRouter)().asPath;
					return (0, r.jsxs)(l.Z, {
						className: "do-not-print",
						sx: { boxShadow: "0px 3px 11px rgba(219, 204, 188, 0.4)" },
						children: [
							(0, r.jsxs)(d.Z, {
								sx: {
									height: { xs: 75, md: 95 },
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								},
								children: [
									(0, r.jsxs)(l.Z, {
										display: "flex",
										alignItems: "center",
										children: [
											(0, r.jsx)(h.rU, {
												href: "/",
												sx: {
													display: "flex",
													alignItems: "center",
													position: "relative",
													width: 108,
													height: 50,
												},
												children: (0, r.jsx)(y(), {
													alt: "Go to homepage",
													layout: "fill",
													src:
														null !==
															(o =
																null === x ||
																void 0 === x ||
																null === (t = x.data) ||
																void 0 === t ||
																null === (i = t.attributes) ||
																void 0 === i
																	? void 0
																	: i.url) && void 0 !== o
															? o
															: "/images/gt-navbar-logo.svg",
												}),
											}),
											(0, r.jsx)(l.Z, {
												ml: 1,
												sx: { display: { xs: "none", md: "block" } },
												children: (null !== p && void 0 !== p ? p : []).map(
													function (e) {
														return (0, r.jsx)(
															h.rU,
															{
																href: e.url,
																newTab: e.newTab,
																sx: function (e) {
																	var t = e.palette;
																	return {
																		ml: { md: 3.5, lg: 5 },
																		opacity: 0.8,
																		color: t.text.secondary,
																		"&:hover": { color: t.primary.main },
																		transition: "color 0.1s",
																	};
																},
																children: e.text,
															},
															e.url,
														);
													},
												),
											}),
										],
									}),
									(0, r.jsxs)(l.Z, {
										sx: { display: "flex" },
										children: [
											u &&
												(0, r.jsx)(
													h.rU,
													(0, f.Z)(
														(0, n.Z)(
															{ href: u.url, sx: { ml: 3 } },
															u.newTab ? { target: "_blank" } : {},
														),
														{
															children: (0, r.jsx)(g.Z, {
																color: "red",
																tabIndex: -1,
																sx: { background: "#D24419" },
																children: u.text,
															}),
														},
													),
												),
											(0, r.jsx)(l.Z, {
												sx: function (e) {
													var t = e.palette;
													return {
														borderRight: "1px solid ".concat(t.border.divider),
														pl: { xs: 3, md: 4 },
														mr: { xs: 2, md: 3 },
													};
												},
											}),
											(0, r.jsx)(D, { menu: s, socials: a }),
										],
									}),
								],
							}),
							(0, r.jsx)(d.Z, {
								sx: {
									display: { xs: "flex", md: "none" },
									justifyContent: "space-around",
									py: 1,
									borderTop: "1px solid rgba(0,0,0,0.07)",
								},
								children: (null !== p && void 0 !== p ? p : []).map(
									function (e) {
										return (0, r.jsx)(
											h.rU,
											{
												href: e.url,
												newTab: e.newTab,
												sx: function (e) {
													return {
														opacity: 0.8,
														color: e.palette.text.secondary,
													};
												},
												children: e.text,
											},
											e.url,
										);
									},
								),
							}),
						],
					});
				},
				M = i(8396),
				I = i(9167),
				L = i(266),
				N = i(4601),
				P = function (e) {
					var t = e.heading,
						i = e.copy,
						n = e.subscribePagePath,
						o = e.whiteAtTop,
						a = void 0 !== o && o,
						s = (0, M.Z)(x.rS.breakpoints.down("md"));
					return (0, r.jsxs)(l.Z, {
						className: "do-not-print",
						sx: function (e) {
							var t = e.palette;
							return {
								background: "linear-gradient(180deg, "
									.concat(a ? "#fff" : t.background.default, " 0%, ")
									.concat(a ? t.background.default : "#fff", " 50%, ")
									.concat(
										a ? t.background.default : "#fff",
										" 90%, rgba(101, 124, 82, 1) 100%)",
									),
								position: "relative",
								marginBottom: "-2px",
							};
						},
						children: [
							(0, r.jsx)(I.L, { size: L.FC.Large }),
							(0, r.jsx)(l.Z, {
								sx: {
									position: "absolute",
									bottom: 0,
									zIndex: 100,
									width: "100%",
									height: 150,
									background:
										"linear-gradient(180deg, rgba(101, 124, 82, 0) 60%, rgba(101, 124, 82, 1) 100%)",
								},
							}),
							(0, r.jsx)(l.Z, {
								sx: {
									display: { xs: "block", lg: "none" },
									mb: 2,
									width: "100%",
									position: "absolute",
									top: "0%",
								},
								children: (0, r.jsx)(y(), {
									alt: "",
									src: "/illustrations/clouds.png",
									width: 1238,
									height: 236,
									layout: "responsive",
									loading: "eager",
								}),
							}),
							(0, r.jsxs)(l.Z, {
								component: "section",
								sx: { position: "relative" },
								children: [
									(0, r.jsx)(l.Z, {
										sx: {
											position: "absolute",
											width: "100%",
											display: { xs: "none", lg: "block" },
										},
										children: (0, r.jsx)(y(), {
											alt: "",
											src: "/illustrations/clouds.png",
											width: 1238,
											height: 236,
											layout: "responsive",
											objectFit: "cover",
											loading: "eager",
										}),
									}),
									(0, r.jsx)(d.Z, {
										sx: {
											margin: "0 auto",
											display: "flex",
											justifyContent: "center",
										},
										children: (0, r.jsxs)(l.Z, {
											sx: {
												width: { xs: "100%", md: "50%" },
												textAlign: "center",
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "center",
											},
											children: [
												(0, r.jsx)(c.Z, {
													variant: "h2",
													sx: { width: 320, mb: 3 },
													children: t || "Subscribe to our newsletter",
												}),
												(0, r.jsx)(l.Z, {
													sx: {
														mb: 6,
														width: "100%",
														display: "flex",
														flexWrap: "wrap",
														justifyContent: "center",
													},
													children: i
														? (0, r.jsx)(N.H, {
																columnWidth: L.ui.Full,
																content: i,
															})
														: (0, r.jsxs)(r.Fragment, {
																children: [
																	(0, r.jsx)(c.Z, {
																		variant: "subtitle1",
																		component: "p",
																		width: "100%",
																		children:
																			"Stay tuned and subscribe to our newsletter.",
																	}),
																	(0, r.jsx)(c.Z, {
																		variant: "subtitle1",
																		component: "p",
																		children:
																			"Get the latest tips and resources for Londoners.",
																	}),
																],
															}),
												}),
												(0, r.jsx)(l.Z, {
													width: "100%",
													children: (0, r.jsx)(h.rU, {
														href: n || "/subscribe",
														children: (0, r.jsx)(g.Z, {
															tabIndex: -1,
															children: "Subscribe",
														}),
													}),
												}),
											],
										}),
									}),
								],
							}),
							(0, r.jsx)(l.Z, {
								position: "relative",
								sx: {
									mt: 6,
									height: { xs: 200, md: "100%" },
									width: "100%",
									position: "relative",
								},
								children: (0, r.jsx)(y(), {
									alt: "",
									src: "/illustrations/people-on-hill.png",
									layout: s ? "fill" : "responsive",
									objectFit: s ? "cover" : "contain",
									width: 1440,
									height: 456,
									loading: "eager",
								}),
							}),
						],
					});
				},
				O = i(9008),
				U = i.n(O),
				G = i(8488),
				_ = i(2962),
				q = i(8377),
				$ = i(7568),
				V = i(4051),
				Y = i.n(V),
				J = i(6355),
				K = i(2938),
				Q = "".concat("", "/graphql"),
				X = function (e) {
					var t = (0, J.Qc)(e),
						i = [],
						r = t.definitions.filter(function (e) {
							if ("FragmentDefinition" !== e.kind) return !0;
							var t = ""
									.concat(e.name.value, "-")
									.concat(e.typeCondition.name.value),
								n = i.includes(t);
							return i.push(t), !n;
						}),
						o = (0, f.Z)((0, n.Z)({}, t), { definitions: r });
					return (0, K.S)(o);
				},
				ee = function (e, t) {
					return fetch(Q, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ query: X(e), variables: t }),
					}).then(function (e) {
						return e.json();
					});
				},
				te = (function () {
					var e = (0, $.Z)(
						Y().mark(function e(t, i) {
							return Y().wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												"\n    mutation submitFeedback($path: String!, $liked: Boolean!) {\n      feedback(path: $path, liked: $liked)\n    }\n  ",
												(e.next = 3),
												ee(
													"\n    mutation submitFeedback($path: String!, $liked: Boolean!) {\n      feedback(path: $path, liked: $liked)\n    }\n  ",
													{ path: t, liked: i },
												)
											);
										case 3:
										case "end":
											return e.stop();
									}
							}, e);
						}),
					);
					return function (t, i) {
						return e.apply(this, arguments);
					};
				})(),
				ie = i(6743),
				ne = {
					opacity: 0.7,
					transition: "opacity 0.2s, background 0.2s",
					background: "#E99456",
					cursor: "pointer",
					height: 38,
					width: 49,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					border: "none",
					borderRadius: 0,
					"&:hover": {
						opacity: 1,
						transition: "opacity 0.2s, background 0.2s",
						background: "#E9863F",
					},
					"&:focus-visible": { border: "3px solid white" },
				},
				re = function () {
					var e = (0, k.useRouter)().asPath,
						t = (0, w.useState)(!1),
						i = t[0],
						o = t[1],
						s = (0, w.useState)(!1),
						l = s[0],
						d = s[1],
						c = (0, w.useState)([]),
						u = c[0],
						h = c[1],
						p = (0, M.Z)(x.rS.breakpoints.down("sm"));
					(0, w.useEffect)(
						function () {
							e && (d(!1), o(!1));
						},
						[e],
					);
					var m = (0, w.useRef)(null),
						g = function (t) {
							return te(e, t).then(function () {
								d(!0),
									setTimeout(function () {
										h(function (t) {
											return (0, Z.Z)(t).concat([e]);
										});
									}, 1500);
							});
						};
					if (u.includes(e)) return null;
					var b = {
						entering: { opacity: 0.2, display: "none" },
						entered: { opacity: 1, display: "block" },
						exiting: { opacity: 0.2, display: "block" },
						exited: { opacity: 0, display: "none" },
					};
					return (0, r.jsxs)(q.Z, {
						sx: {
							position: "fixed",
							right: 40,
							bottom: 40,
							zIndex: 1e4,
							display: "flex",
							height: 38,
						},
						children: [
							(0, r.jsx)(ie.Z, {
								nodeRef: m,
								in: i || l,
								timeout: 100,
								children: function (e) {
									return (0, r.jsx)(q.Z, {
										ref: m,
										sx: (0, n.Z)(
											{
												boxShadow: "1px 6px 12px rgba(138, 104, 86, 0.2)",
												border: "1px solid rgba(229, 128, 55, 0.2)",
												borderBottomLeftRadius: 20,
												borderTopLeftRadius: 20,
												borderRight: "none",
												lineHeight: "".concat(36, "px"),
												background: "white",
												paddingLeft: 4,
												paddingRight: 4,
												position: "relative",
												fontSize: "1rem",
												right: -20,
												transition: "opacity 100ms ease-in-out",
											},
											b[e],
										),
										children: l
											? p
												? "Thank you!"
												: "Thank you for your feedback!"
											: "Was this page helpful?",
									});
								},
							}),
							(0, r.jsxs)(q.Z, {
								sx: {
									boxShadow: "1px 6px 12px rgba(138, 104, 86, 0.2)",
									background: "#E99456",
									border: "1px solid #E99456",
									width: 100,
									height: 38,
									display: "flex",
									alignItems: "center",
									borderRadius: 20,
									zIndex: 2,
								},
								onMouseEnter: function () {
									return o(!0);
								},
								onMouseLeave: function () {
									return o(!1);
								},
								onTouchStart: function () {
									return o(!0);
								},
								onTouchEnd: function () {
									return o(!1);
								},
								children: [
									(0, r.jsx)(v.Z, {
										disableRipple: !0,
										disableTouchRipple: !0,
										onClick: function () {
											return g(!1);
										},
										"aria-label": "Dislike this page",
										sx: (0, f.Z)((0, n.Z)({}, ne), {
											borderBottomLeftRadius: 20,
											borderTopLeftRadius: 20,
										}),
										type: "button",
										children: (0, r.jsx)(q.Z, {
											alt: "",
											component: "img",
											src: "/images/thumbs-down.svg",
											style: { position: "relative", top: 2 },
										}),
									}),
									(0, r.jsx)(q.Z, {
										style: {
											borderLeft: "1px solid white",
											opacity: 0.7,
											height: 20,
											width: 1,
										},
									}),
									(0, r.jsx)(v.Z, {
										disableRipple: !0,
										disableTouchRipple: !0,
										onClick: function () {
											return g(!0);
										},
										"aria-label": "Like this page",
										sx: (0, f.Z)((0, n.Z)({}, ne), {
											borderBottomRightRadius: 20,
											borderTopRightRadius: 20,
										}),
										type: "button",
										children: (0, r.jsx)(q.Z, {
											alt: "",
											component: "img",
											src: "/images/thumbs-up.svg",
											style: { position: "relative", bottom: 1 },
										}),
									}),
								],
							}),
							(0, r.jsx)(a(), {
								id: "dc0ee2e1c96ad8ed",
								children:
									".feedback-tooltip-enter{width:0;opacity:0}.feedback-tooltip-enter-active{width:auto;opacity:1;-webkit-transition:opacity.2s,width.2s;-moz-transition:opacity.2s,width.2s;-o-transition:opacity.2s,width.2s;transition:opacity.2s,width.2s}.feedback-tooltip-exit{width:auto;opacity:1}.feedback-tooltip-exit-active{width:0;opacity:0;-webkit-transition:opacity.2s,width.2s;-moz-transition:opacity.2s,width.2s;-o-transition:opacity.2s,width.2s;transition:opacity.2s,width.2s}",
							}),
						],
					});
				},
				oe = function (e) {
					var t,
						i = e.partners;
					return (0, r.jsx)(l.Z, {
						sx: {
							display: "flex",
							justifyContent: { xs: "center", md: "space-between" },
							flexWrap: { xs: "wrap", md: "no-wrap" },
							alignItems: "center",
							background: "#DB5E38",
							px: { xs: 0, md: 10 },
							py: { xs: 2, md: 4 },
						},
						children: (null !==
							(t = null === i || void 0 === i ? void 0 : i.partners) &&
						void 0 !== t
							? t
							: []
						).map(function (e) {
							var t;
							return (0, r.jsx)(
								h.rU,
								{
									href: e.link,
									sx: {
										width: "auto",
										maxWidth: { xs: "35%", sm: "25%", md: "20%" },
										display: "flex",
										justifyContent: { xs: "center", md: "space-between" },
										alignItems: "center",
										margin: { xs: 2, sm: 4, md: 0 },
										height: 45,
									},
									children: (0, r.jsx)("img", {
										src: (0, G.b)(
											null === (t = e.logo.data) || void 0 === t
												? void 0
												: t.attributes.url,
										),
										alt: e.name,
										style: {
											objectFit: "contain",
											width: "100%",
											height: "100%",
										},
									}),
								},
								e.link,
							);
						}),
					});
				},
				ae = "analytics_cookies",
				se = function () {
					var e = (0, w.useState)(!1),
						t = e[0],
						i = e[1];
					if (
						((0, w.useEffect)(function () {
							-1 === document.cookie.indexOf(ae) && i(!0);
						}, []),
						!t)
					)
						return null;
					var n = function (e) {
						!(function (e) {
							var t = new Date(),
								i = new Date(t.getTime() + 31536e6);
							document.cookie = ""
								.concat(ae, "=")
								.concat(e, ";expires=")
								.concat(i.toUTCString(), ";path=/");
						})(e),
							i(!1);
					};
					return (0, r.jsx)(l.Z, {
						sx: {
							width: "100%",
							paddingY: { xs: 3, md: 5 },
							background: "white",
							borderBottom: "1px solid rgba(0,0,0,0.1)",
							position: "fixed",
							bottom: 0,
							zIndex: 10001,
						},
						children: (0, r.jsxs)(d.Z, {
							children: [
								(0, r.jsx)(c.Z, {
									component: "p",
									variant: "h3",
									mb: { xs: 2, md: 3 },
									mt: 0,
									children: "Cookies on Good Thinking",
								}),
								(0, r.jsx)(c.Z, {
									sx: { fontSize: { xs: 18, md: 20 }, mb: { xs: 2, md: 3 } },
									children:
										"We've put some small files called cookies on your device to make our site work.",
								}),
								(0, r.jsx)(c.Z, {
									sx: { fontSize: { xs: 18, md: 20 }, mb: { xs: 2, md: 3 } },
									children:
										"We'd also like to use analytics cookies. These send information about how our site is used to a service called Google Analytics. We use this information to improve our site.",
								}),
								(0, r.jsxs)(c.Z, {
									mb: 3,
									sx: { fontSize: { xs: 18, md: 20 } },
									children: [
										"Let us know if this is OK. We'll use a cookie to save your choice.",
										" ",
										"You can ",
										(0, r.jsx)(h.rU, {
											href: "/privacy-policy",
											children: "read our privacy policy",
										}),
										" ",
										"before you choose.",
									],
								}),
								(0, r.jsxs)(l.Z, {
									sx: { display: "flex", flexWrap: "wrap" },
									children: [
										(0, r.jsx)(g.Z, {
											sx: {
												mr: { md: 4 },
												mb: { xs: 2, md: 0 },
												px: 4,
												width: { xs: "100%", md: "auto" },
											},
											onClick: function () {
												var e;
												n(!0),
													null === (e = window.dataLayer) ||
														void 0 === e ||
														e.push({ event: "cookies_accepted" });
											},
											id: "cookies-accepted",
											children: "I'm OK with analytics cookies",
										}),
										(0, r.jsx)(g.Z, {
											sx: { px: 4, width: { xs: "100%", md: "auto" } },
											onClick: function () {
												return n(!1);
											},
											id: "cookies-rejected",
											children: "Do not use analytics cookies",
										}),
									],
								}),
							],
						}),
					});
				},
				le = function () {
					return (0, r.jsx)(l.Z, {
						sx: {
							width: "100%",
							pt: 2,
							pb: 2.5,
							background: "white",
							borderBottom: "1px solid rgba(0,0,0,0.1)",
						},
						children: (0, r.jsxs)(d.Z, {
							children: [
								(0, r.jsx)(c.Z, {
									sx: { fontWeight: 600, color: x.iG },
									children: "An important message from Good Thinking",
								}),
								(0, r.jsxs)(c.Z, {
									sx: { fontSize: 15.5, fontWeight: 400, mt: 0.5 },
									children: [
										"To everyone who uses Good Thinking, we regret to inform you that this service will be closing on 31 January 2026. This has been a difficult decision after eight years of supporting Londoners. If you\u2019re struggling with your mental health, you can access our website until January or get help from the NHS and other support organisations. For more information please see",
										" ",
										(0, r.jsx)(h.rU, {
											href: "/good-thinking-closure-faq",
											children: "our FAQs page",
										}),
										".",
									],
								}),
							],
						}),
					});
				},
				de = function (e) {
					e.adminBannerProps;
					var t,
						i,
						o,
						d,
						c,
						u,
						h,
						p = e.children,
						f = e.favicon,
						g = e.footer,
						b = e.globalMetadata,
						y = e.menu,
						v = e.navbar,
						j = e.partners,
						w = e.subscribeFooterText,
						k = e.whiteBody,
						Z = void 0 !== k && k,
						C =
							null === (t = b.image) ||
							void 0 === t ||
							null === (i = t.data) ||
							void 0 === i
								? void 0
								: i.attributes;
					return (0, r.jsxs)(s.Z, {
						theme: x.rS,
						children: [
							(0, r.jsxs)(U(), {
								children: [
									(0, r.jsx)("title", { children: "Good Thinking" }),
									(0, r.jsx)("link", {
										rel: "shortcut icon",
										href: (0, G.b)(
											null === (o = f.data) ||
												void 0 === o ||
												null === (d = o.attributes) ||
												void 0 === d
												? void 0
												: d.url,
										),
									}),
								],
							}),
							(0, r.jsx)(_.lX, {
								dangerouslySetAllPagesToNoIndex: !0,
								dangerouslySetAllPagesToNoFollow: !0,
								titleTemplate: "%s ".concat(b.titleSuffix),
								title: "Page",
								description:
									null !== (c = b.description) && void 0 !== c ? c : void 0,
								openGraph: {
									images: Object.values(
										C
											? null !==
													(u =
														null === C || void 0 === C ? void 0 : C.formats) &&
												void 0 !== u
												? u
												: [C]
											: [],
									).map(function (e) {
										return {
											url: (0, G.b)(e.url),
											width: e.width,
											height: e.height,
										};
									}),
								},
								twitter: {
									cardType: "large",
									handle:
										null !== (h = b.twitterUsername) && void 0 !== h
											? h
											: void 0,
								},
							}),
							(0, r.jsxs)(l.Z, {
								sx: function () {
									return {
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										minHeight: "100vh",
									};
								},
								children: [
									(0, r.jsx)(le, {}),
									(0, r.jsx)(se, {}),
									(0, r.jsx)(H, { footer: g, menu: y, navbar: v }),
									p,
									(0, r.jsx)(P, (0, n.Z)({ whiteAtTop: Z }, w)),
									(0, r.jsx)(m, (0, n.Z)({}, g)),
									(0, r.jsx)(oe, { partners: j }),
									(0, r.jsx)(re, {}),
								],
							}),
							(0, r.jsx)(a(), { id: x.AD.__hash, children: x.AD }),
						],
					});
				};
		},
		4601: function (e, t, i) {
			i.d(t, {
				H: function () {
					return p;
				},
			});
			var n = i(1799),
				r = i(9396),
				o = i(5893),
				a = (i(7294), i(9226)),
				s = i(5935),
				l = i(266),
				d = i(8488),
				c = i(40),
				u = i(5675),
				h = i.n(u),
				p = function (e) {
					var t = e.columnWidth,
						i = e.content,
						u = e.noTopMargin,
						p = void 0 !== u && u,
						x = e.trueFullWidth,
						m = (0, s.ZP)(i, {
							replace: function (e) {
								if ("attribs" in e) {
									if ("img" === e.name) {
										for (var i, u, p = e.parent, x = null, m = 0; m < 3; m++) {
											var f;
											if (
												"p" ===
												(null === (f = p) || void 0 === f ? void 0 : f.name)
											) {
												x = p;
												break;
											}
											if (!p) break;
											p = p.parent;
										}
										var g = (
												null ===
													(i =
														null === x || void 0 === x
															? void 0
															: x.attribs.class) || void 0 === i
													? void 0
													: i.includes("ql-align-center")
											)
												? "center"
												: (
															null ===
																(u =
																	null === x || void 0 === x
																		? void 0
																		: x.attribs.class) || void 0 === u
																? void 0
																: u.includes("ql-align-right")
														)
													? "right"
													: "left",
											b = (0, s.e_)(e.attribs);
										return (0, o.jsx)(a.Z, {
											component: "span",
											display: "block",
											sx: {
												height: {
													xs: "300px",
													md: t === l.ui.Half ? 600 : 400,
												},
												maxWidth: "100%",
												position: "relative",
												width: "100%",
											},
											children: (0, o.jsx)(
												h(),
												(0, r.Z)((0, n.Z)({}, b), {
													src: (0, d.b)(b.src),
													layout: "fill",
													objectPosition: g,
													sizes:
														"(max-width: 599px) 80vw, (max-width: 1199px) 50vw, 600px",
													width: "100%",
												}),
											),
										});
									}
									if ("a" === e.name) {
										var y = (0, s.e_)(e.attribs);
										return (0, o.jsx)(
											c.rU,
											(0, r.Z)((0, n.Z)({}, y), {
												href: y.href,
												rel: void 0,
												target: void 0,
												children: (0, s.du)(e.children),
											}),
										);
									}
									if ("iframe" === e.name) {
										var v,
											j = (0, s.e_)(e.attribs);
										return (0, o.jsx)(a.Z, {
											sx: {
												position: "relative",
												width: "100%",
												paddingTop: (
													null === (v = j.src) || void 0 === v
														? void 0
														: v.includes("soundcloud.com")
												)
													? "30%"
													: "55%",
											},
											children: (0, o.jsx)(
												"iframe",
												(0, r.Z)((0, n.Z)({}, j), {
													style: {
														position: "absolute",
														top: 0,
														left: 0,
														height: "100%",
														width: "100%",
													},
												}),
											),
										});
									}
								}
								return e;
							},
						});
					return (0, o.jsx)(a.Z, {
						sx: {
							width: {
								xs: "100%",
								md: "full" === t ? (x ? "100%" : "75%") : "47%",
							},
							"& > :first-of-type": { mt: p ? 0 : void 0 },
						},
						children: m,
					});
				};
		},
		2559: function (e, t, i) {
			i.d(t, {
				l7: function () {
					return g;
				},
				IC: function () {
					return w;
				},
				AD: function () {
					return I;
				},
				ZE: function () {
					return y;
				},
				LB: function () {
					return b;
				},
				lr: function () {
					return p;
				},
				iG: function () {
					return x;
				},
				dY: function () {
					return f;
				},
				dw: function () {
					return v;
				},
				Od: function () {
					return j;
				},
				rS: function () {
					return D;
				},
			});
			var n = i(1799),
				r = i(9396),
				o = i(828),
				a = i(9815),
				s = i(1265),
				l = {
					defaultProps: {
						variant: "primary",
						color: "green",
						disableRipple: !0,
						disableTouchRipple: !0,
					},
					styleOverrides: {
						root: function (e) {
							var t = e.ownerState,
								i = e.theme,
								o = t.variant,
								a = t.color,
								s = {
									borderRadius: "56px",
									fontFamily: i.typography.body1.fontFamily,
									lineHeight: 1,
									textTransform: "none",
									transition:
										"background 0.1s, backgroundColor 0.1s, borderColor 0.1s, opacity 0.1s",
								},
								l = {
									transition:
										"background 0.1s, backgroundColor 0.1s, borderColor 0.1s, opacity 0.1s",
								},
								d = {},
								c = { color: "transparent" === a ? "black" : "white" };
							return (
								"primary" === o || "outlined" === o
									? (Object.assign(
											s,
											(0, n.Z)(
												{
													color: i.palette.common.white,
													fontSize: "1.2rem",
													padding: "20px 70px",
													"@media (max-width: 899px)": { fontSize: "1rem" },
												},
												a &&
													{
														green: {
															backgroundColor: i.palette.primary.main,
															fontSize: "1.20rem",
															lineHeight: 1,
															"@media (max-width: 599px)": {
																padding: "15px 30px",
																fontSize: "1rem",
															},
														},
														cream: {
															backgroundColor: g,
															color: x,
															fontSize: "1.20rem",
															padding: "20px 70px",
															lineHeight: 1,
															"@media (max-width: 599px)": {
																padding: "15px 30px",
																fontSize: "1rem",
															},
														},
														peach: {
															backgroundColor: w,
															fontSize: "1.20rem",
															padding: "20px 70px",
															lineHeight: 1,
															"@media (max-width: 599px)": {
																padding: "15px 30px",
																fontSize: "1rem",
															},
														},
														orange: {
															backgroundColor: i.palette.secondary.main,
															fontSize: "1.20rem",
															padding: "20px 70px",
															lineHeight: 1,
															"@media (max-width: 599px)": {
																padding: "15px 30px",
																fontSize: "1rem",
															},
														},
														red: {
															backgroundColor: i.palette.red.main,
															fontSize: "1rem",
															padding: "12px 20px",
															"@media (max-width: 599px)": {
																fontSize: "0.875rem",
															},
														},
														transparent: {
															color: i.palette.text.primary,
															backgroundColor: "transparent",
														},
														inherit: {},
													}[a],
											),
										),
										Object.assign(
											l,
											(0, n.Z)(
												{},
												a &&
													{
														green: { backgroundColor: i.palette.primary.light },
														cream: { backgroundColor: g, opacity: "0.8" },
														peach: {
															backgroundColor: i.palette.secondary.dark,
														},
														orange: {
															backgroundColor: i.palette.secondary.light,
														},
														red: { backgroundColor: i.palette.red.light },
														transparent: {
															backgroundColor: i.palette.primary.light,
															color: i.palette.common.white,
															borderColor: i.palette.primary.main,
														},
														inherit: {},
													}[a],
											),
										),
										Object.assign(
											d,
											(0, n.Z)(
												{},
												a &&
													{
														green: { backgroundColor: i.palette.primary.dark },
														cream: { backgroundColor: g, opacity: "0.8" },
														peach: {
															backgroundColor: i.palette.secondary.dark,
														},
														orange: {
															backgroundColor: i.palette.secondary.dark,
														},
														red: { backgroundColor: i.palette.red.dark },
														transparent: {
															backgroundColor: i.palette.primary.main,
															color: i.palette.common.white,
															borderColor: i.palette.primary.main,
														},
														inherit: {},
													}[a],
											),
										))
									: "image" === o &&
										(Object.assign(s, {
											background: "none",
											padding: 0,
											minWidth: "auto",
											opacity: 1,
										}),
										Object.assign(l, { background: "none" }),
										Object.assign(d, {
											outline: "2px solid ".concat(i.palette.primary.main),
										})),
								(0, r.Z)((0, n.Z)({}, s), {
									"&:before": {
										content: '""',
										borderRadius: "inherit",
										position: "absolute",
										width: "100%",
										height: "100%",
										border: "1px solid transparent",
									},
									":hover": l,
									":active": {},
									":focus-visible": d,
									"&.Mui-disabled": c,
								})
							);
						},
					},
				},
				d = {
					styleOverrides: {
						root: function (e) {
							var t,
								i = e.ownerState,
								o = e.theme,
								a = "withBackground" === i.variant,
								s =
									null ===
										(t =
											null === i || void 0 === i ? void 0 : i.control.props) ||
									void 0 === t
										? void 0
										: t.checked,
								l = null === i || void 0 === i ? void 0 : i.disabled,
								d = i.color,
								c = {
									background: a
										? s
											? "orange" === d
												? "#f08d3c"
												: "blue" === d
													? "#6BBAF5"
													: "#587044"
											: "orange" === d
												? "#F2BA6E"
												: "blue" === d
													? "#C2E3FA"
													: "#F5ECD7"
										: "none",
									borderRadius: "16px",
									border: a
										? "1px solid ".concat(
												"orange" === d
													? "#f08d3c"
													: "blue" === d
														? "#6BBAF5"
														: o.palette.border.regular,
											)
										: "none",
									padding: "5px 15px 5px 10px",
									fontSize: "1rem",
									"@media (max-width: 599px)": { fontSize: "1rem" },
									"& svg": { height: "20px", width: "20px" },
									"& .MuiCheckbox-root path": {
										fill: s ? (a ? "white" : o.palette.primary) : "#493930",
										opacity: s ? 1 : 0.1,
									},
									"& > span:not(.MuiRadio-root)": {
										padding: "4px",
										color: s
											? a && !d
												? "white"
												: o.palette.primary
											: o.palette.text.primary,
									},
									"& span.MuiRadio-root": { padding: "9px", left: "-9px" },
									"& span.MuiRadio-root svg": { height: 22, width: 22 },
									"& .Mui-focusVisible": {
										outline: "2px solid ".concat(s ? "white" : "#587044"),
									},
									transition: "background 0.1s",
									"& input:focus": { outline: "3px solid red" },
									marginRight: 0,
									userSelect: "none",
								},
								u = l
									? {}
									: {
											background: s && a ? "#587044" : "#FEF3D7",
											borderColor: s ? "#587044" : "#F5ECD7",
											transition: "background 0.2s, border 0.2s",
										};
							return (
								"orange" === d
									? ((u.background = "#f08d3c"), (u.borderColor = "#f08d3c"))
									: "blue" === d && (u.background = "#6BBAF5"),
								(0, r.Z)((0, n.Z)({}, c), { ":hover": u })
							);
						},
					},
				},
				c = {
					MuiButton: l,
					MuiIconButton: {
						defaultProps: { disableRipple: !0, disableTouchRipple: !0 },
					},
					MuiCheckbox: {
						defaultProps: { disableRipple: !0, disableTouchRipple: !0 },
					},
					MuiRadio: {
						defaultProps: { disableRipple: !0, disableTouchRipple: !0 },
					},
					MuiFormControlLabel: d,
					MuiLink: {
						styleOverrides: {
							root: function (e) {
								e.theme;
								return { textDecoration: "none" };
							},
						},
					},
					MuiOutlinedInput: {
						defaultProps: { notched: !1 },
						styleOverrides: {
							root: function (e) {
								var t = e.theme;
								return {
									padding: t.spacing(1, 1),
									"&:hover": {
										"& .MuiOutlinedInput-notchedOutline": {
											borderColor: t.palette.border.divider,
										},
									},
								};
							},
							input: function (e) {
								e.theme;
								return {
									padding: 0,
									"&:focus-visible": { outline: "none !important" },
								};
							},
							notchedOutline: function (e) {
								return { borderColor: e.theme.palette.border.divider };
							},
						},
					},
					MuiList: {
						styleOverrides: {
							root: function () {
								return {
									padding: 0,
									"& .MuiMenuItem-root": {
										padding: "20px 24px",
										"&:focus-visible": { outline: "none !important" },
									},
								};
							},
						},
					},
				},
				u = "#1E0C06",
				h = "#2E1108",
				p = "#587044",
				x = "#6C8A54",
				m = "#445735",
				f = "#EB895C",
				g = "#F5E8C9",
				b = "#F2BDA6",
				y = "#BFD6BD",
				v = "#C2E3FA",
				j = "#D9D6FA",
				w = "#DB5E38",
				k = ['"Helvetica"', '"Arial"', "sans-serif"],
				Z = ['"Proxima Nova"'].concat((0, a.Z)(k)).join(", "),
				C = ['"Gentona"'].concat((0, a.Z)(k)).join(", "),
				S = ['"GentonaBook"'].concat((0, a.Z)(k)).join(", "),
				T = {
					fontFamily: Z,
					fontWeight: 700,
					color: u,
					fontSize: "4rem",
					lineHeight: 1.2,
					"@media (max-width: 599px)": {
						fontSize: "2.5rem",
						lineHeight: 1.375,
					},
				},
				F = {
					fontFamily: Z,
					fontWeight: 700,
					color: u,
					fontSize: "3.1rem",
					lineHeight: 1.25,
					"@media (max-width: 899px)": { fontSize: "2.5rem", lineHeight: 1.3 },
					"@media (max-width: 599px)": {
						fontSize: "1.87rem",
						lineHeight: 1.33,
					},
				},
				z = {
					fontFamily: Z,
					color: u,
					fontWeight: 700,
					fontSize: "1.875rem",
					lineHeight: 1.33,
					"@media (max-width: 899px)": {
						fontSize: "1.5rem",
						lineHeight: 1.375,
					},
					"@media (max-width: 599px)": { fontSize: "1.25rem", lineHeight: 1.7 },
				},
				B = {
					fontFamily: C,
					fontWeight: 500,
					color: u,
					letterSpacing: 0.2,
					textTransform: "uppercase",
					fontSize: "0.875rem",
					lineHeight: 2,
					"@media (max-width: 899px)": { fontSize: "0.75rem", lineHeight: 2 },
					"@media (max-width: 599px)": { fontSize: "0.7rem", lineHeight: 2.8 },
				},
				R = {
					fontFamily: C,
					fontSize: "1.125rem",
					fontWeight: 600,
					lineHeight: 1.33,
					color: u,
					"@media (max-width: 899px)": { fontSize: "1rem", lineHeight: 1.5 },
					"@media (max-width: 599px)": { fontSize: "1rem", lineHeight: 2 },
				},
				E = {
					fontFamily: S,
					fontWeight: 400,
					fontSize: "1.125rem",
					lineHeight: 1.5,
					color: u,
					"@media (max-width: 899px)": { fontSize: "1rem" },
					"@media (max-width: 599px)": { fontSize: "1rem" },
				},
				A = {
					fontFamily: S,
					fontWeight: 400,
					fontSize: "0.9rem",
					lineHeight: 1.5,
					color: u,
					"@media (max-width: 899px)": { fontSize: "0.8rem" },
					"@media (max-width: 599px)": { fontSize: "0.8rem" },
				},
				W = (0, r.Z)((0, n.Z)({}, E), { opacity: 1 }),
				D = (0, s.Z)({
					components: c,
					palette: {
						primary: { main: p, light: x, dark: m },
						secondary: { main: f, light: "#F28D5F", dark: "#DB7748" },
						red: { main: "#E8643B", light: "#E8643B", dark: "#C25332" },
						background: {
							default: "#FAF5F0",
							tile: { light: "#F9F3E4", default: "#F6EED9", hover: "#F7EAC6" },
						},
						border: { regular: "#F5E6BF", dark: "#E3D2A4", divider: "#D3C5BE" },
						transparent: { main: h },
						text: { primary: u, secondary: h },
					},
					typography: {
						h1: T,
						h2: F,
						h3: z,
						h4: B,
						h5: R,
						body1: E,
						body2: A,
						subtitle1: {
							fontFamily: C,
							fontWeight: 500,
							fontSize: "1.25rem",
							lineHeight: 1.85,
							color: h,
							"@media (max-width: 899px)": {
								fontSize: "1.125rem",
								lineHeight: 1.75,
							},
							"@media (max-width: 599px)": {
								fontSize: "1rem",
								lineHeight: 1.68,
							},
						},
						subtitle2: {
							fontFamily: S,
							fontWeight: 400,
							fontSize: "1.375rem",
							lineHeight: 1.5,
							opacity: 0.8,
							color: h,
						},
						button: {
							fontFamily: S,
							fontWeight: 400,
							fontSize: "1rem",
							color: u,
						},
					},
				}),
				H = function (e, t) {
					var i,
						n = "",
						r = "",
						a = !0,
						s = !1,
						l = void 0;
					try {
						for (
							var d, c = Object.entries(t)[Symbol.iterator]();
							!(a = (d = c.next()).done);
							a = !0
						) {
							var u = (0, o.Z)(d.value, 2),
								h = u[0],
								p = u[1];
							if (h.startsWith("@media"))
								r += "".concat(H("".concat(h, " {\n ").concat(e), p), "}\n\n");
							else {
								var x = Array.isArray(p) ? p.join(", ") : p.toString();
								n += "\n  "
									.concat(
										((i = h),
										i.replace(/[A-Z]/g, function (e) {
											return "-".concat(e.toLowerCase());
										})),
										": ",
									)
									.concat(x, ";");
							}
						}
					} catch (m) {
						(s = !0), (l = m);
					} finally {
						try {
							a || null == c.return || c.return();
						} finally {
							if (s) throw l;
						}
					}
					return "".concat(e, " { ").concat(n, " \n}\n").concat(r);
				},
				M = [
					H("h1", T),
					H("h2", F),
					H("h3", z),
					H("h4", B),
					H("p", E),
					H("body", W),
				],
				I = "\n"
					.concat(
						M.join("\n"),
						'\n  \n  ul li {\n    list-style-position: outside;\n    list-style-image: url("/images/orange-dot.png");\n    padding-left: 15px;\n    margin-bottom: 1rem;\n    opacity: 0.8;\n  }\n  \n  p a, li:not(.MuiBreadcrumbs-li) a {\n    color: ',
					)
					.concat(
						m,
						";\n    font-weight: 600;\n    padding-bottom: 1px;\n    border-bottom: 2px solid ",
					)
					.concat(
						m,
						";\n    transition: all 0.1s;\n  }\n  \n  p a:hover, li:not(.MuiBreadcrumbs-li) a:hover {\n    color: ",
					)
					.concat(f, ";\n    border-color: ")
					.concat(
						f,
						";\n        transition: all 0.1s;\n  }\n  \n  blockquote {\n    margin-left: 0;\n    padding-left: 30px;\n    font-weight: 300;\n    color: #7A706B;\n    border-left: 6px solid #BFD6BD;\n  }\n",
					);
		},
		266: function (e, t, i) {
			var n, r, o, a, s, l, d, c, u, h, p;
			i.d(t, {
				FC: function () {
					return l;
				},
				Pk: function () {
					return c;
				},
				ui: function () {
					return s;
				},
			}),
				(function (e) {
					(e.Advice = "advice"), (e.Blog = "blog"), (e.News = "news");
				})(n || (n = {})),
				(function (e) {
					(e.Audience = "audience"), (e.Topic = "topic");
				})(r || (r = {})),
				(function (e) {
					(e.Facebook = "facebook"),
						(e.Instagram = "instagram"),
						(e.Linkedin = "linkedin"),
						(e.Twitter = "twitter");
				})(o || (o = {})),
				(function (e) {
					(e.Primary = "primary"), (e.Secondary = "secondary");
				})(a || (a = {})),
				(function (e) {
					(e.Full = "full"), (e.Half = "half");
				})(s || (s = {})),
				(function (e) {
					(e.Large = "large"), (e.Medium = "medium"), (e.Small = "small");
				})(l || (l = {})),
				(function (e) {
					(e.Disliked = "disliked"), (e.Liked = "liked");
				})(d || (d = {})),
				(function (e) {
					(e.Cream = "Cream"), (e.Green = "Green"), (e.Peach = "Peach");
				})(c || (c = {})),
				(function (e) {
					(e.Both = "Both"), (e.Bottom = "Bottom"), (e.Top = "Top");
				})(u || (u = {})),
				(function (e) {
					(e.DefaultHreflang = "default_hreflang"), (e.Index = "index");
				})(h || (h = {})),
				(function (e) {
					(e.Live = "LIVE"), (e.Preview = "PREVIEW");
				})(p || (p = {}));
		},
		8488: function (e, t, i) {
			function n(e) {
				return null == e
					? null
					: e.startsWith("http") || e.startsWith("//")
						? e
						: "".concat("/good-thinking-archive/assets").concat(e);
			}
			i.d(t, {
				b: function () {
					return n;
				},
			});
		},
	},
]);
