const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const TABLE_NAME = "Candidates";

interface CandidateFormData {
  fullName: string;
  email: string;
  phone?: string;
  whatsApp?: string;
  dateOfBirth?: string;
  gender?: string;
  cityOrRegion?: string;
  country?: string;
  facebookUrl?: string;
  linkedInUrl?: string;
  rolesInterestedIn: string[];
  industriesWithExperience?: string[];
  englishProficiency: string;
  otherLanguages?: string[];
  yearsOfExperience: number | string;
  expectedRate: number | string;
  rateType: string;
  workAvailability: string;
  timeZonesAvailable?: string[];
  videoIntroductionLink?: string;
  resumeLink?: string;
  equipmentAcknowledgment: boolean;
  tellUsAboutYourself?: string;
  howDidYouHearAboutUs?: string;
}

function mapFormToAirtableFields(data: CandidateFormData): Record<string, unknown> {
  return {
    "Full Name": data.fullName,
    "Email": data.email,
    "Phone": data.phone || null,
    "WhatsApp": data.whatsApp === "true" || data.whatsApp === "yes",
    "Date of Birth": data.dateOfBirth || null,
    "Gender": data.gender || null,
    "City or Region": data.cityOrRegion || null,
    "Country": data.country || null,
    "Facebook URL": data.facebookUrl || null,
    "LinkedIn URL": data.linkedInUrl || null,
    "Roles Interested In": data.rolesInterestedIn.join(", "),
    "Industries With Experience": data.industriesWithExperience?.join(", ") || null,
    "English Proficiency": data.englishProficiency,
    "Other Languages": data.otherLanguages?.join(", ") || null,
    "Years of Experience": data.yearsOfExperience,
    "Expected Rate": isNaN(Number(data.expectedRate)) ? 0 : Number(data.expectedRate),
    "Rate Type": data.rateType,
    "Work Availability": data.workAvailability,
    "Time Zones Available": data.timeZonesAvailable?.join(", ") || null,
    "Video Introduction Link": data.videoIntroductionLink || null,
    "Resume Link": data.resumeLink || null,
    "Equipment Acknowledgment": data.equipmentAcknowledgment,
    "Tell Us About Yourself": data.tellUsAboutYourself || null,
    "How Did You Hear About Us": data.howDidYouHearAboutUs || null,
  };
}

export async function submitCandidateApplication(data: CandidateFormData): Promise<true> {
  if (!BASE_ID || !API_KEY) {
    throw new Error("Airtable configuration missing. Check environment variables.");
  }

  const url = `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;
  
  const fields = mapFormToAirtableFields(data);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields }),
  });

  const responseText = await response.text();
  console.log('Airtable response status:', response.status);
  console.log('Airtable response body:', responseText);

  if (!response.ok) {
    throw new Error(`Airtable API error: ${response.status} ${response.statusText} - ${responseText}`);
  }

  return true;
}
