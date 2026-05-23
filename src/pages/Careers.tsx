import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitCandidateApplication } from "@/lib/airtable";
import { isValidPhoneNumber } from "react-phone-number-input";
import { cn } from "@/lib/utils";

const ROLES = [
  "Account Manager",
  "Appointment Setter",
  "Bookkeeping and Accounting",
  "Client Success Manager",
  "Cold Caller",
  "Content Creator",
  "Customer Service Representative",
  "Data Analyst",
  "DevOps Engineer",
  "Executive Assistant",
  "Front End Developer",
  "Full Stack Developer",
  "Graphic Designer",
  "GHL Specialist",
  "Lead Manager",
  "Legal Assistant",
  "Media Buyer",
  "Medical VA",
  "Mobile Developer",
  "Operations Manager",
  "Project Manager",
  "Property Manager",
  "QA Engineer",
  "Sales",
  "SDR",
  "Social Media Manager",
  "Tech Support",
  "Transaction Coordinator",
  "UI and UX Designer",
  "Video Editor",
  "Virtual Assistant",
  "Web Developer",
  "Other",
];

const INDUSTRIES = [
  "Real Estate",
  "Digital Marketing",
  "Finance",
  "Healthcare",
  "Home Improvement",
  "HR and Recruitment",
  "IT Services",
  "Law Offices",
  "Lead Generation",
  "Logistics",
  "Manufacturing",
  "E-commerce",
  "Professional Services",
  "SaaS and Technology",
  "Other",
];

const COUNTRIES = [
  "Argentina",
  "Bolivia",
  "Brazil",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Paraguay",
  "Peru",
  "Uruguay",
  "Venezuela",
];

const REFERRAL_SOURCES = [
  "Google Search",
  "Instagram",
  "Facebook",
  "Facebook Group",
  "LinkedIn",
  "Twitter or X",
  "TikTok",
  "YouTube",
  "ChatGPT",
  "Claude",
  "Perplexity",
  "Friend or Colleague Referral",
  "Job Board",
  "WhatsApp Group",
  "Telegram Group",
  "Reddit",
  "Online Community or Forum",
  "Company Website",
  "Email",
  "Other",
];

const TIME_ZONE_GROUPS = {
  "North America": [
    { code: "EST", label: "EST - USA and Canada Eastern" },
    { code: "CST", label: "CST - USA and Canada Central" },
    { code: "MST", label: "MST - USA and Canada Mountain" },
    { code: "PST", label: "PST - USA and Canada Pacific" },
  ],
  "Latin America": [
    { code: "COT", label: "COT - Colombia and Peru" },
    { code: "VET", label: "VET - Venezuela" },
    { code: "BOT", label: "BOT - Bolivia" },
    { code: "ART", label: "ART - Argentina and Uruguay" },
    { code: "BRT", label: "BRT - Brazil Brasilia" },
    { code: "CLT", label: "CLT - Chile" },
  ],
  "Europe": [
    { code: "GMT", label: "GMT - UK and Portugal" },
    { code: "CET", label: "CET - Central Europe" },
    { code: "EET", label: "EET - Eastern Europe" },
  ],
  "Asia and Pacific": [
    { code: "PHT", label: "PHT - Philippines Manila" },
    { code: "SGT", label: "SGT - Singapore" },
    { code: "IST", label: "IST - India" },
    { code: "AEST", label: "AEST - Australia Eastern" },
  ],
  "Africa": [
    { code: "WAT", label: "WAT - West Africa" },
    { code: "CAT", label: "CAT - Central Africa" },
    { code: "EAT", label: "EAT - East Africa" },
  ],
};

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  cityOrRegion: string;
  country: string;
  facebookUrl: string;
  linkedInUrl: string;
  rolesInterestedIn: string[];
  industriesWithExperience: string[];
  englishProficiency: string;
  otherLanguages: string;
  yearsOfExperience: string;
  expectedRate: string;
  rateType: string;
  workAvailability: string;
  timeZonesAvailable: string[];
  videoIntroductionLink: string;
  resumeLink: string;
  tellUsAboutYourself: string;
  howDidYouHearAboutUs: string;
  equipmentAcknowledgment: boolean;
  consentToContact: boolean;
}

interface ValidationErrors {
  email?: string;
  phone?: string;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  cityOrRegion: "",
  country: "",
  facebookUrl: "",
  linkedInUrl: "",
  rolesInterestedIn: [],
  industriesWithExperience: [],
  englishProficiency: "",
  otherLanguages: "",
  yearsOfExperience: "",
  expectedRate: "",
  rateType: "",
  workAvailability: "",
  timeZonesAvailable: [],
  videoIntroductionLink: "",
  resumeLink: "",
  tellUsAboutYourself: "",
  howDidYouHearAboutUs: "",
  equipmentAcknowledgment: false,
  consentToContact: false,
};

