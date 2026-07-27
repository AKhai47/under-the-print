// Source-grounded post archive. Every date and figure traces to reporting cited in the note body.
const POSTS = [
  {
    slug: "cxmt-shanghai-debut",
    date: "2026-07-27", dateLabel: "JUL 27 2026", tag: "MKT STRUCTURE", color: "var(--purple)", mark: "+470%",
    source: "CNBC",
    sourceUrl: "https://www.cnbc.com/2026/07/27/cxmt-china-market-debut-chipmaker-ipo.html",
    title: "CXMT popped about 470% on debut and took China's market-cap crown",
    dek: "China's largest DRAM maker opened up roughly 470% on Shanghai's STAR Market, vaulting past the country's banks to become the most valuable company listed in China. A neutral note on what that number is measuring.",
    thesis: "The debut is two stories at once, worth keeping apart: a real fundamentals story, the world's fourth-largest DRAM maker into an AI memory shortage, and a listing-mechanics story, a thin 10% float against a retail book oversubscribed 212 times. A roughly 470% first day prices both the demand and the scarcity of shares, not the demand alone.",
    breaks: "The premium holds and builds as the float widens and early lockups expire, which would say the debut priced fundamentals rather than scarcity, and that the memory cycle is not about to remind everyone it is a cycle.",
    blocks: [
      { mark: "+470%", color: "var(--up)", text: "CXMT, China's largest DRAM maker, opened up about 470% on its Shanghai STAR Market debut on July 27, from an 8.66-yuan offer. The IPO raised roughly 57.9bn yuan, near $8.6bn, the largest mainland listing since Agricultural Bank of China in 2010, and the pop lifted CXMT's market value to around 3.3tn yuan, near $480bn, past ICBC to the top of every company listed in China." },
      { mark: "float", color: "var(--faint)", text: "Two things are being priced, and they are worth separating. The float is thin: only about 10% of the company was sold, and the retail tranche was oversubscribed 212 times, with individual orders worth some 7tn yuan. When that much demand meets that few shares, a debut gaps far above the offer regardless of fundamentals. Part of a 470% move is the scarcity of stock, not a verdict on the business." },
      { mark: "chip", color: "var(--accent)", text: "The fundamentals are not nothing either. CXMT held roughly 7.7% of the global DRAM market by late 2025, the fourth producer behind Samsung, SK Hynix and Micron, and reported first-quarter revenue near 50.8bn yuan, up more than 700% year on year, into an AI-driven memory shortage. What a debut cannot answer is whether a cyclical memory business grows into a valuation that now tops China's banks, or whether the float widens into a different price. Worth watching, not calling." }
    ]
  },
  {
    slug: "nvidia-backstops-its-own-demand",
    date: "2026-07-26", dateLabel: "JUL 26 2026", tag: "MKT STRUCTURE", color: "var(--purple)", mark: "circular",
    source: "The Wall Street Journal",
    sourceUrl: "https://www.wsj.com/tech/ai/nvidia-in-talks-with-openai-to-guarantee-250-billion-financing-for-data-center-3dd6eae3",
    title: "Nvidia is backstopping its own demand, and the circle is the risk",
    dek: "Nvidia is in talks to guarantee $250bn of the financing for OpenAI's 10-gigawatt Ohio megacampus. When the vendor underwrites the customer, demand looks larger than the balance sheets behind it.",
    thesis: "This is vendor financing at a scale the market has not seen, the chip supplier guaranteeing the customer's ability to fund the buildings that will house its chips. It pulls demand forward and hands the capex supply chain a near-certain windfall, while quietly moving the cycle's credit risk onto Nvidia's balance sheet instead of dispersing it to lenders. The spend is real; whether the structure is healthy depends on AI revenue catching up to it.",
    breaks: "OpenAI's revenue and realized compute demand scale into the committed capex, so the guarantee is never drawn and the chip orders convert on schedule, in which case the circularity was just efficient capital allocation and the concentrated risk never mattered.",
    blocks: [
      { mark: "$250B", color: "var(--purple)", text: "The Wall Street Journal reports Nvidia is in talks to guarantee roughly $250bn of the financing behind OpenAI's buildout: a 10-gigawatt campus in southern Ohio that SoftBank's energy arm, SB Energy, is developing, with OpenAI taking a long-term lease. Masayoshi Son has put the total project near $500bn." },
      { mark: "circular", color: "var(--accent)", text: "Read the structure, not the headline. A guarantee is not cash up front, it is Nvidia promising to cover the obligations if OpenAI or the project falls short, which lets SoftBank borrow more, cheaper, and longer. Follow the loop: the guarantee unlocks the financing, the financing builds the center, OpenAI leases it and buys Nvidia chips to fill it, and Nvidia books the revenue. The chip vendor is underwriting the demand for its own chips." },
      { mark: "rhyme", color: "var(--faint)", text: "Vendor financing is not new, and its track record is the reason to watch. In the late 1990s Lucent and Nortel lent telecom customers the money to buy their gear, and revenue looked spectacular until the end demand did not show and the receivables became the losses. I am not calling this a bubble. I am saying the structure rhymes, and what decides which way it breaks is whether the demand being financed turns out to be real." },
      { mark: "shovels", color: "var(--up)", text: "Near term the winners are not ambiguous. Whatever happens to the OpenAI credit story, roughly half a trillion dollars of committed spend flows to the capex supply chain: power and the grid, turbines, construction, cooling, high-bandwidth memory, networking, and Nvidia's own order book. The money is contracted and has to be spent to build the thing. If you supply the picks and shovels, this is about as good as it gets." },
      { mark: "read", color: "var(--down)", text: "So I hold both at once. Long term I am not sure circular financing at this scale is healthy, because it concentrates the cycle's risk on the vendor instead of spreading it across lenders who priced it independently, and it makes reported demand harder to trust. Near term the capex beneficiaries are going to be very happy. The number I would watch is how much of this is truly on Nvidia's hook versus dispersed, and whether OpenAI's revenue is scaling into the compute it is contracting for. That gap, if it opens, is the whole story." }
    ]
  },
  {
    slug: "war-premium-unwind-relief",
    date: "2026-07-26", dateLabel: "JUL 26 2026", tag: "CROSS-ASSET", color: "var(--accent)", mark: "relief",
    title: "The war premium is unwinding, and that unwind is the relief rally",
    dek: "Sunday-night futures ripped and crude fell hard as the U.S.-Iran fighting paused. The relief is not the war ending, it is the premium leaving the tape.",
    thesis: "The drawdown was an energy supply shock, so the reversal is symmetric: as the Strait of Hormuz risk premium unwinds with the pause in fighting, the inflation impulse eases and de-risked books are forced to re-risk, which is the setup for a relief move that rips rather than drifts.",
    breaks: "The pause fails and the Strait premium snaps back within days, since a headline premium reverses on a headline, or crude keeps falling because demand is cracking and equities roll over with it, making this a growth scare rather than relief.",
    blocks: [
      { mark: "open", color: "var(--up)", text: "The Sunday-night reopen did the talking. S&P 500 futures gapped back toward 7,500, up about 0.6%, and Nasdaq-100 futures ran 1.1% to around 28,620, clawing back a week that had bled into the low 7,410s and the 28,300s. Crude went the other way, fast: Brent fell to roughly $93 from above $101 last week and WTI to about $85.60 from a $94 high, the war premium coming out into a weekend pause in the U.S.-Iran fighting." },
      { mark: "premium", color: "var(--faint)", text: "This is March in reverse. The first leg up in crude was a geopolitical risk premium, not a spot shortage, and a premium that inflates on a headline deflates on one. Brent has already handed back more than half of what it built, from above $101 toward $93, while the barrel itself never went missing. The market is un-pricing the disruption it spent two weeks pricing in." },
      { mark: "bid", color: "var(--accent)", text: "Why equities rip and do not just drift: the sell-off since Q1 was a supply shock running through inflation, so duration was no hedge and books got defensive. Run the constraint in reverse and the plumbing reverses with it. The inflation impulse eases, real yields get room to fall, and positioning that de-risked into the war has to buy its risk back. Forced re-risking is what turns relief into a rip." },
      { mark: "read", color: "var(--accent)", text: "My read is that this is genuine relief, not a head-fake. The overhang was one identifiable thing, the Strait, and that one thing is easing on the tape in real time. I would rather be long risk into this than fade it here, and I think the path of least resistance for the next leg is higher." },
      { mark: "watch", color: "var(--down)", text: "The discipline: a premium that unwinds on a headline can be re-imposed by one. A pause is not a settlement, and if the Strait re-freezes, $93 becomes the floor again fast. And if crude keeps sliding while stocks turn down with it, this is not relief, it is demand cracking. The tell is divergence. Stocks and oil pulling apart is relief; falling together is a growth scare." }
    ]
  },
  {
    slug: "genius-93-day-rule",
    date: "2026-07-20", dateLabel: "JUL 20 2026", tag: "CRYPTO", color: "var(--amber)", mark: "93d",
    title: "The 93-day rule is a Treasury demand story before it is a crypto story",
    dek: "GENIUS Act rulemaking hit its statutory deadline on July 18. The reserve definition, not the licensing regime, is the part that touches the bill curve.",
    thesis: "Restricting stablecoin reserves to bills of 93 days or less concentrates roughly $230bn of demand into one narrow slice of the curve, and that concentration is a structural bid, not a cyclical one.",
    breaks: "Issuers shift the bulk of reserves into overnight repo and deposits rather than bills, or the Fed's final rule widens the eligible maturity band.",
    blocks: [
      { mark: "$230bn", color: "var(--amber)", text: "Dollar-pegged stablecoins now sit at roughly $230bn in circulation, between bank money, money market funds, and the Treasury bill curve, with Tether around $142bn and Circle around $60bn. That is not a rounding error in bill demand. Tether's Treasury exposure alone has been described as ranking it near the largest sovereign holders." },
      { mark: "rule", color: "var(--faint)", text: "The GENIUS Act, signed July 18, 2025, requires every permitted issuer to hold reserves at least 1:1 in a short enumerated list: cash, insured demand deposits, Treasury bills, notes or bonds with 93 days or less remaining, repo backed by those securities, and money funds that hold only those things. There is no fractional reserve allowance. Rehypothecation is restricted." },
      { mark: "bid", color: "var(--accent)", text: "Read that as a market structure rule rather than a consumer protection rule. It says a fast-growing pool of dollar liabilities may only be backed by paper inside a three-month window. Growth in the sector becomes mechanical demand for the front of the bill curve, and contraction becomes mechanical supply. There is no discretion in the middle to absorb it." },
      { mark: "clarity", color: "var(--up)", text: "I am in favor of the framework. Holders get a priority claim in insolvency, reserve composition is disclosed monthly and attested, and issuers above $10bn move to federal supervision. That is the disclosure regime the sector has been asking for, and it is better than what money market funds had before 2016. Clear rules are what let this scale, and scaling it is the point." },
      { mark: "watch", color: "var(--down)", text: "The open question is timing. Rulemaking was due one year from passage, July 18, 2026, and if the Fed's proposed rule slips the effective date defaults toward January 2027. A regime this specific about maturity, arriving on an uncertain date, is exactly the sort of thing that gets priced late and then all at once." }
    ]
  },
  {
    slug: "cracks-over-crude",
    date: "2026-07-06", dateLabel: "JUL 06 2026", tag: "CROSS-ASSET", color: "var(--accent)", mark: "crack",
    title: "Crude fell back and the pump did not. The crack spread is the honest print",
    dek: "Brent is roughly where it was before the war started. Refined product is priced as if crude were above $100. That gap is the whole story.",
    thesis: "Refining and product logistics, not crude supply, are the binding constraint now, so the inflation impulse from energy is running through products while the crude tape says the shock is over.",
    breaks: "Product cracks compress back toward pre-war levels while crude holds under $75, which would mean the constraint was always crude and the product move was a lag.",
    blocks: [
      { mark: "<$75", color: "var(--up)", text: "Crude has fallen to less than $75 a barrel, roughly where it was before the conflict began in February. If you only watch Brent, the Iran war looks like a closed episode. It is not, and the reason is that the barrel and the gallon stopped trading as the same asset." },
      { mark: "800kbd", color: "var(--down)", text: "The escalation in Russia and Ukraine is the second, quieter oil problem. Before the export ban, Russia shipped 800,000 barrels of diesel a day, about 12% of global diesel shipments. That volume did not get replaced. Refined product prices remain as high as if crude were still changing hands above $100." },
      { mark: "why", color: "var(--faint)", text: "Crude is fungible and reroutable. Refining capacity is neither. A barrel of Saudi crude can find a different buyer in a week; a diesel shortfall in northwest Europe cannot be solved by a cargo of Urals sitting in the wrong hemisphere. When the disruption hits the product layer rather than the wellhead, the price signal shows up in cracks and stays there." },
      { mark: "CPI", color: "var(--accent)", text: "For a rates desk this matters more than the headline crude quote. Consumer energy prices track products. If you are modelling the energy contribution to CPI off Brent, you are modelling the wrong instrument this cycle, and you will keep being surprised by prints that come in above what the crude tape implied." }
    ]
  },
  {
    slug: "forward-guidance-vol",
    date: "2026-06-18", dateLabel: "JUN 18 2026", tag: "RATES", color: "var(--accent)", mark: "vol",
    title: "Dropping forward guidance is a volatility decision, not a communication style",
    dek: "Warsh's first meeting was a unanimous hold with a hiking dot. The lasting change was the sentence about guidance.",
    thesis: "Removing forward guidance is a structural change to front-end volatility, not a change in tone. Price discovery moves from the statement to the data, and the front end has to carry risk it used to be handed.",
    breaks: "Front-end implied vol stays at or below its pre-June range through year-end despite the guidance change, which would mean the guidance was never doing the work.",
    blocks: [
      { mark: "hold", color: "var(--faint)", text: "The June decision was a unanimous hold, in line with a 99% probability in fed funds futures. Nothing in the level of rates was news. The Committee noted activity expanding at a solid pace despite elevated uncertainty owing in part to the conflict in the Middle East, and inflation still elevated relative to the 2% goal in part because of energy supply shocks." },
      { mark: "+25", color: "var(--down)", text: "The projections were the first surprise. The Fed anticipates rates rising a quarter point by the end of 2026. A hiking dot under a chair appointed on the expectation of cuts is a genuine tension, and it is the cleanest thing on the curve to have an opinion about." },
      { mark: "guidance", color: "var(--accent)", text: "The second was structural. Warsh said the Fed will drop forward guidance, on the view that financial markets perform best when they react to incoming data. I think that is right in principle and I also think it raises volatility, and both of those can be true. Guidance was a mechanism for transferring uncertainty from the market to the central bank. Removing it does not delete the uncertainty. It sends it back." },
      { mark: "where", color: "var(--faint)", text: "Expect it to show up first in the front end, in the days around data rather than the days around meetings, and in the gamma the dealers running that book have to hold. If you traded this Fed by reading the statement for the next move, that read is gone. What replaces it is a market that has to price prints on its own, and pricing prints on your own is more expensive." }
    ]
  },
  {
    slug: "warsh-inherits-a-hiking-dot",
    date: "2026-05-26", dateLabel: "MAY 26 2026", tag: "RATES", color: "var(--accent)", mark: "hike?",
    title: "Warsh was hired to cut and the data is asking for a hike",
    dek: "Sworn in May 22, with April CPI and PPI hot and futures pricing almost no chance of a cut this year.",
    thesis: "The gap between why this chair was appointed and what the data now demands is the most interesting mispricing available in the front end.",
    breaks: "Inflation decelerates through the summer and the cut path reappears without a fight, which would make the appointment and the data consistent after all.",
    blocks: [
      { mark: "3.50", color: "var(--faint)", text: "Warsh was sworn in as chair on May 22 with policy at 3.50% to 3.75%. He arrived associated above all with the case for lower rates, which is difficult to run with inflation this far above target. Fixed income strategists put it plainly at the time: a lower rate bias, made hard by an inflation rate that will not cooperate." },
      { mark: "flip", color: "var(--down)", text: "After the April CPI and PPI prints, futures showed almost no chance of a 2026 cut and materially higher odds of an inflation-fighting hike. That is a full inversion of the premise behind the appointment, inside a month of the appointment taking effect." },
      { mark: "board", color: "var(--faint)", text: "There is also a governance detail worth holding onto. Powell stayed on the board, which makes Warsh the first new chair in more than seventy years to inherit an active predecessor with a vote. A chair does not set rates alone. Twelve people vote, and several of them have an incentive to demonstrate independence." },
      { mark: "trade", color: "var(--accent)", text: "So the question is not what Warsh wants. It is what a committee that contains his predecessor will actually do while headline inflation runs above 4%. My read is that the market is still pricing the man rather than the committee, and the committee is the thing that votes." }
    ]
  },
  {
    slug: "cit-strikes-section-122",
    date: "2026-05-11", dateLabel: "MAY 11 2026", tag: "MKT STRUCTURE", color: "var(--purple)", mark: "122",
    title: "The trade court struck down the replacement tariff and nothing moved",
    dek: "The Court of International Trade held the Section 122 surcharge invalid on May 7. Equities barely registered it.",
    thesis: "The market has stopped pricing individual tariff rulings because it has learned the effective rate gets rebuilt under a different statute within days. It is now pricing the authority, not the instrument.",
    breaks: "A future adverse ruling produces a durable drop in the effective tariff rate with no substitute authority invoked inside a month.",
    blocks: [
      { mark: "may 7", color: "var(--purple)", text: "On May 7 the Court of International Trade struck down the 10% tariffs imposed under Section 122, another adverse ruling for the administration's trade agenda. On the face of it this is a large fiscal and inflation event. The tape treated it as procedural." },
      { mark: "why", color: "var(--faint)", text: "I do not think that reaction was complacency. It was pattern recognition. The February sequence taught the market the shape of this: an authority gets struck down, and a replacement authority is announced the same day or close to it. The rate has round-tripped often enough that traders now discount the ruling and wait for the substitute." },
      { mark: "note", color: "var(--accent)", text: "I am not taking a side on whether any of this is good law or good policy. What matters for pricing is narrower: legal authority can change policy faster than economics can, and injunctions and stays determine whether a tariff is in force, for whom, and for how long. That is a different risk model than the one most macro frameworks are built for." },
      { mark: "hold", color: "var(--faint)", text: "The practical takeaway for anyone with import exposure is that the headline rate and the collected rate are different numbers, and the gap between them is a function of litigation calendars. Position on the calendar, not the announcement." }
    ]
  },
  {
    slug: "tariff-stacking",
    date: "2026-04-20", dateLabel: "APR 20 2026", tag: "MKT STRUCTURE", color: "var(--purple)", mark: "stack",
    title: "The headline tariff rate is not the rate anyone pays",
    dek: "Steel and aluminum went from 25% to 50% on April 6. What an importer actually owes depends on stacking, exemptions and drawback.",
    thesis: "Effective tariff incidence is set by the interaction of overlapping programs, not by any single announced rate, so company-level exposure is far more dispersed than the headline suggests.",
    breaks: "Reported input costs across import-heavy sectors converge toward the announced headline rate, which would mean stacking effects are second order.",
    blocks: [
      { mark: "50%", color: "var(--down)", text: "Section 232 duties on steel and aluminum were raised from 25% to 50% effective April 6, covering derivative products, with UK-origin metal held at 25%. That is the kind of line that gets reported as one number and lands as a dozen different numbers." },
      { mark: "layers", color: "var(--faint)", text: "The layers matter. Section 232 program rates sit on top of base MFN duty. Section 301 duties apply in addition to existing rates for covered origins. Europe and Japan have caps above normal Column 1 rates, some duties are eligible for drawback, and some programs never stacked on 232 articles at all." },
      { mark: "read", color: "var(--accent)", text: "For anyone modelling margin impact this is the entire exercise. Two companies importing the same tariff code from different origins, one eligible for drawback and one not, can face effective rates that differ by more than the headline change being reported. Sector-level tariff analysis mostly measures the wrong thing." },
      { mark: "next", color: "var(--faint)", text: "There is more of this coming rather than less. USTR has an open Section 301 investigation into structural excess manufacturing capacity covering sixteen major trading partners, with any action landing later in 2026 after consultation. The instrument keeps changing. The incidence question does not." }
    ]
  },
  {
    slug: "worst-quarter-since-2022",
    date: "2026-04-03", dateLabel: "APR 03 2026", tag: "CROSS-ASSET", color: "var(--accent)", mark: "−4.6%",
    title: "Worst quarter since 2022, and the diversification did not work",
    dek: "A supply shock is the one shape of drawdown a balanced portfolio cannot hedge, and Q1 was a supply shock.",
    thesis: "The Q1 drawdown was an energy supply shock transmitted through the inflation channel, which is why bonds offered no offset and energy equity was the only place to hide.",
    breaks: "Stock-bond correlation returns to negative and holds through a second risk-off episode, meaning Q1 was regime noise rather than a regime.",
    blocks: [
      { mark: "−4.6%", color: "var(--down)", text: "The S&P 500 fell nearly 4.6% for the quarter, its worst since 2022, and the Nasdaq closed more than 10% below its October high, a correction. Markets muddled through the first two months of the year and then the war arrived." },
      { mark: "$100", color: "var(--down)", text: "Brent above $100 for the first time since the summer of 2022, after an extended stretch where crude largely held between $60 and $70. Gasoline soared with it. Energy names were the best performers in the index for the month and the quarter, with Exxon posting its largest quarterly gain on FactSet data." },
      { mark: "hedge", color: "var(--faint)", text: "This is the part worth internalising. In a demand shock, bonds rally as equities fall and the balanced portfolio does its job. In a supply shock, the same event raises inflation and lowers growth at once, so duration does not help. Investors who thought they owned a hedge owned a correlated position." },
      { mark: "europe", color: "var(--accent)", text: "Europe took the sharper version of it, with input costs surging, output stalling and confidence falling at the same time, which is stagflation by any working definition and leaves a central bank with no clean move." }
    ]
  },
  {
    slug: "shadow-fleet-pricing",
    date: "2026-03-30", dateLabel: "MAR 30 2026", tag: "MKT STRUCTURE", color: "var(--purple)", mark: "fleet",
    title: "When the shadow fleet sets the clearing price",
    dek: "With Hormuz frozen and insurers pricing the Gulf as high risk, the marginal barrel moves on tonnage nobody wants to underwrite.",
    thesis: "The oil price in a blockade is set by the cost and availability of willing tonnage, not by barrels in the ground, and sanctioned or uninsured vessels became the marginal carrier.",
    breaks: "Freight and war-risk premia normalise while crude stays elevated, which would mean the price was about supply rather than shipping capacity all along.",
    blocks: [
      { mark: "20mbd", color: "var(--down)", text: "With the Strait of Hormuz designated a high-risk zone by international insurers, the flow of roughly 20 million barrels a day, close to a fifth of global consumption, slowed to a trickle. Brent traded above $106 in late March. Iran's new Supreme Leader vowed to keep the strait shut as leverage." },
      { mark: "reroute", color: "var(--faint)", text: "The market did what markets do and found a way around. Roughly 7 million barrels a day were piped to the Red Sea that would normally have gone out through the Persian Gulf. Those workarounds then became the new vulnerability, and the Houthi blockade of Bab al-Mandeb closed another exit for around 5 million barrels a day of Saudi oil." },
      { mark: "who", color: "var(--purple)", text: "That is where the fleet question becomes the price question. When mainstream owners and their insurers will not enter a zone, the cargo that still moves is carried by tonnage operating outside that system, older vessels with opaque ownership and cover that would not survive scrutiny. Those operators price the risk they are taking, and that price becomes the clearing price for everyone." },
      { mark: "read", color: "var(--accent)", text: "So the useful indicators during a closure are not inventory statistics. They are war-risk premia, day rates on the routes that still function, and how much of the flow is moving on hulls the insurance market does not recognise. Barrels existing somewhere is not supply. Barrels someone will carry is supply." }
    ]
  },
  {
    slug: "hormuz-risk-premium",
    date: "2026-03-04", dateLabel: "MAR 04 2026", tag: "CROSS-ASSET", color: "var(--accent)", mark: "+13%",
    title: "The first move in crude was a premium, not a shortage",
    dek: "Brent jumped 10 to 13% in days. Physical barrels had not gone missing yet.",
    thesis: "The initial repricing was a geopolitical risk premium rather than tight spot supply, which means the level was hostage to headlines rather than to inventory.",
    breaks: "Physical differentials and time spreads tighten in line with the flat price, which would show the move was a real shortage from the start.",
    blocks: [
      { mark: "$80", color: "var(--down)", text: "The conflict caused immediate volatility, with Brent surging 10 to 13% to around $80 to $82 a barrel by March 2, following the late-February escalation. Precious metals rallied alongside it, which is usually the signal that you are watching risk pricing rather than a barrel shortage." },
      { mark: "premium", color: "var(--faint)", text: "The distinction matters for how you trade it. The early increase primarily reflected a geopolitical risk premium rather than actual tight spot supply. A premium can be unwound by a headline in an afternoon. A shortage cannot. Same flat price, completely different risk profile." },
      { mark: "then", color: "var(--accent)", text: "The shortage came later, when the strait actually froze and the IEA was describing the largest supply disruption in the history of the global oil market. That is the sequence worth remembering: the market prices the possibility first, and only later finds out whether the possibility was correctly sized." },
      { mark: "size", color: "var(--faint)", text: "Sell-side revisions tracked the same lag. By mid-March brokerages were reworking 2026 averages while broadly expecting prices to stabilise later in the year, with Goldman around $75 Brent for the twelve-month view even as spot ran far above it. The forward curve did not believe the spot market, and on that occasion the forward curve was right." }
    ]
  },
  {
    slug: "ieepa-struck-down",
    date: "2026-02-23", dateLabel: "FEB 23 2026", tag: "MKT STRUCTURE", color: "var(--purple)", mark: "6-3",
    title: "The tariff regime was struck down and replaced on the same day",
    dek: "The Supreme Court ended IEEPA tariffs on February 20. A Section 122 surcharge was proclaimed within hours.",
    thesis: "The binding variable for trade pricing is which statute is available, not which tariff is announced, because the effective rate can be reconstructed under a different authority faster than the market can reprice the old one.",
    breaks: "A struck-down tariff program goes unreplaced for a full quarter, leaving the effective rate materially lower.",
    blocks: [
      { mark: "feb 20", color: "var(--purple)", text: "The Supreme Court held 6-3, Chief Justice Roberts writing, that IEEPA does not authorize the President to impose tariffs, reasoning that the tariff power is a branch of the taxing power reserved to Congress under Article I. The Federal Circuit had already called the tariffs unbounded in scope, amount, and duration." },
      { mark: "same day", color: "var(--faint)", text: "The replacement was immediate. On the same day the President signed a proclamation imposing a temporary 10% import surcharge under Section 122, and an executive order stating IEEPA tariffs would no longer be collected. CBP halted IEEPA collections by February 23, and the Section 122 surcharge applied from February 24." },
      { mark: "refunds", color: "var(--accent)", text: "The refund question is the live one and it is not resolved. The decision invalidated billions in duties collected over the prior year, nearly 2,000 importer cases were already filed at the CIT, and the government had stipulated in January that it would refund unlawfully collected duties following a final and unappealable decision. Kavanaugh, in dissent, called the refund process a mess." },
      { mark: "flat", color: "var(--faint)", text: "I am not going to argue the merits here. The market-relevant fact is neutral and simple: the effective rate barely moved, the legal basis for it changed completely, and the timeline for anyone owed money runs in years rather than quarters. If you are carrying a refund receivable, treat it as a litigation asset, not a rebate." }
    ]
  },
  {
    slug: "fed-chair-race-is-a-curve-trade",
    date: "2026-01-14", dateLabel: "JAN 14 2026", tag: "RATES", color: "var(--accent)", mark: "42%",
    title: "The Fed chair succession is a curve trade, not a level trade",
    dek: "Warsh leads the prediction markets. What that changes is the shape of the curve, not where policy sits today.",
    thesis: "A chair transition reprices the expected reaction function and the balance sheet path, so it belongs in the shape of the curve rather than in the level of the front end.",
    breaks: "The announcement moves the front end more than the belly and the curve shape is unchanged a month later.",
    blocks: [
      { mark: "42%", color: "var(--faint)", text: "Prediction markets have Warsh at around 42% for the chair, with Hassett close behind, and the President has said the successor is chosen but undisclosed. Powell's term as chair ends in May. This is one of the few macro events where the timing is known and only the name is uncertain." },
      { mark: "why", color: "var(--accent)", text: "The market habit is to translate a chair pick straight into cut expectations. I think that skips a step. A chair does not set the funds rate alone, and a committee that suspects it is being pushed has an incentive to demonstrate otherwise. What a new chair does change is the reaction function and the balance sheet, and those live in the belly and the long end." },
      { mark: "warsh", color: "var(--faint)", text: "Warsh in particular is not a simple dovish trade. He has argued recently for lower policy rates, and analysts have paired that with the expectation of a smaller balance sheet. Lower rates with less duration absorbed by the central bank is a steepener, not a rally." },
      { mark: "trade", color: "var(--accent)", text: "So the expression is in the shape. If you are long the front end into the announcement because the nominee is perceived as dovish, you are taking a view on twelve votes you have not counted." }
    ]
  },
  {
    slug: "yen-carry-transmission",
    date: "2025-12-15", dateLabel: "DEC 15 2025", tag: "CROSS-ASSET", color: "var(--accent)", mark: "carry",
    title: "Yen carry is the transmission line nobody puts on the chart",
    dek: "Japanese yields rose, global liquidity tightened, and the assets that fell hardest had nothing to do with Japan.",
    thesis: "Rising JGB yields drain global liquidity through the carry channel, which is why the fastest-moving risk assets sell off first regardless of their own fundamentals.",
    breaks: "A sustained rise in Japanese yields passes without a matching drawdown in high-beta risk assets.",
    blocks: [
      { mark: "JGB", color: "var(--down)", text: "The November and December risk-off had three named causes: a divided Fed on the December cut, surging Japanese yields draining global liquidity, and AI and tech selling spilling into everything else. The second one is the one that gets left out of most write-ups, and it is the one that explains the cross-asset pattern." },
      { mark: "chain", color: "var(--faint)", text: "The mechanism is not complicated. Cheap yen funding supports leveraged positions in assets far away from Japan. When the funding leg reprices, the positions have to shrink, and what gets sold first is whatever is most liquid and most levered, not whatever is most overvalued. Crypto and high-beta tech fit that description better than anything else." },
      { mark: "$4bn", color: "var(--down)", text: "You can see it in the flows. Bitcoin ETFs saw record outflows of about $4bn in November, and the crash commentary attributed it to Fed uncertainty, the Japan carry unwind, and general risk aversion, with the fear index at 23. Those are funding explanations, not thesis explanations." },
      { mark: "use", color: "var(--accent)", text: "The practical use is as an early warning. If you hold anything that is implicitly funded in yen, and most levered risk is, then the JGB curve is one of your risk factors whether or not it appears in your model." }
    ]
  },
  {
    slug: "november-unwind-was-funding",
    date: "2025-11-24", dateLabel: "NOV 24 2025", tag: "CRYPTO", color: "var(--amber)", mark: "391k",
    title: "The November unwind was a funding event wearing a crypto costume",
    dek: "$2bn liquidated in a day and 391,000 accounts closed out. Almost none of that was anyone changing their mind.",
    thesis: "The move was a leverage cascade through thin books rather than a repricing of fundamentals, so the depth of the drawdown says more about market structure than about conviction.",
    breaks: "A comparable drawdown occurs with open interest and funding rates roughly unchanged, which would point to real selling rather than forced selling.",
    blocks: [
      { mark: "$81k", color: "var(--down)", text: "On November 21 the market erased over $2bn in leveraged positions inside 24 hours. Bitcoin slipped below support near $85,000 and touched $81,050, its lowest since April, with 391,000 traders liquidated and the fear and greed index at 11, a level last seen around the FTX collapse." },
      { mark: "31%", color: "var(--faint)", text: "The peak-to-trough context: down about 31% from the $126,000 October high, with total market cap below $3 trillion for the first time in months and altcoins off 20% to 35% from their November highs. That dispersion, majors down a third and alts down more, is a liquidity signature, not an information signature." },
      { mark: "seq", color: "var(--amber)", text: "The order of events is the argument. Price approaches a level where a cluster of positions is margined, those positions are closed by the exchange rather than the owner, the closes are market orders into a book that has thinned out because everyone is de-risking at once, and the next cluster gets hit. Nobody in that chain is expressing a view." },
      { mark: "macro", color: "var(--accent)", text: "The macro context set the table, with a divided Fed, rising Japanese yields, and ETF redemptions after a year of inflows. But the shape and speed of the move were structural, and structure is why it went so much further than the news justified." }
    ]
  }
];
export default POSTS;
