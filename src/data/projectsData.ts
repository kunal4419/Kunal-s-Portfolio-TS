export interface UserRole {
  title: string;
  purpose: string;
  permissions: string[];
}

export interface ScreenshotItem {
  title: string;
  url: string;
}

export interface ProjectData {
  slug: string;
  num: string;
  title: string;
  fullTitle: string;
  subtitle: string;
  desc: string;
  summary: string;
  tech: string[];
  github: string;
  external?: string;
  isPrivate?: boolean;
  isUnderDevelopment?: boolean;
  projectType: string;
  userRoles: UserRole[];
  mainFeatures: { title: string; desc: string }[];
  flowTitle: string;
  flowSteps: string[];
  screenshots: ScreenshotItem[];
  detailsPath: string;
  readmePath: string;
}

export const projectsData: ProjectData[] = [
  {
    slug: "yourhrms-showcase",
    num: "01",
    title: "YOURHRMS",
    fullTitle: "Enterprise Human Resource Management System & Employee Self-Service",
    subtitle: "Multi-tenant Corporate HRMS & Biometric Face Punching App",
    desc: "Enterprise-grade HR Management app deployed on Google Play Store. Geolocation-validated attendance, FCM push notifications, ML Kit Face Recognition punch-in, and OTP authentication. Reduced app startup latency by 35% and delivery timelines by 25%.",
    summary: "YourHRMS is a multi-tenant Enterprise Human Resource Management System (HRMS) designed for corporate organizations, managers, and employees. It enables employees to record daily attendance via AI face recognition and GPS geofencing, submit leave applications, view work shifts, manage daily tasks, access salary payslips, and track client CRM follow-ups. HR Administrators and Managers can oversee company-wide attendance approvals, process leave requests, assign shifts, manage teams, generate PF/payroll reports, and onboard new employees.",
    tech: ["Flutter", "Provider", "Dio / HTTP", "ML Kit Face Detection", "GPS Geofencing", "Firebase FCM", "Local Biometrics", "Play Store"],
    github: "https://github.com/kunal4419/",
    external: "https://play.google.com/store/apps/details?id=com.sanpurnam.hrms",
    isPrivate: true,
    projectType: "Multi-tenant Enterprise Human Resource Management System built with Flutter, Provider, Dio, ML Kit, Firebase FCM & Biometrics",
    userRoles: [
      {
        title: "HR Administrator (admin)",
        purpose: "Organization-level HR administration, employee onboarding, attendance and leave approvals, shift configuration, payroll oversight, and team management.",
        permissions: [
          "Access Admin Dashboard with company-wide attendance, leave, and task analytics",
          "Onboard and create new employee profiles with company structural assignments",
          "Review, approve, or reject employee attendance punch-in/out records with remark fields",
          "Review, approve, or reject employee leave applications with reason dialogs",
          "Create and assign work shifts (shift start/end times, break durations, flexi-hours)",
          "Assign managers and associate employees into operational teams",
          "Manage company master data (departments, designations, branch office locations, geofence radii)",
          "View and generate payroll reports, PF reports, and monthly salary slips",
          "Oversee client CRM lists and assign client follow-up activities to teams"
        ]
      },
      {
        title: "Manager / Supervisor (manager)",
        purpose: "Team leadership, monitoring direct reports, approving team attendance/leaves, and assigning work tasks.",
        permissions: [
          "Access Team Management view to monitor assigned team members and direct reports",
          "View team daily attendance, punch-in timestamps, and real-time status",
          "Review and approve team member leave requests",
          "Create, assign, update, and track task history for team members",
          "Manage client follow-ups and assign client activities to team associates"
        ]
      },
      {
        title: "Employee (employee)",
        purpose: "Regular staff member recording daily attendance, managing work tasks, requesting leaves, and viewing personal payroll information.",
        permissions: [
          "Perform daily attendance punch-in and punch-out using AI Face Detection and GPS Geofencing",
          "View personal attendance summary, monthly attendance calendar, and late punch-in remarks",
          "Apply for leaves (Casual, Sick, Earned), track leave balances, and view approval status",
          "View assigned work shifts, company calendar, and official holidays",
          "Access personal tasks, update progress, upload proof/documents, complete tasks",
          "Download and view monthly salary payslips and PF statements",
          "Log client interactions, follow-ups, and sales/service activities",
          "Edit personal profile details and configure app language (4 languages)"
        ]
      }
    ],
    mainFeatures: [
      { title: "Multi-Tenant 2-Stage Authentication", desc: "OTP-based company domain verification stage followed by user credential login with JWT token lifecycle management." },
      { title: "Biometric AI Face Recognition Punch", desc: "In-app camera integration with Google ML Kit Face Detection ensuring valid face capture during attendance punch." },
      { title: "GPS Geofencing & Location Tracking", desc: "Geofenced branch location validation ensuring punches occur within designated office radii combined with background tracking." },
      { title: "Comprehensive Leave Management", desc: "Modern leave application system supporting multi-type leave balance tracking, document attachments, and multi-tier approval workflows." },
      { title: "Shift & Attendance Management", desc: "Shift assignment, daily attendance logs, late/early punch remarks, attendance calendar, and admin approval workflows." },
      { title: "Payroll & Digital Payslips", desc: "Generate, view, and download PDF salary payslips and PF reports using Syncfusion PDF viewer." }
    ],
    flowTitle: "System / Operational Flow",
    flowSteps: [
      "Company Domain Verification: User verifies company domain via OTP to connect to organization backend.",
      "Employee Login: User logs in with employee credentials, receiving JWT tokens stored securely.",
      "Daily Punch-In: App checks GPS geofence radius and captures selfie via camera with ML Kit face validation.",
      "Task & Activity Logging: Employee views assigned tasks, updates progress status, and logs client follow-ups.",
      "Leave Application: Employee checks leave balances, selects dates, attaches proof, and submits request.",
      "Manager/Admin Approval: Manager receives FCM push notification, reviews request on approval page, and approves/rejects.",
      "Shift Reconciliation: Admin views daily attendance charts, resolves discrepancies, and assigns shifts.",
      "Payroll & Payslip Access: HR generates payroll; employees preview or download digital PDF payslips."
    ],
    screenshots: [
      { title: "Attendance Summary", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/AttendacneSummary.png" },
      { title: "Attendance Punch", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/Attendance.png" },
      { title: "Attendance Pie Chart", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/AttendancePieChart.png" },
      { title: "Dashboard Page", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/DashboardPage.png" },
      { title: "Leave Application Page", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/LeavePage.png" },
      { title: "Login Page", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/LoginPage.png" },
      { title: "Sidebar Menu", url: "https://raw.githubusercontent.com/kunal4419/YourHRMS_Details/main/screenshots/Sidebar.png" }
    ],
    detailsPath: "/yourhrms-showcase/details/details.md",
    readmePath: "/yourhrms-showcase/README.md"
  },
  {
    slug: "gym-reminder-showcase",
    num: "02",
    title: "ONYX — GYM PLATFORM",
    fullTitle: "Gym Membership Management & Expiry Reminder System",
    subtitle: "Multi-tenant SaaS Gym Platform with 1-Tap WhatsApp Renewal Automation",
    desc: "Multi-tenant SaaS gym management platform with Supabase row-level security ensuring complete data isolation per gym owner. RBAC for Superadmin and Owner roles. Reduced missed renewals by 40% and manual follow-up effort by 60% via smart expiry filters and WhatsApp reminder automation.",
    summary: "Gym-Reminder-App (Onyx) is a mobile application designed for gym owners to manage member subscriptions and streamline WhatsApp membership renewal reminders. Gym owners can register members, set subscription plan durations (1, 3, 6, or 12 months), automatically calculate expiration dates, and send customizable 1-tap WhatsApp renewal notifications. The platform also includes a Super Admin role to onboard and manage gym owners, toggle gym account access, and monitor membership statistics across all registered gyms.",
    tech: ["Flutter", "Supabase", "Provider", "GoRouter", "WhatsApp URI Scheme", "Multi-tenant RLS", "Multi-language (EN/HI/MR)"],
    isPrivate: true,
    github: "https://github.com/kunal4419/ONYX_Details",
    external:"https://github.com/kunal4419/ONYX_Details/releases/download/oynx/OYNX.apk",
    projectType: "Multi-tenant SaaS Mobile App built with Flutter, Provider, GoRouter, and Supabase",
    userRoles: [
      {
        title: "Super Admin (superadmin)",
        purpose: "System-wide administrative oversight, gym owner account creation, account status management, and global platform monitoring.",
        permissions: [
          "Access global dashboard metrics (Total Owners, Total Members, Total Active, Expiring Today, Expiring Soon)",
          "Create and register new Gym Owner accounts with credentials",
          "View, edit, and update existing Gym Owner profiles",
          "Enable or disable (activate/deactivate) Gym Owner accounts",
          "View member lists across all registered gyms or filter member views by a specific gym",
          "Access multi-language localization settings (English, Hindi, Marathi)"
        ]
      },
      {
        title: "Gym Owner (owner)",
        purpose: "Managing gym members, tracking subscription expiration dates, sending WhatsApp reminders, and customizing message templates.",
        permissions: [
          "View Gym Dashboard metrics (Total Members, Active Members, Expiring Today, Expiring Soon)",
          "Register new members with name, phone number, start date, and plan duration",
          "Edit existing member details and automatically recalculate expiry dates",
          "Send 1-tap WhatsApp membership renewal reminders with pre-filled dynamic messages",
          "Track reminder history and delivery status (Never Reminded, Reminded Today, Last Reminder X days ago)",
          "Create and edit custom WhatsApp templates with dynamic placeholders ({name}, {expiry_date}, {days_left})",
          "Configure dashboard reminder ranges (0-7 days, 0-15 days, 0-30 days, or all expired)"
        ]
      }
    ],
    mainFeatures: [
      { title: "Role-Based Authentication & Supabase RLS", desc: "Secure authentication via Supabase with strict row-level security policies protecting tenant privacy." },
      { title: "Member Management & Dynamic Expiry", desc: "CRUD operations with automated subscription expiration calculation for 1, 3, 6, or 12 month plans." },
      { title: "1-Tap WhatsApp Integration", desc: "Direct WhatsApp messaging via URI schemes (whatsapp:// and wa.me fallback) pre-populated with member details." },
      { title: "Customizable Message Templates", desc: "Support for dynamic placeholders ({name}, {expiry_date}, {days_left}) in WhatsApp templates." },
      { title: "Reminder History & Duplicate Safeguard", desc: "Tracks last_reminder_sent_at timestamps and prompts confirmation before re-sending reminders on the same day." },
      { title: "Multi-Language Support", desc: "Full localization supporting English, Hindi (हिन्दी), and Marathi (मराठी)." }
    ],
    flowTitle: "Operational / Reminder Flow",
    flowSteps: [
      "Gym Owner Authentication: Owner logs into the app using email & password.",
      "Member Registration: Owner inputs member name, 10-digit phone, start date, and duration (1/3/6/12 months).",
      "Automated Expiry Calculation: System computes and sets exact expiration date.",
      "Dashboard Tracking: Member appears under Expiring Today, Expiring Soon, or Expired filter tabs.",
      "Select Reminder Template: Owner chooses standard or custom template with dynamic placeholders.",
      "Trigger WhatsApp Reminder: Owner taps WhatsApp button on expiring member card.",
      "Dynamic Message Assembly: App injects member variables and launches WhatsApp with pre-filled chat.",
      "Record Timestamp: App logs last_reminder_sent_at to prevent duplicate notifications on the same date."
    ],
    screenshots: [
      { title: "Login Page", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/LoginPage.png" },
      { title: "Owner Add New Member", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/OwnerAddNewMember.png" },
      { title: "Owner Home Page", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/OwnerHomePage.png" },
      { title: "Owner Manage Members", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/OwnerMangeMembers.png" },
      { title: "Owner Setting Page", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/OwnerSettingPage.png" },
      { title: "Super Admin Dashboard", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/SuperAdminDashboard.png" },
      { title: "Super Admin Manage Owners", url: "https://raw.githubusercontent.com/kunal4419/ONYX_Details/main/screenshots/SuperAdminManageOwners.png" }
    ],
    detailsPath: "/gym-reminder-showcase/details/details.md",
    readmePath: "/gym-reminder-showcase/README.md"
  },
  {
    slug: "medcard-showcase",
    num: "03",
    title: "MEDCARD — HEALTHCARE APP",
    fullTitle: "Digital Healthcare Ecosystem & Membership Platform",
    subtitle: "Healthcare Provider Discovery, Member Discounts & Camera QR Scanning",
    desc: "Dual-role healthcare service discovery app with fully independent navigation stacks for Providers and Subscribers. Geospatial provider discovery with map integration and QR scanning. Flutter frontend integrated with a Python backend via REST APIs using a centralised Dio interceptor layer.",
    summary: "MedCard ('One Card. Many Health Benefits.') is a digital healthcare platform designed to connect subscribers (patients/users) with verified healthcare service providers (hospitals, clinics, diagnostic labs, pharmacies). Subscribers can search for nearby providers using interactive maps, view detailed facility services and member discounts, purchase MedCard membership plans, and scan QR codes at provider locations for instant digital identification. The system also includes dedicated dashboards for Healthcare Providers and Field Executives.",
    tech: ["Flutter", "Provider", "Dio REST Client", "JWT Refresh", "Flutter Map", "Mobile Scanner", "QR Code Engine", "Connectivity Plus"],
    github: "https://github.com/kunal4419/MedCard_Details",
    external: "",
    isPrivate: true,
    isUnderDevelopment: true,
    projectType: "Cross-platform mobile application built with Flutter, Dio REST Client with JWT refresh interceptors, and OpenStreetMap",
    userRoles: [
      {
        title: "Subscriber (subscriber)",
        purpose: "Patient or end-user who searches for healthcare services, accesses membership discounts, and scans QR codes at medical facilities.",
        permissions: [
          "Register and log in using email/phone credentials",
          "Discover nearby healthcare providers via list view or interactive map (flutter_map)",
          "Filter providers by category, distance, ratings, and offered medical services",
          "Scan Provider QR codes using camera scanner (mobile_scanner) for instant lookup",
          "View detailed provider profiles, offered services, operating hours, and location directions",
          "Initiate direct phone call requests to providers",
          "Purchase and manage digital MedCard membership plans (Silver, Gold, Platinum)"
        ]
      },
      {
        title: "Healthcare Provider (provider)",
        purpose: "Medical facility (Hospital, Clinic, Lab, Pharmacy) managing service listings, setting subscriber discount rates, and handling patient inquiries.",
        permissions: [
          "Log in to Provider Dashboard to manage facility operations",
          "Generate and display facility QR codes using unique provider codes (e.g. PROV0000034)",
          "Manage facility profile, listing details, operating hours, and location coordinates",
          "Configure medical services and discount percentages for MedCard subscribers",
          "Track incoming subscriber call/contact requests in real time"
        ]
      },
      {
        title: "Field Executive (executive)",
        purpose: "Field agent responsible for onboarding new healthcare providers and subscribers, assigning QR codes, and managing ground registrations.",
        permissions: [
          "Access Executive Dashboard metrics (onboarded providers, registered subscribers, assigned QRs)",
          "Onboard and register new Healthcare Providers step-by-step with facility photos",
          "Onboard and register new Subscribers directly in the field",
          "Assign physical/digital QR codes to registered providers via camera QR scanner"
        ]
      }
    ],
    mainFeatures: [
      { title: "Multi-Role JWT Authentication", desc: "Multi-role login system (subscriber, provider, executive) with automatic Dio token refresh interceptor." },
      { title: "Provider Discovery & Interactive Map", desc: "Discover nearby healthcare providers via list view or embedded OpenStreetMap UI." },
      { title: "Camera QR Scanner & Extractor", desc: "Camera scanner parsing provider codes (PROV0000034) to load facility info instantly." },
      { title: "Provider QR Generation", desc: "In-app QR rendering using provider codes without exposing backend URL endpoints." },
      { title: "Digital Membership Plans", desc: "Browse and subscribe to tier-based MedCard membership plans (Silver, Gold, Platinum)." },
      { title: "Executive Field Onboarding", desc: "Multi-step field onboarding tool for executives to register providers and link QR codes." }
    ],
    flowTitle: "System / Operational Flow",
    flowSteps: [
      "App Launch & Auto-Login: App checks stored JWT tokens in secure storage and routes to role-specific dashboard.",
      "Provider Onboarding by Executive: Field executive registers hospital/clinic with photos & services.",
      "QR Code Assignment: Executive scans physical QR to link unique code (PROV0000034) to provider.",
      "Provider Login & QR Display: Facility owner logs in and displays generated MedCard QR code at reception.",
      "Subscriber Registration & Discovery: User joins MedCard, picks plan, and searches facilities on map.",
      "Scanning Provider QR: Subscriber opens scan tab and scans facility QR code.",
      "Instant Code Extraction: App parses provider ID, queries public API, and displays member discount rates.",
      "Direct Contact: Subscriber taps call button to place direct phone request to facility."
    ],
    screenshots: [
      { title: "App Overview 1", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image.png" },
      { title: "App Overview 2", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy.png" },
      { title: "App Overview 3", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%202.png" },
      { title: "App Overview 4", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%203.png" },
      { title: "App Overview 5", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%204.png" },
      { title: "App Overview 6", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%205.png" },
      { title: "App Overview 7", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%206.png" },
      { title: "App Overview 8", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%207.png" },
      { title: "App Overview 9", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%208.png" },
      { title: "App Overview 10", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%209.png" },
      { title: "App Overview 11", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%2010.png" },
      { title: "App Overview 12", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%2011.png" },
      { title: "App Overview 13", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%2012.png" },
      { title: "App Overview 14", url: "https://raw.githubusercontent.com/kunal4419/MedCard_Details/main/screenshots/image%20copy%2013.png" }
    ],
    detailsPath: "/medcard-showcase/details/details.md",
    readmePath: "/medcard-showcase/README.md"
  },
  {
    slug: "turf-booking-showcase",
    num: "04",
    title: "TURF BOOKING SYSTEM",
    fullTitle: "Sports Venue / Turf Booking System",
    subtitle: "Cross-Platform Turf Discovery, Slot Grid Management & Direct Walk-In Bookings",
    desc: "Comprehensive sports facility management platform enabling customers to discover turfs and check real-time date-based slot availability. Features direct walk-in bookings for owners and system-wide slot blocking for maintenance.",
    summary: "The application is a comprehensive sports facility management and slot booking platform. It enables customers to discover sports turfs, check real-time slot availability, and submit booking requests for various sports. Turf owners can list their venues, set custom slot pricing, manage daily operating slots, create direct walk-in bookings, and approve or reject customer requests. System administrators have top-level control to manage all turfs, process booking requests platform-wide, block slots for maintenance or events, and analyze platform metrics via dashboard analytics.",
    tech: ["Flutter", "GetX", "Interactive Slot Grid", "Dynamic Pricing", "Role Dashboards", "In-App Alerts"],
    github: "https://github.com/kunal4419/Turf-Booking-System.git",
    external:"https://github.com/kunal4419/Turf_Booking_Details/releases/download/TurfBook/TurfBook.apk",
    projectType: "Cross-platform mobile application built with Flutter & GetX state management",
    userRoles: [
      {
        title: "Admin",
        purpose: "System-wide administration, managing all sports turfs and owners, overseeing booking approvals, slot blocking, and platform analytics.",
        permissions: [
          "View platform dashboard metrics (total revenue, total turfs, total bookings, today's bookings)",
          "Create, edit, list, and delete turfs across all turf owners",
          "Assign turf owners and configure venue facilities",
          "View, approve, and reject pending customer booking requests system-wide",
          "Block and unblock specific time slots for any turf with designated reasons (maintenance, weather)",
          "Monitor today's scheduled bookings list"
        ]
      },
      {
        title: "Turf Owner",
        purpose: "Managing owned sports venues, dynamic slot pricing, operating slot schedules, walk-in bookings, and customer request processing.",
        permissions: [
          "Access Owner Dashboard analytics (revenue, turf counts, pending/approved metrics)",
          "View and update owned turf details, rules, images, and facilities",
          "Enable or disable specific operating time slots for owned turfs",
          "Set custom slot prices per date or reset them to default rates",
          "Create direct/walk-in bookings for registered or walk-in customers with instant confirmation",
          "Approve or reject incoming customer booking requests with custom reasons"
        ]
      },
      {
        title: "Customer",
        purpose: "Searching for nearby sports facilities, checking slot availability, placing booking requests, and managing personal booking history.",
        permissions: [
          "Register, log in, and manage personal profile",
          "Browse turfs filtered by sport categories (Football, Cricket, Badminton)",
          "View detailed turf information, rules, facilities, location, and pricing",
          "Check real-time slot availability for selected dates",
          "Create online booking requests with custom notes",
          "View personal booking history categorized into Upcoming, Past, and All statuses"
        ]
      }
    ],
    mainFeatures: [
      { title: "Role-Based Navigation Flows", desc: "Custom navigation flows and screen access tailored for Customers, Turf Owners, and Admins." },
      { title: "Sport & Turf Discovery", desc: "Filter venues by sport categories, view detailed venue media, rules, pricing, and facilities." },
      { title: "Real-Time Interactive Slot Grid", desc: "Date-based slot grid showing availability status (available, booked, blocked) and owner pricing." },
      { title: "Request-Based Online Booking", desc: "Track booking states through Pending, Approved, Rejected, Cancelled, and Completed." },
      { title: "Direct / Walk-In Booking System", desc: "Allows Turf Owners to instantly lock and assign slots to walk-in or phone-in customers." },
      { title: "Slot Blocking & Maintenance", desc: "Admin and Owner capability to lock out slots with pre-defined or custom reasons." }
    ],
    flowTitle: "Booking Flow",
    flowSteps: [
      "Browse Sport Categories: Customer selects a sport (Football, Cricket) from home screen.",
      "Select Turf: Customer browses available turfs and opens details screen to review rules & facilities.",
      "Choose Date & Slot: Customer selects booking date and picks available time slot from grid.",
      "Review Booking Details: Customer reviews slot timing & pricing, entering optional notes.",
      "Submit Request: Customer confirms order; system generates booking record with Pending status.",
      "Confirmation Screen: Customer sees booking success screen with unique booking_id.",
      "Owner/Admin Review: Turf owner sees request listed under pending booking queue.",
      "Request Processing: Owner evaluates request and approves or rejects with reason.",
      "Status Update & History: Customer receives notification and tracks updated state in My Bookings."
    ],
    screenshots: [
      { title: "Admin Add Turf", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/AdminAddTurf.png" },
      { title: "Admin Home Page", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/AdminHomePage.png" },
      { title: "Admin Manage Turf", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/AdminManageTurf.png" },
      { title: "Customer Booking Done", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/CustomerBookingDone.png" },
      { title: "Customer Booking Page", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/CustomerBookingPage.png" },
      { title: "Customer Home Page", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/CustomerHomePage.png" },
      { title: "Customer My Booking", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/CustomerMyBooking.png" },
      { title: "Customer Notification", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/CustomerNotification.png" },
      { title: "Customer Profile", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/CustomerProfile.png" },
      { title: "Login Page", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/LoginPage.png" },
      { title: "Owner Block Slot", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerBlockSlot.png" },
      { title: "Owner Booking Request", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerBookingRequest.png" },
      { title: "Owner Direct Booking", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerDirectBooking.png" },
      { title: "Owner Home Page", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerHomePage.png" },
      { title: "Owner Manage Turf", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerMangeTurf.png" },
      { title: "Owner Notification", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerNotification.png" },
      { title: "Owner Price Per Slot", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/OwnerPricePerSlot.png" },
      { title: "Sign Up Page", url: "https://raw.githubusercontent.com/kunal4419/Turf_Booking_Details/main/screenshots/SignUpPage.png" }
    ],
    detailsPath: "/turf-booking-showcase/details/details.md",
    readmePath: "/turf-booking-showcase/README.md"
  },
  {
    slug: "expense-tracker-showcase",
    num: "05",
    title: "BUSINESS EXPENSE TRACKER",
    fullTitle: "Business & Personal Expense Tracker",
    subtitle: "Daily Sales Logging, Spend Analytics & Automated PDF Report Generator",
    desc: "Financial management app for logging daily expenses, tracking morning/evening shop sales collections, custom color-coded category organization, net profit/loss calculation (Total Sales - Total Expenses), and PDF report generation.",
    summary: "Expense Tracker App is a financial management application designed for logging daily expenses, tracking daily shop/business sales collections, and organizing spending categories. It enables users to record expenses with custom payment modes (Cash, Card, UPI, Net Banking, etc.), track morning and evening sales inputs, and categorize spendings using system or custom categories. The app automatically calculates financial metrics—including today's expenses, monthly expenses, total cumulative spendings, monthly sales, and net profit/loss—and provides automated PDF summary report generation.",
    tech: ["Flutter", "Riverpod", "GoRouter", "Supabase", "PDF Engine", "Printing Package", "Adaptive Layout"],
    github: "https://github.com/kunal4419/Expense-Tracker-App.git",
    external:"https://github.com/kunal4419/Expense_Tracker_Details/releases/download/expensebook/ExpenseBook.apk",
    projectType: "Cross-platform financial application built with Flutter, Riverpod, GoRouter, and Supabase",
    userRoles: [
      {
        title: "App User / Business Owner",
        purpose: "Authenticate into the app to log expenses, record daily sales entries, customize expense categories, inspect financial metrics, and export summary reports.",
        permissions: [
          "Register and log in securely via Supabase Authentication",
          "View Dashboard financial metrics (Today's Expense, Monthly Expense, Total Expense)",
          "Create, view, edit, and delete expense entries with title, amount (in ₹), date, category, and payment mode",
          "Record daily sales logs with separate Morning Sales and Evening Sales entries",
          "Create and edit custom personal categories with theme color pickers",
          "Filter expense lists by date range, category, and payment mode (Cash, Card, UPI)",
          "Monitor real-time financial aggregations including Monthly Sales and Net Profit/Loss",
          "Export formatted financial summary reports to PDF documents for print or download"
        ]
      }
    ],
    mainFeatures: [
      { title: "Supabase Authentication & Riverpod State", desc: "Secure sign-in, session state persistence, and reactive data flow managed via Riverpod." },
      { title: "Expense Tracking (CRUD)", desc: "Full creation, listing, updating, and deletion of expense records with payment mode tags." },
      { title: "Daily Sales Logging (Morning & Evening)", desc: "Dedicated sales entry screen to log daily shop collections split into Morning and Evening inputs." },
      { title: "Category Customization with Color Pickers", desc: "Color-coded category organization featuring system defaults and custom user categories." },
      { title: "Real-Time Profit/Loss Analytics", desc: "Automatic calculation of net profit/loss (Total Sales - Total Expenses) per month or custom range." },
      { title: "PDF Report Export & Printing", desc: "Integrated PDF document generation featuring formatted transaction tables and category breakdowns." }
    ],
    flowTitle: "Usage / Operational Flow",
    flowSteps: [
      "User Authentication: User signs up or logs into app using email & password via Supabase Auth.",
      "Dashboard Review: User views Financial Overview cards for Today's Expense, Monthly Expense, and Profit/Loss.",
      "Category Setup: User opens Categories tab to inspect system tags or create custom color-coded categories.",
      "Logging an Expense: User taps Add Expense, inputs title, amount in ₹, category, date, payment mode (UPI/Cash).",
      "Recording Daily Sales: User opens Sales tab, inputs Morning Sales and Evening Sales amounts.",
      "Automatic Profit/Loss Calculation: System aggregates total daily/monthly sales and computes net profit/loss.",
      "Expense List Inspection: User reviews, searches, or filters past records by date or payment method.",
      "Exporting PDF Report: User selects desired month, generates formatted PDF summary, and prints/downloads document."
    ],
    screenshots: [
      { title: "Category Page", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/CategoryPage.png" },
      { title: "Expense List", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/ExpenseList.png" },
      { title: "Export PDF", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/Export%20PDF.png" },
      { title: "Home Page", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/HomePage.png" },
      { title: "Login Page", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/Login.png" },
      { title: "Reports Page", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/Reports.png" },
      { title: "Sales Page", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/SalesPage.png" },
      { title: "Sign Up Page", url: "https://raw.githubusercontent.com/kunal4419/Expense_Tracker_Details/main/screenshots/SignUp.png" }
    ],
    detailsPath: "/expense-tracker-showcase/details/details.md",
    readmePath: "/expense-tracker-showcase/README.md"
  },
  {
    slug: "darzi-app-showcase",
    num: "06",
    title: "DARZI APP — TAILORING SYSTEM",
    fullTitle: "Tailoring Order & Measurement Management System (Darzi App)",
    subtitle: "Hindi-First Voice-Assisted Order Management & WhatsApp Digital Receipt Sharing",
    desc: "Hindi-first tailoring order management system designed for dressmakers. Record garment measurements using hands-free Hindi voice dictation, itemized stitching charges, instant bill calculation, and 1-tap WhatsApp digital receipt card sharing.",
    summary: "Darzi App (darzi_app) is a Hindi-first tailoring order management application designed specifically for tailors, dressmakers, and sewing workers. It allows tailors to record customer orders, capture detailed garment measurements (for suits, shirts, pants, blouses, dresses, etc.) using Hindi voice input or manual entry, and attach stitching sub-types and charges. The app automatically calculates total bills, advance payments, and remaining balances, while enabling 1-tap digital receipt generation for sharing via WhatsApp along with direct customer phone calling.",
    tech: ["Flutter", "GetX", "Speech-to-Text", "Supabase", "WhatsApp Share", "Hindi UI", "Digital Receipt Card"],
    github: "https://github.com/kunal4419/Darzi-App.git",
    external:"https://github.com/kunal4419/Darzi_Details/releases/download/darziapp/DarziApp.apk",
    projectType: "Hindi-first cross-platform mobile application built with Flutter, GetX, Speech-to-Text, and Supabase",
    userRoles: [
      {
        title: "Tailor / Sewing Worker (tailor)",
        purpose: "Manage customer orders, dictate/record garment measurements, track payment balances, and send digital bill receipts to customers.",
        permissions: [
          "Register new tailoring orders with customer name and phone number",
          "Add multiple garment items to single order (Kurta, Pajama, Shirt, Pant, Blouse, Suit, Salwar)",
          "Record garment measurements using Hindi voice-to-text dictation (speech_to_text)",
          "Specify stitching sub-types (Pico, Pico-Fall, Astar, Sada) and itemized charges",
          "Select measurement method (Nap / New Measurement or Purane Kapde / Sample Clothing)",
          "Compute total bill, log advance payment, and calculate remaining balance in real time",
          "Assign expected delivery dates using a Hindi calendar dialog",
          "Search orders instantly by customer name or phone number with 300ms debounce",
          "Generate digital image receipts and share directly via WhatsApp",
          "Initiate direct phone calls to customers from order detail sheets"
        ]
      }
    ],
    mainFeatures: [
      { title: "Hindi-Native Interface", desc: "Complete native Hindi UI and localized messaging (HindiStrings) designed for tailor workers." },
      { title: "Voice-Assisted Measurement Input", desc: "Integrated speech recognition (speech_to_text) allowing hands-free Hindi voice dictation of measurements." },
      { title: "Multi-Garment Order Structure", desc: "Support for adding multiple cloth items in a single customer order with itemized sub-types & charges." },
      { title: "Structured Measurement Templates", desc: "Dedicated measurement fields for common garments (Length, Chest, Waist, Hip, Shoulder, Sleeve)." },
      { title: "Real-Time Payment Calculator", desc: "Automatic calculation of Total Bill, Advance Amount, and Remaining Balance." },
      { title: "Digital Receipt Generation & WhatsApp Sharing", desc: "Captures rendered receipt cards as PNG images and shares them via WhatsApp." }
    ],
    flowTitle: "Operational / Order Flow",
    flowSteps: [
      "Initiate New Order: Tailor opens new order tab (नया ऑर्डर) in bottom navigation.",
      "Customer Details Entry: Tailor enters customer name and 10-digit phone via typing or voice.",
      "Add Garments: Tailor selects cloth types (Shirt, Pant, Suit) using quick-chip selectors.",
      "Record Measurements: Tailor picks measurement method (Nap or Purane Kapde) and dictates values in Hindi.",
      "Set Sub-Types & Charges: Tailor picks stitching sub-types (Pico, Astar, Fall) and inputs itemized charges.",
      "Automatic Balance Calculation: App computes Total Bill and remaining balance as advance is entered.",
      "Set Delivery Date: Tailor picks delivery date from Hindi calendar picker.",
      "Save Order: App saves order to Supabase relational tables (customers, orders, order_clothes).",
      "Share Digital Receipt: Tailor selects order and taps Send Bill (बिल भेजें) to share image receipt on WhatsApp.",
      "Complete Order: Upon delivery and final payment, tailor updates payment state to complete (Pura Hua)."
    ],
    screenshots: [
      { title: "All Orders Page", url: "https://raw.githubusercontent.com/kunal4419/Darzi_Details/main/screenshots/AllOrdersPage.png" },
      { title: "Digital Bill Receipt", url: "https://raw.githubusercontent.com/kunal4419/Darzi_Details/main/screenshots/Bill.jpg" },
      { title: "New Order Page", url: "https://raw.githubusercontent.com/kunal4419/Darzi_Details/main/screenshots/NewOrderPage.png" },
      { title: "Order Detail Page", url: "https://raw.githubusercontent.com/kunal4419/Darzi_Details/main/screenshots/OrderDetailPage.png" },
      { title: "Preview Order", url: "https://raw.githubusercontent.com/kunal4419/Darzi_Details/main/screenshots/PreviewOder.png" }
    ],
    detailsPath: "/darzi-app-showcase/details/details.md",
    readmePath: "/darzi-app-showcase/README.md"
  }
];
