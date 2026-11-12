import { Treatment } from '../types';

export const treatmentsData: Treatment[] = [
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    category: 'Restorative',
    shortDescription: 'Modern, permanent tooth replacement solutions designed to replicate natural tooth roots and restore chewing comfort and aesthetics.',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    whatIs: 'A dental implant is a biocompatible titanium post surgically positioned into the jawbone beneath your gums. Once in place, it allows your dentist to mount replacement teeth or a bridge into that area, providing exceptional stability and preventing surrounding bone resorption.',
    whyRecommended: [
      'Replacement of one or multiple missing teeth without modifying neighboring teeth.',
      'Restoration of natural chewing efficiency and comfortable speech.',
      'Prevention of jawbone shrinkage and changes to facial structure that follow tooth loss.',
      'Long-term alternative to traditional removable partial or full dentures.'
    ],
    benefits: [
      'Preserves adjacent natural teeth without grinding down healthy enamel.',
      'Provides a durable, anchored foundation that feels and functions like natural teeth.',
      'Supports facial contour and maintains optimal jawbone density over time.',
      'High long-term success rate with appropriate oral hygiene and periodic professional checkups.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Comprehensive Consultation & 3D Imaging',
        description: 'Detailed oral assessment, digital imaging, and bone density evaluation to formulate a personalized surgical and restorative plan.'
      },
      {
        stepNumber: 2,
        title: 'Implant Post Placement',
        description: 'The titanium implant fixture is gently positioned into the jawbone under local anesthesia in our sterilized surgical suite.'
      },
      {
        stepNumber: 3,
        title: 'Osseointegration Period',
        description: 'Over a healing period of several weeks to months, the implant post naturally fuses with the surrounding bone tissue.'
      },
      {
        stepNumber: 4,
        title: 'Abutment & Custom Crown Delivery',
        description: 'A custom-shaded, precision-milled ceramic crown is securely placed, completing your natural-looking restoration.'
      }
    ],
    faqs: [
      {
        question: 'Is dental implant surgery painful?',
        answer: 'The procedure is carried out under local anesthesia, ensuring you remain comfortable throughout. Post-procedure mild tenderness is manageable with standard prescribed medications and typically subsides within a few days.'
      },
      {
        question: 'How long do dental implants last?',
        answer: 'With diligent brushing, flossing, and regular dental hygiene appointments, implants are engineered to last many years, often several decades or a lifetime.'
      },
      {
        question: 'Am I a suitable candidate for dental implants?',
        answer: 'Most adults with healthy gums and sufficient bone structure are potential candidates. A personalized clinical examination at Dental Care will determine your individual suitability.'
      }
    ],
    relatedSlugs: ['dental-crowns', 'dental-bridges', 'dentures']
  },
  {
    id: 'root-canal-treatment',
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    category: 'Restorative',
    shortDescription: 'Gentle endodontic therapy to relieve tooth pain, remove infected pulp tissue, and save your natural tooth from extraction.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    whatIs: 'Root canal treatment (endodontic therapy) is a procedure performed to eradicate bacteria from the infected root canal, prevent reinfection of the tooth, and save the natural tooth structure. The diseased pulp is carefully removed, followed by thorough disinfection, shaping, and sealing of the canals.',
    whyRecommended: [
      'Deep decay extending into the dental pulp causing persistent or throbbing pain.',
      'Prolonged sensitivity to hot or cold temperatures even after the stimulus is removed.',
      'Dental trauma or fractures exposing inner dental tissues.',
      'Swelling or tenderness in the adjacent gum tissue or localized abscess formation.'
    ],
    benefits: [
      'Relieves intense tooth pain and eliminates internal bacterial infection.',
      'Preserves the original natural tooth, eliminating the need for costly extractions and replacements.',
      'Restores normal biting pressure and natural chewing sensation.',
      'Maintains natural smile aesthetics and protects neighboring teeth from excessive wear.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Digital Diagnostics & Anesthesia',
        description: 'Digital X-rays identify canal anatomy and localized numbness is established to ensure complete patient comfort.'
      },
      {
        stepNumber: 2,
        title: 'Pulp Removal & Disinfection',
        description: 'A small access opening is created and inflamed or infected tissue is meticulously cleaned using rotary instruments and sanitizing irrigants.'
      },
      {
        stepNumber: 3,
        title: 'Canal Shaping & Hermetic Sealing',
        description: 'The root canals are precisely shaped and filled with an inert biocompatible material called gutta-percha to prevent bacterial re-entry.'
      },
      {
        stepNumber: 4,
        title: 'Protective Crown Restoration',
        description: 'Because endodontically treated teeth can become brittle over time, a protective crown is recommended to restore structural strength.'
      }
    ],
    faqs: [
      {
        question: 'Does a root canal hurt?',
        answer: 'Modern root canal therapy is no more uncomfortable than having a standard filling. Our team uses effective local anesthetics to ensure you experience relief rather than pain.'
      },
      {
        question: 'How many visits are typically required?',
        answer: 'Many root canal treatments can be completed in a single session or across two appointments depending on the degree of infection and canal complexity.'
      },
      {
        question: 'Why do I need a crown after a root canal?',
        answer: 'Removing the pulp eliminates the tooth’s internal blood supply, making the remaining structure more brittle. A custom crown reinforces the tooth so it can withstand normal biting forces.'
      }
    ],
    relatedSlugs: ['dental-crowns', 'general-dentistry', 'tooth-extraction']
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    category: 'Cosmetic',
    shortDescription: 'Safe, professionally supervised bleaching treatments to gently lift deep stains and brighten your smile shades lighter.',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    whatIs: 'Professional teeth whitening uses safe, clinically approved oxidizing agents to lighten discolorations caused by food pigments, coffee, tea, smoking, or the natural aging process. Under the care of our dental team, whitening treatments are gentle on enamel and tailored to your shade goals.',
    whyRecommended: [
      'Stubborn surface stains resistant to ordinary brushing and over-the-counter toothpaste.',
      'Upcoming special occasions, weddings, interviews, or professional milestone events.',
      'Enamel discoloration from dietary staining agents or age-related enamel thinning.',
      'Desire for a rejuvenated, radiant smile without invasive tooth preparation.'
    ],
    benefits: [
      'Noticeably brighter smile achieved safely under clinical supervision.',
      'Formulated with desensitizing agents to minimize transient post-treatment sensitivity.',
      'Even, consistent results compared to unpredictable drugstore strips or kits.',
      'Boosts personal confidence and overall facial vibrancy.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Shade Assessment & Cleaning',
        description: 'Initial tooth shade is recorded and surface plaque is polished away to allow uniform gel penetration.'
      },
      {
        stepNumber: 2,
        title: 'Gingival Barrier Protection',
        description: 'A protective resin barrier is applied to shield your gums and sensitive soft tissues from active whitening agents.'
      },
      {
        stepNumber: 3,
        title: 'Whitening Gel Application',
        description: 'Medical-grade whitening gel is carefully applied to tooth surfaces in controlled timed cycles.'
      },
      {
        stepNumber: 4,
        title: 'Rinse & Post-Care Guidance',
        description: 'The gel is rinsed, new shade is evaluated, and personalized dietary guidance is provided to maintain lasting brightness.'
      }
    ],
    faqs: [
      {
        question: 'Does teeth whitening damage tooth enamel?',
        answer: 'When administered by licensed dental professionals, clinical whitening is safe for healthy enamel and does not cause permanent damage or thinning.'
      },
      {
        question: 'How long do whitening results typically last?',
        answer: 'Results generally last from 6 months to 2 years, depending on personal dietary habits (such as coffee, tea, and tobacco consumption) and consistent oral hygiene.'
      },
      {
        question: 'Will whitening work on fillings, crowns, or veneers?',
        answer: 'Whitening treatments only lighten natural tooth structure. Existing ceramic crowns or composite fillings will not change color and may need shade matching after whitening.'
      }
    ],
    relatedSlugs: ['cosmetic-dentistry', 'smile-makeover', 'general-dentistry']
  },
  {
    id: 'dental-braces',
    slug: 'dental-braces',
    title: 'Braces and Orthodontics',
    category: 'Orthodontics',
    shortDescription: 'Comprehensive orthodontic correction with traditional metal, ceramic, and self-ligating brackets for straight teeth and balanced bites.',
    heroImage: '/images/braces-orthodontics.jpg',
    cardImage: '/images/braces-orthodontics.jpg',
    isFeatured: true,
    whatIs: 'Orthodontic braces are precision dental appliances that use light, controlled forces to gently move teeth into proper alignment over time. They correct crowded teeth, gaps, overbites, underbites, and crossbites to establish optimal chewing function and a harmonious facial profile.',
    whyRecommended: [
      'Crowded, crooked, or overlapping teeth that are challenging to clean.',
      'Significant spacing or gaps between teeth affecting speech or aesthetics.',
      'Bite misalignments (overbite, underbite, crossbite, or open bite) causing jaw strain.',
      'Early preventive orthodontic guidance for growing children and teenagers.'
    ],
    benefits: [
      'Improves bite alignment and chewing efficiency, easing tension on the temporomandibular joints.',
      'Straight teeth are easier to brush and floss, significantly reducing gum disease risk.',
      'Creates a symmetrical, attractive smile that enhances lifelong self-esteem.',
      'Available in discreet tooth-colored ceramic brackets as well as robust metal brackets.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Orthodontic Evaluation & Diagnostics',
        description: 'Photographs, dental impressions/scans, and panoramic radiographs establish an individualized biomechanical plan.'
      },
      {
        stepNumber: 2,
        title: 'Precision Bracket Bonding',
        description: 'Small brackets are bonded accurately to the surface of each tooth and connected with an archwire.'
      },
      {
        stepNumber: 3,
        title: 'Periodic Progress Adjustments',
        description: 'Routine visits every 4–6 weeks allow gentle archwire adjustments to guide teeth along their mapped path.'
      },
      {
        stepNumber: 4,
        title: 'Debonding & Retainer Care',
        description: 'Brackets are removed, teeth are polished, and custom retainers are fitted to ensure long-term stability.'
      }
    ],
    faqs: [
      {
        question: 'What is the ideal age for orthodontic braces?',
        answer: 'While orthodontic assessments are often beneficial around ages 7–8, braces can be effectively worn by adolescents and adults of any age with healthy gums and bone.'
      },
      {
        question: 'How long will I need to wear braces?',
        answer: 'Treatment duration typically ranges between 12 to 24 months, depending on the severity of misalignment and patient compliance with appointments.'
      },
      {
        question: 'Are clear ceramic braces available?',
        answer: 'Yes! We offer tooth-toned ceramic brackets that blend naturally with your teeth for a subtle appearance during treatment.'
      }
    ],
    relatedSlugs: ['clear-aligners', 'smile-makeover', 'pediatric-dentistry']
  },
  {
    id: 'dental-crowns',
    slug: 'dental-crowns',
    title: 'Dental Crowns and Bridges',
    category: 'Restorative',
    shortDescription: 'Custom-crafted ceramic and zirconia crowns and fixed bridges to restore weakened teeth and bridge gaps seamlessly.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    whatIs: 'A dental crown is a custom-fitted cap that encases a damaged or root-canal-treated tooth to restore its strength, shape, and appearance. A dental bridge replaces one or more missing teeth by anchoring an artificial tooth (pontic) securely between healthy adjacent crowned teeth.',
    whyRecommended: [
      'Protecting a heavily decayed or fractured tooth from further structural damage.',
      'Restoring a tooth following root canal therapy to prevent cracking.',
      'Replacing missing teeth with a non-removable, fixed prosthetic solution.',
      'Covering severely misshapen or discolored natural teeth for improved aesthetics.'
    ],
    benefits: [
      'High-grade zirconia and ceramic materials mimic natural translucency and shade.',
      'Restores normal masticatory function, allowing confident eating and speaking.',
      'Prevents remaining natural teeth from drifting into open spaces.',
      'Durable, biocompatible, and stain-resistant construction.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Tooth Preparation & Scanning',
        description: 'The target tooth is minimally shaped and precise digital impressions are recorded for custom fabrication.'
      },
      {
        stepNumber: 2,
        title: 'Temporary Restoration',
        description: 'A comfortable provisional crown is placed to protect the prepared tooth while the laboratory crafts your final prosthesis.'
      },
      {
        stepNumber: 3,
        title: 'Fitting, Shade Check & Bonding',
        description: 'The finished ceramic crown or bridge is checked for bite harmony and margin fit, then permanently cemented.'
      }
    ],
    faqs: [
      {
        question: 'How do I care for a dental bridge or crown?',
        answer: 'Brush twice daily, floss around crowns, and use specialized floss threaders or interdental brushes under bridges to keep gum tissue healthy.'
      },
      {
        question: 'What materials are used for crowns at Dental Care?',
        answer: 'We provide tooth-colored ceramic and high-strength zirconia restorations that deliver both exceptional resilience and lifelike aesthetics.'
      },
      {
        question: 'How long do dental crowns typically last?',
        answer: 'With proper oral hygiene and regular dental checkups, crowns typically last 10 to 15 years or longer.'
      }
    ],
    relatedSlugs: ['dental-implants', 'root-canal-treatment', 'dental-bridges']
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    category: 'Cosmetic',
    shortDescription: 'Artistic smile enhancements including porcelain veneers, composite bonding, and contouring tailored to your facial aesthetics.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    isFeatured: true,
    whatIs: 'Cosmetic dentistry combines oral health science with aesthetic design to improve the color, shape, size, and harmony of your teeth. Treatments include dental veneers, composite bonding, gum recontouring, and comprehensive smile makeovers customized to your natural features.',
    whyRecommended: [
      'Chipped, worn, or uneven tooth edges affecting smile symmetry.',
      'Intrinsically discolored teeth unresponsive to topical whitening.',
      'Minor gaps or spacing between front teeth.',
      'Irregular tooth proportions or a "gummy" smile.'
    ],
    benefits: [
      'Delivers a radiant, natural-looking aesthetic boost.',
      'Conservative procedures that preserve maximum natural tooth enamel.',
      'Durable, stain-resistant porcelain materials maintain brilliance.',
      'Personalized digital smile analysis for predictable aesthetic outcomes.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Aesthetic Smile Consultation',
        description: 'Discussion of your aesthetic goals, facial symmetry analysis, and digital smile design visualization.'
      },
      {
        stepNumber: 2,
        title: 'Conservative Preparation',
        description: 'Micro-preparation of enamel when necessary, followed by high-resolution digital scanning.'
      },
      {
        stepNumber: 3,
        title: 'Custom Artistry & Bonding',
        description: 'Handcrafted ceramic veneers or composite resins are bonded meticulously using light-cured adhesive techniques.'
      }
    ],
    faqs: [
      {
        question: 'Are porcelain veneers permanent?',
        answer: 'Because a minimal layer of enamel is prepared to accommodate the veneer thickness, the treatment is considered an irreversible, long-term commitment that typically lasts 10–15+ years.'
      },
      {
        question: 'What is composite bonding?',
        answer: 'Composite bonding uses tooth-colored resin sculpted directly onto the tooth to fix minor chips, gaps, or stains in a single visit without extensive prep.'
      },
      {
        question: 'Will cosmetic dental work look natural?',
        answer: 'Yes. Our clinical philosophy focuses on subtle, natural aesthetics that complement your facial contours and skin tone rather than looking artificial.'
      }
    ],
    relatedSlugs: ['teeth-whitening', 'smile-makeover', 'dental-crowns']
  },
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    title: 'General Dentistry',
    category: 'Preventive',
    shortDescription: 'Routine checkups, digital dental examinations, ultrasonic scaling, and tooth-colored composite restorations for whole-family oral health.',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'General dentistry serves as the foundation of optimal oral wellness. It encompasses preventive diagnostics, dental cleanings, tartar removal, decay detection, fluoride treatments, and tooth-colored restorations designed to protect teeth before severe issues arise.',
    whyRecommended: [
      'Bi-annual checkups to identify early decay, gum issues, or wear patterns.',
      'Removal of calcified tartar and dental plaque that regular brushing misses.',
      'Filling new cavities with natural tooth-matching composite resins.',
      'Ongoing oral hygiene coaching and preventative maintenance.'
    ],
    benefits: [
      'Prevents minor oral problems from progressing into complex, costly treatments.',
      'Promotes fresh breath, healthy pink gums, and polished teeth.',
      'Early detection of oral pathologies, bite imbalances, and enamel erosion.',
      'Gentle, friendly care suitable for patients of all ages.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Comprehensive Examination',
        description: 'Visual exam, periodontal pocket evaluation, and low-dose digital radiographs if indicated.'
      },
      {
        stepNumber: 2,
        title: 'Ultrasonic Scaling & Polishing',
        description: 'Gentle ultrasonic vibration lifts away hardened calculus and soft plaque, followed by prophylactic polishing.'
      },
      {
        stepNumber: 3,
        title: 'Preventive Guidance & Treatment Plan',
        description: 'Transparent discussion of findings, tooth-colored filling placement if needed, and customized home care tips.'
      }
    ],
    faqs: [
      {
        question: 'How often should I visit the dentist for a checkup?',
        answer: 'We recommend visiting every 6 months for a routine checkup and professional cleaning to maintain optimal dental wellness.'
      },
      {
        question: 'Does dental cleaning make teeth loose or thin?',
        answer: 'No. Professional ultrasonic scaling removes harmful calculus and bacteria deposits. It does not thin healthy enamel or loosen sound teeth.'
      },
      {
        question: 'What are tooth-colored composite fillings?',
        answer: 'Composite fillings are made of dental resins matched to the exact shade of your tooth, bonding directly to restore strength without metallic amalgam.'
      }
    ],
    relatedSlugs: ['pediatric-dentistry', 'gum-treatment', 'root-canal-treatment']
  },
  {
    id: 'clear-aligners',
    slug: 'clear-aligners',
    title: 'Clear Aligners',
    category: 'Orthodontics',
    shortDescription: 'Virtually invisible, removable transparent trays that discreetly guide your teeth into ideal alignment without metal wires.',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'Clear aligners are a modern, custom-fabricated series of transparent medical-grade thermoplastic trays that fit snugly over your teeth. Each set of trays applies gentle, sequential pressure to shift teeth incrementally into their target positions without brackets or wires.',
    whyRecommended: [
      'Mild to moderate teeth crowding, spacing, or relapsed orthodontic movement.',
      'Adults and working professionals seeking discreet orthodontic correction.',
      'Patients desiring removable trays for unrestricted eating, brushing, and flossing.',
      'Those seeking a comfortable treatment without bracket rubbing or wire pokes.'
    ],
    benefits: [
      'Nearly invisible when worn, allowing confident social and professional interactions.',
      'Fully removable for meals, brushing, flossing, and special occasions.',
      'Smooth edges prevent inner cheek and lip irritation.',
      'Digital 3D software displays your expected tooth movement sequence in advance.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: '3D Intraoral Scanning & Simulation',
        description: 'High-precision digital scan maps your teeth and creates a 3D simulation of your smile progression.'
      },
      {
        stepNumber: 2,
        title: 'Custom Aligner Fabrication',
        description: 'A bespoke series of clear aligner trays is manufactured specifically for your treatment plan.'
      },
      {
        stepNumber: 3,
        title: 'Sequential Tray Wear',
        description: 'You wear each aligner tray for 20–22 hours daily, switching to the next set every 1–2 weeks as guided.'
      },
      {
        stepNumber: 4,
        title: 'Retention for Lasting Smiles',
        description: 'Following alignment, clear retainers protect your newly straightened teeth and prevent relapse.'
      }
    ],
    faqs: [
      {
        question: 'How many hours a day must aligners be worn?',
        answer: 'Aligners must be worn for 20 to 22 hours per day, removing them only to eat, drink non-water beverages, and brush your teeth.'
      },
      {
        question: 'Can clear aligners treat all orthodontic cases?',
        answer: 'Clear aligners are great for mild-to-moderate alignment issues. Complex skeletal bite corrections may still require traditional or hybrid braces.'
      },
      {
        question: 'Are clear aligners noticeable?',
        answer: 'They are made from ultra-clear medical-grade polymer and are virtually undetectable in everyday conversation.'
      }
    ],
    relatedSlugs: ['dental-braces', 'smile-makeover', 'cosmetic-dentistry']
  },
  {
    id: 'dental-bridges',
    slug: 'dental-bridges',
    title: 'Dental Bridges',
    category: 'Restorative',
    shortDescription: 'Fixed dental prosthetics designed to bridge the gap created by one or more missing teeth, anchored securely to neighboring teeth.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'A dental bridge bridges the space where one or more teeth are missing. It consists of two or more crowns for the anchoring teeth on either side of the gap, known as abutment teeth, and a false tooth or teeth (pontic) connected in between.',
    whyRecommended: [
      'Restoration of missing teeth when dental implant surgery is not preferred or indicated.',
      'Preventing adjacent natural teeth from tilting or drifting into the empty space.',
      'Restoring proper chewing distribution and speech clarity.',
      'Maintaining natural facial structure and lip support.'
    ],
    benefits: [
      'Fixed, non-removable solution that stays firmly in place during eating and speaking.',
      'Restores smile aesthetics with shade-matched porcelain or zirconia.',
      'Requires shorter completion time compared to implant healing periods.',
      'Distributes bite forces evenly across the dental arch.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Abutment Preparation',
        description: 'The natural teeth bordering the missing space are reshaped to receive supporting crowns.'
      },
      {
        stepNumber: 2,
        title: 'Impression & Temporary Bridge',
        description: 'A precise impression is taken for dental lab fabrication and a temporary bridge protects the area.'
      },
      {
        stepNumber: 3,
        title: 'Permanent Cementation',
        description: 'The custom bridge is fitted, bite verified, and permanently cemented in position.'
      }
    ],
    faqs: [
      {
        question: 'How do I floss underneath a dental bridge?',
        answer: 'Specialized dental floss threaders or water flossers allow you to clean easily under the artificial pontic tooth to maintain gum health.'
      },
      {
        question: 'What is the difference between a dental bridge and an implant?',
        answer: 'A bridge relies on modifying adjacent teeth for support, whereas a dental implant is independently anchored in the jawbone without altering neighboring teeth.'
      },
      {
        question: 'How long does a bridge last?',
        answer: 'With good oral hygiene and routine dental checkups, a high-quality dental bridge typically lasts 10 to 15 years.'
      }
    ],
    relatedSlugs: ['dental-implants', 'dental-crowns', 'dentures']
  },
  {
    id: 'tooth-extraction',
    slug: 'tooth-extraction',
    title: 'Tooth Extraction',
    category: 'Surgical',
    shortDescription: 'Gentle, minimally traumatic tooth removals performed with modern local anesthetics for unrestorable or severely broken teeth.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'Tooth extraction is the careful, controlled removal of a tooth from its socket in the alveolar bone. At Dental Care, we always prioritize saving your natural teeth whenever possible; however, when a tooth is compromised beyond restorative repair, gentle extraction protects oral health.',
    whyRecommended: [
      'Severe tooth decay or structural destruction that cannot be restored with crowns or root canal therapy.',
      'Advanced periodontal disease resulting in significant bone loss and extreme tooth mobility.',
      'Fractured roots beneath the gumline from dental injuries.',
      'Strategic extraction for orthodontic space creation in selected cases.'
    ],
    benefits: [
      'Stops chronic pain and halts the spread of deep bacterial infection into jawbone.',
      'Minimally invasive atraumatic technique preserves surrounding alveolar bone for future restorations.',
      'Carried out with effective anesthesia and gentle sedation options for patient relaxation.',
      'Detailed post-operative care and replacement planning.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Evaluation & Anesthesia',
        description: 'Digital X-rays verify root curvature and localized anesthesia ensures total numbness of the target area.'
      },
      {
        stepNumber: 2,
        title: 'Gentle Elevation & Extraction',
        description: 'Specialized periotomes gently loosen the tooth within its socket to minimize pressure and trauma.'
      },
      {
        stepNumber: 3,
        title: 'Socket Preservation & Post-Op Care',
        description: 'The socket is cleaned, sterile gauze is placed to promote clot formation, and comprehensive recovery instructions are provided.'
      }
    ],
    faqs: [
      {
        question: 'Will I feel pain during a tooth extraction?',
        answer: 'You will feel pressure during the procedure, but you should not feel sharp pain because the region is thoroughly numbed with local anesthesia.'
      },
      {
        question: 'What is dry socket and how can I avoid it?',
        answer: 'Dry socket occurs if the blood clot dislodges prematurely. You can prevent it by avoiding drinking through a straw, smoking, or vigorous rinsing for the first 48 hours.'
      },
      {
        question: 'How quickly can I replace an extracted tooth?',
        answer: 'Depending on bone quality and clinical conditions, options range from immediate implant placement to delayed implant or bridge restoration after healing.'
      }
    ],
    relatedSlugs: ['wisdom-tooth-removal', 'dental-implants', 'root-canal-treatment']
  },
  {
    id: 'wisdom-tooth-removal',
    slug: 'wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal',
    category: 'Surgical',
    shortDescription: 'Expert surgical removal of impacted, painful, or misaligned third molars to prevent infection and protect adjacent teeth.',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'Wisdom teeth (third molars) are the final adult teeth to emerge, typically between ages 17 and 25. Often there is insufficient jaw space for them to erupt properly, causing them to become partially or fully impacted in the bone or gum tissue, triggering pain, cysts, and crowding.',
    whyRecommended: [
      'Recurrent pericoronitis (painful bacterial infection of the gum flap over an erupting tooth).',
      'Horizontal or angular impaction pressing against the roots of adjacent second molars.',
      'Cyst formation or bone destruction around un-erupted wisdom teeth.',
      'Difficulty maintaining cleanliness leading to deep cavities in hard-to-reach areas.'
    ],
    benefits: [
      'Resolves throbbing jaw ache, swelling, and difficulty opening the mouth (trismus).',
      'Protects adjacent healthy molars from root resorption and decay.',
      'Reduces the risk of recurring gum infections and facial swelling.',
      'Performed in a safe, hygienic surgical setting with modern local anesthesia.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: '3D Radiographic Diagnosis',
        description: 'Panoramic or digital imaging assesses root position in relation to the mandibular nerve.'
      },
      {
        stepNumber: 2,
        title: 'Comfort Anesthesia & Surgical Access',
        description: 'Effective local anesthesia ensures numbness; a small incision allows visualization of impacted tooth structure.'
      },
      {
        stepNumber: 3,
        title: 'Sectioning & Atraumatic Removal',
        description: 'The tooth is sectioned into smaller fragments for gentle extraction with minimal bone removal.'
      },
      {
        stepNumber: 4,
        title: 'Hemostasis & Suture Placement',
        description: 'The site is irrigated, dissolvable sutures are placed if required, and post-op medication is outlined.'
      }
    ],
    faqs: [
      {
        question: 'Does everyone have to remove their wisdom teeth?',
        answer: 'No. If your wisdom teeth are fully erupted, functional, positioned correctly, and can be kept cleanly brushed, removal is not necessary.'
      },
      {
        question: 'How long is the recovery after wisdom tooth extraction?',
        answer: 'Most patients resume normal light activities within 2 to 4 days. Soft food diets and avoiding strenuous exercise are recommended during the first 72 hours.'
      },
      {
        question: 'What foods can I eat after surgery?',
        answer: 'Smooth cool foods such as yogurt, smoothies (no straws), blended soups, mashed potatoes, and rice pudding are ideal for the first few days.'
      }
    ],
    relatedSlugs: ['tooth-extraction', 'general-dentistry', 'gum-treatment']
  },
  {
    id: 'gum-treatment',
    slug: 'gum-treatment',
    title: 'Gum Treatment',
    category: 'Preventive',
    shortDescription: 'Comprehensive periodontal therapy, deep root planing, and gum disease management to restore gum health and protect tooth foundations.',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'Periodontal therapy focuses on the prevention, diagnosis, and treatment of diseases affecting the supporting gums and alveolar bone. From early gingivitis to chronic periodontitis, targeted gum therapy eliminates subgingival tartar, bacteria, and periodontal pockets.',
    whyRecommended: [
      'Gums that bleed easily when brushing or flossing.',
      'Persistent bad breath (halitosis) or an unpleasant taste in the mouth.',
      'Receding gums causing teeth to look longer and feel sensitive.',
      'Pus pockets or loosened teeth caused by bone degradation.'
    ],
    benefits: [
      'Halts active periodontal disease and prevents progressive bone and tooth loss.',
      'Eliminates chronic gum inflammation, tenderness, and bleeding.',
      'Supports whole-body health, as periodontal bacteria are linked to cardiovascular and diabetic wellness.',
      'Restores healthy, firm, pale pink gum architecture.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Periodontal Pocket Charting',
        description: 'Precision measurement of gum sulcus depths around each tooth to identify active disease sites.'
      },
      {
        stepNumber: 2,
        title: 'Deep Scaling & Root Planing (SRP)',
        description: 'Ultrasonic and hand curettes thoroughly clean below the gumline and smooth root surfaces to discourage bacterial reattachment.'
      },
      {
        stepNumber: 3,
        title: 'Antimicrobial Irrigation & Re-evaluation',
        description: 'Medicated rinses sanitize deep pockets, followed by scheduled checkups to evaluate pocket reduction.'
      }
    ],
    faqs: [
      {
        question: 'Can gum disease be cured?',
        answer: 'Early gingivitis is completely reversible with professional cleaning and good home hygiene. Advanced periodontitis can be successfully arrested and maintained to protect your remaining teeth.'
      },
      {
        question: 'Is deep cleaning painful?',
        answer: 'We administer local anesthesia to ensure your gums and root surfaces are completely comfortable during deep scaling and root planing.'
      },
      {
        question: 'How often will I need periodontal maintenance?',
        answer: 'Patients with a history of periodontitis usually benefit from supportive maintenance cleanings every 3 to 4 months.'
      }
    ],
    relatedSlugs: ['general-dentistry', 'tooth-extraction', 'dental-implants']
  },
  {
    id: 'pediatric-dentistry',
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    category: 'Pediatric',
    shortDescription: 'Compassionate, gentle dental care for infants, children, and teens in a welcoming, anxiety-free setting.',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'Pediatric dentistry is dedicated to the oral healthcare of infants, children, and adolescents. Our team focuses on gentle preventive visits, cavity risk assessments, dental sealants, fluoride varnish, and positive habit formation to foster lifelong dental confidence.',
    whyRecommended: [
      'First dental visit milestones around the eruption of the first primary tooth.',
      'Preventive pit and fissure sealants to shield deep grooves on newly erupted molars.',
      'Treatment of childhood cavities with gentle tooth-colored materials.',
      'Assessment of jaw growth, tooth eruption, and thumb-sucking or tongue-thrust habits.'
    ],
    benefits: [
      'Creates positive, fear-free memories of visiting the dental clinic.',
      'Protects primary teeth essential for clear speech, chewing, and guiding adult teeth.',
      'Significantly lowers childhood cavity rates with fluoride and sealants.',
      'Empowers parents with practical dietary and oral hygiene advice for their kids.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Warm Welcome & "Tell-Show-Do"',
        description: 'Our friendly approach introduces young patients to dental tools in a playful, friendly manner before starting.'
      },
      {
        stepNumber: 2,
        title: 'Gentle Exam & Plaque Removal',
        description: 'Careful check of developing teeth, soft tissues, and gentle polishing of tooth surfaces.'
      },
      {
        stepNumber: 3,
        title: 'Protective Sealant & Fluoride Varnish',
        description: 'Application of protective mineral treatments to safeguard vulnerable chewing surfaces.'
      }
    ],
    faqs: [
      {
        question: 'When should a child first see the dentist?',
        answer: 'Pediatric dental associations recommend a first dental visit by the child’s first birthday or within 6 months of their first tooth appearing.'
      },
      {
        question: 'Why are baby teeth important if they fall out anyway?',
        answer: 'Baby teeth are vital for proper chewing, speech development, and holding space in the jaw for permanent adult teeth to emerge straight.'
      },
      {
        question: 'What are dental sealants?',
        answer: 'Sealants are thin, protective resin coatings brushed into the grooves of chewing teeth to block food and bacteria from forming cavities.'
      }
    ],
    relatedSlugs: ['general-dentistry', 'dental-braces', 'teeth-whitening']
  },
  {
    id: 'dentures',
    slug: 'dentures',
    title: 'Dentures',
    category: 'Restorative',
    shortDescription: 'Customized complete and partial removable dentures engineered for optimal comfort, natural look, and functional chewing stability.',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'Dentures are custom-crafted removable dental prostheses designed to replace multiple or all missing teeth and their surrounding gum tissue. Modern dentures use lightweight acrylics, flexible polymers, and precision casting to deliver realistic aesthetics and a comfortable fit.',
    whyRecommended: [
      'Loss of several teeth or complete tooth loss in the upper or lower dental arch.',
      'Seeking a non-surgical, economical solution for full smile restoration.',
      'Difficulty chewing nutrition-rich foods due to extensive tooth absence.',
      'Sunken facial profile or lip collapse resulting from missing teeth.'
    ],
    benefits: [
      'Restores the ability to chew comfortably and speak clearly.',
      'Provides natural lip and cheek fullness, restoring youthfulness to facial contours.',
      'Available in full arch, cast partial, and flexible aesthetic options.',
      'Customized gum shade and tooth molds tailored to individual facial harmony.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Initial Consultation & Impressions',
        description: 'Preliminary anatomical impressions capture jaw relations and soft tissue boundaries.'
      },
      {
        stepNumber: 2,
        title: 'Bite Registration & Wax Try-In',
        description: 'A wax model lets you preview tooth arrangement, shade, and phonetics in your own mouth.'
      },
      {
        stepNumber: 3,
        title: 'Final Processing & Adjustments',
        description: 'The finished denture is delivered, pressure spots are relieved, and adaptation tips are shared.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to get used to new dentures?',
        answer: 'Most patients adjust within a few weeks as mouth muscles and tongue adapt to holding the prosthesis naturally during eating and speaking.'
      },
      {
        question: 'Should I sleep with my dentures in?',
        answer: 'It is recommended to remove dentures at night. This allows your gum tissues to rest and breathe while soaking the denture in cleaning solution.'
      },
      {
        question: 'Can dentures be supported by implants?',
        answer: 'Yes! Implant-supported overdentures snap onto 2 to 4 dental implants for outstanding retention that prevents slipping.'
      }
    ],
    relatedSlugs: ['dental-implants', 'dental-bridges', 'dental-crowns']
  },
  {
    id: 'smile-makeover',
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    category: 'Cosmetic',
    shortDescription: 'A personalized, multi-disciplinary transformation combining cosmetic and restorative techniques to achieve your dream smile.',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
    cardImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    isFeatured: false,
    whatIs: 'A smile makeover is a comprehensive, tailored cosmetic dental plan that addresses multiple aesthetic and functional concerns simultaneously. By blending whitening, veneers, crowns, alignment, and gum contouring, we create a harmonious smile tailored to your facial features and personality.',
    whyRecommended: [
      'Multiple concurrent aesthetic issues including discoloration, misalignment, gaps, and chips.',
      'Desire for a complete, synchronized aesthetic rejuvenation.',
      'Worn down, aged, or uneven smile line detracting from your natural appearance.',
      'Preparation for major life milestones where you want to look and feel your absolute best.'
    ],
    benefits: [
      'Holistic approach ensures bite functionality and aesthetic balance work in harmony.',
      'Customized planning considers lip line, facial width, skin tone, and tooth proportions.',
      'Predictable outcomes through digital smile visualization before treatment begins.',
      'Life-changing confidence boost in personal and professional spheres.'
    ],
    procedureSteps: [
      {
        stepNumber: 1,
        title: 'Aesthetic Analysis & Digital Design',
        description: 'Detailed photographic analysis, facial mapping, and digital mockup to co-design your ideal smile.'
      },
      {
        stepNumber: 2,
        title: 'Phased Treatment Execution',
        description: 'Coordinated delivery of orthodontic, restorative, and cosmetic components in an organized timeline.'
      },
      {
        stepNumber: 3,
        title: 'Final Artistry & Reveal',
        description: 'Final bonding and polishing of porcelain restorations, creating your radiant, natural smile transformation.'
      }
    ],
    faqs: [
      {
        question: 'How long does a smile makeover take?',
        answer: 'Timeline varies from a few weeks for veneers and bonding up to several months if orthodontic alignment or implants are included.'
      },
      {
        question: 'Can I see what my smile will look like beforehand?',
        answer: 'Yes, we use digital smile simulations and intraoral mockups so you can visualize the aesthetic changes before any permanent treatment begins.'
      },
      {
        question: 'How do I maintain my smile makeover?',
        answer: 'Regular brushing, non-abrasive toothpaste, routine dental visits, and wearing a nightguard if you clench or grind your teeth will keep your smile looking pristine.'
      }
    ],
    relatedSlugs: ['cosmetic-dentistry', 'teeth-whitening', 'clear-aligners']
  }
];
