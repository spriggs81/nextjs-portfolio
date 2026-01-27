const caseStudies = [
    {
        id: "vizexplorer-pm2-restart-loop",
        title: "Resolving a Recurring Midnight Production Outage Caused by Rapid Process Restarts",
        company: "Enterprise Gaming Analytics Vendor",
        role: "Senior Technical Support Engineer",
        environment: {
        runtime: ["Node.js", "PM2"],
        hosting: "Client-hosted Windows server",
        systemConstraints: [
            "24/7 casino operations",
            "Zero tolerance for extended downtime",
            "Client-controlled infrastructure"
        ]
        },
        problem: {
        summary:
            "A major client experienced a daily outage between midnight and 1:00 AM where the application appeared online but stopped processing or displaying data.",
        userImpact: [
            "Application appeared functional but was effectively frozen",
            "No new data could be viewed or stored",
            "Operational impact during active casino hours"
        ],
        timing: {
            window: "12:00 AM – 1:00 AM",
            duration: "5–10 minutes",
            frequency: "Daily"
        }
        },
        priorInvestigation: {
        teamsInvolved: [
            "Support",
            "Systems Engineering",
            "Database Administration",
            "Install / Config teams"
        ],
        actionsTaken: [
            "Log review",
            "System analysis",
            "Client-side troubleshooting",
            "Application version upgrade"
        ],
        outcome: "No root cause identified; issue persisted after upgrade"
        },
        investigation: {
        initialFocus: [
            "Application logs",
            "Internal process monitoring"
        ],
        keyObservation:
            "Logs indicated repeated database restarts despite no actual database disconnects occurring.",
        contradiction:
            "PM2 restarts were occurring too quickly for database connections to fully release."
        },
        insight: {
        incorrectAssumption:
            "The database connection was being cleanly reset during each application restart.",
        actualBehavior:
            "PM2 restarted the process so quickly that the application repeatedly reattached to a stale database connection, looping until the database forcefully dropped it."
        },
        resolution: {
        changeType: "Configuration-only",
        pm2Setting: {
            key: "exp_backoff_restart_delay",
            value: 100,
            description:
            "Introduced an increasing delay between restarts to allow database connections to fully close."
        },
        codeChangesRequired: false,
        whyItWorked:
            "The delayed restart allowed stale connections to terminate properly and ensured clean reconnections."
        },
        outcome: {
        immediateResult:
            "The outage no longer occurred during the next scheduled midnight window.",
        longTermImpact:
            "The configuration was added to future releases to prevent similar failures across other client deployments."
        },
        skillsDemonstrated: [
        "Production incident debugging",
        "Log analysis",
        "Systems-level troubleshooting",
        "Failure-mode analysis",
        "PM2 process management",
        "Root cause analysis"
        ]
    },

    {
        id: "financial-transaction-reconciliation",
        title: "Uncovering Systemic Transaction Failures via Data Forensics",
        company: "Fintech Platform (Plaid-integrated)",
        role: "Senior Technical Support Engineer",

        environment: {
            runtime: ["Node.js"],
            hosting: "Heroku (Linux, cloud-hosted)",
            systemConstraints: [
            "Financial impact",
            "Production system",
            "Third-party vendor dependency (Plaid)"
            ]
        },

        problem: {
            summary:
            "Transactions appeared permanently pending due to missing vendor transaction IDs, preventing status updates and reconciliation.",
            userImpact: [
            "Customer balances showed unpaid or incorrect amounts",
            "Users lost access to available credit",
            "Account statements were inaccurate",
            "Potential negative impact to user credit"
            ],
            timing: {
            frequency: "Ongoing",
            duration: "Undetected for multiple years (2018–2021)"
            }
        },

        priorInvestigation: {
            teamsInvolved: [
            "CTO",
            "Director of Engineering"
            ]
        },

        insight: {
            incorrectAssumption:
            "Each incident was an isolated, one-off vendor issue caused by a missing transaction ID.",
            actualBehavior:
            "By comparing transaction tables against transaction update logs, I identified a systemic pattern: thousands of transactions had invalid or missing vendor IDs due to repeated API rate-limit failures (HTTP 429), leaving them permanently unreconciled."
        },

        resolution: {
            whyItWorked:
            "I proposed validating transactions directly against the vendor’s API as the source of truth and updating local records only when verification succeeded, allowing accurate recovery without canceling legitimate transactions.",
            codeChangesRequired: true
        },

        outcome: {
            immediateResult:
            "Over 1,300 user accounts and 15,000+ transactions (>$250K) were corrected without mass cancellation or customer-facing fallout.",
            longTermImpact:
            "The reconciliation logic was incorporated into existing support workflows, reducing engineering involvement and preventing recurrence through regular validation checks."
        },

        skillsDemonstrated: [
            "SQL forensics",
            "Pattern recognition in production data",
            "Log analysis (API rate limiting)",
            "Financial risk assessment",
            "Cross-team technical influence",
            "Production incident judgment"
        ]
    },

    {
        id: "auth-credential-corruption-recovery",
        title: "Rapid Recovery from Credential Store Corruption Under Disk Exhaustion",
        company: "Enterprise Gaming Analytics Vendor",
        role: "Senior Technical Support Engineer",
        environment: {
            runtime: ["Node.js", "Application Server"],
            hosting: "Client-hosted Microsoft Windows Server",
            systemConstraints: [
            "24/7 casino operations",
            "No acceptable downtime",
            "Client-managed infrastructure"
            ]
        },
        problem: {
            summary:
            "A full disk caused a critical user credential file to be corrupted during a write operation, resulting in all users losing access to the application.",
            userImpact: [
            "All users were unable to log in as if no accounts existed",
            "Casino operations were disrupted due to loss of system access"
            ],
            timing: {
            duration: "30–45 minutes of active user impact"
            }
        },
        priorInvestigation: {
            teamsInvolved: [
            "VP of Engineering",
            "Director of Database Administration and Systems Engineering"
            ]
        },
        insight: {
            incorrectAssumption:
                "The only way to restore user access was to wait for the client to provide their original user configuration and credential files.",
            actualBehavior:
                "I recognized that the database already contained a reliable source of truth for user identities through historical activity records and proposed reconstructing accounts directly from the database to immediately restore access."
        },
        resolution: {
            whyItWorked:
                "I first stabilized the system by freeing disk space, then proposed and guided the recovery approach of extracting user identities from the database to rebuild access without waiting on external client data. Leadership adopted this approach, enabling rapid restoration under active outage conditions.",
            codeChangesRequired: false
        },
        outcome: {
            immediateResult:
                "User access was restored within the outage window, database activity resumed, and the client confirmed full operational recovery.",
            longTermImpact:
                "This incident led me to proactively audit disk capacity and log growth on all client systems I accessed, preventing similar credential corruption incidents in future engagements."
        },
        skillsDemonstrated: [
            "Incident response",
            "Root cause analysis",
            "Systems troubleshooting",
            "Database reasoning",
            "Operational decision-making",
            "Production recovery under pressure"
        ]
    }
];

export default caseStudies;
