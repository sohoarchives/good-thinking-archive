(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[467],
	{
		3773: function (e, t, i) {
			(window.__NEXT_P = window.__NEXT_P || []).push([
				"/latest/[filter]",
				function () {
					return i(5900);
				},
			]);
		},
		5714: function (e, t, i) {
			"use strict";
			i.d(t, {
				L: function () {
					return v;
				},
			});
			var n = i(1799),
				r = i(5893),
				s = i(9226),
				l = i(5861),
				o = i(3156),
				a = function (e) {
					var t = e.children,
						i = e.leftWidthPercent,
						n = void 0 === i ? 80 : i;
					return (0, r.jsx)(o.Z, {
						children: (0, r.jsx)(s.Z, {
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
				u = i(5675),
				h = i.n(u),
				x = function (e) {
					var t,
						i,
						n = e.headshot,
						o = e.name,
						a = e.socials,
						d = e.title,
						u =
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
						x = u.url,
						p = u.alternativeText;
					u.width, u.height;
					return (0, r.jsxs)(s.Z, {
						mt: 1,
						sx: { maxWidth: { xs: 220, md: "100%" } },
						children: [
							(null === n || void 0 === n ? void 0 : n.data) &&
								(0, r.jsx)(s.Z, {
									sx: {
										display: "flex",
										justifyContent: "flex-start",
										marginBottom: 2,
										position: "relative",
									},
									children: (0, r.jsx)(h(), {
										layout: "fixed",
										width: 160,
										height: 160,
										objectFit: "cover",
										src: x,
										alt: null !== p && void 0 !== p ? p : "",
										style: { borderRadius: "50%" },
										loading: "eager",
									}),
								}),
							(0, r.jsx)(l.Z, {
								component: "p",
								variant: "subtitle1",
								sx: { lineHeight: 1.3 },
								children: o,
							}),
							d && (0, r.jsx)(l.Z, { mt: 1, children: d }),
							a &&
								a.length > 0 &&
								(0, r.jsx)(s.Z, {
									sx: { mt: { xs: 3, md: 4 } },
									children: (0, r.jsx)(c.I, { socials: a, white: !1 }),
								}),
						],
					});
				},
				p = i(9223),
				m = i(7814),
				v = function (e) {
					var t = e.author,
						i = e.headerImage,
						o = e.subtitle,
						c = e.title,
						u = e.updatedAt,
						h = e.videoUrl;
					return (0, r.jsxs)(s.Z, {
						className: "do-not-print",
						component: "header",
						sx: {
							background: "linear-gradient(180deg, #F9F4EF 20%, #FFFFFF 100%)",
							pb: { xs: 0, md: 2 },
						},
						children: [
							(0, r.jsx)(a, {
								children: u && (0, r.jsx)(d.Y, { updatedAt: u, sx: { mb: 2 } }),
							}),
							(0, r.jsxs)(a, {
								leftWidthPercent:
									(null === i || void 0 === i ? void 0 : i.data) || h
										? 60
										: t
											? 70
											: 80,
								children: [
									(0, r.jsx)(s.Z, {
										children: (0, r.jsxs)(s.Z, {
											children: [
												(0, r.jsx)(l.Z, { variant: "h1", children: c }),
												o &&
													(0, r.jsx)(l.Z, {
														component: "p",
														mt: 4,
														mb: 6,
														variant: "subtitle1",
														children: o,
													}),
											],
										}),
									}),
									(0, r.jsx)(s.Z, {
										sx: {
											maxHeight: t ? {} : { xs: 160, md: 260 },
											height: t ? {} : { xs: 160, md: 260 },
											position: "relative",
											width: "100%",
											display:
												h || (null === i || void 0 === i ? void 0 : i.data) || t
													? "block"
													: "none",
										},
										children: h
											? (0, r.jsx)(m.n, { url: h })
											: (null === i || void 0 === i ? void 0 : i.data)
												? (0, r.jsx)(p.E, {
														strapiMedia: i,
														fill: !0,
														priority: !0,
														sizes:
															"(max-width: 599px) 80vw, (max-width: 1199px) 35vw, 500px",
													})
												: t && (0, r.jsx)(x, (0, n.Z)({}, t)),
									}),
								],
							}),
						],
					});
				};
		},
		1610: function (e, t, i) {
			"use strict";
			var n = i(1799),
				r = i(5893),
				s = i(2962),
				l = i(8488);
			t.Z = function (e) {
				var t,
					i = e.description,
					o = e.image,
					a = e.noIndex,
					d = void 0 !== a && a,
					c = e.title,
					u =
						null === o || void 0 === o || null === (t = o.data) || void 0 === t
							? void 0
							: t.attributes;
				return (0, r.jsx)(s.PB, {
					title: c,
					description: i,
					noindex: d,
					openGraph: (0, n.Z)(
						{ title: c, description: i },
						u && {
							images: (u.formats ? Object.values(u.formats) : [u]).map(
								function (e) {
									return {
										url: (0, l.b)(u.url),
										width: e.width,
										height: e.height,
									};
								},
							),
						},
					),
				});
			};
		},
		9392: function (e, t, i) {
			"use strict";
			i.d(t, {
				Y: function () {
					return o;
				},
			});
			var n = i(9815),
				r = i(5893),
				s = i(5861),
				l = i(1013),
				o = function (e) {
					var t,
						i = e.sx,
						o = e.updatedAt;
					return (0, r.jsx)(s.Z, {
						variant: "h4",
						sx: [{ opacity: 0.6 }].concat((0, n.Z)(Array.isArray(i) ? i : [i])),
						children:
							((t = o),
							"LAST REVIEWED ".concat((0, l.Z)(new Date(t), "d MMMM y"))),
					});
				};
		},
		7814: function (e, t, i) {
			"use strict";
			i.d(t, {
				n: function () {
					return a;
				},
			});
			var n = i(5893),
				r = i(9226),
				s = i(5861),
				l = function (e) {
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
				o = function (e) {
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
				a = function (e) {
					var t = e.url;
					e: if (t.includes("vimeo")) {
						var i = t.split("/").pop();
						if (!i) break e;
						return (0, n.jsx)(r.Z, { children: l(i) });
					}
					e: if (t.includes("youtube")) {
						var a,
							d =
								null ===
									(a = t.includes("embed")
										? t.match(/(?:embed\/)(.*?)(?=&|\/|$)/)
										: t.match(/(?:v=)(.*?)(?=&|\/|$)/)) || void 0 === a
									? void 0
									: a[1];
						if (!d) break e;
						return (0, n.jsx)(r.Z, { children: o(d) });
					}
					return (0, n.jsxs)(s.Z, {
						children: [
							"Video url ",
							t,
							" not implemented. Please ask for technical help.",
						],
					});
				};
		},
		7148: function (e, t, i) {
			"use strict";
			i.d(t, {
				X: function () {
					return a;
				},
			});
			var n = i(1799),
				r = i(9396),
				s = i(9534),
				l = i(5893),
				o = i(3219),
				a = function (e) {
					var t,
						i,
						a,
						d,
						c = e.chevronColor,
						u = (0, s.Z)(e, ["chevronColor"]);
					return (0, l.jsx)(
						o.Z,
						(0, r.Z)((0, n.Z)({}, u), {
							fill: "none",
							sx: {
								width: null !== (t = u.width) && void 0 !== t ? t : 6,
								height: null !== (i = u.height) && void 0 !== i ? i : 11,
							},
							viewBox: "0 0 "
								.concat(null !== (a = u.width) && void 0 !== a ? a : 6, " ")
								.concat(null !== (d = u.height) && void 0 !== d ? d : 11),
							children: (0, l.jsx)("path", {
								d: "M1 1L4.54986 4.99359C4.80657 5.2824 4.80657 5.7176 4.54986 6.00641L1 10",
								fill: "none",
								stroke: null !== c && void 0 !== c ? c : "#587044",
								strokeWidth: "1.8",
								strokeLinecap: "round",
							}),
						}),
					);
				};
		},
		718: function (e, t, i) {
			"use strict";
			i.d(t, {
				D: function () {
					return v;
				},
			});
			var n = i(5893),
				r = i(9226),
				s = i(3156),
				l = i(5861),
				o = i(5675),
				a = i.n(o),
				d = i(2963),
				c = i(40),
				u = i(7148),
				h = i(9008),
				x = i.n(h),
				p = function (e) {
					var t = {
						"@context": "https://schema.org",
						"@type": "BreadcrumbList",
						itemListElement: e.map(function (e, t) {
							return {
								"@type": "ListItem",
								position: t + 1,
								item: "https://www.good-thinking.uk/".concat(e.path),
								name: e.title,
							};
						}),
					};
					return JSON.stringify(t, void 0, 2);
				},
				m = function (e) {
					var t = e.breadcrumbs,
						i = void 0 === t ? [] : t;
					return (0, n.jsxs)(n.Fragment, {
						children: [
							(0, n.jsx)(x(), {
								children: (0, n.jsx)("script", {
									type: "application/ld+json",
									dangerouslySetInnerHTML: { __html: p(i) },
								}),
							}),
							(0, n.jsxs)(d.Z, {
								separator: (0, n.jsx)(r.Z, {
									sx: { mb: { xs: 0.2, md: 0 } },
									children: (0, n.jsx)(u.X, { chevronColor: "black" }),
								}),
								"aria-label": "breadcrumbs",
								children: [
									(0, n.jsx)(c.rU, {
										href: "/",
										sx: {
											display: "flex",
											alignItems: "center",
											mb: { xs: 0.5, md: 0 },
										},
										children: (0, n.jsx)("img", {
											alt: "Homepage",
											src: "/good-thinking-archive/assets/images/home.svg",
											width: 14,
											height: 14,
										}),
									}),
									i.map(function (e, t) {
										var i = e.path,
											s = (e.slug, e.title);
										return (0, n.jsx)(
											r.Z,
											{
												sx: { mb: { xs: 0.5, md: 0 } },
												children: (0, n.jsx)(
													c.rU,
													{
														href: "/".concat(i),
														sx: function (e) {
															var t = e.palette;
															return {
																color: t.text.secondary,
																"&:hover": { color: t.primary.main },
																transition: "color 0.1s",
																fontSize: { xs: "0.85rem", md: "1.1rem" },
															};
														},
														children: s,
													},
													i,
												),
											},
											i,
										);
									}),
								],
							}),
						],
					});
				},
				v = function (e) {
					var t = e.breadcrumbs,
						i = void 0 === t ? [] : t,
						o = e.hideBreadcrumbs,
						d = void 0 !== o && o;
					return (0, n.jsxs)(r.Z, {
						position: "relative",
						overflow: "hidden",
						mb: 2,
						children: [
							i.length < 2 &&
								(0, n.jsxs)(n.Fragment, {
									children: [
										(0, n.jsx)(r.Z, {
											sx: {
												position: "absolute",
												left: "calc(50% - 90px)",
												top: -15,
												width: 180,
												height: 100,
												zIndex: -1,
												display: { xs: "none", md: "block" },
											},
											children: (0, n.jsx)(a(), {
												alt: "",
												layout: "fill",
												src: "/good-thinking-archive/assets/images/triangle-blue.png",
											}),
										}),
										(0, n.jsx)(r.Z, {
											sx: {
												position: "absolute",
												left: "calc(50% - 155px)",
												top: -15,
												width: 75,
												height: 46,
												zIndex: -1,
												display: { xs: "none", md: "block" },
											},
											children: (0, n.jsx)(a(), {
												alt: "",
												layout: "fill",
												src: "/good-thinking-archive/assets/images/triangle-purple.png",
											}),
										}),
									],
								}),
							(0, n.jsx)(r.Z, {
								sx: {
									position: "absolute",
									width: 180,
									height: 100,
									rotate: "135deg",
									top: -30,
									left: -90,
									zIndex: -1,
									display: d ? { xs: "none", md: "block" } : "none",
								},
								children: (0, n.jsx)(a(), {
									alt: "",
									layout: "fill",
									src: "/good-thinking-archive/assets/images/triangle-green.png",
								}),
							}),
							(0, n.jsxs)(s.Z, {
								className: "do-not-print",
								sx: {
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									my: 4,
								},
								children: [
									d ? (0, n.jsx)(r.Z, {}) : (0, n.jsx)(m, { breadcrumbs: i }),
									(0, n.jsxs)(r.Z, {
										sx: { display: { xs: d ? "flex" : "none", md: "flex" } },
										children: [
											(0, n.jsx)(l.Z, {
												sx: { color: "#635E5D", fontSize: "0.875rem", mr: 1 },
												children: "Approved by",
											}),
											(0, n.jsx)(a(), {
												alt: "NHS logo",
												src: "/good-thinking-archive/assets/images/nhs.svg",
												width: 45,
												height: 18,
											}),
										],
									}),
								],
							}),
						],
					});
				};
		},
		5900: function (e, t, i) {
			"use strict";
			i.r(t),
				i.d(t, {
					__N_SSG: function () {
						return b;
					},
				});
			var n = i(1799),
				r = i(9396),
				s = i(5893),
				l = i(1610),
				o = i(1163),
				a = i(1055),
				d = i(9226),
				c = i(3156),
				u = i(3321),
				h = i(5861),
				x = i(266),
				p = i(9167),
				m = i(718),
				v = i(5714),
				f = i(9392),
				j = i(1664),
				g = i.n(j),
				b = !0;
			t.default = function (e) {
				var t = e.global,
					i = e.latestData,
					j = (0, o.useRouter)(),
					b = j.query.filter,
					w = i.metadata,
					y = i.results,
					Z = i.subtitle,
					k = i.title,
					_ = i.updatedAt;
				if (j.isFallback)
					return (0, s.jsx)(s.Fragment, { children: "Loading..." });
				var F = null === w || void 0 === w ? void 0 : w.description,
					A = null === w || void 0 === w ? void 0 : w.image,
					L = null === w || void 0 === w ? void 0 : w.title;
				return (0, s.jsxs)(
					a.L,
					(0, r.Z)((0, n.Z)({}, t), {
						whiteBody: !0,
						adminBannerProps: {
							resourceType: "latest",
							single: !0,
							updatedAt: _,
						},
						children: [
							(0, s.jsx)(l.Z, { description: F, image: A, title: L }),
							(0, s.jsx)(m.D, {
								breadcrumbs: [
									{
										id: "latest",
										path: "latest",
										slug: "latest",
										title: "Latest",
									},
								],
							}),
							(0, s.jsx)(p.L, { size: x.FC.Medium }),
							(0, s.jsx)(v.L, { subtitle: Z, title: k }),
							(0, s.jsx)(d.Z, {
								sx: { background: "white" },
								children: (0, s.jsxs)(c.Z, {
									children: [
										(0, s.jsx)(d.Z, {
											sx: {
												display: "flex",
												mb: 10,
												flexWrap: { xs: "wrap", md: "no-wrap" },
												justifyContent: {
													xs: "space-between",
													md: "flex-start",
												},
											},
											children: [
												{ title: "All", slug: "all" },
												{ title: "News", slug: "news" },
												{ title: "Advice", slug: "advice" },
												{ title: "Blogs", slug: "blog" },
											].map(function (e) {
												return (0, s.jsx)(
													d.Z,
													{
														sx: {
															"&:not(:first-of-type)": { ml: { xs: 0, md: 2 } },
														},
														children: (0, s.jsx)(g(), {
															href: "/latest/".concat(e.slug),
															scroll: !1,
															children: (0, s.jsx)("a", {
																children: (0, s.jsx)(u.Z, {
																	color: "transparent",
																	sx: function (t) {
																		var i = t.palette;
																		return (0, r.Z)(
																			(0, n.Z)(
																				{},
																				b === e.slug
																					? {
																							color: i.common.white,
																							backgroundColor: i.primary.main,
																							borderColor: i.primary.main,
																						}
																					: {},
																			),
																			{
																				padding: {
																					xs: "20px",
																					md: "20px 70px",
																				},
																			},
																		);
																	},
																	tabIndex: -1,
																	variant: "outlined",
																	children: e.title,
																}),
															}),
														}),
													},
													e.slug,
												);
											}),
										}),
										y
											.sort(function (e, t) {
												return (
													new Date(t.publishedAt).getTime() -
													new Date(e.publishedAt).getTime()
												);
											})
											.map(function (e) {
												var t = e.slug,
													i = e.subtitle,
													n = e.title,
													r = e.__typename,
													l = e.publishedAt;
												return (0, s.jsx)(
													g(),
													{
														href: "/"
															.concat(
																"Blog" === r
																	? "blog"
																	: "Advice" === r
																		? "advice"
																		: "news",
																"/",
															)
															.concat(t),
														children: (0, s.jsx)("a", {
															style: { userSelect: "none" },
															children: (0, s.jsxs)(d.Z, {
																maxWidth: 800,
																mb: 6,
																pb: 4,
																sx: function (e) {
																	return {
																		cursor: "pointer",
																		"&:hover h3": {
																			color: e.palette.secondary.main,
																			transition: "color 0.2s",
																		},
																		borderBottom: "1px solid rgba(0,0,0,0.1)",
																	};
																},
																children: [
																	(0, s.jsx)(h.Z, {
																		component: "h2",
																		variant: "h3",
																		children: n,
																	}),
																	(0, s.jsxs)(d.Z, {
																		display: "flex",
																		children: [
																			(0, s.jsxs)(h.Z, {
																				component: "h3",
																				variant: "h4",
																				mr: 1,
																				children: [
																					r,
																					(0, s.jsx)(d.Z, {
																						component: "span",
																						ml: 1,
																						children: "|",
																					}),
																				],
																			}),
																			(0, s.jsx)(f.Y, {
																				updatedAt: l,
																				sx: { mb: 1 },
																			}),
																		],
																	}),
																	(0, s.jsx)(h.Z, { children: i }),
																],
															}),
														}),
													},
													"".concat(r, "-").concat(t),
												);
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
		e.O(0, [231, 611, 55, 774, 888, 179], function () {
			return (t = 3773), e((e.s = t));
			var t;
		});
		var t = e.O();
		_N_E = t;
	},
]);
