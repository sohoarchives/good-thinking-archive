(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[139],
	{
		7276: function (e, t, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/[...path]",
				function () {
					return i(530);
				},
			]);
		},
		5714: function (e, t, i) {
			"use strict";
			i.d(t, {
				L: function () {
					return f;
				},
			});
			var n = i(1799),
				r = i(5893),
				a = i(9226),
				o = i(5861),
				s = i(3156),
				l = function (e) {
					var t = e.children,
						i = e.leftWidthPercent,
						n = void 0 === i ? 80 : i;
					return (0, r.jsx)(s.Z, {
						children: (0, r.jsx)(a.Z, {
							sx: {
								"> :first-of-type": {
									maxWidth: { xs: "100%", md: "".concat(n, "%") },
									width: "100%",
								},
								"> :nth-of-type(2)": {
									maxWidth: {
										xs: "100%",
										md: "calc(".concat(100 - n, "% - 80px)"),
									},
								},
								display: "flex",
								flexWrap: { xs: "wrap", md: "no-wrap" },
								justifyContent: "space-between",
							},
							children: t,
						}),
					});
				},
				d = i(9392),
				c = i(3982),
				h = i(5675),
				u = i.n(h),
				p = function (e) {
					var t,
						i,
						n = e.headshot,
						s = e.name,
						l = e.socials,
						d = e.title,
						h =
							null !==
								(i =
									null === n ||
									void 0 === n ||
									null === (t = n.data) ||
									void 0 === t
										? void 0
										: t.attributes) && void 0 !== i
								? i
								: {},
						p = h.url,
						x = h.alternativeText;
					h.width, h.height;
					return (0, r.jsxs)(a.Z, {
						mt: 1,
						sx: { maxWidth: { xs: 220, md: "100%" } },
						children: [
							(null === n || void 0 === n ? void 0 : n.data) &&
								(0, r.jsx)(a.Z, {
									sx: {
										display: "flex",
										justifyContent: "flex-start",
										marginBottom: 2,
										position: "relative",
									},
									children: (0, r.jsx)(u(), {
										layout: "fixed",
										width: 160,
										height: 160,
										objectFit: "cover",
										src: p,
										alt: null !== x && void 0 !== x ? x : "",
										style: { borderRadius: "50%" },
										loading: "eager",
									}),
								}),
							(0, r.jsx)(o.Z, {
								component: "p",
								variant: "subtitle1",
								sx: { lineHeight: 1.3 },
								children: s,
							}),
							d && (0, r.jsx)(o.Z, { mt: 1, children: d }),
							l &&
								l.length > 0 &&
								(0, r.jsx)(a.Z, {
									sx: { mt: { xs: 3, md: 4 } },
									children: (0, r.jsx)(c.I, { socials: l, white: !1 }),
								}),
						],
					});
				},
				x = i(9223),
				m = i(7814),
				f = function (e) {
					var t = e.author,
						i = e.headerImage,
						s = e.subtitle,
						c = e.title,
						h = e.updatedAt,
						u = e.videoUrl;
					return (0, r.jsxs)(a.Z, {
						className: "do-not-print",
						component: "header",
						sx: {
							background: "linear-gradient(180deg, #F9F4EF 20%, #FFFFFF 100%)",
							pb: { xs: 0, md: 2 },
						},
						children: [
							(0, r.jsx)(l, {
								children: h && (0, r.jsx)(d.Y, { updatedAt: h, sx: { mb: 2 } }),
							}),
							(0, r.jsxs)(l, {
								leftWidthPercent:
									(null === i || void 0 === i ? void 0 : i.data) || u
										? 60
										: t
											? 70
											: 80,
								children: [
									(0, r.jsx)(a.Z, {
										children: (0, r.jsxs)(a.Z, {
											children: [
												(0, r.jsx)(o.Z, { variant: "h1", children: c }),
												s &&
													(0, r.jsx)(o.Z, {
														component: "p",
														mt: 4,
														mb: 6,
														variant: "subtitle1",
														children: s,
													}),
											],
										}),
									}),
									(0, r.jsx)(a.Z, {
										sx: {
											maxHeight: t ? {} : { xs: 160, md: 260 },
											height: t ? {} : { xs: 160, md: 260 },
											position: "relative",
											width: "100%",
											display:
												u || (null === i || void 0 === i ? void 0 : i.data) || t
													? "block"
													: "none",
										},
										children: u
											? (0, r.jsx)(m.n, { url: u })
											: (null === i || void 0 === i ? void 0 : i.data)
												? (0, r.jsx)(x.E, {
														strapiMedia: i,
														fill: !0,
														priority: !0,
														sizes:
															"(max-width: 599px) 80vw, (max-width: 1199px) 35vw, 500px",
													})
												: t && (0, r.jsx)(p, (0, n.Z)({}, t)),
									}),
								],
							}),
						],
					});
				};
		},
		9392: function (e, t, i) {
			"use strict";
			i.d(t, {
				Y: function () {
					return s;
				},
			});
			var n = i(9815),
				r = i(5893),
				a = i(5861),
				o = i(1013),
				s = function (e) {
					var t,
						i = e.sx,
						s = e.updatedAt;
					return (0, r.jsx)(a.Z, {
						variant: "h4",
						sx: [{ opacity: 0.6 }].concat((0, n.Z)(Array.isArray(i) ? i : [i])),
						children:
							((t = s),
							"LAST REVIEWED ".concat((0, o.Z)(new Date(t), "d MMMM y"))),
					});
				};
		},
		7814: function (e, t, i) {
			"use strict";
			i.d(t, {
				n: function () {
					return l;
				},
			});
			var n = i(5893),
				r = i(9226),
				a = i(5861),
				o = function (e) {
					return (0, n.jsx)(r.Z, {
						paddingTop: "55%",
						position: "relative",
						children: (0, n.jsx)("iframe", {
							title: "Vimeo video player",
							src: "https://player.vimeo.com/video/".concat(e),
							style: {
								width: "100%",
								height: "100%",
								position: "absolute",
								top: 0,
								left: 0,
							},
							frameBorder: "0",
							allowFullScreen: !0,
						}),
					});
				},
				s = function (e) {
					return (0, n.jsx)(r.Z, {
						paddingTop: "55%",
						position: "relative",
						children: (0, n.jsx)("iframe", {
							style: {
								width: "100%",
								height: "100%",
								position: "absolute",
								top: 0,
								left: 0,
							},
							src: "https://www.youtube.com/embed/".concat(e),
							title: "YouTube video player",
							frameBorder: "0",
							allowFullScreen: !0,
							allow:
								"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						}),
					});
				},
				l = function (e) {
					var t = e.url;
					e: if (t.includes("vimeo")) {
						var i = t.split("/").pop();
						if (!i) break e;
						return (0, n.jsx)(r.Z, { children: o(i) });
					}
					e: if (t.includes("youtube")) {
						var l,
							d =
								null ===
									(l = t.includes("embed")
										? t.match(/(?:embed\/)(.*?)(?=&|\/|$)/)
										: t.match(/(?:v=)(.*?)(?=&|\/|$)/)) || void 0 === l
									? void 0
									: l[1];
						if (!d) break e;
						return (0, n.jsx)(r.Z, { children: s(d) });
					}
					return (0, n.jsxs)(a.Z, {
						children: [
							"Video url ",
							t,
							" not implemented. Please ask for technical help.",
						],
					});
				};
		},
		3043: function (e, t, i) {
			"use strict";
			i.d(t, {
				m: function () {
					return d;
				},
			});
			var n = i(5893),
				r = i(9226),
				a = i(3946),
				o = i(40),
				s = i(1163),
				l = i(7294),
				d = function (e) {
					var t = (0, s.useRouter)().asPath,
						i = "https://www.good-thinking.uk".concat(t),
						d = (0, l.useState)(!1),
						c = d[0],
						h = d[1],
						u = e.title,
						p = e.description,
						x = "".concat(u, " | Good Thinking");
					return (0, n.jsxs)(r.Z, {
						className: "do-not-print",
						sx: {
							display: "inline-flex",
							alignItems: "center",
							width: "auto",
							"& img": { height: "20px", verticalAlign: "middle" },
							"& a:hover, button:hover": {
								opacity: { xs: 0.6, md: 1 },
								transition: "opacity 0.2s",
							},
							"& a": {
								opacity: 0.6,
								transition: "opacity 0.2s",
								height: "38px",
								padding: "4px 12px",
							},
							mb: 1,
							px: 0.5,
							position: "relative",
							background: "#F9F3E4",
							borderRadius: "10px",
							border: "1px solid #E3D2A4",
						},
						children: [
							(0, n.jsx)(a.Z, {
								sx: {
									opacity: 0.6,
									transition: "opacity 0.2s",
									width: "2rem",
									padding: "4px 12px",
								},
								onClick: function () {
									return h(!c);
								},
								"aria-controls": "share-controls",
								"aria-expanded": c,
								children: (0, n.jsx)("img", {
									alt: "Share this page",
									src: "/good-thinking-archive/assets/images/share.svg",
									style: { height: 17 },
								}),
							}),
							(0, n.jsxs)(r.Z, {
								id: "share-controls",
								sx: {
									display: "flex",
									alignItems: "center",
									position: "relative",
									width: c ? "100%" : 0,
									overflow: "hidden",
									transition: "0.2s width ease",
									borderRadius: 16,
								},
								children: [
									(0, n.jsx)(o.rU, {
										href: "https://www.facebook.com/sharer/sharer.php?u=".concat(
											i,
										),
										rel: "noreferer noopener",
										target: "_blank",
										title: "Share to Facebook",
										style: { paddingLeft: "16px" },
										tabIndex: c ? 0 : -1,
										children: (0, n.jsx)("img", {
											src: "/good-thinking-archive/assets/images/facebook-black.png",
											alt: "Share to Facebook",
										}),
									}),
									(0, n.jsx)(o.rU, {
										href: "https://wa.me/?text=".concat(p, "\n").concat(i),
										rel: "noreferer noopener",
										target: "_blank",
										title: "Share to WhatsApp",
										tabIndex: c ? 0 : -1,
										children: (0, n.jsx)("img", {
											src: "/good-thinking-archive/assets/images/whatsapp-black.svg",
											alt: "Share to WhatsApp",
											style: { height: 22 },
										}),
									}),
									(0, n.jsx)(o.rU, {
										href: "https://twitter.com/intent/tweet?text=".concat(
											encodeURIComponent("".concat(p, "\n").concat(i)),
										),
										rel: "noreferer noopener",
										target: "_blank",
										title: "Share to Twitter",
										tabIndex: c ? 0 : -1,
										children: (0, n.jsx)("img", {
											src: "/good-thinking-archive/assets/images/x-black.png",
											alt: "Share to Twitter",
										}),
									}),
									(0, n.jsx)(o.rU, {
										href: "https://www.linkedin.com/shareArticle?mini=true&url="
											.concat(i, "&title=")
											.concat(x, "&summary=")
											.concat(p),
										rel: "noreferer noopener",
										target: "_blank",
										title: "Share to LinkedIn",
										tabIndex: c ? 0 : -1,
										children: (0, n.jsx)("img", {
											src: "/good-thinking-archive/assets/images/linkedin-black.svg",
											alt: "Share to LinkedIn",
										}),
									}),
									(0, n.jsx)(o.rU, {
										href: "mailto:?subject="
											.concat(x, "&body=")
											.concat(p, "\n")
											.concat(i),
										rel: "noreferer noopener",
										target: "_blank",
										title: "Share via email",
										tabIndex: c ? 0 : -1,
										children: (0, n.jsx)("img", {
											src: "/good-thinking-archive/assets/images/email-black.png",
											alt: "Share via email",
										}),
									}),
								],
							}),
						],
					});
				};
		},
		530: function (e, t, i) {
			"use strict";
			i.r(t),
				i.d(t, {
					__N_SSG: function () {
						return g;
					},
					customPageTextWidth: function () {
						return v;
					},
				});
			var n = i(1799),
				r = i(9396),
				a = i(5893),
				o = i(1610),
				s = i(1163),
				l = i(1055),
				d = i(6011),
				c = i(9226),
				h = i(3156),
				u = i(5714),
				p = i(266),
				x = i(9167),
				m = i(718),
				f = i(3043),
				g = !0,
				v = "95%";
			t.default = function (e) {
				var t,
					i = e.id,
					g = e.global,
					v = e.howToUse,
					b = e.pageData,
					j = e.preview,
					w = (0, s.useRouter)(),
					y = b.author,
					k = b.breadcrumbs,
					Z = b.metadata,
					_ = b.headerImage,
					F = b.contentSections,
					S = b.subtitle,
					I = b.title,
					A = b.updatedAt;
				if (w.isFallback)
					return (0, a.jsx)("div", {
						className: "container",
						children: "Loading...",
					});
				var T,
					E,
					N = null !== (t = Z.description) && void 0 !== t ? t : S,
					W = null !== (T = Z.image) && void 0 !== T ? T : _,
					L = null !== (E = Z.title) && void 0 !== E ? E : I;
				return (0, a.jsxs)(
					l.L,
					(0, r.Z)((0, n.Z)({}, g), {
						whiteBody: !0,
						adminBannerProps: {
							resourceType: "page",
							resourceId: i,
							updatedAt: A,
						},
						children: [
							(0, a.jsx)(o.Z, {
								description: N,
								image: W,
								title: L,
								noIndex: j,
							}),
							(0, a.jsx)(m.D, { breadcrumbs: k }),
							(0, a.jsx)(x.L, { doNotPrint: !0, size: p.FC.Medium }),
							(0, a.jsx)(u.L, {
								author: y,
								headerImage: _,
								subtitle: S,
								title: I,
								updatedAt: A,
							}),
							(0, a.jsx)(c.Z, {
								sx: { background: "white", pt: { xs: 4, md: 4 } },
								children: (0, a.jsxs)(h.Z, {
									children: [
										(0, a.jsx)(f.m, { description: N, title: L }),
										(0, a.jsx)(c.Z, {
											children: (0, a.jsx)(d.Y, {
												global: g,
												howToUse: v,
												sections: F,
											}),
										}),
									],
								}),
							}),
						],
					}),
				);
			};
		},
	},
	function (e) {
		e.O(0, [231, 118, 611, 638, 55, 931, 774, 888, 179], function () {
			return (t = 7276), e((e.s = t));
			var t;
		});
		var t = e.O();
		_N_E = t;
	},
]);
