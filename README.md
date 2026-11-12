# Dental Care — Hospital Website

A complete, premium, modern, fully responsive multi-page dental hospital website for **Dental Care**, located in **Malappuram, Kerala, India**.

Built with React, TypeScript, Vite, Tailwind CSS, Lucide React, and Framer Motion.

---

## 🏥 Business & Clinical Details

- **Business Name:** Dental Care
- **Category:** Dental Hospital / Dental Clinic
- **Location:** Malappuram, Kerala, India
- **Phone Number:** [+91 7510885193](tel:+917510885193)
- **WhatsApp Direct:** [+91 7510885193](https://wa.me/917510885193)
- **Central Configuration File:** [`src/config/hospital.ts`](src/config/hospital.ts)

*All business information is managed from `src/config/hospital.ts`. Unverified doctor credentials, specific street addresses, and hospital statistics are treated with clearly designated editable placeholders.*

---

## 🎨 Brand Identity & Color System

- **Primary Theme Accent:** Sky Blue (`#77CDFF`)
- **Primary Background:** Pure White (`#FFFFFF`)
- **Secondary Background:** Crisp Dental Ice White (`#F4FAFD`)
- **High Contrast Navy:** Deep Slate Navy (`#0F2942`)
- **Deep Ocean Accents:** Ocean Dental Blue (`#0284C7`)
- **Borders:** Crisp Clean Border (`#E1EEF6`)
- **Typography:**
  - Headings: *Playfair Display*
  - Body: *Inter*

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ or v20+)
- npm (v9+)

### Installation & Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 🗺️ Complete Website Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Premium hero, trust indicators, featured treatments, why choose, doctors preview, facilities, testimonials, WhatsApp & appointment CTAs |
| `/about` | **About Us** | Mission, vision, core clinical values, patient-first care philosophy, oral health commitment |
| `/doctors` | **Our Doctors** | Complete clinical specialists directory with credential placeholders |
| `/doctors/:slug` | **Doctor Profile** | Individual doctor profiles, expertise, consultation schedules, appointment booking |
| `/treatments` | **Treatments Directory** | 15 dental treatments with search bar and category filter tabs |
| `/treatments/:slug` | **Treatment Details** | Comprehensive educational pages with 10 sections, procedure steps, and FAQ accordions |
| `/facilities` | **Hospital Facilities** | Operatories, sterilization suites, digital imaging, consultation rooms |
| `/gallery` | **Photo Gallery** | Filterable responsive photo grid with modal lightbox and keyboard navigation |
| `/reviews` | **Patient Reviews** | Demonstration feedback cards and interactive patient review submission form |
| `/appointment` | **Book Appointment** | Full validation appointment request form with WhatsApp summary dispatch |
| `/contact` | **Contact Us** | Malappuram map embed, phone, direct WhatsApp link, and contact inquiry form |
| `/privacy-policy` | **Privacy Policy** | Patient healthcare privacy, data protection, and communication disclosures |
| `/terms` | **Terms & Conditions** | Website terms, medical disclaimer, and booking policies |
| `*` | **404 Not Found** | Custom branded page not found screen |

### 15 Individual Treatment Routes
1. `/treatments/dental-implants`
2. `/treatments/root-canal-treatment`
3. `/treatments/teeth-whitening`
4. `/treatments/dental-braces`
5. `/treatments/dental-crowns`
6. `/treatments/cosmetic-dentistry`
7. `/treatments/general-dentistry`
8. `/treatments/clear-aligners`
9. `/treatments/dental-bridges`
10. `/treatments/tooth-extraction`
11. `/treatments/wisdom-tooth-removal`
12. `/treatments/gum-treatment`
13. `/treatments/pediatric-dentistry`
14. `/treatments/dentures`
15. `/treatments/smile-makeover`

---

## 📲 WhatsApp Appointment Integration

Appointment submissions on `/appointment` validate all required inputs, display a summary confirmation modal, and construct a pre-filled WhatsApp message:

