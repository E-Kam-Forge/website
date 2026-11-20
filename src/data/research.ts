import { ResearchItem } from '../types';

export const researchItems: ResearchItem[] = [
  {
    id: "patent-optirider",
    type: "Patent",
    title: "Opti-Rider Multi-Platform Delivery App",
    identifier: "IN 202511081251",
    authors: "Mohd Raza Khan, Jayanti Kumari (Mentors: Parma Nand, Dr. Rani Astya)",
    venueOrIssue: "Indian Patent Office Journal Issue No. 42/2025, Published Oct 17, 2025",
    keyFinding: "Real-time gig delivery order aggregation across Swiggy, Zomato, Ola, and Uber with automated login, fastest-route mapping, and status synchronization.",
    applicationInEkamForge: "Forms the foundational architectural engine for EkamForge's multi-platform synchronization and logistics pipelines."
  },
  {
    id: "patent-aquaminder",
    type: "Patent",
    title: "Aqua Minder Smart Water Management IoT Device",
    identifier: "IN 202611001680",
    authors: "Mohd Raza Khan (Urban Blend)",
    venueOrIssue: "Indian Patent Office, Published 2026",
    keyFinding: "Automated ultrasonic tank sensing, dry-run pump cutoff, overflow prevention, and remote telemetry dashboard.",
    applicationInEkamForge: "Direct hardware-software reference implementation for commercial smart water and physical IoT client contracts."
  },
  {
    id: "springer-cassi-lite",
    type: "Springer Nature",
    title: "CASSI-Lite: A Resource-Efficient OCR and Concept-Aware Framework for Plagiarism Detection",
    identifier: "LNNS Series, ICICC-2026",
    authors: "Anshu Kumar, Anirban Dutta, Purushottam Choudhary (Mentor: Dr. Amit Seth)",
    venueOrIssue: "Springer Nature Lecture Notes in Networks and Systems (LNNS), Feb 8, 2026",
    keyFinding: "Lightweight multi-modal OCR and transformer-based concept embeddings running efficiently on standard CPUs without GPU overhead.",
    applicationInEkamForge: "Powers EkamForge's CPU-efficient document processing and semantic search pipelines for enterprise clients."
  },
  {
    id: "ieee-plagiarism",
    type: "IEEE Xplore",
    title: "Multi-Modal Plagiarism Detection in the Era of AI: A Comprehensive Review and Novel Framework",
    identifier: "IEEE Conference 2025",
    authors: "Anshu Kumar, Anirban Dutta, Purushottam Choudhary (Mentor: Aanchal Vij)",
    venueOrIssue: "IEEE Xplore, Published Nov 22, 2025",
    keyFinding: "Multi-modal analysis combining computer vision OCR with contextual language transformers to catch AI-paraphrased content.",
    applicationInEkamForge: "Enterprise document verification and content authenticity auditing systems."
  },
  {
    id: "ieee-tire-ml",
    type: "IEEE EmergIN",
    title: "A Strategic Approach to Tire Selection in Trucks for Operational and Safety Optimization",
    identifier: "DOI: 10.1109/EmergIN67762.2025.11450690",
    authors: "Pranyush Jha, Vaibhav Dhor (Mentors: Shashi Kant, Ravikant Kumar Nirala)",
    venueOrIssue: "IEEE EmergIN 2025 / IEEE UP Section",
    keyFinding: "Random Forest machine learning classifier predicting optimal tire safety configurations across road conditions, axle load, and weather.",
    applicationInEkamForge: "Predictive maintenance and tabular machine learning pipelines for fleet logistics."
  },
  {
    id: "award-solanacrowd",
    type: "Award",
    title: "SOLANACROWD: Decentralized Crowdfunding Platform on Solana",
    identifier: "Best Paper Award @ DINS-2026",
    authors: "Harsh Kumar, Simran Kumari, Amrit Raut (Mentors: Manju Verma, Sheenam Naaz)",
    venueOrIssue: "DINS-2026 International Conference, Best Paper Award",
    keyFinding: "High-throughput Solana program architecture using Rust and Anchor with Program Derived Addresses for trustless milestone-based funding.",
    applicationInEkamForge: "High-security distributed ledger systems, smart contract audits, and decentralized application development."
  },
  {
    id: "benchmark-water-iot",
    type: "External Benchmark",
    title: "IoT-Enabled Smart Water Level Monitoring and Control System (Anna University)",
    identifier: "DOI: 10.30574/wjaets.2025.16.1.0791",
    authors: "Karthikeyan M. et al., Madras Institute of Technology",
    venueOrIssue: "WJAETS 2025",
    keyFinding: "ESP32 + ultrasonic + relay achieved <100 µA deep sleep, 20% hardware cost savings, <2s latency, zero overflows, and 30% water savings.",
    applicationInEkamForge: "Empirical validation benchmarks integrated directly into AquaMinder commercial deployments."
  },
  {
    id: "benchmark-hostel-kiosk",
    type: "External Benchmark",
    title: "Smart Hostel Management with Facial Recognition & Analytics (UOW Malaysia)",
    identifier: "DOI: 10.56532/mjsat.v6i3.697",
    authors: "Goh Q.N. & John J.A.J.",
    venueOrIssue: "MJSAT 2026",
    keyFinding: "Standard cloud facial recognition adds 4.16s latency per student, causing 10+ min queues for 150 students; local auth with async fire-and-forget sync eliminates queues.",
    applicationInEkamForge: "Validates EkamForge's sub-500ms offline-first Pratyak & COSU architecture for high-traffic access points."
  }
];