export default function Careers() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return false;
    try {
      return isValidPhoneNumber(phone);
    } catch {
      return false;
    }
  };

  const handleInputChange = (field: keyof FormData, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMultiSelect = (field: keyof FormData, value: string, currentValues: string[]) => {
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value];
    setFormData((prev) => ({ ...prev, [field]: newValues }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Validation
    const errors: ValidationErrors = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }

    setValidationErrors({});

    try {
      await submitCandidateApplication({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        whatsApp: "true",
        dateOfBirth: formData.dateOfBirth,
        gender: formData.gender,
        cityOrRegion: formData.cityOrRegion,
        country: formData.country,
        facebookUrl: formData.facebookUrl,
        linkedInUrl: formData.linkedInUrl,
        rolesInterestedIn: formData.rolesInterestedIn,
        industriesWithExperience: formData.industriesWithExperience,
        englishProficiency: formData.englishProficiency,
        otherLanguages: formData.otherLanguages ? [formData.otherLanguages] : [],
        yearsOfExperience: formData.yearsOfExperience,
        expectedRate: formData.expectedRate,
        rateType: formData.rateType,
        workAvailability: formData.workAvailability,
        timeZonesAvailable: formData.timeZonesAvailable,
        videoIntroductionLink: formData.videoIntroductionLink,
        resumeLink: formData.resumeLink,
        equipmentAcknowledgment: formData.equipmentAcknowledgment,
        tellUsAboutYourself: formData.tellUsAboutYourself,
        howDidYouHearAboutUs: formData.howDidYouHearAboutUs,
      });

      setSubmitStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Connect With <span className="text-primary">US and Canadian</span> Companies
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Tandem Bridge Talent helps top Latin American professionals connect with leading
              companies in the United States and Canada. Join our talent pool and access
              high-quality remote opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works for Candidates
              </h2>
              <p className="text-lg text-muted-foreground">
                From application to placement, here is what to expect.
              </p>
            </div>

            {/* Steps - Horizontal on desktop, vertical on mobile */}
            <div className="relative">
              {/* Connecting line - horizontal on desktop, vertical on mobile */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
              <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20" />

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  {
                    step: 1,
                    title: "Submit Your Application",
                    description: "Fill out the form below and tell us about your experience, skills, and availability.",
                  },
                  {
                    step: 2,
                    title: "Profile Review",
                    description: "Our team reviews every application and evaluates your background, English proficiency, and experience within 72 hours.",
                  },
                  {
                    step: 3,
                    title: "Interview and Assessment",
                    description: "Selected candidates are invited to a short interview and skills assessment to confirm the right fit.",
                  },
                  {
                    step: 4,
                    title: "Join Our Talent Pool",
                    description: "Approved candidates are added to our active talent pool and matched with relevant opportunities as they come in.",
                  },
                  {
                    step: 5,
                    title: "Get Placed",
                    description: "We connect you with a US or Canadian company, handle the onboarding logistics, and support you throughout the engagement.",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6">
                    {/* Step number circle */}
                    <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    {/* Content */}
                    <div className="flex-1 md:text-center">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Candidate Application
            </h2>

            {submitStatus === "success" ? (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <p className="text-lg text-foreground">
                  Your application has been received. Our team reviews every submission and will be
                  in touch if there is a strong match. Make sure to check your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        handleInputChange("email", e.target.value);
                        if (validationErrors.email) {
                          setValidationErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      required
                      className={cn(validationErrors.email && "border-destructive")}
                    />
                    {validationErrors.email && (
                      <p className="text-sm text-destructive">{validationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone and Date of Birth */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="US"
                      value={formData.phone}
                      onChange={(value) => {
                        handleInputChange("phone", value || "");
                        if (validationErrors.phone) {
                          setValidationErrors((prev) => ({ ...prev, phone: undefined }));
                        }
                      }}
                      className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                        validationErrors.phone && "border-destructive"
                      )}
                    />
                    {validationErrors.phone && (
                      <p className="text-sm text-destructive">{validationErrors.phone}</p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      Please provide your WhatsApp number so we can reach you directly.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Gender and Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender <span className="text-red-500">*</span></Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Non-binary">Non-binary</SelectItem>
                        <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 overflow-y-auto">
                        {COUNTRIES.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* City or Region and Facebook URL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cityOrRegion">City or Region</Label>
                    <Input
                      id="cityOrRegion"
                      type="text"
                      value={formData.cityOrRegion}
                      onChange={(e) => handleInputChange("cityOrRegion", e.target.value)}
                      placeholder="Enter your city or region."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="facebookUrl">Facebook Profile URL</Label>
                    <Input
                      id="facebookUrl"
                      type="url"
                      value={formData.facebookUrl}
                      onChange={(e) => handleInputChange("facebookUrl", e.target.value)}
                      placeholder="https://facebook.com/..."
                    />
                  </div>
                </div>

                {/* LinkedIn URL and Years of Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="linkedInUrl">LinkedIn Profile URL</Label>
                    <Input
                      id="linkedInUrl"
                      type="url"
                      value={formData.linkedInUrl}
                      onChange={(e) => handleInputChange("linkedInUrl", e.target.value)}
                      placeholder="https://linkedin.com/in/..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yearsOfExperience">Years of Experience <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.yearsOfExperience}
                      onValueChange={(value) => handleInputChange("yearsOfExperience", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Less than 1 year">Less than 1 year</SelectItem>
                        <SelectItem value="1 to 2 years">1 to 2 years</SelectItem>
                        <SelectItem value="3 to 5 years">3 to 5 years</SelectItem>
                        <SelectItem value="6 to 10 years">6 to 10 years</SelectItem>
                        <SelectItem value="More than 10 years">More than 10 years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Roles Interested In */}
                <div className="space-y-2">
                  <Label>Roles Interested In <span className="text-red-500">*</span></Label>
                  <div className="flex flex-wrap gap-2">
                    {ROLES.map((role) => {
                      const isSelected = formData.rolesInterestedIn.includes(role);
                      return (
                        <button
                          key={role}
                          type="button"
                          onClick={() => handleMultiSelect("rolesInterestedIn", role, formData.rolesInterestedIn)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {role}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Industries With Experience */}
                <div className="space-y-2">
                  <Label>Industries With Experience <span className="text-red-500">*</span></Label>
                  <div className="flex flex-wrap gap-2">
                    {INDUSTRIES.map((industry) => {
                      const isSelected = formData.industriesWithExperience.includes(industry);
                      return (
                        <button
                          key={industry}
                          type="button"
                          onClick={() => handleMultiSelect("industriesWithExperience", industry, formData.industriesWithExperience)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                            isSelected
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          }`}
                        >
                          {industry}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* English Proficiency */}
                <div className="space-y-2">
                  <Label>English Proficiency <span className="text-red-500">*</span></Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { level: "Basic", desc: "Can understand simple phrases." },
                      { level: "Conversational", desc: "Can hold everyday conversations." },
                      { level: "Fluent", desc: "Can work fully in English." },
                      { level: "Native", desc: "English is my first language." },
                    ].map(({ level, desc }) => {
                      const isSelected = formData.englishProficiency === level;
                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleInputChange("englishProficiency", level)}
                          className={`p-4 rounded-xl border text-left transition-colors ${
                            isSelected
                              ? "border-primary bg-primary/10"
                              : "border-border bg-card hover:bg-muted"
                          }`}
                        >
                          <div className={`font-semibold mb-1 ${isSelected ? "text-primary" : "text-foreground"}`}>
                            {level}
                          </div>
                          <div className="text-xs text-muted-foreground">{desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Other Languages */}
                <div className="space-y-2">
                  <Label htmlFor="otherLanguages">Other Languages Spoken and Written</Label>
                  <Input
                    id="otherLanguages"
                    type="text"
                    value={formData.otherLanguages}
                    onChange={(e) => handleInputChange("otherLanguages", e.target.value)}
                    placeholder="e.g. Spanish, Portuguese, French."
                  />
                  <p className="text-sm text-muted-foreground">
                    List any languages you speak and write fluently besides English.
                  </p>
                </div>

                {/* Expected Rate and Rate Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expectedRate">Expected Rate <span className="text-red-500">*</span></Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="expectedRate"
                        type="text"
                        inputMode="numeric"
                        value={formData.expectedRate}
                        onChange={(e) => handleInputChange("expectedRate", e.target.value)}
                        placeholder="e.g. 15"
                        className="pl-7"
                        required
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enter your expected rate in US dollars.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rateType">Rate Type <span className="text-red-500">*</span></Label>
                    <Select
                      value={formData.rateType}
                      onValueChange={(value) => handleInputChange("rateType", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select rate type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Per Hour">Per Hour</SelectItem>
                        <SelectItem value="Per Month">Per Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Work Availability */}
                <div className="space-y-2">
                  <Label htmlFor="workAvailability">Work Availability <span className="text-red-500">*</span></Label>
                  <Select
                    value={formData.workAvailability}
                    onValueChange={(value) => handleInputChange("workAvailability", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Full Time">Full Time</SelectItem>
                      <SelectItem value="Part Time">Part Time</SelectItem>
                      <SelectItem value="Both">Both</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Time Zones Available */}
                <div className="space-y-4">
                  <Label>Time Zones Available to Work</Label>
                  {Object.entries(TIME_ZONE_GROUPS).map(([region, zones]) => (
                    <div key={region} className="space-y-2">
                      <p className="text-sm font-medium text-muted-foreground">{region}</p>
                      <div className="flex flex-wrap gap-2">
                        {zones.map(({ code, label }) => {
                          const isSelected = formData.timeZonesAvailable.includes(code);
                          return (
                            <button
                              key={code}
                              type="button"
                              title={label}
                              onClick={() => handleMultiSelect("timeZonesAvailable", code, formData.timeZonesAvailable)}
                              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-foreground hover:bg-muted/80"
                              }`}
                            >
                              {code}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Video Introduction Link */}
                <div className="space-y-2">
                  <Label htmlFor="videoIntroductionLink">Video Introduction Link <span className="text-red-500">*</span></Label>
                  <Input
                    id="videoIntroductionLink"
                    type="url"
                    value={formData.videoIntroductionLink}
                    onChange={(e) => handleInputChange("videoIntroductionLink", e.target.value)}
                    placeholder="https://..."
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Record a 1 to 2 minute video in English introducing yourself and your experience.
                    Upload it to Google Drive or Dropbox and paste the shareable link here.
                    Make sure your audio is clear and your face is visible.
                  </p>
                </div>

                {/* Resume Link */}
                <div className="space-y-2">
                  <Label htmlFor="resumeLink">Resume or CV Link <span className="text-red-500">*</span></Label>
                  <Input
                    id="resumeLink"
                    type="url"
                    value={formData.resumeLink}
                    onChange={(e) => handleInputChange("resumeLink", e.target.value)}
                    required
                    placeholder="https://..."
                  />
                  <p className="text-sm text-muted-foreground">
                    Upload your resume to Google Drive or Dropbox and paste the shareable link here.
                  </p>
                </div>

                {/* Tell Us About Yourself */}
                <div className="space-y-2">
                  <Label htmlFor="tellUsAboutYourself">Tell Us About Yourself</Label>
                  <Textarea
                    id="tellUsAboutYourself"
                    value={formData.tellUsAboutYourself}
                    onChange={(e) => handleInputChange("tellUsAboutYourself", e.target.value)}
                    rows={4}
                  />
                </div>

                {/* How Did You Hear About Us */}
                <div className="space-y-2">
                  <Label htmlFor="howDidYouHearAboutUs">How did you hear about us? <span className="text-red-500">*</span></Label>
                  <Select
                    value={formData.howDidYouHearAboutUs}
                    onValueChange={(value) => handleInputChange("howDidYouHearAboutUs", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {REFERRAL_SOURCES.map((source) => (
                        <SelectItem key={source} value={source}>
                          {source}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Equipment Acknowledgment */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="equipmentAcknowledgment"
                      checked={formData.equipmentAcknowledgment}
                      onCheckedChange={(checked) =>
                        handleInputChange("equipmentAcknowledgment", checked === true)
                      }
                      required
                    />
                    <Label htmlFor="equipmentAcknowledgment" className="text-sm font-normal leading-relaxed">
                      <span className="text-red-500">*</span> I confirm that this position is fully remote and I have access to secure high
                      speed internet, a functional computer that meets the demands of remote work,
                      and a working camera.
                    </Label>
                  </div>
                </div>

                {/* Consent to Contact */}
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consentToContact"
                      checked={formData.consentToContact}
                      onCheckedChange={(checked) =>
                        handleInputChange("consentToContact", checked === true)
                      }
                      required
                    />
                    <Label htmlFor="consentToContact" className="text-sm font-normal leading-relaxed">
                      <span className="text-red-500">*</span> I agree that by submitting this form I consent to be contacted by Tandem
                      Bridge Talent via email, phone, and WhatsApp regarding job opportunities.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit My Application"}
                  </Button>
                </div>

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-center">
                    <p className="text-destructive">
                      Something went wrong. Please try again or email us at
                      careers@tandembridge.com.
                    </p>
                  </div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