```
Hello Dental Care,

I would like to request a dental appointment.

Patient Name: [Name]
Phone Number: [Phone]
Email: [Email]
Treatment: [Treatment]
Preferred Doctor: [Doctor]
Preferred Date: [Date]
Preferred Time: [Time]
Additional Message: [Message]

Please contact me regarding appointment availability.

Thank you.
```

The message is encoded via `encodeURIComponent()` and dispatched to `https://wa.me/917510885193`. A clear notice reminds patients that hospital staff will verify doctor schedules before confirming the appointment.

---

## 🔌 Backend Readiness (Django REST Framework)

The project includes modular service functions ready for future database and API integration:
- [`src/services/appointmentService.ts`](src/services/appointmentService.ts): Pre-wired for `POST /api/appointments/`
- [`src/services/contactService.ts`](src/services/contactService.ts): Pre-wired for `POST /api/contact/`
- [`src/services/whatsappService.ts`](src/services/whatsappService.ts): Centralized WhatsApp formatting and dispatch

Simply set `VITE_API_BASE_URL` in an `.env` file when the Django backend is deployed.

---

## 📁 Project Structure

```
src/
├── config/
│   └── hospital.ts             # Central business config (Name, Phone, WhatsApp, Location)
├── types/
│   └── index.ts                # TypeScript interfaces (Doctor, Treatment, Testimonial, etc.)
├── data/
│   ├── treatments.ts           # Complete data for all 15 treatments
│   ├── doctors.ts              # Specialist profiles with hospital verification placeholders
│   ├── testimonials.ts         # Demonstration patient reviews
│   └── gallery.ts              # Clinic photography entries
├── services/
│   ├── appointmentService.ts   # Backend-ready booking service
│   ├── contactService.ts       # Backend-ready contact service
│   └── whatsappService.ts      # WhatsApp message generator & launcher
├── components/
│   ├── Logo.tsx                # Custom tooth logo (light & dark variants)
│   ├── Navbar.tsx              # Sticky nav with treatment dropdown & mobile menu
│   ├── Footer.tsx              # Deep maroon 4-column footer
│   ├── WhatsAppButton.tsx      # Floating bottom-right WhatsApp CTA
│   ├── ScrollToTop.tsx         # Route change scroll restoration
│   ├── SectionHeading.tsx      # Consistent section headings
│   ├── PageHeader.tsx          # Subpage hero banners with breadcrumbs
│   ├── TreatmentCard.tsx       # Treatment cards with category badges & hover zoom
│   ├── DoctorCard.tsx          # Doctor cards with placeholder disclaimers
│   ├── TestimonialCard.tsx     # Review cards with demonstration badges
│   ├── AppointmentForm.tsx     # Validated 2-column appointment booking form
│   ├── ContactForm.tsx         # Contact inquiry form
│   └── SEOHead.tsx             # Dynamic metadata, titles & JSON-LD Dentist schema
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Doctors.tsx
│   ├── DoctorDetails.tsx
│   ├── Treatments.tsx
│   ├── TreatmentDetails.tsx
│   ├── Facilities.tsx
│   ├── Gallery.tsx
│   ├── Reviews.tsx
│   ├── Appointment.tsx
│   ├── Contact.tsx
│   ├── PrivacyPolicy.tsx
│   ├── Terms.tsx
│   └── NotFound.tsx
├── App.tsx                     # Main router configuration
├── main.tsx                    # React entrypoint
└── index.css                   # Tailwind styles, Playfair Display & custom scrollbars
```

---

## 🔍 SEO & Local Search Optimization

- Keyword optimization for **Dental Care Malappuram**, **Dental Clinic Malappuram**, and **Dentist in Malappuram**.
- OpenGraph tags for social sharing.
- Schema.org JSON-LD structured data for `Dentist` and `LocalBusiness`.
- `robots.txt` and `sitemap.xml` included in [`public/`](public/).
