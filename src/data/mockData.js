export const INITIAL_PRODUCTS = [
  {
    id: "PRD-001",
    sku: "SKU-SRV-902",
    name: "Enterprise Edge Server Rack 42U",
    category: "Hardware",
    description: "High-density server enclosure with integrated cable management and PDU mounts",
    costPrice: 850.00,
    unitPrice: 1450.00,
    stockQuantity: 14,
    lowStockThreshold: 10,
    unit: "Units",
    updatedAt: "2026-10-23"
  },
  {
    id: "PRD-002",
    sku: "SKU-NET-408",
    name: "Managed L3 48-Port Switch",
    category: "Networking",
    description: "10GbE SFP+ uplinks, enterprise PoE+ 740W power budget",
    costPrice: 420.00,
    unitPrice: 790.00,
    stockQuantity: 6, // Low stock!
    lowStockThreshold: 8,
    unit: "Units",
    updatedAt: "2026-10-23"
  },
  {
    id: "PRD-003",
    sku: "SKU-OPT-102",
    name: "Fiber Optic Transceiver 10G-LR",
    category: "Networking",
    description: "Single-mode optical transceiver module, 1310nm, 10km reach",
    costPrice: 28.50,
    unitPrice: 65.00,
    stockQuantity: 4, // Critical low stock!
    lowStockThreshold: 15,
    unit: "Units",
    updatedAt: "2026-10-22"
  },
  {
    id: "PRD-004",
    sku: "SKU-PWR-330",
    name: "Industrial Smart UPS 3000VA",
    category: "Hardware",
    description: "Online double-conversion rackmount power supply with hot-swappable batteries",
    costPrice: 620.00,
    unitPrice: 1120.00,
    stockQuantity: 18,
    lowStockThreshold: 5,
    unit: "Units",
    updatedAt: "2026-10-23"
  },
  {
    id: "PRD-005",
    sku: "SKU-CAB-884",
    name: "Cat6A Shielded Patch Cable (100m Drum)",
    category: "Cabling",
    description: "Solid copper 10Gbps low-smoke zero halogen Ethernet cable",
    costPrice: 45.00,
    unitPrice: 89.00,
    stockQuantity: 32,
    lowStockThreshold: 12,
    unit: "Reels",
    updatedAt: "2026-10-21"
  },
  {
    id: "PRD-006",
    sku: "SKU-SEN-711",
    name: "Thermal & Humidity IoT Sensor Probe",
    category: "IoT Sensors",
    description: "Modbus/RS485 environmental telemetry sensor for server rooms",
    costPrice: 35.00,
    unitPrice: 75.00,
    stockQuantity: 3, // Low stock!
    lowStockThreshold: 10,
    unit: "Units",
    updatedAt: "2026-10-23"
  }
];

export const INITIAL_ORDERS = [
  {
    id: "SO-2026-8801",
    customer: "Titan Data Centers Ltd",
    date: "2026-10-23",
    items: [
      { sku: "SKU-SRV-902", name: "Enterprise Edge Server Rack 42U", qty: 2, unitPrice: 1450.00 },
      { sku: "SKU-PWR-330", name: "Industrial Smart UPS 3000VA", qty: 2, unitPrice: 1120.00 }
    ],
    totalAmount: 5140.00,
    status: "Confirmed", // Draft, Confirmed, Shipped, Cancelled
    createdBy: "sales@enterprise-erp.com",
    roleAllowedToConfirm: ["Admin", "Manager"]
  },
  {
    id: "SO-2026-8802",
    customer: "Global Pacific Telecom",
    date: "2026-10-23",
    items: [
      { sku: "SKU-NET-408", name: "Managed L3 48-Port Switch", qty: 4, unitPrice: 790.00 },
      { sku: "SKU-OPT-102", name: "Fiber Optic Transceiver 10G-LR", qty: 8, unitPrice: 65.00 }
    ],
    totalAmount: 3680.00,
    status: "Draft",
    createdBy: "employee@enterprise-erp.com",
    roleAllowedToConfirm: ["Admin", "Manager"]
  },
  {
    id: "SO-2026-8799",
    customer: "Apex Cloud Solutions",
    date: "2026-10-22",
    items: [
      { sku: "SKU-CAB-884", name: "Cat6A Shielded Patch Cable (100m Drum)", qty: 6, unitPrice: 89.00 },
      { sku: "SKU-SEN-711", name: "Thermal & Humidity IoT Sensor Probe", qty: 10, unitPrice: 75.00 }
    ],
    totalAmount: 1284.00,
    status: "Shipped",
    createdBy: "sales@enterprise-erp.com",
    roleAllowedToConfirm: ["Admin", "Manager"]
  },
  {
    id: "SO-2026-8795",
    customer: "Vanguard Systems Corp",
    date: "2026-10-21",
    items: [
      { sku: "SKU-SRV-902", name: "Enterprise Edge Server Rack 42U", qty: 1, unitPrice: 1450.00 }
    ],
    totalAmount: 1450.00,
    status: "Cancelled",
    createdBy: "employee@enterprise-erp.com",
    roleAllowedToConfirm: ["Admin", "Manager"]
  }
];

