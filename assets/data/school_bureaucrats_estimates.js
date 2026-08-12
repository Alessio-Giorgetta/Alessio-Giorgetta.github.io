/* GENERATED from school_bureaucrats_estimates.json - do not edit by hand.
   Regenerate after any JSON change:
   python3 -c "import json;d=json.load(open('data/school_bureaucrats_estimates.json'));open('data/school_bureaucrats_estimates.js','w').write('window.SCHOOL_BUREAUCRATS_DATA = '+json.dumps(d,ensure_ascii=False,indent=1)+';')"
   Exists so the prototypes work from file:// where fetch() is blocked. */
window.SCHOOL_BUREAUCRATS_DATA = {
 "_meta": {
  "paper": "Do School Bureaucrats Discriminate against Foreigners? Experimental Evidence from Italy",
  "author": "Alessio Giorgetta",
  "venue": "MSc thesis, University of Bologna, 2025",
  "transcribed_on": "2026-08-12",
  "transcribed_by": "Claude Code, from the PDFs in pre_phd/bureaucracy/",
  "status": "UNVERIFIED TRANSCRIPTION. Every number below was read out of a PDF table. Nothing here has been checked against the original Stata/R output. See TRANSCRIPTION_NOTES.md for the discrepancies found.",
  "authority": "RESOLVED 2026-08-12 by the author: where the thesis and the slides disagree, THE SLIDES WIN. The thesis was revised repeatedly after the slides were made. Records tagged \"variant\": \"thesis\" are retained for provenance only and must not be displayed. Use \"variant\": \"slides\".",
  "conventions": {
   "estimate_triple": "[coefficient, standard_error, significance_stars]",
   "stars": "** p<0.01, * p<0.05, ~ p<0.10, \"\" not significant at 10%",
   "units": "All treatment effects are in probability points (a coefficient of -0.043 is -4.3pp).",
   "added_by_transcriber": "ISO 3166-2:IT region codes are NOT in the paper. They were added to allow a join to map geometry and should be spot-checked."
  },
  "sources": {
   "thesis": "pre_phd/bureaucracy/thesis_AG.pdf",
   "slides": "pre_phd/bureaucracy/pres_AG.pdf",
   "figure1": "pre_phd/bureaucracy/graph_effects_slides.pdf"
  }
 },
 "design": {
  "source": {
   "doc": "thesis",
   "pages": [
    7,
    8
   ]
  },
  "schools_universe": 50511,
  "schools_analysed": 7120,
  "schools_analysed_per_prose": 7192,
  "schools_analysed_note": "The thesis prose (p.7) says 7,192; every table reports 7,120. Unresolved, see TRANSCRIPTION_NOTES.md.",
  "regions_in_sample": 18,
  "regions_excluded": [
   "Trentino-Alto Adige",
   "Valle d'Aosta"
  ],
  "regions_excluded_reason": "Not present in the Ministry of Education source data; both have large German- and French-speaking minorities, which the thesis argues would have confounded the alias manipulation.",
  "provinces": 103,
  "randomisation": "Within province (stratum). 50% Italian control, 25% French alias (T1), 25% Arabic alias (T2). Independently randomised across nine working days of sending.",
  "arms": [
   {
    "id": "control",
    "label": "Italian signature",
    "share": 0.5,
    "n": 3582
   },
   {
    "id": "french",
    "label": "French signature",
    "share": 0.25,
    "n": 1794
   },
   {
    "id": "arabic",
    "label": "Arabic signature",
    "share": 0.25,
    "n": 1744
   }
  ],
  "arms_n_source": {
   "doc": "figure1",
   "note": "Arm counts come from the Figure 1 chart labels and sum to 7,120. Table 1 implies control 3,581 / French 1,795 / Arabic 1,745, which sums to 7,121. Off-by-one, unresolved."
  },
  "fieldwork": {
   "sent_from": "2025-05-12",
   "sending_days": 9,
   "responses_downloaded": "2025-06-04",
   "gmail_accounts": 8
  }
 },
 "balance": {
  "source": {
   "doc": "thesis",
   "page": 9,
   "table": "1"
  },
  "method": "Seemingly Unrelated Regression on the system of covariate equations.",
  "columns": {
   "control": "Control group mean, sample SD in parentheses",
   "french": "French minus control difference, SE in parentheses",
   "arabic": "Arabic minus control difference, SE in parentheses",
   "any": "Any treatment minus control difference, SE in parentheses"
  },
  "rows": [
   {
    "covariate": "# Students",
    "level": "school",
    "control": [
     812,
     312,
     ""
    ],
    "french": [
     -2,
     8,
     ""
    ],
    "arabic": [
     -9,
     8,
     ""
    ],
    "any": [
     -5,
     7,
     ""
    ]
   },
   {
    "covariate": "INVALSI",
    "level": "school",
    "control": [
     4.23,
     1.22,
     ""
    ],
    "french": [
     -0.01,
     0.04,
     ""
    ],
    "arabic": [
     0.02,
     0.04,
     ""
    ],
    "any": [
     0.01,
     0.03,
     ""
    ]
   },
   {
    "covariate": "Inclusivity",
    "level": "school",
    "control": [
     5.24,
     0.92,
     ""
    ],
    "french": [
     0.03,
     0.03,
     ""
    ],
    "arabic": [
     0.0,
     0.03,
     ""
    ],
    "any": [
     0.01,
     0.02,
     ""
    ]
   },
   {
    "covariate": "Area in Decline",
    "level": "school",
    "control": [
     0.012,
     0.107,
     ""
    ],
    "french": [
     0.003,
     0.003,
     ""
    ],
    "arabic": [
     0.001,
     0.003,
     ""
    ],
    "any": [
     0.002,
     0.003,
     ""
    ]
   },
   {
    "covariate": "Train Station",
    "level": "school",
    "control": [
     0.151,
     0.358,
     ""
    ],
    "french": [
     0.011,
     0.013,
     ""
    ],
    "arabic": [
     -0.009,
     0.013,
     ""
    ],
    "any": [
     0.001,
     0.011,
     ""
    ]
   },
   {
    "covariate": "Bus Station",
    "level": "school",
    "control": [
     0.74,
     0.439,
     ""
    ],
    "french": [
     0.039,
     0.015,
     "*"
    ],
    "arabic": [
     0.004,
     0.016,
     ""
    ],
    "any": [
     0.023,
     0.013,
     "~"
    ]
   },
   {
    "covariate": "Cantine",
    "level": "school",
    "control": [
     0.182,
     0.386,
     ""
    ],
    "french": [
     -0.015,
     0.011,
     ""
    ],
    "arabic": [
     -0.015,
     0.011,
     ""
    ],
    "any": [
     -0.015,
     0.009,
     ""
    ]
   },
   {
    "covariate": "Gym",
    "level": "school",
    "control": [
     0.641,
     0.48,
     ""
    ],
    "french": [
     -0.026,
     0.014,
     "~"
    ],
    "arabic": [
     -0.031,
     0.014,
     "*"
    ],
    "any": [
     -0.028,
     0.012,
     "*"
    ]
   },
   {
    "covariate": "Taxable Earnings (per capita)",
    "level": "municipality",
    "control": [
     22382,
     4522,
     ""
    ],
    "french": [
     49,
     82,
     ""
    ],
    "arabic": [
     65,
     84,
     ""
    ],
    "any": [
     57,
     68,
     ""
    ]
   },
   {
    "covariate": "Population (by 1000)",
    "level": "municipality",
    "control": [
     215,
     574,
     ""
    ],
    "french": [
     12,
     11,
     ""
    ],
    "arabic": [
     6,
     12,
     ""
    ],
    "any": [
     9,
     9,
     ""
    ]
   },
   {
    "covariate": "Foreigners (%)",
    "level": "municipality",
    "control": [
     0.087,
     0.05,
     ""
    ],
    "french": [
     0.001,
     0.001,
     ""
    ],
    "arabic": [
     0.001,
     0.001,
     ""
    ],
    "any": [
     0.001,
     0.001,
     "~"
    ]
   }
  ],
  "joint_tests": {
   "f_stat": {
    "french": 1.037,
    "arabic": 1.001,
    "any": 1.112
   },
   "p_value": {
    "french": 0.398,
    "arabic": 0.472,
    "any": 0.262
   }
  },
  "sample_size": {
   "control": 3581,
   "french": 5376,
   "arabic": 5326,
   "any": 7120
  },
  "sample_size_note": "Columns 2-4 report the pooled estimation sample (control + that arm), not the arm size."
 },
 "estimates": [
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": false,
   "arm": "any",
   "est": [
    -0.043,
    0.01,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(1)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": true,
   "arm": "any",
   "est": [
    -0.041,
    0.01,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(2)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": false,
   "arm": "french",
   "est": [
    -0.06,
    0.012,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": false,
   "arm": "arabic",
   "est": [
    -0.025,
    0.012,
    "*"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": true,
   "arm": "french",
   "est": [
    -0.059,
    0.012,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.024,
    0.012,
    "*"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": false,
   "arm": "any",
   "est": [
    -0.043,
    0.009,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(1)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": true,
   "arm": "any",
   "est": [
    -0.042,
    0.009,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(2)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": false,
   "arm": "french",
   "est": [
    -0.06,
    0.012,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": false,
   "arm": "arabic",
   "est": [
    -0.025,
    0.012,
    "*"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": true,
   "arm": "french",
   "est": [
    -0.06,
    0.012,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.024,
    0.012,
    "*"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "pdlasso",
   "controls": "selected",
   "arm": "any",
   "est": [
    -0.046,
    0.013,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A3",
    "column": "(1)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "pdlasso",
   "controls": "selected",
   "arm": "french",
   "est": [
    -0.059,
    0.017,
    "**"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A3",
    "column": "(2)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "pdlasso",
   "controls": "selected",
   "arm": "arabic",
   "est": [
    -0.033,
    0.016,
    "*"
   ],
   "control_mean": 0.809,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A3",
    "column": "(2)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": false,
   "arm": "any",
   "est": [
    -0.055,
    0.011,
    "**"
   ],
   "control_mean": 0.688,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(1)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": true,
   "arm": "any",
   "est": [
    -0.054,
    0.011,
    "**"
   ],
   "control_mean": 0.688,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(2)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": false,
   "arm": "french",
   "est": [
    -0.078,
    0.014,
    "**"
   ],
   "control_mean": 0.688,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": false,
   "arm": "arabic",
   "est": [
    -0.032,
    0.014,
    "*"
   ],
   "control_mean": 0.688,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": true,
   "arm": "french",
   "est": [
    -0.077,
    0.014,
    "**"
   ],
   "control_mean": 0.688,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.031,
    0.014,
    "*"
   ],
   "control_mean": 0.688,
   "n": 7120,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(4)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "arm": "any",
   "est": [
    -0.06,
    0.012,
    "**"
   ],
   "control_mean": 0.272,
   "n": 5107,
   "variant": "thesis",
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(1)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "arm": "french",
   "est": [
    -0.037,
    0.015,
    "*"
   ],
   "control_mean": 0.272,
   "n": 5107,
   "variant": "thesis",
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(2)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.083,
    0.015,
    "**"
   ],
   "control_mean": 0.272,
   "n": 5107,
   "variant": "thesis",
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(2)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "arm": "any",
   "est": [
    -0.059,
    0.013,
    "**"
   ],
   "control_mean": 0.335,
   "n": 5107,
   "variant": "slides",
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(1)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "arm": "french",
   "est": [
    -0.033,
    0.016,
    "*"
   ],
   "control_mean": 0.335,
   "n": 5107,
   "variant": "slides",
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(2)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.084,
    0.016,
    "**"
   ],
   "control_mean": 0.335,
   "n": 5107,
   "variant": "slides",
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(2)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "arm": "any",
   "est": [
    -0.039,
    0.011,
    "**"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "variant": "thesis",
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(3)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "arm": "french",
   "est": [
    -0.026,
    0.013,
    "*"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "variant": "thesis",
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(4)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.053,
    0.013,
    "**"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "variant": "thesis",
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(4)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "arm": "any",
   "est": [
    -0.039,
    0.011,
    "**"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "variant": "slides",
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(3)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "arm": "french",
   "est": [
    -0.026,
    0.013,
    "*"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "variant": "slides",
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(4)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.053,
    0.013,
    "**"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "variant": "slides",
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(4)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "logit",
   "controls": true,
   "arm": "any",
   "est": [
    -0.061,
    0.013,
    "**"
   ],
   "control_mean": 0.347,
   "n": 5107,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(1)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "logit",
   "controls": true,
   "arm": "french",
   "est": [
    -0.033,
    0.016,
    "*"
   ],
   "control_mean": 0.347,
   "n": 5107,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(2)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "logit",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.089,
    0.016,
    "**"
   ],
   "control_mean": 0.347,
   "n": 5107,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(2)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "logit",
   "controls": true,
   "arm": "any",
   "est": [
    -0.04,
    0.011,
    "**"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(3)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "logit",
   "controls": true,
   "arm": "french",
   "est": [
    -0.026,
    0.013,
    "*"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(4)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "logit",
   "controls": true,
   "arm": "arabic",
   "est": [
    -0.054,
    0.013,
    "**"
   ],
   "control_mean": 0.818,
   "n": 5107,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(4)"
   }
  }
 ],
 "joint_tests": [
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": false,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.012,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "lpm",
   "controls": true,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.012,
   "source": {
    "doc": "thesis",
    "page": 13,
    "table": "2",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": false,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.011,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "logit",
   "controls": true,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.01,
   "source": {
    "doc": "thesis",
    "page": 24,
    "table": "A2",
    "column": "(4)"
   }
  },
  {
   "outcome": "response_1w",
   "estimator": "pdlasso",
   "controls": "selected",
   "t1_t2_zero_p": 0.001,
   "t1_eq_t2_p": 0.183,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A3",
    "column": "(2)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": false,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.011,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(3)"
   }
  },
  {
   "outcome": "response_1d",
   "estimator": "lpm",
   "controls": true,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.01,
   "source": {
    "doc": "thesis",
    "page": 25,
    "table": "A4",
    "column": "(4)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "variant": "thesis",
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.007,
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(2)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "lpm",
   "controls": true,
   "variant": "slides",
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.005,
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(2)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "variant": "thesis",
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.087,
   "source": {
    "doc": "thesis",
    "page": 17,
    "table": "4",
    "column": "(4)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "lpm",
   "controls": true,
   "variant": "slides",
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.078,
   "source": {
    "doc": "slides",
    "page": 28,
    "table": "4",
    "column": "(4)"
   }
  },
  {
   "outcome": "usefulness",
   "estimator": "logit",
   "controls": true,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.002,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(2)"
   }
  },
  {
   "outcome": "politeness",
   "estimator": "logit",
   "controls": true,
   "t1_t2_zero_p": 0.0,
   "t1_eq_t2_p": 0.079,
   "source": {
    "doc": "thesis",
    "page": 26,
    "table": "A5",
    "column": "(4)"
   }
  }
 ],
 "heterogeneity_covariates": {
  "source": {
   "doc": "thesis",
   "page": 15,
   "table": "3"
  },
  "outcome": "response_1w",
  "estimator": "lpm",
  "note": "Each column is a separate regression: any-treatment dummy plus its interaction with one demeaned covariate. Strata FE in all columns. Interaction variables have been demeaned.",
  "control_mean": 0.809,
  "n": 7120,
  "columns": [
   {
    "column": "(1)",
    "interaction": "# Students (by 100)",
    "any_treatment": [
     -0.043,
     0.01,
     "**"
    ],
    "interaction_est": [
     0.001,
     0.003,
     ""
    ],
    "covariate_mean": 8.094
   },
   {
    "column": "(2)",
    "interaction": "Population (by 10,000)",
    "any_treatment": [
     -0.042,
     0.01,
     "**"
    ],
    "interaction_est": [
     0.0,
     0.0,
     ""
    ],
    "covariate_mean": 22.02
   },
   {
    "column": "(3)",
    "interaction": "% Foreigners",
    "any_treatment": [
     -0.041,
     0.01,
     "**"
    ],
    "interaction_est": [
     0.312,
     0.206,
     ""
    ],
    "covariate_mean": 0.088
   },
   {
    "column": "(4)",
    "interaction": "Taxable Income (by 1000 EUR)",
    "any_treatment": [
     -0.042,
     0.01,
     "**"
    ],
    "interaction_est": [
     0.006,
     0.002,
     "*"
    ],
    "covariate_mean": 22.41
   }
  ]
 },
 "nlp_model": {
  "source": {
   "doc": "thesis",
   "page": 24,
   "table": "A1"
  },
  "model": "BERT, Italian version",
  "training": "500 emails, roughly 10% of the response sample, manually labelled; model then classified the remaining 5,107.",
  "metrics_note": "Reported for epoch 4, the last epoch of training.",
  "usefulness": {
   "accuracy": 0.68,
   "f1": 0.675,
   "precision": 0.684,
   "recall": 0.68
  },
  "politeness": {
   "accuracy": 0.88,
   "f1": 0.874,
   "precision": 0.883,
   "recall": 0.88
  },
  "labelling_rules": {
   "useful": "Contains any information beyond the opening hours of the administrative office. Not useful if it omits the opening hours.",
   "polite": "Includes openings and greetings, uses the formal Lei or Voi form, no capslock."
  }
 },
 "cate_regions": {
  "estimator": {
   "name": "Linear AIPW",
   "reference": "Chernozhukov et al. (2018)",
   "nuisance": "Random Forest with the Honesty approach (Athey and Imbens 2016)",
   "conditioning": "Outcome and treatment modelled conditional on province and day-of-sending, the randomisation levels.",
   "cv_folds": 10,
   "source_note": "Estimator described in the notes to slides 43 and 44. Slide 30 carries the same table layout but no notes block."
  },
  "region_codes_note": "iso codes added by the transcriber for map joining, not present in the paper.",
  "excluded_regions": [
   {
    "name": "Trentino-Alto Adige",
    "iso": "IT-32"
   },
   {
    "name": "Valle d'Aosta",
    "iso": "IT-23"
   }
  ],
  "outcomes": {
   "response_1w": {
    "label": "Response rate, one week",
    "source": {
     "doc": "slides",
     "page": 30,
     "table": "5"
    },
    "sample_size": {
     "any": 5107,
     "french": 3869,
     "arabic": 3866
    },
    "sample_size_note": "As printed. These do not match the 7,120 / 5,376 / 5,326 of the main response-rate tables and look copied from the text-analysis tables. Unresolved.",
    "ate": {
     "any": [
      -0.044,
      0.01,
      "**"
     ],
     "french": [
      -0.061,
      0.012,
      "**"
     ],
     "arabic": [
      -0.026,
      0.012,
      "*"
     ]
    },
    "control_mean": {
     "any": [
      0.809,
      0.007,
      "**"
     ],
     "french": [
      0.809,
      0.007,
      "**"
     ],
     "arabic": [
      0.808,
      0.007,
      "**"
     ]
    },
    "regions": [
     {
      "name": "Abruzzo",
      "iso": "IT-65",
      "any": [
       -0.071,
       0.051,
       ""
      ],
      "french": [
       -0.039,
       0.063,
       ""
      ],
      "arabic": [
       -0.094,
       0.068,
       ""
      ]
     },
     {
      "name": "Basilicata",
      "iso": "IT-77",
      "any": [
       -0.133,
       0.094,
       ""
      ],
      "french": [
       -0.157,
       0.12,
       ""
      ],
      "arabic": [
       -0.111,
       0.119,
       ""
      ]
     },
     {
      "name": "Calabria",
      "iso": "IT-78",
      "any": [
       -0.055,
       0.054,
       ""
      ],
      "french": [
       -0.07,
       0.067,
       ""
      ],
      "arabic": [
       -0.048,
       0.068,
       ""
      ]
     },
     {
      "name": "Campania",
      "iso": "IT-72",
      "any": [
       -0.055,
       0.032,
       "~"
      ],
      "french": [
       -0.086,
       0.04,
       "*"
      ],
      "arabic": [
       -0.019,
       0.038,
       ""
      ]
     },
     {
      "name": "Emilia-Romagna",
      "iso": "IT-45",
      "any": [
       -0.029,
       0.036,
       ""
      ],
      "french": [
       -0.05,
       0.046,
       ""
      ],
      "arabic": [
       -0.002,
       0.045,
       ""
      ]
     },
     {
      "name": "Friuli-Venezia Giulia",
      "iso": "IT-36",
      "any": [
       -0.061,
       0.064,
       ""
      ],
      "french": [
       0.021,
       0.067,
       ""
      ],
      "arabic": [
       -0.15,
       0.09,
       "~"
      ]
     },
     {
      "name": "Lazio",
      "iso": "IT-62",
      "any": [
       -0.035,
       0.031,
       ""
      ],
      "french": [
       -0.019,
       0.038,
       ""
      ],
      "arabic": [
       -0.044,
       0.04,
       ""
      ]
     },
     {
      "name": "Liguria",
      "iso": "IT-42",
      "any": [
       -0.094,
       0.056,
       "~"
      ],
      "french": [
       -0.099,
       0.072,
       ""
      ],
      "arabic": [
       -0.103,
       0.072,
       ""
      ]
     },
     {
      "name": "Lombardia",
      "iso": "IT-25",
      "any": [
       -0.018,
       0.026,
       ""
      ],
      "french": [
       -0.046,
       0.033,
       ""
      ],
      "arabic": [
       0.011,
       0.031,
       ""
      ]
     },
     {
      "name": "Marche",
      "iso": "IT-57",
      "any": [
       -0.052,
       0.046,
       ""
      ],
      "french": [
       -0.067,
       0.061,
       ""
      ],
      "arabic": [
       -0.033,
       0.058,
       ""
      ]
     },
     {
      "name": "Molise",
      "iso": "IT-67",
      "any": [
       -0.064,
       0.086,
       ""
      ],
      "french": [
       0.044,
       0.081,
       ""
      ],
      "arabic": [
       -0.163,
       0.131,
       ""
      ]
     },
     {
      "name": "Piemonte",
      "iso": "IT-21",
      "any": [
       -0.024,
       0.038,
       ""
      ],
      "french": [
       -0.038,
       0.047,
       ""
      ],
      "arabic": [
       -0.009,
       0.047,
       ""
      ]
     },
     {
      "name": "Puglia",
      "iso": "IT-75",
      "any": [
       -0.041,
       0.039,
       ""
      ],
      "french": [
       -0.047,
       0.048,
       ""
      ],
      "arabic": [
       -0.039,
       0.049,
       ""
      ]
     },
     {
      "name": "Sardegna",
      "iso": "IT-88",
      "any": [
       -0.118,
       0.054,
       "*"
      ],
      "french": [
       -0.121,
       0.068,
       "~"
      ],
      "arabic": [
       -0.107,
       0.071,
       ""
      ]
     },
     {
      "name": "Sicilia",
      "iso": "IT-82",
      "any": [
       -0.109,
       0.034,
       "**"
      ],
      "french": [
       -0.169,
       0.045,
       "**"
      ],
      "arabic": [
       -0.06,
       0.043,
       ""
      ]
     },
     {
      "name": "Toscana",
      "iso": "IT-52",
      "any": [
       -0.041,
       0.038,
       ""
      ],
      "french": [
       -0.035,
       0.047,
       ""
      ],
      "arabic": [
       -0.035,
       0.048,
       ""
      ]
     },
     {
      "name": "Umbria",
      "iso": "IT-55",
      "any": [
       -0.001,
       0.063,
       ""
      ],
      "french": [
       0.016,
       0.075,
       ""
      ],
      "arabic": [
       -0.014,
       0.08,
       ""
      ]
     },
     {
      "name": "Veneto",
      "iso": "IT-34",
      "any": [
       0.021,
       0.03,
       ""
      ],
      "french": [
       -0.033,
       0.039,
       ""
      ],
      "arabic": [
       0.078,
       0.033,
       "*"
      ]
     }
    ]
   },
   "usefulness": {
    "label": "Usefulness (0/1)",
    "source": {
     "doc": "slides",
     "page": 43,
     "table": "6"
    },
    "sample_size": {
     "any": 5107,
     "french": 3869,
     "arabic": 3866
    },
    "ate": {
     "any": [
      -0.059,
      0.013,
      "**"
     ],
     "french": [
      -0.036,
      0.016,
      "*"
     ],
     "arabic": [
      -0.082,
      0.016,
      "**"
     ]
    },
    "control_mean": {
     "any": [
      0.362,
      0.009,
      "**"
     ],
     "french": [
      0.363,
      0.009,
      "**"
     ],
     "arabic": [
      0.361,
      0.009,
      "**"
     ]
    },
    "regions": [
     {
      "name": "Abruzzo",
      "iso": "IT-65",
      "any": [
       -0.126,
       0.08,
       ""
      ],
      "french": [
       -0.141,
       0.097,
       ""
      ],
      "arabic": [
       -0.12,
       0.099,
       ""
      ]
     },
     {
      "name": "Basilicata",
      "iso": "IT-77",
      "any": [
       -0.1,
       0.125,
       ""
      ],
      "french": [
       -0.044,
       0.153,
       ""
      ],
      "arabic": [
       -0.137,
       0.144,
       ""
      ]
     },
     {
      "name": "Calabria",
      "iso": "IT-78",
      "any": [
       -0.009,
       0.072,
       ""
      ],
      "french": [
       0.085,
       0.093,
       ""
      ],
      "arabic": [
       -0.118,
       0.083,
       ""
      ]
     },
     {
      "name": "Campania",
      "iso": "IT-72",
      "any": [
       -0.101,
       0.036,
       "**"
      ],
      "french": [
       -0.106,
       0.045,
       "*"
      ],
      "arabic": [
       -0.09,
       0.044,
       "*"
      ]
     },
     {
      "name": "Emilia-Romagna",
      "iso": "IT-45",
      "any": [
       -0.032,
       0.05,
       ""
      ],
      "french": [
       -0.007,
       0.062,
       ""
      ],
      "arabic": [
       -0.056,
       0.061,
       ""
      ]
     },
     {
      "name": "Friuli-Venezia Giulia",
      "iso": "IT-36",
      "any": [
       0.03,
       0.1,
       ""
      ],
      "french": [
       0.004,
       0.12,
       ""
      ],
      "arabic": [
       0.048,
       0.127,
       ""
      ]
     },
     {
      "name": "Lazio",
      "iso": "IT-62",
      "any": [
       -0.084,
       0.043,
       "~"
      ],
      "french": [
       -0.056,
       0.054,
       ""
      ],
      "arabic": [
       -0.122,
       0.053,
       "*"
      ]
     },
     {
      "name": "Liguria",
      "iso": "IT-42",
      "any": [
       -0.001,
       0.087,
       ""
      ],
      "french": [
       0.029,
       0.107,
       ""
      ],
      "arabic": [
       -0.013,
       0.104,
       ""
      ]
     },
     {
      "name": "Lombardia",
      "iso": "IT-25",
      "any": [
       -0.056,
       0.036,
       ""
      ],
      "french": [
       -0.062,
       0.045,
       ""
      ],
      "arabic": [
       -0.051,
       0.046,
       ""
      ]
     },
     {
      "name": "Marche",
      "iso": "IT-57",
      "any": [
       -0.277,
       0.075,
       "**"
      ],
      "french": [
       -0.2,
       0.094,
       "*"
      ],
      "arabic": [
       -0.352,
       0.089,
       "**"
      ]
     },
     {
      "name": "Molise",
      "iso": "IT-67",
      "any": [
       -0.358,
       0.142,
       "*"
      ],
      "french": [
       -0.213,
       0.184,
       ""
      ],
      "arabic": [
       -0.488,
       0.127,
       "**"
      ]
     },
     {
      "name": "Piemonte",
      "iso": "IT-21",
      "any": [
       -0.054,
       0.051,
       ""
      ],
      "french": [
       0.0,
       0.067,
       ""
      ],
      "arabic": [
       -0.084,
       0.061,
       ""
      ]
     },
     {
      "name": "Puglia",
      "iso": "IT-75",
      "any": [
       0.031,
       0.053,
       ""
      ],
      "french": [
       0.0,
       0.064,
       ""
      ],
      "arabic": [
       0.064,
       0.067,
       ""
      ]
     },
     {
      "name": "Sardegna",
      "iso": "IT-88",
      "any": [
       -0.1,
       0.068,
       ""
      ],
      "french": [
       -0.067,
       0.085,
       ""
      ],
      "arabic": [
       -0.126,
       0.078,
       ""
      ]
     },
     {
      "name": "Sicilia",
      "iso": "IT-82",
      "any": [
       0.011,
       0.037,
       ""
      ],
      "french": [
       0.05,
       0.049,
       ""
      ],
      "arabic": [
       -0.028,
       0.043,
       ""
      ]
     },
     {
      "name": "Toscana",
      "iso": "IT-52",
      "any": [
       -0.018,
       0.052,
       ""
      ],
      "french": [
       0.046,
       0.066,
       ""
      ],
      "arabic": [
       -0.096,
       0.062,
       ""
      ]
     },
     {
      "name": "Umbria",
      "iso": "IT-55",
      "any": [
       -0.025,
       0.096,
       ""
      ],
      "french": [
       0.042,
       0.121,
       ""
      ],
      "arabic": [
       -0.119,
       0.113,
       ""
      ]
     },
     {
      "name": "Veneto",
      "iso": "IT-34",
      "any": [
       -0.093,
       0.047,
       "*"
      ],
      "french": [
       -0.092,
       0.059,
       ""
      ],
      "arabic": [
       -0.105,
       0.057,
       "~"
      ]
     }
    ]
   },
   "politeness": {
    "label": "Politeness (0/1)",
    "source": {
     "doc": "slides",
     "page": 44,
     "table": "7"
    },
    "sample_size": {
     "any": 5107,
     "french": 3869,
     "arabic": 3866
    },
    "ate": {
     "any": [
      -0.04,
      0.011,
      "**"
     ],
     "french": [
      -0.027,
      0.013,
      "*"
     ],
     "arabic": [
      -0.055,
      0.014,
      "**"
     ]
    },
    "control_mean": {
     "any": [
      0.838,
      0.007,
      "**"
     ],
     "french": [
      0.839,
      0.007,
      "**"
     ],
     "arabic": [
      0.837,
      0.007,
      "**"
     ]
    },
    "regions": [
     {
      "name": "Abruzzo",
      "iso": "IT-65",
      "any": [
       0.034,
       0.074,
       ""
      ],
      "french": [
       0.065,
       0.087,
       ""
      ],
      "arabic": [
       -0.004,
       0.093,
       ""
      ]
     },
     {
      "name": "Basilicata",
      "iso": "IT-77",
      "any": [
       -0.152,
       0.103,
       ""
      ],
      "french": [
       -0.229,
       0.142,
       ""
      ],
      "arabic": [
       -0.076,
       0.124,
       ""
      ]
     },
     {
      "name": "Calabria",
      "iso": "IT-78",
      "any": [
       -0.081,
       0.066,
       ""
      ],
      "french": [
       -0.02,
       0.077,
       ""
      ],
      "arabic": [
       -0.144,
       0.087,
       "~"
      ]
     },
     {
      "name": "Campania",
      "iso": "IT-72",
      "any": [
       -0.076,
       0.039,
       "*"
      ],
      "french": [
       -0.057,
       0.049,
       ""
      ],
      "arabic": [
       -0.102,
       0.049,
       "*"
      ]
     },
     {
      "name": "Emilia-Romagna",
      "iso": "IT-45",
      "any": [
       0.027,
       0.039,
       ""
      ],
      "french": [
       0.06,
       0.045,
       ""
      ],
      "arabic": [
       0.003,
       0.05,
       ""
      ]
     },
     {
      "name": "Friuli-Venezia Giulia",
      "iso": "IT-36",
      "any": [
       -0.203,
       0.086,
       "*"
      ],
      "french": [
       -0.173,
       0.108,
       ""
      ],
      "arabic": [
       -0.231,
       0.115,
       "*"
      ]
     },
     {
      "name": "Lazio",
      "iso": "IT-62",
      "any": [
       -0.052,
       0.034,
       ""
      ],
      "french": [
       -0.028,
       0.041,
       ""
      ],
      "arabic": [
       -0.079,
       0.046,
       "~"
      ]
     },
     {
      "name": "Liguria",
      "iso": "IT-42",
      "any": [
       -0.098,
       0.053,
       "~"
      ],
      "french": [
       -0.039,
       0.059,
       ""
      ],
      "arabic": [
       -0.152,
       0.076,
       "*"
      ]
     },
     {
      "name": "Lombardia",
      "iso": "IT-25",
      "any": [
       -0.011,
       0.021,
       ""
      ],
      "french": [
       -0.012,
       0.027,
       ""
      ],
      "arabic": [
       -0.014,
       0.027,
       ""
      ]
     },
     {
      "name": "Marche",
      "iso": "IT-57",
      "any": [
       -0.045,
       0.064,
       ""
      ],
      "french": [
       0.042,
       0.073,
       ""
      ],
      "arabic": [
       -0.129,
       0.09,
       ""
      ]
     },
     {
      "name": "Molise",
      "iso": "IT-67",
      "any": [
       0.127,
       0.12,
       ""
      ],
      "french": [
       0.044,
       0.16,
       ""
      ],
      "arabic": [
       0.219,
       0.11,
       "*"
      ]
     },
     {
      "name": "Piemonte",
      "iso": "IT-21",
      "any": [
       -0.033,
       0.029,
       ""
      ],
      "french": [
       -0.05,
       0.041,
       ""
      ],
      "arabic": [
       -0.018,
       0.036,
       ""
      ]
     },
     {
      "name": "Puglia",
      "iso": "IT-75",
      "any": [
       -0.087,
       0.048,
       "~"
      ],
      "french": [
       -0.119,
       0.062,
       "~"
      ],
      "arabic": [
       -0.05,
       0.06,
       ""
      ]
     },
     {
      "name": "Sardegna",
      "iso": "IT-88",
      "any": [
       -0.028,
       0.063,
       ""
      ],
      "french": [
       -0.071,
       0.083,
       ""
      ],
      "arabic": [
       0.025,
       0.073,
       ""
      ]
     },
     {
      "name": "Sicilia",
      "iso": "IT-82",
      "any": [
       -0.068,
       0.044,
       ""
      ],
      "french": [
       -0.009,
       0.053,
       ""
      ],
      "arabic": [
       -0.119,
       0.057,
       "*"
      ]
     },
     {
      "name": "Toscana",
      "iso": "IT-52",
      "any": [
       -0.007,
       0.037,
       ""
      ],
      "french": [
       -0.006,
       0.045,
       ""
      ],
      "arabic": [
       -0.014,
       0.047,
       ""
      ]
     },
     {
      "name": "Umbria",
      "iso": "IT-55",
      "any": [
       -0.058,
       0.084,
       ""
      ],
      "french": [
       -0.042,
       0.105,
       ""
      ],
      "arabic": [
       -0.089,
       0.114,
       ""
      ]
     },
     {
      "name": "Veneto",
      "iso": "IT-34",
      "any": [
       -0.015,
       0.036,
       ""
      ],
      "french": [
       -0.024,
       0.046,
       ""
      ],
      "arabic": [
       -0.019,
       0.045,
       ""
      ]
     }
    ]
   }
  }
 }
};