export const USER_ROLES = [
  {
    role: "Admin",
    title: "Administrator",
    color: "indigo",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    description: "Complete system governance, role provisioning, security settings, and full data modification rights across all modules.",
    defaultUser: "admin@nexus-erp.com",
    permissions: [
      { feature: "User & Role Management", access: "Full Access (Create, Edit, Revoke)" },
      { feature: "Product Catalog (REQ-2.1)", access: "Full CRUD (Create, Read, Update, Delete)" },
      { feature: "Inventory Stock Adjustments (REQ-2.2)", access: "Unlimited Adjustment Authority" },
      { feature: "Low Stock Threshold Config (REQ-2.3)", access: "Can modify warning thresholds" },
      { feature: "Sales Order Creation (REQ-3.1)", access: "Create, Modify & Void Orders" },
      { feature: "Sales Order Approvals (REQ-3.2)", access: "Approve & Confirm (Triggers stock deduction)" },
      { feature: "System Audit Logs & Telemetry", access: "Full Read & Export" }
    ]
  },
  {
    role: "Manager",
    title: "Operations Manager",
    color: "emerald",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description: "Supervises inventory thresholds, approves pending sales orders, performs stock level adjustments, and analyzes reports.",
    defaultUser: "manager@nexus-erp.com",
    permissions: [
      { feature: "User & Role Management", access: "Read-only team directory" },
      { feature: "Product Catalog (REQ-2.1)", access: "Full CRUD (Create, Read, Update, Delete)" },
      { feature: "Inventory Stock Adjustments (REQ-2.2)", access: "Authorized Stock Adjustments" },
      { feature: "Low Stock Threshold Config (REQ-2.3)", access: "Can set reorder points" },
      { feature: "Sales Order Creation (REQ-3.1)", access: "Create & Review Orders" },
      { feature: "Sales Order Approvals (REQ-3.2)", access: "Approve & Confirm (Triggers stock deduction)" },
      { feature: "System Audit Logs & Telemetry", access: "Departmental activity view" }
    ]
  },
  {
    role: "Employee",
    title: "Sales & Operations Associate",
    color: "amber",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description: "Front-line operational staff. Can create sales order drafts, view product catalog availability, and monitor order fulfillment.",
    defaultUser: "sales@nexus-erp.com",
    permissions: [
      { feature: "User & Role Management", access: "No access" },
      { feature: "Product Catalog (REQ-2.1)", access: "Read-only product catalog & pricing" },
      { feature: "Inventory Stock Adjustments (REQ-2.2)", access: "View available stock quantities" },
      { feature: "Low Stock Threshold Config (REQ-2.3)", access: "View low stock warning flags" },
      { feature: "Sales Order Creation (REQ-3.1)", access: "Draft new sales orders" },
      { feature: "Sales Order Approvals (REQ-3.2)", access: "Restricted (Requires Manager/Admin approval)" },
      { feature: "System Audit Logs & Telemetry", access: "Self-activity logs only" }
    ]
  }
];

export const ROADMAP_PHASES = [
  {
    phase: "Phase 1: Core Operations MVP",
    status: "CURRENT FOCUS",
    statusColor: "emerald",
    active: true,
    modules: [
      { name: "Auth & RBAC (REQ-1)", desc: "Email/password authentication with bcrypt hashing, JWT tokens, and Admin/Manager/Employee role access." },
      { name: "Inventory Management (REQ-2)", desc: "SKU catalog, real-time stock counters, unit/cost prices, automated low-stock warnings." },
      { name: "Sales Order Processing (REQ-3)", desc: "Order creation, live order states (Draft/Confirmed/Shipped/Cancelled), automated stock deduction on confirmation." },
      { name: "Central Dashboard (REQ-4)", desc: "High-level metrics: Total sales today/month, active orders, and low-stock telemetry." }
    ]
  },
  {
    phase: "Phase 2: Financials & Receivables",
    status: "NEXT PHASE",
    statusColor: "indigo",
    active: false,
    modules: [
      { name: "Invoicing & Billing Engine", desc: "Convert confirmed sales orders into formal invoices with tax calculation and payment terms." },
      { name: "Accounts Receivable (AR)", desc: "Track customer balances, payment reconciliation, aging reports, and cash collection receipts." },
      { name: "General Ledger Integration", desc: "Automated double-entry ledger postings for revenue and cost of goods sold (COGS)." }
    ]
  },
  {
    phase: "Phase 3: Procurement & Supply Chain",
    status: "SCHEDULED",
    statusColor: "cyan",
    active: false,
    modules: [
      { name: "Vendor Management", desc: "Supplier directory, performance ratings, contracted pricing, and lead-time tracking." },
      { name: "Purchase Orders (PO)", desc: "Automated replenishment purchase orders when inventory hits the low-stock threshold." },
      { name: "Goods Received Note (GRN)", desc: "Warehouse intake verification, barcode scanning, and direct stock incrementing." }
    ]
  },
  {
    phase: "Phase 4: Human Capital & Payroll",
    status: "FUTURE EXPANSION",
    statusColor: "purple",
    active: false,
    modules: [
      { name: "Employee Directory & Org Charts", desc: "Department structures, position hierarchies, and employee documentation." },
      { name: "Leave & Attendance Tracker", desc: "Paid time off, sick leaves, manager approval workflows, and clock-in telemetry." },
      { name: "Payroll Calculation & Tax Withholding", desc: "Automated salary disbursements, deduction schedules, and payslip generation." }
    ]
  }
];
